const express = require('express')
const router = express.Router()
const md5 = require('md5')
const mysql = require('../utils/mysql')
const verifyLogin = require('../utils/verifyLogin')
const captchapng = require('captchapng')
/**
 * 检查账户是否被注册
 */
router.get('/checkAccount', (req, res) => {
  const account = req.query.account
  const sql = `select id from login where account = ?`

  mysql.query(res, sql, [account]).then(rows => {
    if (rows.length) {
      res.send({
        status: 2000,
        success: false,
        msg: '账号已存在'
      })
    } else {
      res.send({
        status: 1000,
        success: true,
        msg: '账号可用'
      })
    }
  })
})
/**
 * 用户注册
 */
router.post('/registry', async (req, res) => {
  const { account, password } = req.body
  const md5Pass = md5(password).slice(0, 30)
  const sql = `insert into login (account, password) values (?, ?)`
  const sql2 = 'insert into users (userId, name) values (?, ?)'

  const rows = await mysql.query(res, sql, [account, md5Pass])

  if (rows) {
    const rows2 = await mysql.query(res, sql2, [rows.insertId, `用户${parseInt(Math.random() * 10000)}`])

    if (rows2) {
      // req.session.loginSign = true
      req.session.userId = rows.insertId
      req.session.cookie.maxAge = 60 * 1000 * 10
      return res.send({
        status: 1000,
        success: true,
        msg: '注册成功'
      })
    }
  }
})
/**
 * 登录
 */
router.post('/login', (req, res, next) => {
  const { account, password, captcha } = req.body
  const md5Pass = md5(password).slice(0, 30)
  const sql = `select * from login where account = ?`

  if (captcha !== req.session.captcha) {
    return res.send({
      status: 2000,
      success: false,
      msg: '登录失败: 验证码错误'
    })
  }

  mysql.query(res, sql, [account]).then(rows => {
    if (rows.length) {
      if (rows[0].password === md5Pass) {
        // req.session.loginSign = true
        req.session.userId = rows[0].id
        req.session.cookie.maxAge = 60 * 1000 * 10
        return res.send({
          status: 1000,
          success: true,
          msg: '登录成功'
        })
      }
    }

    res.send({
      status: 2000,
      success: false,
      msg: '登录失败: 账号或密码错误'
    })
  })
})
/**
 * 登出
 */
router.get('/loginOut', (req, res) => {
  req.session.cookie.maxAge = -1

  res.send({
    status: 1000,
    success: true,
    msg: '操作成功'
  })
})
/**
 * 验证码
 */
router.get('/captcha.png', (req, res) => {
  const str = parseInt(Math.random() * 9000 + 1000) //随机生成数字
  req.session.captcha = str // 存入session
  req.session.cookie.maxAge = 1000 * 60 // 验证码有效时间1m
  const png = new captchapng(80, 30, str) //生成图片
  png.color(0, 0, 0, 0)
  png.color(80, 80, 80, 255)
  const img = png.getBase64()
  const imgbase64 = new Buffer(img, 'base64')
  res.set('Content-Type', 'image/png')
  res.send(imgbase64)
})
/**
 * 获取用户信息
 */
router.get('/getInfor', verifyLogin, (req, res) => {
  const userId = req.session.userId
  const sql = 'select * from users where userId = ?'

  mysql.query(res, sql, [userId]).then(rows => {
    if (rows.length) {
      res.send({
        status: 1000,
        success: true,
        data: {
          name: rows[0].name
        },
        msg: '操作成功'
      })
    }
  })
})
/**
 * 添加列表数据
 */
router.post('/addList', verifyLogin, (req, res) => {
  const { name, price, sale_method, sale_date, series } = req.body
  const sql = 'insert into list (name, price, sale_method, sale_date, series) values (?, ?, ?, ?, ?)'

  mysql.query(res, sql, [name, price, sale_method, sale_date, series]).then(rows => {
    res.send({
      status: 1000,
      success: true,
      msg: '操作成功'
    })
  })
})
/**
 * 获取列表数据
 */
router.get('/getList', verifyLogin, (req, res) => {
  const sql = 'select * from list'

  mysql.query(res, sql).then(rows => {
    res.send({
      status: 1000,
      success: true,
      data: rows,
      msg: '操作成功'
    })
  })
})
/**
 * 验证登录状态
 */
router.get('/verifyLogin', verifyLogin, (req, res) => {
  const userId = req.session.userId

  if (userId) {
    res.send({
      status: 1000,
      success: true,
      msg: '已登录'
    })
  }
})

module.exports = router
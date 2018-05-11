const express = require('express')
const router = express.Router()
const md5 = require('md5')
const mysql = require('../utils/mysql')
const verifyLogin = require('../utils/verifyLogin')
/**
 * 检查账户是否被注册
 */
router.get('/checkAccount', function(req, res) {
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
      res.cookie('userId', rows.insertId, {
        maxAge: 3600 * 60
      })
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
  const { account, password } = req.body
  const md5Pass = md5(password).slice(0, 30)
  const sql = `select * from login where account = ?`

  mysql.query(res, sql, [account]).then(rows => {
    if (rows.length) {
      if (rows[0].password === md5Pass) {
        res.cookie('userId', rows[0].id, {
          maxAge: 3600 * 60
        })
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
router.get('/loginOut', verifyLogin)
/**
 * 获取用户信息
 */
router.get('/getInfor', verifyLogin, (req, res) => {
  const userId = req.cookies.userId
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

module.exports = router
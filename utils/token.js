const jwt = require('jsonwebtoken')

class Token {
  constructor () {}

  verifyToken (req, res, next) {
    // 获取token值
    const token = req.body.token || req.query.token || req.headers['x-token']

    if (token) {
      const decoded = jwt.verify(token, 'Kshatriya', (err, decoded) => {
        if (err) {
          return res.send({
            status: 3000,
            success: false,
            msg: 'token verify failed'
          })
        } else {
          req.userInfo = decoded
          next()
        }
      })
    } else {
      return res.send({
        status: 3000,
        success: false,
        msg: "token verify failed"
      })
    }
  }
  /**
   * 设置token
   * @param {Object} data 用户信息
   * @param {Number, String} time 有效时间
   */
  setToken (data, time) {
    const token = jwt.sign(data, 'Kshatriya', {
      expiresIn: time
    })

    return token
  }
}

module.exports = Token
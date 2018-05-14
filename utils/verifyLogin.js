module.exports = function (req, res, next) {
  const loginSign = req.session.loginSign

  if (loginSign) {
    next()
  } else {
    return res.send({
      status: 3000,
      success: false,
      msg: '登录超时'
    })
  }
}
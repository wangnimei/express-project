module.exports = function (req, res, next) {
  const userId = req.session.userId

  if (userId) {
    next()
  } else {
    res.send({
      status: 3000,
      success: false,
      msg: '登录超时'
    })
  }
}
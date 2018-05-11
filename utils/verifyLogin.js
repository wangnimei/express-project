module.exports = function (req, res, next) {
  const userId = req.cookies.userId

  if (userId) {
    next()
  } else {
    return res.send({
      status: 3000,
      success: false,
      msg: '登录超时'
    })
  }
}
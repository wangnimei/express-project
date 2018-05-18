var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var logger = require('morgan');
var history = require('connect-history-api-fallback');
var isProduction = process.env.NODE_ENV === 'production';

var sessionOptions = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}
// 生产环境用redis存储
// 需要运行redis服务
if (isProduction) {
  sessionOptions.store = new RedisStore({
    host: '127.0.0.1',
    port: '6379'
  })
}

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use(history());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(sessionOptions));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter)

module.exports = app;

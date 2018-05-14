var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var logger = require('morgan');
var history = require('connect-history-api-fallback');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use(history());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  store: new RedisStore({
    host: '127.0.0.1',
    port: '6379'
  }),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter)

module.exports = app;

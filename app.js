var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var server = require('./server');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var serverOne = 'http://localhost:3001',
    serverTwo = 'http://localhost:3002',
    serverThree = 'http://localhost:3003';


app.all("/app1",function(req, res) {
  console.log('redirecting to server one');
  apiProxy.web(req, res, {target: serverOne});
});

app.all("/app2",function(req, res) {
  console.log('redirecting to server 2');
  apiProxy.web(req, res, {target: serverTwo});
});

app.all("/app3",function(req, res) {
  console.log('redirecting to server 3');
  apiProxy.web(req, res, {target: serverThree});
});
app.use('/', indexRouter);

app.use('/api', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

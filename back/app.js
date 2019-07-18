var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/gifts', index);


// catch 404 error
app.use(function (req, res, next) {
  return res.status(404).json({ error: '404 Not Found' });
});

// Listen on port 5000
app.listen(process.env.PORT || 5000);

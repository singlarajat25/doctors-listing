const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const databaseConfig = require("./config/database.config");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
console.log('11111111111111');
app.use('/api/v1', indexRouter);

app.use('/get', (req, res) => {
  res.send({msg: 'qwerty'});
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.Promise = global.Promise; // Allow mongoose permision
mongoose
  .connect(databaseConfig.url, { useNewUrlParser: true })
  .then(data => { console.log("\nEvent Management Database Connect Sucessfully\n "); })
  .catch(err => {
    console.log("\nEvent Management Database can't connect to mongoose \n\n Please wait while \n ");
    process.exit();
  });
mongoose.set("debug", true);

module.exports = app;

"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var dotenv = require('dotenv');

var helmet = require('helmet');

var morgan = require('morgan');

var multer = require('multer');

var path = require('path');

var userRoute = require('./routes/users');

var authRoute = require('./routes/auth');

var postRoute = require('./routes/posts');

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function () {
  console.log('Connected to MongoDB.');
});
app.use('/images', express["static"](path.join(__dirname, 'public/images')));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "public/images");
  },
  filename: function filename(req, file, cb) {
    cb(null, req.body.name);
  } //filename: (req, file, cb) => { cb(null, req.body.name)}

});
var upload = multer({
  storage: storage
});
app.post('/api/upload', upload.single("file"), function (req, res) {
  try {
    return res.status(200).json("File uploaded successfully.");
  } catch (err) {
    console.log(err);
  }
});
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.listen(3006, function () {
  console.log("Server is running.");
});
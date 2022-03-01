"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var dotenv = require('dotenv');

var helmet = require('helmet');

var morgan = require('morgan');

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
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.listen(3006, function () {
  console.log("Server is running.");
});
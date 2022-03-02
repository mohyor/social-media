"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginFailure = exports.LoginSuccess = exports.LoginStart = void 0;

var LoginStart = function LoginStart(userCredentials) {
  return {
    type: "LOGIN_START"
  };
};

exports.LoginStart = LoginStart;

var LoginSuccess = function LoginSuccess(user) {
  return {
    type: "LOGIN_SUCCESS",
    payload: user
  };
};

exports.LoginSuccess = LoginSuccess;

var LoginFailure = function LoginFailure(error) {
  return {
    type: "LOGIN_FAILURE",
    payload: error
  };
};

exports.LoginFailure = LoginFailure;
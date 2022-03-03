"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnFollow = exports.Follow = exports.LoginFailure = exports.LoginSuccess = exports.LoginStart = void 0;

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

var Follow = function Follow(userId) {
  return {
    type: "FOLLOW",
    payload: userId
  };
};

exports.Follow = Follow;

var UnFollow = function UnFollow(userId) {
  return {
    type: "UNFOLLOW",
    payload: userId
  };
};

exports.UnFollow = UnFollow;
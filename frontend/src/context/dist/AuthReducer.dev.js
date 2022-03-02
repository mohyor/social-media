"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var AuthReducer = function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};

var _default = AuthReducer;
exports["default"] = _default;
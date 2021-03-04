"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ActionsContext = exports.defaultAction = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2019, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
var defaultAction = function defaultAction() {};

exports.defaultAction = defaultAction;

var ActionsContext = /*#__PURE__*/_react["default"].createContext({
  onAction: defaultAction
});

exports.ActionsContext = ActionsContext;

var ActionsProvider = function ActionsProvider(_ref) {
  var _ref$onAction = _ref.onAction,
      onAction = _ref$onAction === void 0 ? defaultAction : _ref$onAction,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(ActionsContext.Provider, {
    value: {
      onAction: onAction
    }
  }, children);
};

ActionsProvider.propTypes = {
  onAction: _propTypes["default"].func
};
var _default = ActionsProvider;
exports["default"] = _default;
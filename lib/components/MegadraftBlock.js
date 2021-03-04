"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2019, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
var _default = function _default(_ref) {
  var wrapper = _ref.wrapper,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "megadraft-block"
  }, wrapper ? /*#__PURE__*/_react["default"].cloneElement(wrapper, [], children) : children);
};

exports["default"] = _default;
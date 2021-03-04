"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_DISPLAY_KEY = exports.DEFAULT_DISPLAY_OPTIONS = void 0;

var _icons = _interopRequireDefault(require("../../icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
var DEFAULT_DISPLAY_OPTIONS = [{
  key: "small",
  icon: _icons["default"].MediaSmallIcon,
  label: "SMALL"
}, {
  key: "medium",
  icon: _icons["default"].MediaMediumIcon,
  label: "MEDIUM"
}, {
  key: "big",
  icon: _icons["default"].MediaBigIcon,
  label: "BIG"
}];
exports.DEFAULT_DISPLAY_OPTIONS = DEFAULT_DISPLAY_OPTIONS;
var DEFAULT_DISPLAY_KEY = "medium";
exports.DEFAULT_DISPLAY_KEY = DEFAULT_DISPLAY_KEY;
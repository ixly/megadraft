"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultDisplayOptions = defaultDisplayOptions;
exports.DEFAULT_DISPLAY_KEY = void 0;

var _icons = _interopRequireDefault(require("../../icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
function defaultDisplayOptions(i18n) {
  return [{
    key: "small",
    icon: _icons["default"].MediaSmallIcon,
    label: i18n["SMALL"]
  }, {
    key: "medium",
    icon: _icons["default"].MediaMediumIcon,
    label: i18n["MEDIUM"]
  }, {
    key: "big",
    icon: _icons["default"].MediaBigIcon,
    label: i18n["BIG"]
  }];
}

var DEFAULT_DISPLAY_KEY = "medium";
exports.DEFAULT_DISPLAY_KEY = DEFAULT_DISPLAY_KEY;
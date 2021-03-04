"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _VideoButton = _interopRequireDefault(require("./VideoButton"));

var _VideoBlock = _interopRequireDefault(require("./VideoBlock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
var _default = {
  title: "Video",
  type: "video",
  buttonComponent: _VideoButton["default"],
  blockComponent: _VideoBlock["default"]
};
exports["default"] = _default;
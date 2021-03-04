"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ImageButton = _interopRequireDefault(require("./ImageButton"));

var _ImageBlock = _interopRequireDefault(require("./ImageBlock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
var _default = {
  title: "Image",
  type: "image",
  buttonComponent: _ImageButton["default"],
  blockComponent: _ImageBlock["default"]
};
exports["default"] = _default;
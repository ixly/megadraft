"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _plugin = _interopRequireDefault(require("./image/plugin"));

var _plugin2 = _interopRequireDefault(require("./video/plugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
var _default = [_plugin["default"], _plugin2["default"]];
exports["default"] = _default;
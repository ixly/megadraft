"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _draftJs = require("draft-js");

var _utils = require("../utils");

var _Link = _interopRequireDefault(require("../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
var decorator = new _draftJs.CompositeDecorator([{
  strategy: (0, _utils.createTypeStrategy)("LINK"),
  component: _Link["default"]
}]);
var _default = decorator;
exports["default"] = _default;
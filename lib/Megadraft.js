"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _draftJs = _interopRequireDefault(require("draft-js"));

var _insertDataBlock = _interopRequireDefault(require("./insertDataBlock"));

var _Media = _interopRequireDefault(require("./components/Media"));

var _MegadraftEditor = _interopRequireDefault(require("./components/MegadraftEditor"));

var _icons = _interopRequireDefault(require("./icons"));

var _MediaMessage = _interopRequireDefault(require("./components/MediaMessage"));

var MegadraftPlugin = _interopRequireWildcard(require("./components/plugin"));

var _Sidebar = _interopRequireDefault(require("./components/Sidebar"));

var _Toolbar = _interopRequireDefault(require("./components/Toolbar"));

var utils = _interopRequireWildcard(require("./utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
var Megadraft = {
  DraftJS: _draftJs["default"],
  insertDataBlock: _insertDataBlock["default"],
  Media: _Media["default"],
  MegadraftEditor: _MegadraftEditor["default"],
  MegadraftIcons: _icons["default"],
  MegadraftMediaMessage: _MediaMessage["default"],
  MegadraftPlugin: MegadraftPlugin,
  Sidebar: _Sidebar["default"],
  Toolbar: _Toolbar["default"],
  editorStateFromRaw: utils.editorStateFromRaw,
  editorStateToJSON: utils.editorStateToJSON,
  createTypeStrategy: utils.createTypeStrategy
};
module.exports = Megadraft;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.replaceData = void 0;

/*
 * Copyright (c) 2018, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
var i18nConfig = {
  "nl": {
    "Type the link and press enter": "Typ de link en druk op enter",
    "Invalid Link": "Ongeldige Link"
  },
  "en": {
    "Type the link and press enter": "Type the link and press enter",
    "Invalid Link": "Invalid Link"
  },
  "de": {
    "Type the link and press enter": "TOTRANSLATE",
    "Invalid Link": "TOTRANSLATE"
  }
};
i18nConfig["en-US"] = i18nConfig["en"];

var replaceData = function replaceData(str, data) {
  var rgx = /{{\s?(\w+)\s?}}/gm;
  var msg = str;
  msg = msg.replace(rgx, function (_, key) {
    return data[key];
  });
  return msg;
};

exports.replaceData = replaceData;
var _default = i18nConfig;
exports["default"] = _default;
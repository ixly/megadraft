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
  "en-US": {
    "Type the link and press enter": "Type the link and press enter",
    "Invalid Link": "Invalid Link",
    "Can't show plugin, component {{type}} not found.": "Can't show plugin, component {{type}} not found.",
    "Can't show plugin, component not found.": "Can't show plugin, component not found.",
    "Block List": "Block List",
    "Something went wrong in component '{{type}}'. {{error}}": "Something went wrong in component '{{type}}'. {{error}}",
    "Something went wrong with the component type.": "Something went wrong with the component type."
  },
  "pt-BR": {
    "Type the link and press enter": "Digite o link e pressione enter",
    "Invalid Link": "Link inválido",
    "Can't show plugin, component {{type}} not found.": "Não é possível exibir o plugin, componente {{type}} não encontrado",
    "Can't show plugin, component not found.": "Não é possível exibir o plugin, componente não encontrado",
    "Block List": "Lista de Blocos",
    "Something went wrong in component '{{type}}'. {{error}}": "Algo esta errado no componente '{{type}}'. {{error}}",
    "Something went wrong with the component type.": "Algo esta errado com o tipo do componente"
  }
};

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
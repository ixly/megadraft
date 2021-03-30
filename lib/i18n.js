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
  nl: {
    "Type the link and press enter": "Typ de link en druk op enter",
    "Invalid Link": "Ongeldige Link",
    SMALL: "KLEIN",
    MEDIUM: "GEMIDDELD",
    BIG: "GROOT",
    Caption: "Onderschrift"
  },
  en: {
    "Type the link and press enter": "Type the link and press enter",
    "Invalid Link": "Invalid Link",
    SMALL: "SMALL",
    MEDIUM: "MEDIUM",
    BIG: "BIG",
    Caption: "Caption"
  },
  de: {
    "Type the link and press enter": "Tippen Sie den Link und drücken Sie auf Enter",
    "Invalid Link": "Ungültiger Link",
    SMALL: "KLEIN",
    MEDIUM: "DURCHSCHNITTLICH",
    BIG: "GROSS",
    Caption: "Unterschrift"
  }
};
i18nConfig["en-US"] = i18nConfig.en;
i18nConfig["en-US"]["Can't show plugin, component {{type}} not found."] = "Can't show plugin, component {{type}} not found.";
i18nConfig["en-US"]["Can't show plugin, component not found."] = "Can't show plugin, component not found.";
i18nConfig["en-US"]["Block List"] = "Block List";
i18nConfig["en-US"]["Something went wrong in component '{{type}}'. {{error}}"] = "Something went wrong in component '{{type}}'. {{error}}";
i18nConfig["en-US"]["Something went wrong with the component type."] = "Something went wrong with the component type.";
i18nConfig["pt-BR"] = {
  "Type the link and press enter": "Digite o link e pressione enter",
  "Invalid Link": "Link inválido",
  "Can't show plugin, component {{type}} not found.": "Não é possível exibir o plugin, componente {{type}} não encontrado",
  "Can't show plugin, component not found.": "Não é possível exibir o plugin, componente não encontrado",
  "Block List": "Lista de Blocos",
  "Something went wrong in component '{{type}}'. {{error}}": "Algo esta errado no componente '{{type}}'. {{error}}",
  "Something went wrong with the component type.": "Algo esta errado com o tipo do componente"
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
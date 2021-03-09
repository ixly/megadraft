/*
 * Copyright (c) 2018, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

const i18nConfig = {
  nl: {
    "Type the link and press enter": "Typ de link en druk op enter",
    "Invalid Link": "Ongeldige Link"
  },
  en: {
    "Type the link and press enter": "Type the link and press enter",
    "Invalid Link": "Invalid Link"
  },
  de: {
    "Type the link and press enter": "TOTRANSLATE",
    "Invalid Link": "TOTRANSLATE"
  }
};

i18nConfig["en-US"] = i18nConfig["en"];

export const replaceData = (str, data) => {
  const rgx = /{{\s?(\w+)\s?}}/gm;
  let msg = str;
  msg = msg.replace(rgx, (_, key) => data[key]);
  return msg;
};

export default i18nConfig;

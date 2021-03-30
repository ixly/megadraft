/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import icons from "../../icons";

export function defaultDisplayOptions(i18n) {
  return [
    { key: "small", icon: icons.MediaSmallIcon, label: i18n["SMALL"] },
    { key: "medium", icon: icons.MediaMediumIcon, label: i18n["MEDIUM"] },
    { key: "big", icon: icons.MediaBigIcon, label: i18n["BIG"] }
  ];
}

export const DEFAULT_DISPLAY_KEY = "medium";

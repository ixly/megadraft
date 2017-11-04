/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import icons from "../icons";

export default [
  {type: "inline", label: "B", style: "BOLD", icon: icons.BoldIcon},
  {type: "inline", label: "I", style: "ITALIC", icon: icons.ItalicIcon},
  {type: "inline", label: "U", style: "UNDERLINE", icon: icons.UnderlineIcon},
  {type: "inline", label: "S", style: "STRIKETHROUGH", icon: icons.StrikeThroughIcon},
  {type: "entity", label: "Link", style: "link", entity: "LINK", icon: icons.LinkIcon},
  {type: "inline", label: "CI", style: "CODE", icon: icons.CodeInlineIcon},
  {type: "separator"},
  {type: "block", label: "UL", style: "unordered-list-item", icon: icons.ULIcon},
  {type: "block", label: "OL", style: "ordered-list-item", icon: icons.OLIcon},
  {type: "block", label: "H3", style: "header-three", icon: icons.H3Icon},
  {type: "block", label: "H4", style: "header-four", icon: icons.H4Icon},
  {type: "block", label: "QT", style: "blockquote", icon: icons.BlockQuoteIcon},
  {type: "block", label: "CB", style: "code-block", icon: icons.CodeBlockIcon}
];

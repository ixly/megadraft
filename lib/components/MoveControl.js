"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = _interopRequireDefault(require("../icons"));

var _MegadraftBlock = _interopRequireDefault(require("./MegadraftBlock"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2019, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
var Options = function Options(_ref) {
  var onClickUp = _ref.onClickUp,
      onClickDown = _ref.onClickDown,
      id = _ref.id,
      disableUp = _ref.disableUp,
      disableDown = _ref.disableDown,
      onAction = _ref.onAction;

  var onPointerDown = function onPointerDown(e) {
    e.preventDefault();
    e.stopPropagation();
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "options"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "swap-up-".concat(id),
    className: disableUp ? "options__button options__button--up options__button--disabled" : "options__button options__button--up",
    onClick: function onClick() {
      onAction({
        type: _constants.BLOCK_SWAP_UP,
        blockId: id
      });
      onClickUp();
    },
    onPointerDown: onPointerDown
  }, /*#__PURE__*/_react["default"].createElement(_icons["default"].DropdownArrow, null)), /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "swap-down-".concat(id),
    className: disableDown ? "options__button options__button--disabled" : "options__button",
    onClick: function onClick() {
      onAction({
        type: _constants.BLOCK_SWAP_DOWN,
        blockId: id
      });
      onClickDown();
    },
    onPointerDown: onPointerDown
  }, /*#__PURE__*/_react["default"].createElement(_icons["default"].DropdownArrow, null)));
};

var Control = function Control(_ref2) {
  var children = _ref2.children,
      id = _ref2.id,
      onClickUp = _ref2.onClickUp,
      onClickDown = _ref2.onClickDown,
      isFirst = _ref2.isFirst,
      isLast = _ref2.isLast,
      onAction = _ref2.onAction,
      isAtomic = _ref2.isAtomic;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("move-control", isAtomic && "move-control--atomic"),
    id: "move-control-".concat(id)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "move-control__target",
    "data-testid": "block-".concat(id)
  }, children), /*#__PURE__*/_react["default"].createElement(Options, {
    id: id,
    onClickUp: onClickUp,
    onClickDown: onClickDown,
    onAction: onAction,
    disableUp: isFirst,
    disableDown: isLast
  }));
};

var Controlled = function Controlled(_ref3) {
  var keySwapUp = _ref3.keySwapUp,
      keySwapDown = _ref3.keySwapDown,
      isFirstBlock = _ref3.isFirstBlock,
      isLastBlock = _ref3.isLastBlock,
      isAtomic = _ref3.isAtomic,
      swapUp = _ref3.swapUp,
      swapDown = _ref3.swapDown,
      onAction = _ref3.onAction,
      children = _ref3.children;

  var onClickUp = function onClickUp() {
    return swapUp(keySwapUp);
  };

  var onClickDown = function onClickDown() {
    return swapDown(keySwapDown);
  };

  var isFirst = isFirstBlock(keySwapUp);
  var isLast = isLastBlock(keySwapDown);
  return /*#__PURE__*/_react["default"].createElement(_MegadraftBlock["default"], null, /*#__PURE__*/_react["default"].createElement(Control, {
    id: keySwapUp !== keySwapDown ? "".concat(keySwapUp, "-").concat(keySwapDown) : keySwapUp,
    onClickUp: onClickUp,
    onClickDown: onClickDown,
    isFirst: isFirst,
    isLast: isLast,
    onAction: onAction,
    isAtomic: isAtomic
  }, children));
};

var _default = function _default(_ref4) {
  var wrapper = _ref4.wrapper,
      swapUp = _ref4.swapUp,
      swapDown = _ref4.swapDown,
      children = _ref4.children,
      isFirstBlock = _ref4.isFirstBlock,
      isLastBlock = _ref4.isLastBlock,
      onAction = _ref4.onAction,
      isAtomic = _ref4.isAtomic;

  var arrayChildren = _react["default"].Children.toArray(children);

  var firstChildKey = arrayChildren[0].props.children.key;
  var lastChildKey = arrayChildren[arrayChildren.length - 1].props.children.key;

  var controlledChildren = _react["default"].Children.map(children, function (child) {
    var currentKey = child.props.children.key;
    return /*#__PURE__*/_react["default"].createElement(Controlled, {
      keySwapUp: currentKey,
      keySwapDown: currentKey,
      swapUp: swapUp,
      swapDown: swapDown,
      isFirstBlock: isFirstBlock,
      isLastBlock: isLastBlock,
      onAction: onAction,
      isAtomic: isAtomic
    }, child);
  });

  return wrapper ? /*#__PURE__*/_react["default"].createElement(Controlled, {
    keySwapUp: firstChildKey,
    keySwapDown: lastChildKey,
    swapUp: swapUp,
    swapDown: swapDown,
    isFirstBlock: isFirstBlock,
    isLastBlock: isLastBlock,
    onAction: onAction
  }, /*#__PURE__*/_react["default"].cloneElement(wrapper, [], children)) : controlledChildren;
};

exports["default"] = _default;
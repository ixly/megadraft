"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SideMenu = exports.ToggleButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = _interopRequireDefault(require("../icons"));

var _constants = require("../constants");

var _ActionsProvider = require("./ActionsProvider");

require("setimmediate");

var _PluginsModal = _interopRequireDefault(require("./PluginsModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BlockStyles = /*#__PURE__*/function (_Component) {
  _inherits(BlockStyles, _Component);

  var _super = _createSuper(BlockStyles);

  function BlockStyles(props) {
    var _context;

    var _this;

    _classCallCheck(this, BlockStyles);

    _this = _super.call(this, props);
    _this.state = {
      isOpen: false
    };
    _this.onModalOpenClick = (_context = _this).onModalOpenClick.bind(_context);
    _this.onChange = (_context = _this).onChange.bind(_context);
    _this.toggleModalVisibility = (_context = _this).toggleModalVisibility.bind(_context);
    _this.renderButton = (_context = _this).renderButton.bind(_context);
    return _this;
  }

  _createClass(BlockStyles, [{
    key: "onChange",
    value: function onChange(editorState) {
      this.props.onChange(editorState);
    }
  }, {
    key: "onModalOpenClick",
    value: function onModalOpenClick(e) {
      e.preventDefault();
      document.body.classList.add("megadraft-modal--open");
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: "toggleModalVisibility",
    value: function toggleModalVisibility() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "renderModal",
    value: function renderModal() {
      return /*#__PURE__*/_react["default"].createElement(_PluginsModal["default"], {
        i18n: this.props.i18n,
        toggleModalVisibility: this.toggleModalVisibility,
        isOpen: this.state.isOpen,
        plugins: this.props.plugins,
        onCloseRequest: this.props.onClose,
        onChange: this.onChange,
        editorState: this.props.editorState,
        modalOptions: this.props.modalOptions,
        submitFileUrl: this.props.submitFileUrl
      });
    }
  }, {
    key: "renderModalButton",
    value: function renderModalButton() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("button", {
        className: "sidemenu__button",
        onClick: function onClick(e) {
          _this2.context.onAction({
            type: _constants.SIDEBAR_CLICK_MORE
          });

          _this2.onModalOpenClick(e);
        }
      }, /*#__PURE__*/_react["default"].createElement(_icons["default"].MoreIcon, {
        className: "sidemenu__button__icon"
      }));
    }
  }, {
    key: "renderButton",
    value: function renderButton(item) {
      var _this3 = this;

      var Button = item.buttonComponent;
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: item.type,
        className: "sidemenu__item",
        onClick: function onClick() {
          _this3.context.onAction({
            type: _constants.SIDEBAR_ADD_PLUGIN,
            pluginName: item.title
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(Button, {
        className: "sidemenu__button",
        title: item.title,
        editorState: this.props.editorState,
        onChange: this.onChange,
        submitFileUrl: this.props.submitFileUrl
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var maxSidebarButtons = this.props.maxSidebarButtons ? this.props.maxSidebarButtons : this.props.plugins.length;
      var sidemenuMaxHeight = {
        maxHeight: this.props.open ? "".concat((maxSidebarButtons + 1) * 48, "px") : 0
      }; // We should hide the modal if the number of plugins < max

      var hasModal = this.props.plugins.length > maxSidebarButtons;
      var className = (0, _classnames["default"])("sidemenu__items", {
        "sidemenu__items--open": this.props.open
      });
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("ul", {
        style: sidemenuMaxHeight,
        className: className
      }, this.props.plugins.slice(0, maxSidebarButtons).map(this.renderButton), hasModal ? this.renderModalButton() : null), hasModal ? this.renderModal() : null);
    }
  }]);

  return BlockStyles;
}(_react.Component);

_defineProperty(BlockStyles, "contextType", _ActionsProvider.ActionsContext);

var ToggleButton = /*#__PURE__*/function (_Component2) {
  _inherits(ToggleButton, _Component2);

  var _super2 = _createSuper(ToggleButton);

  function ToggleButton() {
    _classCallCheck(this, ToggleButton);

    return _super2.apply(this, arguments);
  }

  _createClass(ToggleButton, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.props.hideSidebarOnBlur && !this.props.hasFocus) {
        return null;
      }

      var Icon = _icons["default"].CrossIcon;
      var className = (0, _classnames["default"])("sidemenu__button", {
        "sidemenu__button--open": this.props.open
      });
      return /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        ref: function ref(el) {
          _this4.button = el;
        },
        className: className,
        onClick: function onClick() {
          _this4.button.focus();

          _this4.props.toggle();
        }
      }, /*#__PURE__*/_react["default"].createElement(Icon, {
        className: "sidemenu__button__icon"
      }));
    }
  }]);

  return ToggleButton;
}(_react.Component);

exports.ToggleButton = ToggleButton;

var SideMenu = /*#__PURE__*/function (_Component3) {
  _inherits(SideMenu, _Component3);

  var _super3 = _createSuper(SideMenu);

  function SideMenu(props) {
    var _context2;

    var _this5;

    _classCallCheck(this, SideMenu);

    _this5 = _super3.call(this, props);
    _this5.state = {
      open: false
    };
    _this5.toggle = (_context2 = _this5).toggle.bind(_context2);
    _this5.onChange = (_context2 = _this5).onChange.bind(_context2);
    return _this5;
  }

  _createClass(SideMenu, [{
    key: "onChange",
    value: function onChange(editorState) {
      this.props.onChange(editorState);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.context.onAction({
        type: this.state.open ? _constants.SIDEBAR_SHRINK : _constants.SIDEBAR_EXPAND
      });
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0, _classnames["default"])("sidemenu", {
        "sidemenu--open": this.state.open
      });
      return /*#__PURE__*/_react["default"].createElement("li", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement(ToggleButton, {
        toggle: this.toggle,
        hasFocus: this.props.editorHasFocus || this.state.open,
        hideSidebarOnBlur: this.props.hideSidebarOnBlur,
        open: this.state.open
      }), /*#__PURE__*/_react["default"].createElement(BlockStyles, {
        i18n: this.props.i18n,
        editorState: this.props.editorState,
        plugins: this.props.plugins,
        open: this.state.open,
        onChange: this.onChange,
        maxSidebarButtons: this.props.maxSidebarButtons,
        modalOptions: this.props.modalOptions,
        submitFileUrl: this.props.submitFileUrl
      }));
    }
  }]);

  return SideMenu;
}(_react.Component);

exports.SideMenu = SideMenu;

_defineProperty(SideMenu, "contextType", _ActionsProvider.ActionsContext);

function getSelectedBlockElement() {
  // Finds the block parent of the current selection
  // https://github.com/facebook/draft-js/issues/45
  var selection = window.getSelection();

  if (selection.rangeCount === 0) {
    return null;
  }

  var node = selection.getRangeAt(0).startContainer;

  do {
    if (node.getAttribute && node.getAttribute("data-block") == "true") {
      return node;
    }

    node = node.parentNode;
  } while (node != null);
}

var SideBar = /*#__PURE__*/function (_Component4) {
  _inherits(SideBar, _Component4);

  var _super4 = _createSuper(SideBar);

  function SideBar(props) {
    var _context3;

    var _this6;

    _classCallCheck(this, SideBar);

    _this6 = _super4.call(this, props);
    _this6.state = {
      top: 0
    };
    _this6.onChange = (_context3 = _this6).onChange.bind(_context3);
    return _this6;
  }

  _createClass(SideBar, [{
    key: "getValidSidebarPlugins",
    value: function getValidSidebarPlugins() {
      var plugins = [];

      var _iterator = _createForOfIteratorHelper(this.props.plugins),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var plugin = _step.value;

          if (!plugin.buttonComponent || typeof plugin.buttonComponent !== "function") {
            continue;
          }

          plugins.push(plugin);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return plugins;
    }
  }, {
    key: "onChange",
    value: function onChange(editorState) {
      this.props.onChange(editorState);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this7 = this;

      if (this.updatingPosition) {
        clearImmediate(this.updatingPosition);
      }

      this.updatingPosition = null;
      this.updatingPosition = setImmediate(function () {
        return _this7.setBarPosition();
      });
    }
  }, {
    key: "setBarPosition",
    value: function setBarPosition() {
      var container = _reactDom["default"].findDOMNode(this.containerEl);

      var editor = container ? container.parentElement : null;
      var element = getSelectedBlockElement();

      if (!element || !container || !editor || !editor.contains(element)) {
        return;
      }

      var containerTop = container.getBoundingClientRect().top - document.documentElement.clientTop;
      var top = element.getBoundingClientRect().top - 4 - containerTop;
      top = Math.max(0, Math.floor(top));

      if (this.state.top !== top) {
        this.setState({
          top: top
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      if (this.props.readOnly) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(el) {
          _this8.containerEl = el;
        },
        className: "sidebar"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          top: "".concat(this.state.top, "px")
        },
        className: "sidebar__menu"
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "sidebar__sidemenu-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(SideMenu, {
        i18n: this.props.i18n,
        editorState: this.props.editorState,
        onChange: this.onChange,
        plugins: this.getValidSidebarPlugins(),
        maxSidebarButtons: this.props.maxSidebarButtons,
        editorHasFocus: this.props.editorHasFocus,
        hideSidebarOnBlur: this.props.hideSidebarOnBlur,
        modalOptions: this.props.modalOptions,
        submitFileUrl: this.props.submitFileUrl
      }))));
    }
  }]);

  return SideBar;
}(_react.Component);

exports["default"] = SideBar;
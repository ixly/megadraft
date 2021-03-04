"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ActionsProvider = require("./ActionsProvider");

var _constants = require("../constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var ModalPluginItem = /*#__PURE__*/function (_Component) {
  _inherits(ModalPluginItem, _Component);

  var _super = _createSuper(ModalPluginItem);

  function ModalPluginItem(props) {
    var _context;

    var _this;

    _classCallCheck(this, ModalPluginItem);

    _this = _super.call(this, props);
    _this.handleClick = (_context = _this).handleClick.bind(_context);
    _this.closeModal = (_context = _this).closeModal.bind(_context);
    _this.renderButton = (_context = _this).renderButton.bind(_context);
    return _this;
  }

  _createClass(ModalPluginItem, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.buttonEl.onClick(e);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.props.toggleModalVisibility();
    }
  }, {
    key: "renderButton",
    value: function renderButton(item) {
      var _this2 = this;

      var Button = item.buttonComponent;
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: item.type,
        className: "megadraft-modal__item",
        onClick: function onClick() {
          _this2.context.onAction({
            type: _constants.PLUGINS_MODAL_ADD_PLUGIN,
            pluginName: item.title
          });

          _this2.closeModal();
        }
      }, /*#__PURE__*/_react["default"].createElement(Button, {
        ref: function ref(el) {
          _this2.buttonEl = el;
        },
        className: "megadraft-modal__button",
        title: item.title,
        editorState: this.props.editorState,
        onChange: this.props.onChange
      }), /*#__PURE__*/_react["default"].createElement("p", {
        className: "megadraft-modal__button__label",
        onClick: this.handleClick
      }, item.title));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: "megadraft-modal__items"
      }, this.props.plugins.map(this.renderButton));
    }
  }]);

  return ModalPluginItem;
}(_react.Component);

exports["default"] = ModalPluginItem;

_defineProperty(ModalPluginItem, "contextType", _ActionsProvider.ActionsContext);
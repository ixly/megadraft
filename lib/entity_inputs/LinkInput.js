"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icons = _interopRequireDefault(require("../icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var LinkInput = /*#__PURE__*/function (_Component) {
  _inherits(LinkInput, _Component);

  var _super = _createSuper(LinkInput);

  function LinkInput(props) {
    var _context;

    var _this;

    _classCallCheck(this, LinkInput);

    _this = _super.call(this, props);
    _this.state = {
      url: props && props.url || ""
    };
    _this.onLinkChange = (_context = _this).onLinkChange.bind(_context);
    _this.onLinkKeyDown = (_context = _this).onLinkKeyDown.bind(_context);
    return _this;
  }

  _createClass(LinkInput, [{
    key: "setLink",
    value: function setLink(event) {
      var url = this.state.url;

      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "http://".concat(url);
      } // https://gist.github.com/dperini/729294
      // Author: Diego Perini
      // License: MIT


      var expression = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}\-\x{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/gi;
      var regex = new RegExp(expression);
      var i18n = this.props.i18n;

      if (!url.match(regex)) {
        var errorMsg = i18n["Invalid Link"];
        this.props.setError(errorMsg);
        this.textInput.focus();
        return;
      }

      this.props.setEntity({
        url: url
      });
      this.reset(); // Force blur to work around Firefox's NS_ERROR_FAILURE

      event.target.blur();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        url: ""
      });
      this.props.cancelEntity();
    }
  }, {
    key: "onLinkChange",
    value: function onLinkChange(event) {
      event.stopPropagation();
      var url = event.target.value;

      if (url === "") {
        this.props.cancelError();
      }

      this.setState({
        url: url
      });
    }
  }, {
    key: "onLinkKeyDown",
    value: function onLinkKeyDown(event) {
      if (event.key == "Enter") {
        event.preventDefault();
        this.setLink(event);
      } else if (event.key == "Escape") {
        event.preventDefault();
        this.reset();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.textInput.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var i18n = this.props.i18n;
      var msg = i18n["Type the link and press enter"];
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          whiteSpace: "nowrap"
        }
      }, /*#__PURE__*/_react["default"].createElement("input", {
        ref: function ref(el) {
          _this2.textInput = el;
        },
        type: "text",
        className: "toolbar__input",
        onChange: this.onLinkChange,
        value: this.state.url,
        onKeyDown: this.onLinkKeyDown,
        placeholder: msg
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "toolbar__item",
        style: {
          verticalAlign: "bottom"
        }
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.props.removeEntity,
        type: "button",
        className: "toolbar__button toolbar__input-button"
      }, this.props.entity ? /*#__PURE__*/_react["default"].createElement(_icons["default"].UnlinkIcon, null) : /*#__PURE__*/_react["default"].createElement(_icons["default"].CloseIcon, null))));
    }
  }]);

  return LinkInput;
}(_react.Component);

var _default = LinkInput;
exports["default"] = _default;
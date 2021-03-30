"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _plugin = require("../../components/plugin");

var _icons = _interopRequireDefault(require("../../icons"));

var _ImageBlockStyle = _interopRequireDefault(require("./ImageBlockStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var ImageBlock = /*#__PURE__*/function (_Component) {
  _inherits(ImageBlock, _Component);

  var _super = _createSuper(ImageBlock);

  function ImageBlock(props) {
    var _context;

    var _this;

    _classCallCheck(this, ImageBlock);

    _this = _super.call(this, props);
    _this._handleCaptionChange = (_context = _this)._handleCaptionChange.bind(_context);
    _this._handleRightsHolderChange = (_context = _this)._handleRightsHolderChange.bind(_context);
    _this.actions = [{
      key: "delete",
      icon: _icons["default"].DeleteIcon,
      action: _this.props.container.remove
    }];
    return _this;
  }

  _createClass(ImageBlock, [{
    key: "_handleCaptionChange",
    value: function _handleCaptionChange(event) {
      event.stopPropagation();
      this.props.container.updateData({
        caption: event.target.value
      });
    }
  }, {
    key: "_handleRightsHolderChange",
    value: function _handleRightsHolderChange(event) {
      event.stopPropagation();
      this.props.container.updateData({
        rightsHolder: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var readOnly = this.props.blockProps.getInitialReadOnly();
      return /*#__PURE__*/_react["default"].createElement(_plugin.CommonBlock, _extends({}, this.props, {
        actions: this.actions
      }), /*#__PURE__*/_react["default"].createElement(_plugin.BlockContent, null, /*#__PURE__*/_react["default"].createElement("img", {
        style: _ImageBlockStyle["default"].image,
        src: this.props.data.src,
        alt: ""
      })), (!readOnly || this.props.data.caption || this.props.data.rightsHolder) && /*#__PURE__*/_react["default"].createElement(_plugin.BlockData, null, /*#__PURE__*/_react["default"].createElement(_plugin.BlockInput, {
        placeholder: this.props.i18n["Caption"],
        value: this.props.data.caption || "",
        onChange: this._handleCaptionChange,
        readOnly: readOnly
      }), this.props.blockProps.showDataRightsHolder && /*#__PURE__*/_react["default"].createElement(_plugin.BlockInput, {
        placeholder: "Rights Holder",
        value: this.props.data.rightsHolder || "",
        onChange: this._handleRightsHolderChange,
        readOnly: readOnly
      })));
    }
  }]);

  return ImageBlock;
}(_react.Component);

exports["default"] = ImageBlock;
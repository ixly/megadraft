"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icons = _interopRequireDefault(require("../../icons"));

var _insertDataBlock = _interopRequireDefault(require("../../insertDataBlock"));

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

var BlockButton = /*#__PURE__*/function (_Component) {
  _inherits(BlockButton, _Component);

  var _super = _createSuper(BlockButton);

  function BlockButton(props) {
    var _context;

    var _this;

    _classCallCheck(this, BlockButton);

    _this = _super.call(this, props);
    _this.state = {
      fileFieldId: btoa(Math.random()).substring(0, 12)
    };
    _this.onClick = (_context = _this).onClick.bind(_context);
    _this.onChange = (_context = _this).onChange.bind(_context);
    return _this;
  }

  _createClass(BlockButton, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.submitFileUrl) {
        document.getElementById("megapdraft-file-hidden-input-".concat(this.state.fileFieldId)).click();
      } else {
        var src = window.prompt("Enter a URL");

        if (!src) {
          return;
        }

        var data = {
          src: src,
          type: "image",
          display: "medium"
        };
        this.props.onChange((0, _insertDataBlock["default"])(this.props.editorState, data));
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      e.preventDefault();
      var file = document.getElementById("megapdraft-file-hidden-input-".concat(this.state.fileFieldId)).files[0];
      var src;

      if (file) {
        var fd = new FormData();
        fd.append("file", file);
        /*global $*/

        $.ajax({
          type: "POST",
          url: this.props.submitFileUrl,
          contentType: false,
          processData: false,
          data: fd,
          async: false,
          success: function success(response) {
            src = response.body;
          }
        });
        var data = {
          src: src,
          type: "image",
          display: "medium"
        };
        this.props.onChange((0, _insertDataBlock["default"])(this.props.editorState, data));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("button", {
        className: this.props.className,
        type: "button",
        onClick: this.onClick,
        title: this.props.title,
        tabIndex: "-1"
      }, this.props.submitFileUrl && /*#__PURE__*/_react["default"].createElement("input", {
        type: "file",
        id: "megapdraft-file-hidden-input-".concat(this.state.fileFieldId),
        style: {
          display: "none"
        },
        onChange: this.onChange
      }), /*#__PURE__*/_react["default"].createElement(_icons["default"].ImageIcon, {
        className: "sidemenu__button__icon"
      }));
    }
  }]);

  return BlockButton;
}(_react.Component);

exports["default"] = BlockButton;
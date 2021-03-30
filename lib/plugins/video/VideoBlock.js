"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _plugin = require("../../components/plugin");

var _icons = _interopRequireDefault(require("../../icons"));

var _VideoBlockStyle = _interopRequireDefault(require("./VideoBlockStyle"));

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

var VideoBlock = /*#__PURE__*/function (_Component) {
  _inherits(VideoBlock, _Component);

  var _super = _createSuper(VideoBlock);

  function VideoBlock(props) {
    var _context;

    var _this;

    _classCallCheck(this, VideoBlock);

    _this = _super.call(this, props);
    _this._handleCaptionChange = (_context = _this)._handleCaptionChange.bind(_context);
    _this.renderVideo = (_context = _this).renderVideo.bind(_context);
    _this.actions = [{
      key: "delete",
      icon: _icons["default"].DeleteIcon,
      action: _this.props.container.remove
    }];
    return _this;
  }

  _createClass(VideoBlock, [{
    key: "_handleCaptionChange",
    value: function _handleCaptionChange(event) {
      this.props.container.updateData({
        caption: event.target.value
      });
    }
  }, {
    key: "renderVideo",
    value: function renderVideo() {
      var youtubeRegexp = /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^?&"'>]+)/;
      var vimeoRegexp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
      var url = this.props.data.src;

      if (url.match(youtubeRegexp)) {
        var identifier = url.match(youtubeRegexp)[5];
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            padding: "56.25% 0 0 0",
            position: "relative"
          }
        }, /*#__PURE__*/_react["default"].createElement("iframe", {
          src: "https://www.youtube-nocookie.com/embed/" + identifier + "?rel=0&showinfo=0",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          },
          frameBorder: "0",
          allow: "autoplay; encrypted-media",
          webkitallowfullscreen: "true",
          mozallowfullscreen: "true",
          allowFullScreen: true
        }));
      } else if (url.match(vimeoRegexp)) {
        var _identifier = url.match(vimeoRegexp)[3];
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            padding: "56.25% 0 0 0",
            position: "relative"
          }
        }, /*#__PURE__*/_react["default"].createElement("iframe", {
          src: "https://player.vimeo.com/video/" + _identifier + "?title=0&byline=0&portrait=0",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          },
          frameBorder: "0",
          webkitallowfullscreen: "true",
          mozallowfullscreen: "true",
          allowFullScreen: true
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement("video", {
          controls: true,
          style: _VideoBlockStyle["default"].video,
          src: url,
          alt: this.props.data.caption
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var readOnly = this.props.blockProps.getInitialReadOnly();
      return /*#__PURE__*/_react["default"].createElement(_plugin.CommonBlock, _extends({}, this.props, {
        actions: this.actions
      }), /*#__PURE__*/_react["default"].createElement(_plugin.BlockContent, null, this.renderVideo()), (!readOnly || this.props.data.caption) && /*#__PURE__*/_react["default"].createElement(_plugin.BlockData, null, /*#__PURE__*/_react["default"].createElement(_plugin.BlockInput, {
        placeholder: this.props.i18n["Caption"],
        value: this.props.data.caption || "",
        onChange: this._handleCaptionChange,
        readOnly: readOnly
      })));
    }
  }]);

  return VideoBlock;
}(_react.Component);

exports["default"] = VideoBlock;
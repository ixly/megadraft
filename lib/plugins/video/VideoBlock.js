"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _plugin = require("../../components/plugin");

var _icons = require("../../icons");

var _icons2 = _interopRequireDefault(_icons);

var _VideoBlockStyle = require("./VideoBlockStyle");

var _VideoBlockStyle2 = _interopRequireDefault(_VideoBlockStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, Globo.com (https://github.com/globocom)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var VideoBlock = function (_Component) {
  _inherits(VideoBlock, _Component);

  function VideoBlock(props) {
    _classCallCheck(this, VideoBlock);

    var _this = _possibleConstructorReturn(this, (VideoBlock.__proto__ || Object.getPrototypeOf(VideoBlock)).call(this, props));

    _this._handleCaptionChange = _this._handleCaptionChange.bind(_this);
    _this.renderCaptionBlock = _this.renderCaptionBlock.bind(_this);
    _this.renderVideo = _this.renderVideo.bind(_this);

    _this.actions = [{ "key": "delete", "icon": _icons2.default.DeleteIcon, "action": _this.props.container.remove }];
    return _this;
  }

  _createClass(VideoBlock, [{
    key: "_handleCaptionChange",
    value: function _handleCaptionChange(event) {
      this.props.container.updateData({ caption: event.target.value });
    }
  }, {
    key: "renderCaptionBlock",
    value: function renderCaptionBlock() {
      if (this.props.blockProps.editorReadOnly) {
        return _react2.default.createElement(
          "p",
          { className: "caption-readonly" },
          this.props.data.caption
        );
      } else {
        return _react2.default.createElement(_plugin.BlockInput, {
          placeholder: "Caption",
          value: this.props.data.caption,
          onChange: this._handleCaptionChange });
      }
    }
  }, {
    key: "renderVideo",
    value: function renderVideo() {
      var youtubeRegexp = /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/;
      var vimeoRegexp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
      var url = this.props.data.src;

      if (url.match(youtubeRegexp)) {
        var identifier = url.match(youtubeRegexp)[5];

        return _react2.default.createElement(
          "div",
          { style: { padding: '56.25% 0 0 0', position: 'relative' } },
          _react2.default.createElement("iframe", { src: 'https://www.youtube-nocookie.com/embed/' + identifier + '?rel=0&showinfo=0',
            style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
            frameBorder: "0",
            allow: "autoplay; encrypted-media",
            webkitallowfullscreen: "true",
            mozallowfullscreen: "true",
            allowFullScreen: true })
        );
      } else if (url.match(vimeoRegexp)) {
        var _identifier = url.match(vimeoRegexp)[3];

        return _react2.default.createElement(
          "div",
          { style: { padding: '56.25% 0 0 0', position: 'relative' } },
          _react2.default.createElement("iframe", { src: 'https://player.vimeo.com/video/' + _identifier + '?title=0&byline=0&portrait=0',
            style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
            frameBorder: "0",
            webkitallowfullscreen: "true",
            mozallowfullscreen: "true",
            allowFullScreen: true })
        );
      } else {
        return _react2.default.createElement("video", { controls: true, style: _VideoBlockStyle2.default.video, src: url, alt: this.props.data.caption });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _plugin.CommonBlock,
        _extends({}, this.props, { actions: this.actions }),
        _react2.default.createElement(
          _plugin.BlockContent,
          null,
          this.renderVideo()
        ),
        _react2.default.createElement(
          _plugin.BlockData,
          null,
          this.renderCaptionBlock()
        )
      );
    }
  }]);

  return VideoBlock;
}(_react.Component);

exports.default = VideoBlock;
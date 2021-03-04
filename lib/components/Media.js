"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _ErrorBoundary = _interopRequireDefault(require("./ErrorBoundary"));

var _MediaWrapper = _interopRequireDefault(require("./MediaWrapper"));

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

var Media = /*#__PURE__*/function (_Component) {
  _inherits(Media, _Component);

  var _super = _createSuper(Media);

  function Media(props) {
    var _context;

    var _this;

    _classCallCheck(this, Media);

    _this = _super.call(this, props);
    _this.remove = (_context = _this).remove.bind(_context);
    _this.updateData = (_context = _this).updateData.bind(_context);
    _this.onChange = _this.props.blockProps.onChange;
    return _this;
  }

  _createClass(Media, [{
    key: "remove",
    value: function remove() {
      var editorState = this.props.blockProps.getEditorState();
      var selection = editorState.getSelection();
      var content = editorState.getCurrentContent();
      var keyAfter = content.getKeyAfter(this.props.block.key);
      var blockMap = content.getBlockMap()["delete"](this.props.block.key);
      var withoutAtomicBlock = content.merge({
        blockMap: blockMap,
        selectionAfter: selection
      });

      var newState = _draftJs.EditorState.push(editorState, withoutAtomicBlock, "remove-range"); // if this is not the last block


      if (keyAfter) {
        var newSelection = new _draftJs.SelectionState({
          anchorKey: keyAfter,
          anchorOffset: 0,
          focusKey: keyAfter,
          focusOffset: this.props.block.getLength()
        });

        var newEditorState = _draftJs.EditorState.forceSelection(newState, newSelection);

        this.onChange(newEditorState);
      } else {
        this.onChange(newState);
      }
    }
  }, {
    key: "updateData",
    value: function updateData(data) {
      var editorState = this.props.blockProps.getEditorState();
      var content = editorState.getCurrentContent();
      var selection = new _draftJs.SelectionState({
        anchorKey: this.props.block.key,
        anchorOffset: 0,
        focusKey: this.props.block.key,
        focusOffset: this.props.block.getLength()
      });

      var newContentState = _draftJs.Modifier.mergeBlockData(content, selection, data);

      var newEditorState = _draftJs.EditorState.push(editorState, newContentState, "change-block-data");

      this.onChange(newEditorState);
    }
  }, {
    key: "render",
    value: function render() {
      // Should we use immutables?
      var data = this.props.block.getData().toJS();
      var _this$props$blockProp = this.props.blockProps,
          plugin = _this$props$blockProp.plugin,
          setInitialReadOnly = _this$props$blockProp.setInitialReadOnly,
          setReadOnly = _this$props$blockProp.setReadOnly,
          i18n = _this$props$blockProp.i18n;
      var Block = plugin.blockComponent;
      return /*#__PURE__*/_react["default"].createElement(_ErrorBoundary["default"], _extends({}, this.props, {
        i18n: i18n,
        data: data,
        container: this
      }), /*#__PURE__*/_react["default"].createElement(_MediaWrapper["default"], {
        i18n: i18n,
        setInitialReadOnly: setInitialReadOnly,
        setReadOnly: setReadOnly
      }, /*#__PURE__*/_react["default"].createElement(Block, {
        i18n: i18n,
        data: data,
        container: this,
        blockProps: this.props.blockProps
      })));
    }
  }]);

  return Media;
}(_react.Component);

exports["default"] = Media;
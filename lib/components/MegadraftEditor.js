"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _immutable = _interopRequireDefault(require("immutable"));

var _Toolbar = _interopRequireDefault(require("./Toolbar"));

var _Sidebar = _interopRequireDefault(require("./Sidebar"));

var _Media = _interopRequireDefault(require("./Media"));

var _MoveControl = _interopRequireDefault(require("./MoveControl"));

var _MegadraftBlock = _interopRequireDefault(require("./MegadraftBlock"));

var _swapDataBlock = require("../swapDataBlock");

var _i18n = _interopRequireDefault(require("../i18n"));

var _plugin = _interopRequireDefault(require("../plugins/not-found/plugin"));

var _default = _interopRequireDefault(require("../plugins/default"));

var _default2 = _interopRequireDefault(require("../actions/default"));

var _default3 = _interopRequireDefault(require("../entity_inputs/default"));

var _ActionsProvider = _interopRequireWildcard(require("./ActionsProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
// i18n shim! I feel bad for doing this =(
// https://github.com/megawac/async/blob/d2dd36b4558f483682f3c672630fdcb36a96d4d2/lib/async.js#L16
((typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self.self === self && self || (typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" && global.global === global && global || void 0).__ = function (x) {
  console.warn("__() has been deprecated and will be removed soon. " + "You can move this code to your app, instead. __() code can be found at " + "https://gist.github.com/marcelometal/768454831c0c10ee03b939187b7bebbf");
  return x;
};

var NO_RESET_STYLE_DEFAULT = ["ordered-list-item", "unordered-list-item"];

var MegadraftEditor = /*#__PURE__*/function (_Component) {
  _inherits(MegadraftEditor, _Component);

  var _super = _createSuper(MegadraftEditor);

  function MegadraftEditor(props) {
    var _context;

    var _this;

    _classCallCheck(this, MegadraftEditor);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getEditorState", function () {
      return _this.props.editorState;
    });

    _defineProperty(_assertThisInitialized(_this), "swapUp", function (currentKey) {
      document.activeElement.blur();

      _this.forceUpdate(function () {
        _this.setState({
          swapUp: true,
          swapDown: false,
          scrollRef: currentKey
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "swapDown", function (currentKey) {
      document.activeElement.blur();

      _this.forceUpdate(function () {
        _this.setState({
          swapUp: false,
          swapDown: true,
          scrollRef: currentKey
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isFirstBlock", function (currentKey) {
      var contentState = _this.props.editorState.getCurrentContent();

      return contentState.getFirstBlock().getKey() === currentKey;
    });

    _defineProperty(_assertThisInitialized(_this), "isLastBlock", function (currentKey) {
      var contentState = _this.props.editorState.getCurrentContent();

      return contentState.getLastBlock().getKey() === currentKey;
    });

    _this.state = {
      readOnly: _this.props.readOnly || false,
      hasFocus: false,
      scrollRef: "",
      swapUp: false,
      swapDown: false,
      didSwap: false
    };
    _this.onChange = (_context = _this).onChange.bind(_context);
    _this.onTab = (_context = _this).onTab.bind(_context);
    _this.mediaBlockRenderer = (_context = _this).mediaBlockRenderer.bind(_context);
    _this.handleKeyCommand = (_context = _this).handleKeyCommand.bind(_context);
    _this.handleReturn = (_context = _this).handleReturn.bind(_context);
    _this.handleFocus = (_context = _this).handleFocus.bind(_context);
    _this.handleBlur = (_context = _this).handleBlur.bind(_context);
    _this.setReadOnly = (_context = _this).setReadOnly.bind(_context);
    _this.getReadOnly = (_context = _this).getReadOnly.bind(_context);
    _this.getInitialReadOnly = (_context = _this).getInitialReadOnly.bind(_context);
    _this.setInitialReadOnly = (_context = _this).setInitialReadOnly.bind(_context);
    _this.externalKeyBindings = (_context = _this).externalKeyBindings.bind(_context);
    _this.plugins = _this.getValidPlugins();
    _this.entityInputs = _this.props.entityInputs || _default3["default"];
    _this.blocksWithoutStyleReset = _this.props.blocksWithoutStyleReset || NO_RESET_STYLE_DEFAULT;
    _this.pluginsByType = _this.getPluginsByType();
    _this.keyBindings = _this.props.keyBindings || [];
    _this.onAction = _this.props.onAction || _ActionsProvider.defaultAction;
    _this.extendedBlockRenderMap = _immutable["default"].OrderedMap().withMutations(function (r) {
      var _iterator = _createForOfIteratorHelper(_draftJs.DefaultDraftBlockRenderMap.entrySeq()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              blockType = _step$value[0],
              data = _step$value[1];

          r.set(blockType, _objectSpread(_objectSpread({}, data), {}, {
            wrapper: !_this.props.readOnly && _this.props.movableBlocks ? /*#__PURE__*/_react["default"].createElement(_MoveControl["default"], {
              wrapper: data.wrapper,
              swapUp: _this.swapUp,
              swapDown: _this.swapDown,
              isFirstBlock: _this.isFirstBlock,
              isLastBlock: _this.isLastBlock,
              onAction: _this.onAction,
              isAtomic: blockType === "atomic"
            }) : /*#__PURE__*/_react["default"].createElement(_MegadraftBlock["default"], {
              wrapper: data.wrapper
            })
          }));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    return _this;
  }

  _createClass(MegadraftEditor, [{
    key: "getValidPlugins",
    value: function getValidPlugins() {
      var plugins = [];

      var _iterator2 = _createForOfIteratorHelper(this.props.plugins || _default["default"]),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var plugin = _step2.value;

          if (!plugin || typeof plugin.type !== "string") {
            console.warn("Plugin: Missing `type` field. Details: ", plugin);
            continue;
          }

          plugins.push(plugin);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return plugins;
    }
  }, {
    key: "getPluginsByType",
    value: function getPluginsByType() {
      var pluginsByType = {};

      var _iterator3 = _createForOfIteratorHelper(this.plugins),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var plugin = _step3.value;
          pluginsByType[plugin.type] = plugin;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return pluginsByType;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.readOnly !== nextProps.readOnly) {
        this.setState({
          readOnly: nextProps.readOnly
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(editorState) {
      this.props.onChange(editorState);
    }
  }, {
    key: "externalKeyBindings",
    value: function externalKeyBindings(e) {
      var _iterator4 = _createForOfIteratorHelper(this.keyBindings),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var kb = _step4.value;

          if (kb.isKeyBound(e)) {
            return kb.name;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return (0, _draftJs.getDefaultKeyBinding)(e);
    }
  }, {
    key: "onTab",
    value: function onTab(event) {
      if (this.props.onTab) {
        this.props.onTab(event);
      }
    }
  }, {
    key: "handleKeyCommand",
    value: function handleKeyCommand(command) {
      // external key bindings
      if (this.keyBindings.length) {
        var extKb = this.keyBindings.find(function (kb) {
          return kb.name === command;
        });

        if (extKb) {
          extKb.action();
          return true;
        }
      }

      var editorState = this.props.editorState;

      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);

      if (newState) {
        this.props.onChange(newState);
        return true;
      }

      return false;
    }
    /*
     * Copyright (c) 2016 Icelab
     *
     * License: MIT
     */
    //Based on https://github.com/icelab/draft-js-block-breakout-plugin

  }, {
    key: "resetBlockStyle",
    value: function resetBlockStyle(editorState, selection, contentState, currentBlock, blockType) {
      var List = _immutable["default"].List;
      var emptyBlockKey = (0, _draftJs.genKey)();
      var emptyBlock = new _draftJs.ContentBlock({
        key: emptyBlockKey,
        text: "",
        type: blockType,
        depth: 0,
        characterList: List(),
        inlineStyleRanges: []
      });
      var blockMap = contentState.getBlockMap();
      var blocksBefore = blockMap.toSeq().takeUntil(function (v) {
        return v === currentBlock;
      });
      var blocksAfter = blockMap.toSeq().skipUntil(function (v) {
        return v === currentBlock;
      }).rest();
      var augmentedBlocks = [[currentBlock.getKey(), currentBlock], [emptyBlockKey, emptyBlock]];
      var focusKey = emptyBlockKey;
      var newBlocks = blocksBefore.concat(augmentedBlocks, blocksAfter).toOrderedMap();
      var newContentState = contentState.merge({
        blockMap: newBlocks,
        selectionBefore: selection,
        selectionAfter: selection.merge({
          anchorKey: focusKey,
          anchorOffset: 0,
          focusKey: focusKey,
          focusOffset: 0,
          isBackward: false
        })
      });

      var noStyle = _immutable["default"].OrderedSet([]);

      var resetState = _draftJs.EditorState.push(editorState, newContentState, "split-block");

      var emptySelection = _draftJs.SelectionState.createEmpty(emptyBlockKey);

      var editorSelected = _draftJs.EditorState.forceSelection(resetState, emptySelection);

      var noStyleState = _draftJs.EditorState.setInlineStyleOverride(editorSelected, noStyle);

      this.props.onChange(noStyleState);
    }
  }, {
    key: "handleReturn",
    value: function handleReturn(event) {
      if (this.props.softNewLines === false) {
        return false;
      }

      if (!event.shiftKey) {
        var _editorState = this.props.editorState;

        var selection = _editorState.getSelection();

        var contentState = _editorState.getCurrentContent();

        var currentBlock = contentState.getBlockForKey(selection.getEndKey());
        var endOffset = selection.getEndOffset();
        var atEndOfBlock = endOffset === currentBlock.getLength();
        var resetStyleNewLine = this.props.resetStyleNewLine;
        var noReset = this.blocksWithoutStyleReset.includes(currentBlock.type);

        if (atEndOfBlock && resetStyleNewLine) {
          var blockType = noReset ? currentBlock.type : "unstyled";
          this.resetBlockStyle(_editorState, selection, contentState, currentBlock, blockType);
          return true;
        }

        return false;
      }

      var editorState = this.props.editorState;
      var currentContent = editorState.getCurrentContent();
      var currentSelection = editorState.getSelection();
      var contentBlock = currentContent.getBlockMap().get(currentSelection.getFocusKey());
      var contentText = contentBlock.getText();

      if (contentText.charAt(currentSelection.focusOffset - 1) == "\n" || contentText.charAt(currentSelection.focusOffset) == "\n") {
        return false;
      }

      var newState = _draftJs.RichUtils.insertSoftNewline(editorState);

      this.props.onChange(newState);
      return true;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.draftEl.focus();
    }
  }, {
    key: "setReadOnly",
    value: function setReadOnly(readOnly) {
      this.setState({
        readOnly: readOnly
      });
    }
  }, {
    key: "getReadOnly",
    value: function getReadOnly() {
      return this.state.readOnly;
    }
  }, {
    key: "getInitialReadOnly",
    value: function getInitialReadOnly() {
      return this.props.readOnly || false;
    }
  }, {
    key: "setInitialReadOnly",
    value: function setInitialReadOnly() {
      var readOnly = this.props.readOnly || false;
      this.setState({
        readOnly: readOnly
      });
    }
  }, {
    key: "handleBlockNotFound",
    value: function handleBlockNotFound(block) {
      if (this.props.handleBlockNotFound) {
        return this.props.handleBlockNotFound(block);
      }

      return _plugin["default"];
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      clearTimeout(this.blurTimeoutID);

      if (!this.state.hasFocus) {
        this.setState({
          hasFocus: true
        });
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      var _this2 = this;

      this.blurTimeoutID = setTimeout(function () {
        if (_this2.state.hasFocus) {
          _this2.setState({
            hasFocus: false
          });
        }
      }, 200);
    }
  }, {
    key: "handleClassEditor",
    value: function handleClassEditor(identifier) {
      var classEditor = this.props.movableBlocks ? "".concat(identifier, " movable") : identifier;
      var contentState = this.props.editorState.getCurrentContent(); // If the user changes block type before entering any text, we can
      // either style the placeholder or hide it.
      // Class with styling to spacing placeholder.

      if (!contentState.hasText()) {
        switch (contentState.getBlockMap().first().getType()) {
          case "ordered-list-item":
          case "unordered-list-item":
          case "header-two":
          case "blockquote":
            return "".concat(classEditor, " placeholder-hide");
        }
      }

      return classEditor;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.blurTimeoutID);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.swapUp || this.state.swapDown) {
        var swapFunction = this.state.swapUp ? _swapDataBlock.swapDataUp : _swapDataBlock.swapDataDown;
        var newEditorState = swapFunction({
          editorState: this.props.editorState,
          currentKey: this.state.scrollRef
        });
        this.onChange(newEditorState);
        this.setState({
          didSwap: true,
          swapUp: false,
          swapDown: false
        });
      } else if (this.state.didSwap) {
        var control = document.querySelector("[id*=\"".concat(this.state.scrollRef, "\"]"));

        if (control) {
          var options = control.querySelector(".options");

          var swapEffect = function swapEffect() {
            options.classList.toggle("options--swapped");
            control.classList.toggle("move-control--swapped");
          };

          var input = control.querySelector("[type=text]");
          input && input.focus();
          control.scrollIntoView({
            block: "center"
          });
          window.scroll(0, window.pageYOffset - control.clientHeight / 2);
          swapEffect();
          setTimeout(function () {
            swapEffect();
          }, 300);
          this.setState({
            didSwap: false,
            scrollRef: ""
          });
        }
      }
    }
  }, {
    key: "mediaBlockRenderer",
    value: function mediaBlockRenderer(block) {
      var handled = this.props.blockRendererFn(block);

      if (handled) {
        return handled;
      }

      if (block.getType() !== "atomic") {
        return null;
      }

      var type = block.getData().toObject().type;
      var plugin = this.pluginsByType[type] || this.handleBlockNotFound(block);

      if (!plugin) {
        return null;
      }

      return {
        component: _Media["default"],
        editable: false,
        props: {
          i18n: this.props.i18n[this.props.language],
          plugin: plugin,
          onChange: this.onChange,
          editorState: this.props.editorState,
          getEditorState: this.getEditorState,
          setReadOnly: this.setReadOnly,
          getReadOnly: this.getReadOnly,
          getInitialReadOnly: this.getInitialReadOnly,
          setInitialReadOnly: this.setInitialReadOnly,
          showDataRightsHolder: this.props.showDataRightsHolder
        }
      };
    }
  }, {
    key: "blockStyleFn",
    value: function blockStyleFn(contentBlock) {
      var type = contentBlock.getType();

      if (type === "unstyled") {
        return "paragraph";
      }
    }
  }, {
    key: "renderSidebar",
    value: function renderSidebar(props) {
      var sidebarRendererFn = this.props.sidebarRendererFn;

      if (typeof sidebarRendererFn === "function") {
        return sidebarRendererFn(props);
      }

      return /*#__PURE__*/_react["default"].createElement(_Sidebar["default"], props);
    }
  }, {
    key: "renderToolbar",
    value: function renderToolbar(props) {
      var _this$props$Toolbar = this.props.Toolbar,
          Toolbar = _this$props$Toolbar === void 0 ? _Toolbar["default"] : _this$props$Toolbar;
      return /*#__PURE__*/_react["default"].createElement(Toolbar, props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var hideSidebarOnBlur = this.props.hideSidebarOnBlur || false;
      var i18n = this.props.i18n[this.props.language];
      var classEditor = "megadraft";
      var identifierEditor = "".concat(classEditor, "-editor");
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classEditor
      }, /*#__PURE__*/_react["default"].createElement(_ActionsProvider["default"], {
        onAction: this.onAction
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: this.handleClassEditor(identifierEditor),
        id: this.props.id || identifierEditor,
        ref: function ref(el) {
          _this3.editorEl = el;
        },
        onBlur: this.handleBlur,
        onFocus: this.handleFocus
      }, this.props.showSidebar != false && this.renderSidebar({
        i18n: i18n,
        plugins: this.plugins,
        editorState: this.props.editorState,
        readOnly: this.state.readOnly,
        onChange: this.onChange,
        maxSidebarButtons: this.props.maxSidebarButtons,
        modalOptions: this.props.modalOptions,
        editorHasFocus: this.state.hasFocus,
        hideSidebarOnBlur: hideSidebarOnBlur,
        submitFileUrl: this.props.submitFileUrl
      }), /*#__PURE__*/_react["default"].createElement(_draftJs.Editor, _extends({}, this.props, {
        ref: function ref(el) {
          _this3.draftEl = el;
        },
        readOnly: this.state.readOnly,
        blockRendererFn: this.mediaBlockRenderer,
        blockStyleFn: this.props.blockStyleFn || this.blockStyleFn,
        onTab: this.onTab,
        handleKeyCommand: this.handleKeyCommand,
        handleReturn: this.props.handleReturn || this.handleReturn,
        keyBindingFn: this.externalKeyBindings,
        onChange: this.onChange,
        blockRenderMap: this.extendedBlockRenderMap
      })), this.renderToolbar({
        i18n: i18n,
        editor: this.editorEl,
        draft: this.draftEl,
        editorState: this.props.editorState,
        editorHasFocus: this.state.hasFocus,
        readOnly: this.state.readOnly,
        onChange: this.onChange,
        actions: this.props.actions,
        theme: this.props.theme,
        entityInputs: this.entityInputs,
        shouldDisplayToolbarFn: this.props.shouldDisplayToolbarFn
      }))));
    }
  }]);

  return MegadraftEditor;
}(_react.Component);

exports["default"] = MegadraftEditor;

_defineProperty(MegadraftEditor, "defaultProps", {
  actions: _default2["default"],
  blockRendererFn: function blockRendererFn() {},
  i18n: _i18n["default"],
  language: "en-US"
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _draftJs = require("draft-js");

var _classnames = _interopRequireDefault(require("classnames"));

var _ToolbarItem = _interopRequireDefault(require("./ToolbarItem"));

var _utils = require("../utils");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Toolbar = /*#__PURE__*/function (_Component) {
  _inherits(Toolbar, _Component);

  var _super = _createSuper(Toolbar);

  function Toolbar(props) {
    var _context;

    var _this;

    _classCallCheck(this, Toolbar);

    _this = _super.call(this, props);
    _this.state = {
      show: false,
      editingEntity: null,
      link: "",
      error: null
    };
    _this.renderButton = (_context = _this).renderButton.bind(_context);
    _this.cancelEntity = (_context = _this).cancelEntity.bind(_context);
    _this.removeEntity = (_context = _this).removeEntity.bind(_context);
    _this.setError = (_context = _this).setError.bind(_context);
    _this.cancelError = (_context = _this).cancelError.bind(_context);
    return _this;
  }

  _createClass(Toolbar, [{
    key: "toggleInlineStyle",
    value: function toggleInlineStyle(inlineStyle) {
      var newEditorState = _draftJs.RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle);

      this.props.onChange(newEditorState);
    }
  }, {
    key: "toggleBlockType",
    value: function toggleBlockType(blockType) {
      this.props.onChange(_draftJs.RichUtils.toggleBlockType(this.props.editorState, blockType));
    }
  }, {
    key: "toggleEntity",
    value: function toggleEntity(entity) {
      this.setState({
        editingEntity: entity
      });
    }
  }, {
    key: "renderButton",
    value: function renderButton(item, position) {
      var _this2 = this;

      var current = null;
      var toggle = null;
      var active = null;
      var key = item.label;

      switch (item.type) {
        case "custom":
          {
            key = "custom-" + position;

            toggle = function toggle() {
              return item.action(_this2.props.editorState, _this2.props.onChange);
            };

            active = item.active && item.active(this.props.editorState);
            break;
          }

        case "inline":
          {
            current = this.props.editorState.getCurrentInlineStyle();

            toggle = function toggle() {
              return _this2.toggleInlineStyle(item.style);
            };

            active = current.has(item.style);
            break;
          }

        case "block":
          {
            var selection = this.props.editorState.getSelection();
            current = this.props.editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

            toggle = function toggle() {
              return _this2.toggleBlockType(item.style);
            };

            active = item.style === current;
            break;
          }

        case "separator":
          {
            key = "sep-" + position;
            break;
          }

        case "entity":
          {
            var _item$entity = item.entity,
                entity = _item$entity === void 0 ? "LINK" : _item$entity;
            key = "entity-" + entity;

            toggle = function toggle() {
              return _this2.toggleEntity(entity);
            };

            active = this.hasEntity(entity);
            break;
          }
      }

      return /*#__PURE__*/_react["default"].createElement(_ToolbarItem["default"], {
        key: key,
        active: active,
        toggle: toggle,
        item: item
      });
    }
  }, {
    key: "setError",
    value: function setError(errorMsg) {
      this.setState({
        error: errorMsg
      });
    }
  }, {
    key: "cancelError",
    value: function cancelError() {
      this.setState({
        error: null
      });
    }
  }, {
    key: "setBarPosition",
    value: function setBarPosition() {
      var _this3 = this;

      this.setState({
        show: true
      }, function () {
        var editor = _this3.props.editor;
        var toolbar = _this3.toolbarEl;
        var selectionCoords = (0, _utils.getSelectionCoords)(editor, toolbar);

        if (!selectionCoords) {
          return null;
        }

        if (selectionCoords && !_this3.state.position || _this3.state.position.top !== selectionCoords.offsetTop || _this3.state.position.left !== selectionCoords.offsetLeft || _this3.state.arrowStyle !== selectionCoords.arrowStyle || !_this3.state.show) {
          _this3.setState({
            position: {
              top: selectionCoords.offsetTop,
              left: selectionCoords.offsetLeft
            },
            arrowStyle: selectionCoords.arrowStyle
          });
        }
      });
    }
  }, {
    key: "handleSetToolbar",
    value: function handleSetToolbar() {
      if (this.props.shouldDisplayToolbarFn(this.props, this.state)) {
        this.shouldUpdatePos = false;
        return this.setBarPosition();
      } else {
        if (this.state.show) {
          this.setState({
            show: false,
            editingEntity: null,
            link: "",
            error: null
          });
        }
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var currentContentState = this.props.editorState.getCurrentContent();
      var newContentState = nextProps.editorState.getCurrentContent();

      if (currentContentState === newContentState) {
        this.shouldUpdatePos = true;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.shouldUpdatePos) {
        this.handleSetToolbar();
      }
    }
  }, {
    key: "getCurrentEntityKey",
    value: function getCurrentEntityKey() {
      var selection = this.props.editorState.getSelection();
      var anchorKey = selection.getAnchorKey();
      var contentState = this.props.editorState.getCurrentContent();
      var anchorBlock = contentState.getBlockForKey(anchorKey);
      var offset = selection.anchorOffset;
      var index = selection.isBackward ? offset - 1 : offset;
      return anchorBlock.getEntityAt(index);
    }
  }, {
    key: "getCurrentEntity",
    value: function getCurrentEntity() {
      var contentState = this.props.editorState.getCurrentContent();
      var entityKey = this.getCurrentEntityKey();

      if (entityKey) {
        return contentState.getEntity(entityKey);
      }

      return null;
    }
  }, {
    key: "hasEntity",
    value: function hasEntity(entityType) {
      var entity = this.getCurrentEntity();

      if (entity && entity.getType() === entityType) {
        return true;
      }

      return false;
    }
  }, {
    key: "setEntity",
    value: function setEntity(entityType, data) {
      var mutability = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "MUTABLE";
      var editorState = this.props.editorState;
      var contentState = editorState.getCurrentContent();
      var contentStateWithEntity = contentState.createEntity(entityType, mutability, data);
      var entityKey = contentStateWithEntity.getLastCreatedEntityKey();

      var newState = _draftJs.RichUtils.toggleLink(editorState, editorState.getSelection(), entityKey);

      var selectionState = _draftJs.EditorState.forceSelection(newState, editorState.getSelection());

      this.props.onChange(selectionState);
    }
  }, {
    key: "removeEntity",
    value: function removeEntity() {
      var editorState = this.props.editorState;
      var selection = editorState.getSelection();

      if (!selection.isCollapsed()) {
        // toggleLink should be named toggleEntity: https://github.com/facebook/draft-js/issues/737
        this.props.onChange(_draftJs.RichUtils.toggleLink(editorState, selection, null));
      }

      this.cancelEntity();
    }
  }, {
    key: "cancelEntity",
    value: function cancelEntity() {
      var _this4 = this;

      this.setState({
        editingEntity: null,
        error: null
      }, function () {
        _this4.props.draft && _this4.props.draft.focus();
      });
    }
  }, {
    key: "renderEntityInput",
    value: function renderEntityInput(entityType) {
      var _this5 = this;

      if (!this.props.entityInputs) {
        console.warn("no entityInputs provided");
        return null;
      }

      var Component = this.props.entityInputs[entityType];

      var setEntity = function setEntity(data, mutability) {
        return _this5.setEntity(entityType, data, mutability);
      };

      var entityData = {};
      var entity = null;

      if (this.hasEntity(entityType)) {
        entity = this.getCurrentEntity();

        if (entity) {
          entityData = entity.getData();
        }
      }

      if (Component) {
        return /*#__PURE__*/_react["default"].createElement(Component, _extends({
          i18n: this.props.i18n,
          editorState: this.props.editorState,
          setEntity: setEntity,
          entityType: entityType,
          onChange: this.props.onChange,
          cancelEntity: this.cancelEntity,
          removeEntity: this.removeEntity,
          setError: this.setError,
          cancelError: this.cancelError,
          entity: entity
        }, entityData));
      } else {
        console.warn("unknown entity type: " + entityType);
        return null;
      }
    }
  }, {
    key: "renderToolList",
    value: function renderToolList() {
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: "toolbar__list"
      }, this.props.actions.map(this.renderButton));
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      if (this.props.readOnly || !this.props.shouldDisplayToolbarFn(this.props, this.state)) {
        return null;
      }

      var toolbarClass = (0, _classnames["default"])("toolbar", {
        "toolbar--open": this.state.show,
        "toolbar--error": this.state.error
      });

      if (this.props.theme) {
        toolbarClass = toolbarClass + " " + this.props.theme + "-theme";
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: toolbarClass,
        style: this.state.position,
        ref: "toolbarWrapper"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: "absolute",
          bottom: 0
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "toolbar__wrapper",
        ref: function ref(el) {
          _this6.toolbarEl = el;
        },
        onMouseDown: function onMouseDown(e) {
          if (e.target.localName !== "input" && e.target.localName !== "select") {
            e.preventDefault();
          }
        }
      }, this.state.editingEntity ? this.renderEntityInput(this.state.editingEntity) : this.renderToolList(), /*#__PURE__*/_react["default"].createElement("p", {
        className: "toolbar__error-msg"
      }, this.state.error), /*#__PURE__*/_react["default"].createElement("span", {
        className: "toolbar__arrow",
        ref: function ref(el) {
          _this6.arrowEl = el;
        },
        style: this.state.arrowStyle
      }))));
    }
  }]);

  return Toolbar;
}(_react.Component);

exports["default"] = Toolbar;

_defineProperty(Toolbar, "defaultProps", {
  shouldDisplayToolbarFn: function shouldDisplayToolbarFn(props, state) {
    return (props.editorHasFocus || state.editingEntity) && !props.editorState.getSelection().isCollapsed();
  }
});

_defineProperty(Toolbar, "propTypes", {
  editorHasFocus: _propTypes["default"].bool
});
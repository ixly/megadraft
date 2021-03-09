"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dropdown = /*#__PURE__*/function (_Component) {
  _inherits(Dropdown, _Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _context;

    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);
    _this.state = {
      isOpen: false
    };
    _this.handleDocumentClick = (_context = _this).handleDocumentClick.bind(_context);
    _this.toggleDropDown = (_context = _this).toggleDropDown.bind(_context);
    _this.preventSelection = (_context = _this).preventSelection.bind(_context);
    _this.renderItem = (_context = _this).renderItem.bind(_context);
    return _this;
  }

  _createClass(Dropdown, [{
    key: "isEmpty",
    value: function isEmpty() {
      var items = this.props.items || [];
      return items.length == 0 ? true : false;
    }
  }, {
    key: "onChange",
    value: function onChange(selected) {
      this.props.onChange(selected);
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("li", {
        key: item.key
      }, /*#__PURE__*/_react["default"].createElement(_DropdownItem["default"], {
        item: item,
        className: "dropdown__option",
        onClick: function onClick() {
          return _this2.onChange(item.key);
        }
      }));
    }
  }, {
    key: "preventSelection",
    value: function preventSelection(event) {
      window.getSelection().empty();
      event.preventDefault();
    }
  }, {
    key: "toggleDropDown",
    value: function toggleDropDown(event) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(event) {
      if (this.isEmpty()) {
        return null;
      }

      if (!_reactDom["default"].findDOMNode(this).contains(event.target)) {
        this.setState({
          isOpen: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("click", this.handleDocumentClick, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.handleDocumentClick, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.isEmpty()) {
        return null;
      }

      var selectedItem = this.props.items.filter(function (obj) {
        return obj.key === _this3.props.selected;
      })[0];
      var isOpen = this.state.isOpen;
      var wrapperClassName = (0, _classnames["default"])("dropdown__wrapper", {
        "dropdown__wrapper--open": isOpen
      });
      var dropdownClassName = (0, _classnames["default"])("dropdown", {
        "dropdown--open": isOpen
      });
      var arrowClassName = (0, _classnames["default"])("dropdown__arrow", {
        "dropdown__arrow--open": isOpen
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: wrapperClassName,
        onClick: this.toggleDropDown
      }, /*#__PURE__*/_react["default"].createElement(_DropdownItem["default"], {
        item: selectedItem,
        className: "dropdown__item--selected",
        onMouseDown: this.preventSelection
      }, /*#__PURE__*/_react["default"].createElement(_icons["default"].DropdownArrow, {
        className: arrowClassName
      })), /*#__PURE__*/_react["default"].createElement("ul", {
        className: dropdownClassName
      }, this.props.items.map(this.renderItem)));
    }
  }]);

  return Dropdown;
}(_react.Component);

exports["default"] = Dropdown;

_defineProperty(Dropdown, "propTypes", {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    key: _propTypes["default"].string.isRequired,
    icon: _propTypes["default"].func.isRequired,
    label: _propTypes["default"].string.isRequired
  })),
  selected: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired
});
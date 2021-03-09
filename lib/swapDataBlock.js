"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swapDataDown = exports.swapDataUp = void 0;

var _draftJs = require("draft-js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var swapBlocks = function swapBlocks(_ref) {
  var currentKey = _ref.currentKey,
      targetKey = _ref.targetKey,
      editorState = _ref.editorState;
  var contentState = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();
  var blockMap = contentState.getBlockMap();
  var keySeq = blockMap.keySeq();

  var getIndex = function getIndex(key) {
    return keySeq.findIndex(function (k) {
      return k === key;
    });
  };

  var insertBlock = function insertBlock(target, key, val) {
    var swapEntries = function swapEntries(map, targetKey, key, val) {
      return map.mapEntries(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            k = _ref3[0],
            v = _ref3[1];

        return k === targetKey ? [key, val] : k === key ? [targetKey, map.get(targetKey)] : [k, v];
      });
    };

    var getListItemKeys = function getListItemKeys(startItemKey) {
      var listItemKeys = [];
      var startIndex = getIndex(startItemKey);
      var currentIndex = getIndex(key);
      var modifier = currentIndex < startIndex ? 1 : -1;

      for (var i = startIndex, itemKey = target; itemKey && blockMap.get(itemKey).get("type").includes("-list-item"); i += modifier, itemKey = keySeq.get(i)) {
        listItemKeys.push(itemKey);
      }

      return listItemKeys;
    };

    if (target) {
      if (val.get("type").includes("-list-item")) {
        var temp = key;
        key = target;
        val = blockMap.get(target);
        target = temp;
      }

      var targets = blockMap.get(target).get("type").includes("-list-item") ? getListItemKeys(target) : [target];
      return targets.reduce(function (newBlockMap, targetKey) {
        return swapEntries(newBlockMap, targetKey, key, val);
      }, blockMap);
    }

    return blockMap;
  };

  var newBlocks = insertBlock(targetKey, currentKey, contentState.getBlockForKey(currentKey));
  var newContentState = contentState.merge({
    blockMap: newBlocks,
    selectionAfter: selectionState.merge({
      hasFocus: true
    })
  });
  return _draftJs.EditorState.push(editorState, newContentState, "move-block");
};

var swap = function swap(_ref4) {
  var getTargetKeyFn = _ref4.getTargetKeyFn,
      editorState = _ref4.editorState,
      currentKey = _ref4.currentKey;
  var contentState = editorState.getCurrentContent();
  var targetKey = contentState[getTargetKeyFn](currentKey);
  return swapBlocks({
    currentKey: currentKey,
    targetKey: targetKey,
    editorState: editorState
  });
};

var swapDataUp = function swapDataUp(_ref5) {
  var editorState = _ref5.editorState,
      currentKey = _ref5.currentKey;
  return swap({
    getTargetKeyFn: "getKeyBefore",
    editorState: editorState,
    currentKey: currentKey
  });
};

exports.swapDataUp = swapDataUp;

var swapDataDown = function swapDataDown(_ref6) {
  var editorState = _ref6.editorState,
      currentKey = _ref6.currentKey;
  return swap({
    getTargetKeyFn: "getKeyAfter",
    editorState: editorState,
    currentKey: currentKey
  });
};

exports.swapDataDown = swapDataDown;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.focusNextField = focusNextField;
exports.focusPrevField = focusPrevField;
exports.handlePaste = exports.handleKeyDown = exports.handleChange = exports.focusRef = void 0;
var _utils = require("../../../utils");
/**
 * when onFieldsetClick then focus first input
 */
var focusRef = function focusRef(ref) {
  if (!(0, _utils.empty)(ref === null || ref === void 0 ? void 0 : ref.current)) {
    ref.current.focus();
  }
};

/**
 * focus previous input
 */
exports.focusRef = focusRef;
function focusPrevField(InputIndex, _ref) {
  var itemsRef = _ref.itemsRef;
  var target = itemsRef.current[InputIndex - 1];
  if (target) {
    setTimeout(function () {
      target.focus();
    }, 0);
  }
}

/**
 * focus next input
 */
function focusNextField(InputIndex, _ref2) {
  var itemsRef = _ref2.itemsRef;
  var target = itemsRef.current[InputIndex + 1];
  if (target) {
    setTimeout(function () {
      target.focus();
    }, 0);
  }
}

/**
 * handle on paste event
 * @param e clipboard event
 */
var handlePaste = function handlePaste(e, _ref3) {
  var setCombinedValue = _ref3.setCombinedValue,
    inputsLength = _ref3.inputsLength;
  e.preventDefault();
  if (!e.clipboardData || !e.clipboardData.getData) {
    return;
  }

  // regex replace all whitespace with empty string
  var pasteData = e.clipboardData.getData("text/plain").replace(/\s/g, "");
  if (!pasteData) {
    return;
  }
  setCombinedValue((pasteData === null || pasteData === void 0 ? void 0 : pasteData.slice(0, inputsLength)) || "");
};

/**
 * handle on key down event
 * @param e keyboard event
 */
exports.handlePaste = handlePaste;
var handleKeyDown = function handleKeyDown(e, _ref4) {
  var itemsRef = _ref4.itemsRef;
  var backspace = (0, _utils.keyboardEventChecker)(e, "Backspace");
  var isNumber = /^\d$/i.test(e.key);
  var target = e.target;
  var InputIndex = itemsRef.current.indexOf(target);
  if (isNumber && target.value.length + 1 > 1) {
    e.preventDefault();
    return;
  }
  if (backspace) {
    var _target$value;
    if (((target === null || target === void 0 ? void 0 : (_target$value = target.value) === null || _target$value === void 0 ? void 0 : _target$value.length) || 0) - 1 < 0) {
      focusPrevField(InputIndex, {
        itemsRef: itemsRef
      });
    }
  }
};

/**
 * handle on change event
 * @param v value
 * @param n name
 */
exports.handleKeyDown = handleKeyDown;
var handleChange = function handleChange(v, n, _ref5) {
  var itemsRef = _ref5.itemsRef,
    setCombinedValue = _ref5.setCombinedValue;
  var InputIndex = itemsRef.current.findIndex(function (a) {
    return a.name === n;
  });
  setCombinedValue(function (prev) {
    return !v ? prev.substring(0, InputIndex) : prev.substring(0, InputIndex) + v + prev.substring(InputIndex + v.length);
  });
  if (v.length >= 1) {
    focusNextField(InputIndex, {
      itemsRef: itemsRef
    });
  }
};
exports.handleChange = handleChange;
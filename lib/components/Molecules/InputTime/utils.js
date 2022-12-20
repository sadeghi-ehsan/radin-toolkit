"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputTimeGroup = void 0;
var _utils = require("../../../utils");
var _FormElementWrapper = require("../../Atoms/FormElementWrapper");
var _InputNumber = require("../InputNumber");
var _jsxRuntime = require("react/jsx-runtime");
var InputTimeGroup = function InputTimeGroup(_ref) {
  var inputGroupIndex = _ref.inputGroupIndex,
    groupLabel = _ref.groupLabel,
    inputVariant = _ref.inputVariant,
    min = _ref.min,
    max = _ref.max,
    disabled = _ref.disabled,
    error = _ref.error,
    required = _ref.required,
    value = _ref.value,
    onChange = _ref.onChange,
    onPaste = _ref.onPaste,
    focusField = _ref.focusField;
  var onesValue = (0, _utils.isNumber)(value) ? value % 10 : null;
  var tensValue = (0, _utils.isNumber)(value) ? Math.floor(value / 10) : null;

  /**
   * The method to update valid Input time group value
   *
   * @param v - The value to update
   */
  var updateValue = function updateValue(v) {
    if (v >= min && v <= max) onChange(v);
  };

  /**
   * This method takes ones and tens numbers and return parsed value
   *
   * @param ones - The ones number value
   * @param tens - The tens number value
   * @returns Return parsed value
   */
  var parseValue = function parseValue(ones, tens) {
    return Number("".concat(tens).concat(ones));
  };

  /**
   * A function generator which provide key down event handler for InputNumber component
   *
   * @param targetIndex - The input target index
   * @returns Returns key down Event Handler function which check if key target is backspace, left or right and decide what to do for each of them.
   */
  var onKeyDown = function onKeyDown(targetIndex) {
    return function (e) {
      var backspace = (0, _utils.keyboardEventChecker)(e, "Backspace");
      var left = (0, _utils.keyboardEventChecker)(e, "Left");
      var right = (0, _utils.keyboardEventChecker)(e, "Right");
      var arrowUp = (0, _utils.keyboardEventChecker)(e, "ArrowUp");
      var arrowDown = (0, _utils.keyboardEventChecker)(e, "ArrowDown");

      // Backspace button
      if (backspace) {
        e.preventDefault();
        var newValue;
        if (2 * inputGroupIndex > 0 || targetIndex % 2) {
          newValue = Number("".concat((targetIndex + 1) % 2 ? 0 : tensValue).concat(targetIndex % 2 ? 0 : onesValue));
        } else {
          newValue = 12;
        }
        if (newValue >= 0 && newValue <= max) onChange(newValue);
        focusField(targetIndex - 1);
      }

      // Left arrow button
      if (left) {
        e.preventDefault();
        focusField(targetIndex - 1);
      }

      // Right arrow button
      if (right) {
        e.preventDefault();
        focusField(targetIndex + 1);
      }

      // Up arrow button
      if (arrowUp) {
        e.preventDefault();
        var _newValue;
        if (targetIndex % 2) {
          // For ones
          if (onesValue >= 0 && onesValue < 9) {
            _newValue = parseValue(onesValue + 1, tensValue || 0);
          } else if (onesValue === 9) {
            _newValue = parseValue(0, (tensValue || 0) + 1);
          }
        } else {
          // For tens

          _newValue = parseValue(onesValue || 0, (tensValue || 0) + 1);
        }
        updateValue(_newValue);
      }

      // Down arrow button
      if (arrowDown) {
        e.preventDefault();
        var _newValue2;
        if (targetIndex % 2) {
          // For ones

          if (onesValue >= 1) {
            _newValue2 = parseValue(onesValue - 1, tensValue);
          } else if (onesValue === 0) {
            _newValue2 = parseValue(9, (Number(tensValue) || 0) - 1);
          }
        } else {
          // For tens

          _newValue2 = parseValue(Number(onesValue) || 0, Number(tensValue) - 1);
        }
        updateValue(_newValue2);
      }
    };
  };

  /**
   * This function return focus event handler which select text of focused input
   *
   * @param targetIndex - Target index of input that focused
   * @returns - FocusEventHandler
   */
  var onClick = function onClick(targetIndex) {
    return function (e) {
      e.preventDefault();
      focusField(targetIndex);
    };
  };

  /**
   * This function return keyup event handler which decide if keyup button was number then focus on next field
   *
   * @param targetIndex - Target index of input that keyup has pressed
   * @returns - KeyboardEventHandler
   */
  var onKeyUp = function onKeyUp(targetIndex) {
    return function (e) {
      e.preventDefault();
      if (/^\d$/i.test(e.key)) focusField(targetIndex + 1);
    };
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormElementWrapper.FormElementWrapper, {
    label: groupLabel,
    fieldsetClassName: (0, _utils.classJoin)(["flex flex-row justify-center !h-14 !w-17.5 dir-ltr"]),
    childrenClassName: "w-full",
    legendClassName: "!mx-auto",
    variant: inputVariant,
    disabled: disabled,
    error: error,
    required: required,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-row space-x-1 justify-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputNumber.InputNumber, {
        min: 0,
        max: 9,
        className: "!p-0",
        onPaste: onPaste,
        name: "".concat(groupLabel, "-0"),
        variant: "line",
        counterType: "none",
        disabled: disabled,
        fieldsetClassName: "!ml-0 !h-auto",
        legendClassName: "!mx-auto",
        baseInputClassName: "!text-center !p-0",
        onKeyDown: onKeyDown(2 * inputGroupIndex),
        onClick: onClick(2 * inputGroupIndex),
        onKeyUp: onKeyUp(2 * inputGroupIndex),
        value: tensValue,
        onChange: function onChange(v) {
          var newValue = parseValue(Number(onesValue) || 0, Number(v) || 0);
          updateValue(newValue);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputNumber.InputNumber, {
        min: 0,
        max: 9,
        className: "!p-0",
        onPaste: onPaste,
        name: "".concat(groupLabel, "-1"),
        variant: "line",
        counterType: "none",
        disabled: disabled,
        fieldsetClassName: "!m-0 !h-auto",
        legendClassName: "!mx-auto",
        baseInputClassName: "!text-center !p-0",
        onKeyDown: onKeyDown(2 * inputGroupIndex + 1),
        onClick: onClick(2 * inputGroupIndex + 1),
        onKeyUp: onKeyUp(2 * inputGroupIndex + 1),
        value: onesValue,
        onChange: function onChange(v) {
          var newValue = parseValue(Number(v) || 0, Number(tensValue) || 0);
          updateValue(newValue);
        }
      })]
    })
  });
};
exports.InputTimeGroup = InputTimeGroup;
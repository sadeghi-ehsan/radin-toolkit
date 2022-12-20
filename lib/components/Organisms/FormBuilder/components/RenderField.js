"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RenderField;
var _reactHookForm = require("react-hook-form");
var _utils = require("../../../../utils");
var _FieldComponent = _interopRequireDefault(require("./FieldComponent"));
var _utils2 = require("../utils");
var _jsxRuntime = require("react/jsx-runtime");
function RenderField(_ref) {
  var fieldSchema = _ref.fieldSchema,
    formMethod = _ref.formMethod,
    modifyValidationSchema = _ref.modifyValidationSchema,
    returningParams = _ref.returningParams;
  var formProps = (0, _reactHookForm.useFormContext)(); // retrieve all hook methods
  var width = fieldSchema.width,
    className = fieldSchema.className,
    hideOnForm = fieldSchema.hideOnForm;
  var fieldComponent = (0, _FieldComponent["default"])({
    fieldSchema: fieldSchema,
    formProps: formProps,
    returningParams: returningParams,
    formMethod: formMethod,
    modifyValidationSchema: modifyValidationSchema
  });

  /**
   * if fieldComponent is not found.
   */
  if ((0, _utils.empty)(fieldComponent)) return null;

  /**
   * handle if we need to hide the field on the form.
   */
  if (!(0, _utils.empty)(hideOnForm) && (0, _utils.isCallable)(hideOnForm) && fieldSchema.props && ("name" in fieldSchema.props || fieldSchema.name)) {
    var isShouldHide = hideOnForm(returningParams);
    if (isShouldHide) {
      modifyValidationSchema(fieldSchema.name || fieldSchema.props.name, true); // add to ignore this field in the validation.
      return null; // hide component
    }

    modifyValidationSchema(fieldSchema.name || fieldSchema.props.name, false); // bring back hidden field to validation
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _utils.classJoin)(["w-full sm:px-2", _utils2.widthMap[width], className]),
    children: fieldComponent
  });
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Check, Chevron, Error, Important } from "@sadeghi-ehsan/radin-icon";
import { Typography } from "../Typography";
import { classJoin, empty, ifEmpty, ifNotEmpty, isBoolean, modifyReactChildren } from "../../../utils";
import { ClearIcon, EndAdornment, EndLabelAdornment, StartAdornment } from "./Adornments";
import { sectionsYPadding, wrapperSizes, wrapperVariants } from "./utils";
export const FormElementWrapper = forwardRef(({ id, children, label, variant, legendVariant, fieldsetVariant, startAdornment, endAdornment, endAdornmentClassName, onFieldsetClick, onClear, clearable, allowClear, important, required, disabled, block, size, help, className, legendClassName, labelClassName, fieldsetClassName, childrenClassName, endLabelAdornment, noEndDivider, verified, error, preserveErrorBox, ...otherProps }, ref) => {
    const isLine = variant === wrapperVariants.line || variant === wrapperVariants.none;
    const showLabel = !empty(error) || !empty(required) || !empty(important) || !empty(label);
    const fieldsetClasses = {
        [wrapperVariants.line]: classJoin([
            "relative ml-6",
            ifNotEmpty(important, "important-fieldset"),
            ifNotEmpty(required, "required-fieldset"),
            error ? "error-fieldset" : ""
        ]),
        [wrapperVariants.none]: classJoin([
            "relative ml-6",
            ifNotEmpty(important, "important-fieldset"),
            ifNotEmpty(required, "required-fieldset")
        ]),
        [wrapperVariants.outline]: classJoin([
            "text-idle border-solid border rounded-xl",
            ifEmpty(disabled, classJoin([
                "focus-within:shadow-input-outline",
                ifNotEmpty(error, "border-error error-fieldset", "border-idle-border"),
                ifNotEmpty(important, "hover:border-primary focus-within:border-primary focus-within:shadow-primary-shadow-outline"),
                ifNotEmpty(required, "hover:border-primary focus-within:border-primary focus-within:shadow-primary-shadow-outline"),
                ifEmpty(important || required, "hover:border-primary focus-within:border-primary focus-within:shadow-primary-shadow-outline")
            ]), "border-disabled")
        ]),
        [wrapperVariants.fill]: classJoin([
            "border-solid border rounded-xl bg-filled-bg focus-within:shadow-input",
            ifEmpty(disabled, classJoin([
                ifNotEmpty(error, "border-error error-fieldset", "border-transparent"),
                ifNotEmpty(important, "important-fieldset hover:border-idle-border focus-within:!border-warning focus-within:shadow-warning-shadow"),
                ifNotEmpty(required, "required-fieldset hover:border-idle-border focus-within:!border-necessary focus-within:shadow-necessary-shadow"),
                ifEmpty(important || required, "hover:border-idle-border focus-within:!border-primary focus-within:shadow-primary-shadow")
            ]), "border-transparent bg-opacity-40")
        ])
    };
    const legendClasses = {
        [wrapperVariants.line]: "mb-0",
        [wrapperVariants.none]: "mb-0",
        [wrapperVariants.fill]: classJoin([
            "fill-legend border border-solid rounded bg-filled-bg",
            ifNotEmpty(disabled, "!border-disabled"),
            ifEmpty(disabled, ifNotEmpty(error, "border-error", "border-idle-border"))
        ])
    };
    return (_jsxs("div", { ...otherProps, ref: ref, className: classJoin([ifEmpty(block, "inline-block", "w-full"), ifEmpty(showLabel, "pt-2.4"), className]), children: [_jsxs("fieldset", { disabled: disabled, className: classJoin([
                    "transition-sbt relative",
                    `${variant}-fieldset`,
                    wrapperSizes(isLine)[size],
                    fieldsetClasses[variant],
                    fieldsetClasses[fieldsetVariant],
                    fieldsetClassName
                ]), onClick: onFieldsetClick, children: [showLabel && (_jsx("legend", { className: classJoin([
                            "h-4.5 w-auto transition-sbt",
                            legendClasses[variant],
                            legendClasses[legendVariant],
                            ifEmpty(isLine, "mx-4 -mb-2.4"),
                            legendClassName
                        ]), children: _jsxs("label", { htmlFor: id, className: classJoin([
                                "flex items-center h-full",
                                ifEmpty(isLine, "px-2"),
                                variant === wrapperVariants.outline ? "pt-px" : ""
                            ]), children: [!empty(error) && _jsx(Error, { color: "error", size: "sm", weight: "bold", className: "ml-1" }), required && (_jsxs("span", { className: "inline-block relative w-[7px] h-[7px] ml-1", children: [_jsx("span", { className: "absolute w-full h-full rounded-full opacity-75 animate-ping-slow bg-necessary" }), _jsx("span", { className: "relative block w-full h-full rounded-full bg-necessary" })] })), important && _jsx(Important, { color: "warning", className: "ml-1 text-sm" }), _jsx(Typography, { tag: "span", color: ifEmpty(disabled, "primary-label", "disabled"), variant: "body3", className: classJoin(["inline-block max-h-full transition-sbt leading-4 truncate", labelClassName]), children: label })] }) })), !empty(endLabelAdornment) && _jsx(EndLabelAdornment, { component: endLabelAdornment }), _jsxs("div", { className: "flex h-full w-full", children: [_jsx("div", { children: !empty(startAdornment) && (_jsx(StartAdornment, { component: startAdornment, className: classJoin([sectionsYPadding[size], ifNotEmpty(isLine, "pr-0")]) })) }), _jsx("div", { className: "w-full overflow-hidden", children: !empty(children) &&
                                    modifyReactChildren(children, {
                                        className: classJoin([
                                            "w-full h-full pl-4",
                                            sectionsYPadding[size],
                                            ifEmpty(isLine && empty(startAdornment), "pr-4"),
                                            childrenClassName
                                        ])
                                    }) }), _jsxs("div", { className: classJoin(["flex relative"]), children: [verified && (_jsx(Check, { color: "success", className: classJoin([
                                            ifEmpty(isLine, "self-center ml-4", "absolute h-4 -left-7 bottom-0 top-0 m-auto")
                                        ]) })), clearable && !empty(onClear) && _jsx(ClearIcon, { onClick: onClear, disabled: disabled || !allowClear }), !empty(endAdornment) && (_jsx(EndAdornment, { noDivider: noEndDivider, component: endAdornment, className: classJoin([sectionsYPadding[size], ifNotEmpty(isLine, "pl-0"), endAdornmentClassName]) }))] })] }), isLine && variant !== wrapperVariants.none && (_jsx("div", { className: classJoin([
                            "underline-section",
                            "border-b border-solid rounded-none w-full h-0 transition-sbt",
                            "absolute bottom-0 left-0 right-0",
                            ifEmpty(disabled, ifNotEmpty(error, "border-error shadow-error", "border-idle-border"), "!border-disabled")
                        ]) }))] }), (preserveErrorBox || (!empty(error) && !isBoolean(error))) && (_jsx(Typography, { className: "text-error mt-2 leading-base min-h-[1rem]", variant: "body2", children: error })), help && (_jsxs("div", { className: classJoin(["flex mt-2", ifNotEmpty(isLine, "ml-6")]), children: [_jsx("div", { className: "pl-1", children: _jsx(Chevron, { weight: "fill", color: "primary-focus", size: ".8xs", className: "mt-1" }) }), _jsx(Typography, { color: "description", variant: "body3", children: help })] }))] }));
});
FormElementWrapper.defaultProps = {
    label: undefined,
    variant: "outline",
    size: "md",
    disabled: false,
    clearable: false,
    allowClear: true,
    important: false,
    required: false,
    verified: false,
    error: false,
    preserveErrorBox: false,
    block: true,
    legendClassName: "",
    fieldsetClassName: ""
};
export default FormElementWrapper;
//# sourceMappingURL=FormElementWrapper.js.map
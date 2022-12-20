import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Chevron } from "@sadeghi-ehsan/radin-icon";
import { components } from "react-select";
import { classJoin, ifNotEmpty } from "../../../utils";
import { Input } from "../Input";
import { Select } from "../Select";
import { Dropdown } from "../../Atoms/Dropdown";
import { Badge } from "../../Atoms/Badge";
const endAdornmentComponent = params => {
    const { disabled, readOnly, combinedValue, options, setCombinedValue, setIsDropDownVisible, isDropDownVisible } = params;
    return (_jsx(Dropdown, { trigger: ["click"], placement: "bottomCenter", visible: isDropDownVisible, onVisibleChange: v => {
            setIsDropDownVisible(v);
        }, disabled: disabled || readOnly, overlay: _jsx(Dropdown.Menu, { align: "right", children: options?.map(option => (_jsx(Dropdown.MenuItem, { active: combinedValue?.selectedOption === option.value, onClick: () => {
                    setCombinedValue(prev => ({
                        ...prev,
                        selectedOption: option.value
                    }));
                    setIsDropDownVisible(false);
                }, children: option.label }, option.value))) }), children: _jsx("div", { className: classJoin(["p-1 rounded-md bg-appearing", disabled || readOnly ? "" : "cursor-pointer "]), children: _jsx(Chevron, { flip: !isDropDownVisible ? "vertical" : null, rotate: "90", color: disabled || readOnly ? "disabled" : isDropDownVisible ? "white" : "idle", size: ".9xs" }) }) }));
};
const startAdornmentComponent = params => {
    const { disabled, readOnly, combinedValue, options } = params;
    return combinedValue?.selectedOption ? (_jsx(Badge, { color: disabled || readOnly ? "disabled" : "primary", children: options && options.find(option => option.value === combinedValue.selectedOption)?.label })) : null;
};
export const renderTypeInputContent = params => {
    const { name, disabled, readOnly, setCombinedValue, align, value, ...restProps } = params;
    return (_jsx(Input, { ...restProps, ...{
            name,
            disabled,
            readOnly
        }, startAdornment: startAdornmentComponent(params), endAdornment: endAdornmentComponent(params), onChange: v => {
            setCombinedValue(prev => ({
                ...prev,
                value: v
            }));
        }, align: align || ifNotEmpty(value, "left", "right"), value: value?.value }));
};
const Control = params => ({ children, ...props }) => (_jsxs(components.Control, { ...props, children: [_jsx("div", { className: "pl-4 ml-3 border-l border-idle-border", children: startAdornmentComponent(params) }), _jsx("div", { className: "flex-1 min-w-44 flex items-center justify-between", children: children }), _jsx("div", { className: "pr-4 mr-3 border-r border-idle-border", onMouseDown: e => e.stopPropagation(), children: endAdornmentComponent(params) })] }));
export const renderTypeSelectContent = params => {
    const { name, disabled, readOnly, setCombinedValue, value, selectOptions, setIsDropDownVisible, ...restProps } = params;
    return (_jsx(Select, { ...restProps, ...{
            name,
            disabled,
            readOnly
        }, customComponents: { Control: Control(params), DropdownIndicator: () => null }, onMenuOpen: () => {
            setIsDropDownVisible(false);
        }, value: value?.value, options: selectOptions, onChange: v => {
            setCombinedValue(prev => ({
                ...prev,
                value: v
            }));
        } }));
};
//# sourceMappingURL=utils.js.map
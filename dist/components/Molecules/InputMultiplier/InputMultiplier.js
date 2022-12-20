import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { classJoin, empty, filterObj, ifNotEmpty, isCallable } from "../../../utils";
import { Input } from "../Input";
const InputMultiplier = ({ value, align, options, onChange, name, firstOptionAsDefault, disabled, readOnly, ...restProps }) => {
    const [combinedValue, setCombinedValue] = useState({
        value: value?.value || "",
        selectedOption: value?.selectedOption || (firstOptionAsDefault && options?.length ? options?.[0]?.value : "") || ""
    });
    /**
     * onChange handler
     */
    useEffect(() => {
        if (!empty(onChange) &&
            isCallable(onChange) &&
            !empty(combinedValue) &&
            JSON.stringify(combinedValue) !== JSON.stringify(value)) {
            onChange(combinedValue, name);
        }
    }, [combinedValue]);
    const RenderCircleButtons = useCallback(() => (_jsx("div", { className: "z-10 flex flex-row-reverse ml-6 -mt-3.5", children: options?.length &&
            [...options]?.reverse()?.map(option => (_jsx("div", { className: classJoin([
                    "rounded-full cursor-pointer text-white items-center justify-center flex border-3 border-card-bg h-7 min-w-8 -ml-2 pl-1.2 pt-0.5 pr-2 z-10 last:pr-1.2",
                    combinedValue?.selectedOption === option.value
                        ? disabled
                            ? "bg-card-border text-idle"
                            : " bg-primary"
                        : " bg-primary-border",
                    disabled ? "bg-disabled text-idle pointer-events-none" : ""
                ]), onClick: () => {
                    setCombinedValue(prev => ({
                        ...prev,
                        selectedOption: option.value
                    }));
                }, children: option.label }, option.value))) })), [combinedValue, disabled]);
    return (_jsx(Input, { ...restProps, ...{
            name,
            disabled,
            readOnly
        }, onChange: v => {
            setCombinedValue(prev => ({
                ...prev,
                value: v
            }));
        }, endLabelAdornment: _jsx(RenderCircleButtons, {}), align: align || ifNotEmpty(value, "left", "right"), value: value?.value }));
};
InputMultiplier.defaultProps = {
    ...filterObj(Input.defaultProps, (v, k) => !["value"].includes(k)),
    firstOptionAsDefault: true
};
export default InputMultiplier;
//# sourceMappingURL=InputMultiplier.js.map
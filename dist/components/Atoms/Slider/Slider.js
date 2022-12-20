import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useEffect, useState } from "react";
import { Slider as AntSlider } from "antd";
import { Check, Error } from "@sadeghi-ehsan/radin-icon";
import { classJoin, empty, isArray, isNumber, isString } from "../../../utils";
import { Typography } from "../Typography";
export const Slider = forwardRef(({ color, marks, step, centerLabel, range, verified, className, onChange, labelClassName, disableMarks, ...otherProps }, ref) => {
    const { reverse, tipFormatter, defaultValue } = otherProps;
    const [sliderStep, setSliderStep] = useState(step);
    const [modifiedMarks, setModifiedMarks] = useState(null);
    const [selected, setSelected] = useState(defaultValue);
    const handleChange = e => {
        if (disableMarks)
            setSelected(e);
        if (onChange)
            onChange(e);
    };
    useEffect(() => {
        const marksObj = {};
        const sortedKeys = marks
            ? Object.keys(marks)
                .map(key => Number(key))
                .sort((aa, bb) => aa - bb)
            : typeof defaultValue !== "number"
                ? defaultValue
                : [];
        sortedKeys.forEach((point, key) => {
            const pointValue = (marks?.[point]
                ? marks?.[point]
                : typeof selected !== "number" && selected.includes(point)
                    ? tipFormatter
                        ? tipFormatter(point)
                        : point
                    : "");
            let specificStep;
            if (!isString(pointValue) && !isNumber(pointValue) && !isArray(pointValue)) {
                specificStep = typeof pointValue === "object" ? pointValue?.step : null;
                if (sliderStep && specificStep) {
                    setSliderStep(null);
                }
            }
            else {
                specificStep = step;
            }
            marksObj[point] = {
                label: (_jsxs("div", { children: [(typeof pointValue === "object" ? pointValue?.label : pointValue) && (_jsx("div", { className: "h-2 w-px border-r border-solid border-primary mt-1.5" })), (!empty(point) || point === 0) && (_jsx(Typography, { className: classJoin([
                                "whitespace-nowrap",
                                labelClassName,
                                centerLabel ? (reverse ? "-translate-x-2/4" : "translate-x-2/4") : ""
                            ]), color: "idle", children: typeof pointValue === "object" ? pointValue?.label : pointValue }))] }))
            };
            let currentPoint = point + specificStep;
            while (currentPoint < sortedKeys[key + 1]) {
                marksObj[currentPoint] = {
                    label: !disableMarks ||
                        currentPoint === selected ||
                        (typeof selected !== "number" && selected?.indexOf(currentPoint) > -1) ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "h-2 w-px border-r border-solid border-appearing mt-1.5" }), disableMarks && (_jsx(Typography, { className: classJoin([
                                    "whitespace-nowrap",
                                    labelClassName,
                                    centerLabel ? (reverse ? "-translate-x-2/4" : "translate-x-2/4") : ""
                                ]), color: "idle", children: tipFormatter ? tipFormatter(currentPoint) : currentPoint }))] })) : null
                };
                currentPoint += Number(specificStep);
            }
        });
        setModifiedMarks(marksObj);
    }, [marks, selected]);
    return (_jsxs("div", { className: "flex", children: [_jsx(AntSlider, { ...{
                    ...otherProps /** it's safe for put any here. because we check types in our component. ths is just passing parameter to ant. */,
                    ref,
                    className: classJoin(["sbt-slider", color, range ? "range" : "", className]),
                    step: step || null,
                    onChange: handleChange,
                    /* getTooltipPopupContainer should be here to be found by the slider handle */
                    getTooltipPopupContainer: el => el,
                    marks: modifiedMarks,
                    range
                } }), verified ? (_jsx(Check, { color: "success", size: "lg", className: "mr-8 -mt-1" })) : verified === false ? (_jsx(Error, { color: "error", size: "lg", className: "mr-8 -mt-1" })) : null] }));
});
Slider.defaultProps = {
    color: "primary",
    // marks: {},
    range: false,
    tooltipVisible: undefined,
    centerLabel: true,
    onChange: undefined
};
export default Slider;
//# sourceMappingURL=Slider.js.map
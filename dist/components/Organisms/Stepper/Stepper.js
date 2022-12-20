import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react/no-array-index-key */
import { useCallback } from "react";
import { Steps } from "antd";
import { RenderEditIcon, RenderMainIcon, RenderStepIcon } from "./utils";
import { classJoin, empty, isCallable } from "../../../utils";
const { Step } = Steps;
export const Stepper = ({ children, steps, currentStep, currentStepStatus, beforeStep, editMode, stepStyles, onClickStep, isIconsOutlined, showMidLine, stepProps, direction, isShowPreLine, isShowLastLine, midLineClassName, stepClassName, ...restProps }) => {
    const RenderIcon = useCallback((step, index) => {
        const { icon, status } = step;
        const isCurrentStep = currentStep === index;
        const isBeforeStep = beforeStep === index;
        const isRemainStep = index < currentStep;
        const isFinish = status === "finish" || (isCurrentStep && currentStepStatus === "finish");
        const isError = status === "error" || (isCurrentStep && currentStepStatus === "error");
        const midLineColorClassess = isError
            ? "bg-necessary"
            : isCurrentStep
                ? "bg-primary"
                : "bg-disabled bg-opacity-50";
        return (_jsxs("div", { className: classJoin([
                "flex items-center justify-between ",
                direction === "horizontal" ? (icon ? "flex-col" : " flex-col-reverse") : ""
            ]), children: [icon && (_jsx(RenderMainIcon, { icon: icon, isActive: isCurrentStep, isBeforeStep: isBeforeStep, isRemainIcon: isRemainStep || isCurrentStep, isIconOutlined: isIconsOutlined, isError: isError })), _jsx("div", { className: classJoin([
                        direction === "vertical" ? "w-3.25 md:w-4 h-px" : "h-3.25 md:h-4 w-px",
                        showMidLine ? midLineColorClassess : "bg-transparent",
                        midLineClassName
                    ]) }), editMode ? (_jsx(RenderEditIcon, { direction: direction })) : (_jsx(RenderStepIcon, { isCurrent: isCurrentStep, isError: isError, isFinish: index < currentStep || isFinish }))] }));
    }, [currentStep, beforeStep, editMode, isIconsOutlined, currentStepStatus, showMidLine, direction]);
    return (_jsx("div", { className: "w-full h-full stepper1", children: _jsxs(Steps
        // prefixCls="sbt-stepper"
        , { 
            // prefixCls="sbt-stepper"
            direction: direction, current: currentStep, labelPlacement: "vertical", responsive: false, status: currentStepStatus, ...restProps, children: [isShowPreLine && direction === "vertical" && _jsx(Step, { icon: _jsx("div", {}), status: "finish" }), steps?.map((step, index) => (_jsx(Step, { title: step.title, description: step.description, icon: RenderIcon(step, index), status: step.status, disabled: !editMode && step.disabled, style: { ...(step.style || stepStyles || {}), cursor: step.disabled ? "not-allowed" : "pointer" }, onClick: () => !step.disabled && !empty(onClickStep) && isCallable(onClickStep) && onClickStep(index), className: classJoin([
                        steps[index + 1] && steps[index + 1]?.status === "error" && "ant-steps-next-error",
                        step.icon ? "has-icon" : "",
                        stepClassName
                    ]), ...stepProps }, index))), isShowLastLine && direction === "vertical" && (_jsx(Step, { icon: _jsx("div", { className: classJoin([
                            "bg-primary rounded-full w-1.5 h-1.5 ml-1",
                            steps?.find(a => a.icon) ? "mt-2" : ""
                        ]) }), status: "finish" }))] }) }));
};
Stepper.defaultProps = {
    direction: "vertical"
};
export default Stepper;
//# sourceMappingURL=Stepper.js.map
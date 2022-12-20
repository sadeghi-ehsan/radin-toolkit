/* eslint-disable react/no-array-index-key */
import { FunctionComponent, useCallback } from "react";
import { Steps } from "antd";
import { IStepperProps } from "./types";
import { RenderEditIcon, RenderMainIcon, RenderStepIcon } from "./utils";
import { classJoin, empty, isCallable } from "../../../utils";

const { Step } = Steps;

export const Stepper: FunctionComponent<IStepperProps> = ({
  children,
  steps,
  currentStep,
  currentStepStatus,
  beforeStep,
  editMode,
  stepStyles,
  onClickStep,
  isIconsOutlined,
  showMidLine,
  stepProps,
  direction,
  isShowPreLine,
  isShowLastLine,
  midLineClassName,
  stepClassName,
  ...restProps
}) => {
  const RenderIcon = useCallback(
    (step: any, index: number) => {
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

      return (
        <div
          className={classJoin([
            "flex items-center justify-between ",
            direction === "horizontal" ? (icon ? "flex-col" : " flex-col-reverse") : ""
          ])}
        >
          {/* ------------------------------ Big main Icon ----------------------------- */}
          {icon && (
            <RenderMainIcon
              icon={icon}
              isActive={isCurrentStep}
              isBeforeStep={isBeforeStep}
              isRemainIcon={isRemainStep || isCurrentStep}
              isIconOutlined={isIconsOutlined}
              isError={isError}
            />
          )}
          <div
            className={classJoin([
              direction === "vertical" ? "w-3.25 md:w-4 h-px" : "h-3.25 md:h-4 w-px",
              showMidLine ? midLineColorClassess : "bg-transparent",
              midLineClassName
            ])}
          />
          {/* step circle icon */}
          {editMode ? (
            <RenderEditIcon direction={direction} />
          ) : (
            <RenderStepIcon isCurrent={isCurrentStep} isError={isError} isFinish={index < currentStep || isFinish} />
          )}
        </div>
      );
    },
    [currentStep, beforeStep, editMode, isIconsOutlined, currentStepStatus, showMidLine, direction]
  );

  return (
    <div className="w-full h-full stepper1">
      {/*  TODO fix and remove comment ts-ignore */}
      {/* @ts-ignore */}
      <Steps
        // prefixCls="sbt-stepper"
        direction={direction}
        current={currentStep}
        labelPlacement="vertical"
        responsive={false}
        status={currentStepStatus}
        {...restProps}
      >
        {isShowPreLine && direction === "vertical" && <Step icon={<div />} status="finish" />}
        {steps?.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            description={step.description}
            icon={RenderIcon(step, index)}
            status={step.status}
            disabled={!editMode && step.disabled}
            style={{ ...(step.style || stepStyles || {}), cursor: step.disabled ? "not-allowed" : "pointer" }}
            onClick={() => !step.disabled && !empty(onClickStep) && isCallable(onClickStep) && onClickStep(index)}
            className={classJoin([
              steps[index + 1] && steps[index + 1]?.status === "error" && "ant-steps-next-error", // ant do it automatically (when currentStepStatus) but not do when we set status inside `step` itself.
              step.icon ? "has-icon" : "",
              stepClassName
            ])}
            {...stepProps}
          />
        ))}
        {isShowLastLine && direction === "vertical" && (
          <Step
            icon={
              <div
                className={classJoin([
                  "bg-primary rounded-full w-1.5 h-1.5 ml-1",
                  steps?.find(a => a.icon) ? "mt-2" : ""
                ])}
              />
            }
            status="finish"
          />
        )}
      </Steps>
    </div>
  );
};

Stepper.defaultProps = {
  direction: "vertical"
};

export default Stepper;

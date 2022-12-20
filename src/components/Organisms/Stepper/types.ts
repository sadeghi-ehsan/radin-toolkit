import { StepProps, StepsProps } from "antd";
import { ReactNode } from "react";

export declare type IStepperStatusTypes = "finish" | "error" | "wait" | "process";
export declare type IStepperStepsTypes = Array<{
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  status?: IStepperStatusTypes;
  disabled?: boolean;
  style?: React.CSSProperties;
}>;

export interface IStepperProps extends Omit<StepsProps, "direction"> {
  /**
   * direction of the stepper
   */
  direction?: "horizontal" | "vertical";

  /**
   * The stepper steps
   * @default []
   * @example
   * ```js
   * [
   *    {
   *        title: 'First', // required
   *        description: 'First-content', // required
   *        status: 'finish', // optional
   *        icon: <Icon />, // optional
   *        disabled: false, // optional
   *        style: {border: '1px solid red'}, // optional
   *    }
   * ]
   * ```
   */
  steps: IStepperStepsTypes;

  /**
   * The stepper current step
   */
  currentStep?: number;

  /**
   * The stepper current step status
   * @default undefined
   */
  currentStepStatus?: IStepperStatusTypes;

  /**
   * pre-clicked step (have some different ui)
   */
  beforeStep?: number;

  /**
   * is edit mode or not.
   */
  editMode?: boolean;

  /**
   * step style.
   */
  stepStyles?: React.CSSProperties;

  /**
   * callback function when click step.
   */
  onClickStep?: (step: number) => void;

  /**
   * set is icon outline or not.
   */
  isIconsOutlined?: boolean;

  /**
   * is show middle line or not.
   */
  showMidLine?: boolean;

  /**
   * middle line className
   */
  midLineClassName?: string;

  /**
   * step props.
   * @default {}
   * @type {StepProps}
   */
  stepProps?: StepProps;

  /**
   * is show pre step vertical line or not.
   */
  isShowPreLine?: boolean;

  /**
   * is show last step vertical line or not.
   */
  isShowLastLine?: boolean;

  /**
   * children props passes by react
   */
  children?: ReactNode | undefined;

  /**
   * className for each step
   */
  stepClassName?: string;
}

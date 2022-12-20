import { IInputProps } from "../Input";
export interface IInputCodeVerifyProps extends Omit<IInputProps, "type" | "clearedValue" | "align" | "variant" | "clearable" | "allowClear" | "clearedValue" | "endLabelAdornment" | "fieldsetClassName" | "legendClassName"> {
    /** the value of the inputs */
    value?: string;
    /** number of inputs */
    inputsLength?: number;
    /** the value set to form elements when clear icon is clicked */
    clearedValue?: string;
    /**
     * callback when click on re-send code
     * @returns {number} return how many times user clicked on resend button
     */
    onResend?: (v: number) => void;
    /** counter in seconds to countdown (ex: 60 => 1 min) */
    counterSeconds?: number;
    /**
     * auto focus on first input when component mounted
     */
    autoFocusFirstField?: boolean;
    /**
     * is show loading indicator and disable input or not.
     */
    isLoading?: boolean;
    /**
     * resend button text
     * @default "ارسال مجدد"
     */
    resendBtnText?: string;
}

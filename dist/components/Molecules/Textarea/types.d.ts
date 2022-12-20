import { TextareaHTMLAttributes } from "react";
import { textareaResizeValues } from "./utils";
import { StandardProps } from "../../../types/common";
import { IFormElWrapperProps } from "../../Atoms/FormElementWrapper";
export declare type TextareaResizeValues = keyof typeof textareaResizeValues;
export interface ITextareaProps extends StandardProps, TextareaHTMLAttributes<HTMLTextAreaElement>, Omit<IFormElWrapperProps, "startAdornment" | "clearable" | "allowClear" | "onClear" | "verified" | "disabled" | "endLabelAdornment"> {
    /** The Textarea resize attribute. This is set to "none" by default */
    resize?: TextareaResizeValues;
    /**
     * prevent close the textarea when click outside textarea
     */
    keepOpen?: boolean;
}

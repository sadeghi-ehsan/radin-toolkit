import React from "react";
import { StandardProps } from "../../../types/common";
export interface IFilePickerProps extends StandardProps {
    /**
     * Icon to be displayed before the description
     */
    icon?: React.ReactNode;
    /**
     * Description will show on box
     */
    description?: string;
    /**
     * event when user select a image
     */
    onChange?: (value: any) => void;
    /**
     * disable the picker
     */
    disabled?: boolean;
    /**
     * can select more than one file
     */
    multiple?: boolean;
    /**
     * maxium number of files can be selected
     */
    maxCount?: number;
    /**
     * ope file dialog when click the picker
     */
    openFileDialogOnClick?: boolean;
    /**
     * File types that can be accepted.
     * more info: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
     * @default ['image/*']
     * @example ['image/*', 'video/*']
     * @example ['image/*', 'video/*', 'text/plain', 'text/html', 'text/markdown', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
     * @example ['.jpg', '.png', '.gif']
     */
    accept?: string;
    /**
     * show Error message + error icon below description
     */
    error?: string;
}

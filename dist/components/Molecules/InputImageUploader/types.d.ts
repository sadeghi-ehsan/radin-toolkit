/// <reference types="react" />
import { ModalProps } from "antd";
import { IFilePickerProps } from "../../Atoms/FilePicker";
import { IFormElWrapperProps } from "../../Atoms/FormElementWrapper";
import { IImageCropperProps } from "../../Atoms/ImageCropper";
export interface IInputImageUploaderProps extends Omit<IFormElWrapperProps, "onClear" | "onFieldsetClick" | "allowClear" | "clearable"> {
    /**
     * placeholder for show hardcoded text
     */
    placeholder?: string;
    /**
     * callback after image selected then cropped
     */
    onSelectImage?: (croppedImageBase64: string) => void;
    /**
     * callback when click on cancel button which beside progress bar
     */
    onCancelUpload?: () => void;
    /**
     * input uploaded image or pre-filled input
     */
    uploadedImageSrc?: string;
    /**
     * set percent of progress bar
     */
    progressPercent?: number;
    /**
     * callback when click on delete button
     */
    onDeleteImage?: () => void;
    /**
     * FilePicker props.
     * @type {IFilePickerProps}
     */
    filePickerProps?: IFilePickerProps;
    /**
     * filePicker Modal props.
     * @type {ModalProps}
     */
    filePickerModalProps?: ModalProps;
    /**
     * ImageCropper props.
     * @type {IImageCropperProps}
     */
    imageCropperProps?: IImageCropperProps;
    /**
     * ImageCropper Modal props.
     * @type {ModalProps}
     */
    imageCropperModalProps?: ModalProps;
    /**
     * preview Modal props.
     * @type {ModalProps}
     */
    previewModalProps?: ModalProps;
    /**
     * Render custom input component instead of form element wrapper.
     */
    renderInputComponent?: ({ pickImage, editImage }: {
        pickImage: () => void;
        editImage: (imgStr: string) => void;
    }) => React.ReactNode;
}

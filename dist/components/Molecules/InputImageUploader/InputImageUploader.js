import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { Close, Check, Trash, Edit, Replace, Plus } from "@sadeghi-ehsan/radin-icon";
import { FormElementWrapper } from "../../Atoms/FormElementWrapper";
import { classJoin, empty, extractFormElementProps, filterObj, isCallable } from "../../../utils";
import { Button } from "../../Atoms/Button";
import ImageCropperModal from "./ImageCropperModal";
import ImagePickerModal from "./ImagePickerModal";
import { ProgressBar } from "../../Atoms/ProgressBar";
import PreviewModal from "./PreviewModal";
import { Tooltip } from "../../Atoms/Tooltip";
export const InputImageUploader = ({ children, style, className, size, disabled, placeholder, onSelectImage, onCancelUpload, onDeleteImage, progressPercent: progressPercent_, uploadedImageSrc, verified, filePickerProps, filePickerModalProps, imageCropperProps, imageCropperModalProps, previewModalProps, renderInputComponent, ...restProps }) => {
    const progressPercent = empty(progressPercent_) || progressPercent_ === 0 ? null : progressPercent_;
    const [wrapperProps] = extractFormElementProps(restProps);
    const [showModals, setShowModals] = useState({
        showImageCropperModal: false,
        showImagePickerModal: false,
        showPreviewModal: false
    });
    const [imageSrc, setImageSrc] = useState([]);
    /**
     * after image cropper modal closed and hit ok button.
     * @param croppedImageBase64
     */
    function handleImageSelect(croppedImageBase64) {
        if (!empty(onSelectImage) && isCallable(onSelectImage) && !empty(croppedImageBase64)) {
            onSelectImage(croppedImageBase64);
        }
    }
    /**
     * when click on plus icon.
     */
    function pickImage() {
        setShowModals(prev => ({ ...prev, showImagePickerModal: true }));
    }
    /**
     * when click on change image button.
     */
    function previewAndChangeImage() {
        setShowModals(prev => ({ ...prev, showPreviewModal: true }));
    }
    /**
     * when click on edit icon.
     * @param imgStr
     */
    function editImage(imgStr) {
        setImageSrc(imgStr);
        setTimeout(() => {
            setShowModals(prev => ({ ...prev, showImageCropperModal: true }));
        }, 0);
    }
    /**
     * when click on trash icon.
     */
    function deleteImage() {
        if (!empty(onDeleteImage) && isCallable(onDeleteImage)) {
            onDeleteImage();
        }
    }
    /**
     * Render when image uploaded OR image already provided by initial value.
     */
    const RenderFilled = useCallback(() => (_jsxs("div", { className: "flex justify-between h-full", children: [_jsx("img", { src: uploadedImageSrc, alt: "cropped", className: classJoin([
                    "object-cover w-12 h-full ml-4 transition rounded select-none cursor-pointer",
                    disabled ? "opacity-70" : "group-hover:shadow-progress group-hover:shadow-primary"
                ]), draggable: false, onClick: !disabled && previewAndChangeImage }), _jsxs("div", { className: classJoin([
                    "flex justify-between items-center transition border rounded-lg opacity-0 cursor-pointer border-primary py-0.5 px-0.5 ",
                    disabled ? "hidden" : "group-hover:opacity-100 hover:shadow-input hover:shadow-primary"
                ]), children: [_jsx(Tooltip, { title: "\u0645\u0634\u0627\u0647\u062F\u0647 \u0648 \u062A\u063A\u06CC\u06CC\u0631 \u0639\u06A9\u0633", placement: "bottomRight", children: _jsx(Button, { variant: "text", className: "!p-0 !min-w-0 mx-2", children: _jsx(Replace, { onClick: previewAndChangeImage }) }) }), _jsx(Tooltip, { title: "\u0648\u06CC\u0631\u0627\u06CC\u0634", placement: "bottomRight", children: _jsx(Button, { variant: "text", className: "!p-0 !min-w-0 mx-2", onClick: () => editImage(uploadedImageSrc), children: _jsx(Edit, {}) }) }), !empty(onDeleteImage) && isCallable(onDeleteImage) && (_jsx(Tooltip, { title: "\u062D\u0630\u0641", placement: "bottomRight", children: _jsx(Button, { variant: "text", className: "!p-0 !min-w-0 mx-2", onClick: deleteImage, children: _jsx(Trash, {}) }) }))] }), verified && (_jsx(Check, { className: classJoin([
                    "absolute -mt-2 transition left-4 top-1/2 ",
                    disabled ? "text-success-hover" : "text-success group-hover:opacity-0"
                ]) }))] })), [uploadedImageSrc, progressPercent, disabled, verified]);
    /**
     * Render input component
     * @returns ReactNode
     */
    const renderInputElement = () => {
        if (renderInputComponent)
            return renderInputComponent({ pickImage, editImage });
        return (_jsx(FormElementWrapper, { ...wrapperProps, ...{
                size: size || "lg",
                disabled,
                style,
                className: classJoin(["group", className]),
                fieldsetClassName: "h-16"
            }, startAdornment: !(progressPercent || uploadedImageSrc) && (_jsx(Button, { size: "sm", className: "!min-w-0 !px-0.75 !h-6", onClick: () => !disabled && pickImage(), children: _jsx(Plus, { color: "white" }) })), childrenClassName: classJoin([
                "flex flex-col justify-center h-full",
                !disabled && !(progressPercent || uploadedImageSrc) && "cursor-pointer"
            ]), children: _jsxs("div", { onClick: () => !disabled && !(progressPercent || uploadedImageSrc) && pickImage(), children: [!(progressPercent || uploadedImageSrc) && (_jsx("span", { className: disabled ? "text-disabled" : "text-idle", children: placeholder })), progressPercent > 0 && (_jsxs("div", { className: "flex items-center", children: [_jsx(ProgressBar, { percent: progressPercent, size: "sm", direction: "rtl" }), !empty(onCancelUpload) && isCallable(onCancelUpload) && (_jsx(Button, { size: "sm", className: "!min-w-0 !p-0 !h-4.5 !w-6 !bg-appearing !text-card-bg !rounded-lg mr-4 text-center !border-none hover:opacity-75", onClick: onCancelUpload, children: _jsx(Close, { size: "1.5xs", className: "pl-px transition-sbt" }) }))] })), uploadedImageSrc && !progressPercent && _jsx(RenderFilled, {})] }) }));
    };
    return (_jsxs(_Fragment, { children: [renderInputElement(), _jsx(ImagePickerModal, { visible: showModals.showImagePickerModal, closeModal: () => setShowModals(prev => ({ ...prev, showImagePickerModal: false })), setImageSrc: setImageSrc, openCropperModal: () => setShowModals(prev => ({ ...prev, showImageCropperModal: true })), filePickerProps: filePickerProps, filePickerModalProps: filePickerModalProps }), _jsx(ImageCropperModal, { visible: showModals.showImageCropperModal, closeModal: () => setShowModals(prev => ({ ...prev, showImageCropperModal: false })), imageSrc: imageSrc, onModalOk: handleImageSelect, imageCropperProps: imageCropperProps, imageCropperModalProps: imageCropperModalProps }), _jsx(PreviewModal, { disabled: disabled, visible: showModals.showPreviewModal, uploadedImageSrc: uploadedImageSrc, closeModal: () => setShowModals(prev => ({ ...prev, showPreviewModal: false })), handleChangeImage: () => {
                    setShowModals(prev => ({ ...prev, showPreviewModal: false }));
                    pickImage();
                }, previewModalProps: previewModalProps })] }));
};
InputImageUploader.defaultProps = {
    ...filterObj(FormElementWrapper.defaultProps, (v, k) => !["allowClear", "clearable", "onFieldsetClick", "onClear"].includes(k)),
    onCancelUpload: null
};
export default InputImageUploader;
//# sourceMappingURL=InputImageUploader.js.map
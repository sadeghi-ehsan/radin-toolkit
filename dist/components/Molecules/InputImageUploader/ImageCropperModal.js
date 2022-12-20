import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { CloseRounded, Refresh, RotateRight } from "@sadeghi-ehsan/radin-icon";
import { Button } from "../../Atoms/Button";
import { Modal } from "../Modal";
import { ImageCropper } from "../../Atoms/ImageCropper";
export default function ImageCropperModal({ visible, closeModal, imageSrc, onModalOk, imageCropperProps, imageCropperModalProps }) {
    const cropperRef = useRef();
    const [rotateDeg, setRotateDeg] = useState(0);
    const [croppedImageBase64, setCroppedImageBase64] = useState(null);
    /**
     * handle rotate image
     * @param deg : number
     */
    function handleRotate(deg) {
        const deg_ = rotateDeg + deg;
        cropperRef.current.cropper.rotateTo(deg_);
        setTimeout(() => {
            setRotateDeg(deg_);
        }, 0);
    }
    /**
     * when click reset button, reset rotate degree to 0 and reset all crops and aspect ratio to default.
     */
    function handleResetAll() {
        setRotateDeg(0);
        cropperRef.current.cropper.reset();
        cropperRef.current.cropper.setAspectRatio(null);
    }
    /**
     * when click ok in modal footer
     */
    function handleOk() {
        onModalOk(croppedImageBase64);
        setTimeout(() => {
            closeModal();
        }, 0);
    }
    return (_jsx(Modal, { destroyOnClose: true, closeIcon: _jsx(CloseRounded, { onClick: closeModal, size: "2xl" }), visible: visible, contentWrapperClassName: "p-6", centered: true, title: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u062A\u0635\u0648\u06CC\u0631", footer: _jsx(Button, { className: "mr-auto", onClick: handleOk, children: "\u062A\u0627\u06CC\u06CC\u062F" }), maskClosable: false, ...imageCropperModalProps, children: _jsxs("div", { className: "flex h-72", children: [_jsxs("div", { className: "flex flex-col items-center justify-center w-4", children: [_jsx(Button, { size: "sm", variant: "text", className: "!min-w-2", onClick: () => handleRotate(+5), children: _jsx(RotateRight, {}) }), _jsx(Button, { size: "sm", variant: "text", className: "!min-w-2", onClick: () => handleRotate(-5), children: _jsx(RotateRight, { rotate: "180" }) }), _jsx(Button, { size: "sm", variant: "text", className: "!min-w-2", onClick: handleResetAll, children: _jsx(Refresh, { rotate: "180" }) })] }), _jsx(ImageCropper, { ref: cropperRef, imageSrc: imageSrc, onCropEnd: setCroppedImageBase64, minCanvasHeight: 180, minCanvasWidth: 280, className: "flex-1 mx-10", ...imageCropperProps }), _jsx("div", { className: "w-4" })] }) }));
}
//# sourceMappingURL=ImageCropperModal.js.map
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useRef } from "react";
import Cropper from "react-cropper";
import { debounce, empty, ifNotEmpty, isCallable } from "../../../utils";
export const ImageCropper = forwardRef(({ imageSrc, onCropEnd, onCropEndTimeout, centerIcon, ...restProps }, passedRef) => {
    const cropperRef = ifNotEmpty(passedRef, passedRef, useRef());
    const getBase64CroppedImage = debounce(() => {
        const cropper_ = cropperRef?.current?.cropper;
        if (!empty(onCropEnd) && isCallable(onCropEnd) && cropper_) {
            onCropEnd(cropper_.getCroppedCanvas().toDataURL());
        }
    }, onCropEndTimeout);
    return (_jsx(Cropper, { ref: cropperRef, src: imageSrc, crop: getBase64CroppedImage, ...{ center: centerIcon }, ...restProps }));
});
ImageCropper.defaultProps = {
    viewMode: 1,
    initialAspectRatio: null,
    aspectRatio: null,
    preview: null,
    guides: true,
    centerIcon: true,
    background: true,
    autoCrop: true,
    autoCropArea: 0.8,
    movable: true,
    rotatable: true,
    scalable: true,
    zoomable: true,
    zoomOnTouch: true,
    zoomOnWheel: true,
    wheelZoomRatio: 0.1,
    cropBoxMovable: true,
    cropBoxResizable: true,
    dragMode: "none",
    toggleDragModeOnDblclick: true,
    minContainerWidth: 200,
    minContainerHeight: 100,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    onCropEndTimeout: 200
};
export default ImageCropper;
//# sourceMappingURL=ImageCropper.js.map
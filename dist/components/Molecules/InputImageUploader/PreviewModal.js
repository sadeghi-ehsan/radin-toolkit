import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "../../Atoms/Button";
import { Modal } from "../Modal";
export default function PreviewModal({ visible, closeModal, handleChangeImage, uploadedImageSrc, previewModalProps, disabled }) {
    return (_jsx(Modal, { visible: visible, onCancel: closeModal, contentWrapperClassName: "p-6", centered: true, title: disabled ? "مشاهده عکس" : "مشاهده و تغییر عکس", footer: !disabled && (_jsx(Button, { className: "mr-auto", onClick: handleChangeImage, children: "\u062A\u063A\u06CC\u06CC\u0640\u0640\u0640\u0631 \u062A\u0640\u0640\u0635\u0648\u06CC\u0640\u0631" })), ...previewModalProps, children: _jsx("img", { src: uploadedImageSrc, alt: "cropped", className: "w-full h-full max-w-xs p-2 mx-auto border border-dashed select-none max-h-max border-card-border rounded-2xl", draggable: false }) }));
}
//# sourceMappingURL=PreviewModal.js.map
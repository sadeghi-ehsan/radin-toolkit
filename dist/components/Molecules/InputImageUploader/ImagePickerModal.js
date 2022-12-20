import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fileToBase64 } from "../../../utils";
import { Modal } from "../Modal";
import { FilePicker } from "../../Atoms/FilePicker";
export default function ImagePickerModal({ visible, closeModal, setImageSrc, openCropperModal, filePickerProps, filePickerModalProps }) {
    const [error, setError] = useState(null);
    useEffect(() => {
        setError(null);
    }, [visible]);
    return (_jsx(Modal, { visible: visible, onCancel: closeModal, closable: false, contentWrapperClassName: "!p-6", centered: true, ...filePickerModalProps, children: _jsx(FilePicker, { error: error, onChange: async (info) => {
                if (!info.file) {
                    setError("لطفا یک فایل را انتخاب کنید");
                    return;
                }
                if (!info.file.type?.includes("image")) {
                    setError("فرمت فایل انتخابی باید عکس باشد");
                    return;
                }
                if (info.file.status !== "uploading") {
                    setImageSrc(await fileToBase64(info.file));
                    closeModal();
                    setTimeout(() => {
                        openCropperModal();
                    }, 0);
                }
            }, ...filePickerProps }) }));
}
//# sourceMappingURL=ImagePickerModal.js.map
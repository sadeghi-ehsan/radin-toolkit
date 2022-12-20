import React, { useEffect, useState } from "react";
import { fileToBase64 } from "../../../utils";
import { Modal } from "../Modal";
import { FilePicker } from "../../Atoms/FilePicker";

export default function ImagePickerModal({
  visible,
  closeModal,
  setImageSrc,
  openCropperModal,
  filePickerProps,
  filePickerModalProps
}) {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [visible]);

  return (
    <Modal
      visible={visible}
      onCancel={closeModal}
      closable={false}
      contentWrapperClassName="!p-6"
      centered
      {...filePickerModalProps}
    >
      <FilePicker
        error={error}
        onChange={async info => {
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
        }}
        {...filePickerProps}
      />
    </Modal>
  );
}

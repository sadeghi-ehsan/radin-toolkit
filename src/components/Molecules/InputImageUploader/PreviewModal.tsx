import React from "react";
import { Button } from "../../Atoms/Button";
import { Modal } from "../Modal";

export default function PreviewModal({
  visible,
  closeModal,
  handleChangeImage,
  uploadedImageSrc,
  previewModalProps,
  disabled
}) {
  return (
    <Modal
      visible={visible}
      onCancel={closeModal}
      contentWrapperClassName="p-6"
      centered
      title={disabled ? "مشاهده عکس" : "مشاهده و تغییر عکس"}
      footer={
        !disabled && (
          <Button className="mr-auto" onClick={handleChangeImage}>
            تغییـــر تــصویـر
          </Button>
        )
      }
      {...previewModalProps}
    >
      <img
        src={uploadedImageSrc}
        alt="cropped"
        className="w-full h-full max-w-xs p-2 mx-auto border border-dashed select-none max-h-max border-card-border rounded-2xl"
        draggable={false}
      />
    </Modal>
  );
}

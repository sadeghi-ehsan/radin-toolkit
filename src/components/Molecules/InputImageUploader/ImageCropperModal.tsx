import React, { useRef, useState } from "react";
import { CloseRounded, Refresh, RotateRight } from "radin-icon";
import { Button } from "../../Atoms/Button";
import { Modal } from "../Modal";
import { ImageCropper } from "../../Atoms/ImageCropper";

export default function ImageCropperModal({
  visible,
  closeModal,
  imageSrc,
  onModalOk,
  imageCropperProps,
  imageCropperModalProps
}) {
  const cropperRef: any = useRef();
  const [rotateDeg, setRotateDeg]: any = useState(0);
  const [croppedImageBase64, setCroppedImageBase64]: any = useState(null);

  /**
   * handle rotate image
   * @param deg : number
   */
  function handleRotate(deg: number) {
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

  return (
    <Modal
      destroyOnClose
      closeIcon={<CloseRounded onClick={closeModal} size="2xl" />}
      visible={visible}
      contentWrapperClassName="p-6"
      centered
      title="ویرایش تصویر"
      footer={
        <Button className="mr-auto" onClick={handleOk}>
          تایید
        </Button>
      }
      maskClosable={false}
      // onCancel={closeModal}
      {...imageCropperModalProps}
    >
      <div className="flex h-72">
        <div className="flex flex-col items-center justify-center w-4">
          <Button size="sm" variant="text" className="!min-w-2" onClick={() => handleRotate(+5)}>
            <RotateRight />
          </Button>
          <Button size="sm" variant="text" className="!min-w-2" onClick={() => handleRotate(-5)}>
            <RotateRight rotate="180" />
          </Button>
          <Button size="sm" variant="text" className="!min-w-2" onClick={handleResetAll}>
            <Refresh rotate="180" />
          </Button>
        </div>
        <ImageCropper
          ref={cropperRef}
          imageSrc={imageSrc}
          onCropEnd={setCroppedImageBase64}
          minCanvasHeight={180}
          minCanvasWidth={280}
          className="flex-1 mx-10"
          {...imageCropperProps}
        />
        <div className="w-4" />
      </div>
    </Modal>
  );
}

import { FunctionComponent, useCallback, useState } from "react";
import { Close, Check, Trash, Edit, Replace, Plus } from "@sadeghi-ehsan/radin-icon";
import { FormElementWrapper, IFormElWrapperProps } from "../../Atoms/FormElementWrapper";
import { classJoin, empty, extractFormElementProps, filterObj, isCallable } from "../../../utils";
import { IInputImageUploaderProps } from "./types";
import { Button } from "../../Atoms/Button";
import ImageCropperModal from "./ImageCropperModal";
import ImagePickerModal from "./ImagePickerModal";
import { ProgressBar } from "../../Atoms/ProgressBar";
import PreviewModal from "./PreviewModal";
import { Tooltip } from "../../Atoms/Tooltip";

export const InputImageUploader: FunctionComponent<IInputImageUploaderProps> = ({
  children,
  style,
  className,
  size,
  disabled,
  placeholder,
  onSelectImage,
  onCancelUpload,
  onDeleteImage,
  progressPercent: progressPercent_,
  uploadedImageSrc,
  verified,
  filePickerProps,
  filePickerModalProps,
  imageCropperProps,
  imageCropperModalProps,
  previewModalProps,
  renderInputComponent,
  ...restProps
}) => {
  const progressPercent = empty(progressPercent_) || progressPercent_ === 0 ? null : progressPercent_;
  const [wrapperProps] = extractFormElementProps(restProps);

  const [showModals, setShowModals]: any = useState({
    showImageCropperModal: false,
    showImagePickerModal: false,
    showPreviewModal: false
  });
  const [imageSrc, setImageSrc]: any = useState([]);

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
  function editImage(imgStr: string) {
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
  const RenderFilled = useCallback(
    () => (
      <div className="flex justify-between h-full">
        <img
          src={uploadedImageSrc}
          alt="cropped"
          className={classJoin([
            "object-cover w-12 h-full ml-4 transition rounded select-none cursor-pointer",
            disabled ? "opacity-70" : "group-hover:shadow-progress group-hover:shadow-primary"
          ])}
          draggable={false}
          onClick={!disabled && previewAndChangeImage}
        />
        <div
          className={classJoin([
            "flex justify-between items-center transition border rounded-lg opacity-0 cursor-pointer border-primary py-0.5 px-0.5 ",
            disabled ? "hidden" : "group-hover:opacity-100 hover:shadow-input hover:shadow-primary"
          ])}
        >
          <Tooltip title="مشاهده و تغییر عکس" placement="bottomRight">
            <Button variant="text" className="!p-0 !min-w-0 mx-2">
              <Replace onClick={previewAndChangeImage} />
            </Button>
          </Tooltip>
          <Tooltip title="ویرایش" placement="bottomRight">
            <Button variant="text" className="!p-0 !min-w-0 mx-2" onClick={() => editImage(uploadedImageSrc)}>
              <Edit />
            </Button>
          </Tooltip>
          {!empty(onDeleteImage) && isCallable(onDeleteImage) && (
            <Tooltip title="حذف" placement="bottomRight">
              <Button variant="text" className="!p-0 !min-w-0 mx-2" onClick={deleteImage}>
                <Trash />
              </Button>
            </Tooltip>
          )}
        </div>
        {verified && (
          <Check
            className={classJoin([
              "absolute -mt-2 transition left-4 top-1/2 ",
              disabled ? "text-success-hover" : "text-success group-hover:opacity-0"
            ])}
          />
        )}
      </div>
    ),
    [uploadedImageSrc, progressPercent, disabled, verified]
  );

  /**
   * Render input component
   * @returns ReactNode
   */
  const renderInputElement = () => {
    if (renderInputComponent) return renderInputComponent({ pickImage, editImage });

    return (
      <FormElementWrapper
        {...wrapperProps}
        {...({
          size: size || "lg",
          disabled,
          style,
          className: classJoin(["group", className]),
          fieldsetClassName: "h-16"
        } as IFormElWrapperProps)}
        startAdornment={
          !(progressPercent || uploadedImageSrc) && (
            <Button size="sm" className="!min-w-0 !px-0.75 !h-6" onClick={() => !disabled && pickImage()}>
              <Plus color="white" />
            </Button>
          )
        }
        childrenClassName={classJoin([
          "flex flex-col justify-center h-full",
          !disabled && !(progressPercent || uploadedImageSrc) && "cursor-pointer"
        ])}
      >
        <div onClick={() => !disabled && !(progressPercent || uploadedImageSrc) && pickImage()}>
          {/* Placeholder if progressPercent AND uploadedImageSrc not provided */}
          {!(progressPercent || uploadedImageSrc) && (
            <span className={disabled ? "text-disabled" : "text-idle"}>{placeholder}</span>
          )}

          {/* progress bar */}
          {progressPercent > 0 && (
            <div className="flex items-center">
              <ProgressBar percent={progressPercent} size="sm" direction="rtl" />
              {!empty(onCancelUpload) && isCallable(onCancelUpload) && (
                <Button
                  size="sm"
                  className="!min-w-0 !p-0 !h-4.5 !w-6 !bg-appearing !text-card-bg !rounded-lg mr-4 text-center !border-none hover:opacity-75"
                  onClick={onCancelUpload}
                >
                  <Close size="1.5xs" className="pl-px transition-sbt" />
                </Button>
              )}
            </div>
          )}

          {/* if uploaded image exist and progressPercent isn't provided then render image and actions on hover */}
          {uploadedImageSrc && !progressPercent && <RenderFilled />}
        </div>
      </FormElementWrapper>
    );
  };

  return (
    <>
      {renderInputElement()}

      <ImagePickerModal
        visible={showModals.showImagePickerModal}
        closeModal={() => setShowModals(prev => ({ ...prev, showImagePickerModal: false }))}
        setImageSrc={setImageSrc}
        openCropperModal={() => setShowModals(prev => ({ ...prev, showImageCropperModal: true }))}
        filePickerProps={filePickerProps}
        filePickerModalProps={filePickerModalProps}
      />
      <ImageCropperModal
        visible={showModals.showImageCropperModal}
        closeModal={() => setShowModals(prev => ({ ...prev, showImageCropperModal: false }))}
        imageSrc={imageSrc}
        onModalOk={handleImageSelect}
        imageCropperProps={imageCropperProps}
        imageCropperModalProps={imageCropperModalProps}
      />
      <PreviewModal
        disabled={disabled}
        visible={showModals.showPreviewModal}
        uploadedImageSrc={uploadedImageSrc}
        closeModal={() => setShowModals(prev => ({ ...prev, showPreviewModal: false }))}
        handleChangeImage={() => {
          setShowModals(prev => ({ ...prev, showPreviewModal: false }));
          pickImage();
        }}
        previewModalProps={previewModalProps}
      />
    </>
  );
};

InputImageUploader.defaultProps = {
  ...filterObj(
    FormElementWrapper.defaultProps,
    (v, k) => !["allowClear", "clearable", "onFieldsetClick", "onClear"].includes(k)
  ),
  onCancelUpload: null
};

export default InputImageUploader;

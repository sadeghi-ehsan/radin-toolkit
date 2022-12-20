import { ReactCropperProps } from "react-cropper";

export interface IImageCropperProps extends Omit<ReactCropperProps, "center"> {
  /**
   * You can pass a blob url (using URL.createObjectURL() and URL.revokeObjectURL()) or base64 data or url from web.
   */
  imageSrc: any;

  /**
   * callback function to be called when the image is cropped
   * @return {string} base64CroppedImage
   */
  onCropEnd: (crop: any) => void;

  /**
   * how much wait to call onCropEnd callback function after the image is cropped (in ms).
   * @default 200
   * @type {number}
   */
  onCropEndTimeout?: number;

  /**
   * show/hide centerIcon
   */
  centerIcon?: boolean;
}

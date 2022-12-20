import React from "react";
import { IProgressBarProps } from "../../Atoms/ProgressBar/types";
import { StandardProps } from "../../../types/common";
import { bodyPaddings, imageStyles } from "./utils";

export type ICardImageSizes = keyof typeof imageStyles;
export type ICardBodyPaddings = keyof typeof bodyPaddings;

export interface ICardProps extends StandardProps {
  /**
   * The size of the image.
   */
  image?: React.ReactNode;

  /**
   * The size of the image.
   */
  imageSize?: ICardImageSizes;

  /**
   * The padding of the card.
   */
  size?: ICardBodyPaddings;

  /**
   * className of the body.
   */
  bodyClassName?: string;

  /**
   * className of the image.
   */
  imageClassName?: string;

  /**
   * toggle show/hide image shadow.
   */
  hideImageShadow?: boolean;

  /**
   * footer component
   * @default null
   */
  footer?: React.ReactNode | string;

  /**
   * Progress bar Options
   * @default null
   * @optional
   */
  progressBarProps?: IProgressBarProps;

  /**
   * action component for card (when hover on card it will show)
   */
  actionAdornment?: React.ReactNode;
}

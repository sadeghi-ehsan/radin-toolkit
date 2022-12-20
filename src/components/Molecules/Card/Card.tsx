import { FunctionComponent } from "react";
import { ProgressBar } from "../../Atoms/ProgressBar";
import { classJoin, empty, modifyReactChildren } from "../../../utils";
import { ICardProps } from "./types";
import { imageStyles, bodyPaddings } from "./utils";

export const Cards: FunctionComponent<ICardProps> = ({
  children,
  image,
  imageSize,
  style,
  size,
  className,
  bodyClassName,
  footer,
  progressBarProps,
  actionAdornment,
  imageClassName,
  hideImageShadow,
  ...restProps
}) => (
  <div
    {...restProps}
    style={style}
    className={classJoin([
      "group relative overflow-hidden bg-card-bg border border-card-border hover:border-primary-border focus-within:border-primary-border transition rounded-xxl",
      className
    ])}
  >
    {/* Image */}
    {!empty(image) && (
      <div className={classJoin(["relative pb-0", size === "zero" ? "" : "p-2"])}>
        {modifyReactChildren(image, {
          className: classJoin(["rounded-lg w-full object-cover relative z-10", imageClassName]),
          style: imageStyles[imageSize]
        })}

        {/* Blurred background shadow image */}
        {!hideImageShadow &&
          modifyReactChildren(image, {
            className: "rounded-lg object-cover blur opacity-20 absolute -bottom-2.5 right-0 left-0 w-full px-5",
            style: { height: "72px" }
          })}
      </div>
    )}

    <div className={classJoin([bodyPaddings[size], bodyClassName])}>
      {/* body */}
      {!empty(children) && children}

      {/* footer */}
      {!empty(footer) && <div className={classJoin(["border-t border-card-border pt-4 mt-4"])}>{footer}</div>}
    </div>

    {/* Progress bar */}
    {!empty(progressBarProps) && (
      <ProgressBar {...progressBarProps} className={classJoin(["absolute -bottom-2.4", progressBarProps?.className])} />
    )}

    {/* actionAdornment   */}
    {!empty(actionAdornment) && <div className="absolute top-px left-px">{actionAdornment}</div>}
  </div>
);

Cards.defaultProps = { imageSize: "md", size: "lg", hideImageShadow: false };

export default Cards;

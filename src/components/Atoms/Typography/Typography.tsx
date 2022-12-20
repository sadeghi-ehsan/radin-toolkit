import { createElement, FunctionComponent } from "react";
import { TailwindTextColors } from "../../../types/tailwind";
import { textColors } from "../../../constants/tailwind";
import { classJoin } from "../../../utils";
import { fontWeights, textVariants } from "./utils";
import { ITypographyFontWeightType, ITypographyProps, ITypographyTagType, ITypographyTextVariantType } from "./types";

const Typography: FunctionComponent<ITypographyProps> = ({
  children,
  tag,
  variant,
  className,
  color,
  weight,

  ...otherProps
}) =>
  createElement(
    tag as ITypographyTagType,
    {
      ...otherProps,
      className: classJoin([
        textVariants[variant as ITypographyTextVariantType],
        fontWeights[weight as ITypographyFontWeightType],
        textColors[color as TailwindTextColors],
        className
      ])
    },
    children
  );

Typography.defaultProps = {
  variant: "body1",
  color: "white",
  tag: "div",
  weight: "regular"
};

export default Typography;

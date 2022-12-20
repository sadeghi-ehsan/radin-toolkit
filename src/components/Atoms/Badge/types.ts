import { ForwardedRef, ReactNode } from "react";
import { StandardProps } from "../../../types/common";
import { badgeColors, badgeSizes, badgeTypes } from "./utils";

/** The Badge's size attribute. This is set to "xs" by default */
export type BadgeSizes = keyof typeof badgeSizes;

/** The Badge's color attribute. This is set to "primary" by default */
export type BadgeColors = keyof typeof badgeColors;

/** The Badge's type attribute. This is set to "tag" by default */
export type BadgeTypes = keyof typeof badgeTypes;

/** Default Badge component props interface. */
export interface BadgeDefaultProps extends Omit<StandardProps, "children"> {
  /* A indicator can have different colors */
  color?: BadgeColors;

  ref?: ForwardedRef<HTMLSpanElement>;
}

/** Badge component with type "badge" interface */
export interface BadgeTypeBadgeProps extends BadgeDefaultProps {
  /** children props passes by react determines content of badge */
  children: ReactNode;

  /** content of badge which badge stays top of it */
  content: ReactNode;

  /** Indicates different types of the badge */
  type?: "badge";
}

/** Badge component with type "tag" interface */
export interface TagTypeBadgeProps extends BadgeDefaultProps {
  /** children props passes by react */
  children: ReactNode;

  /** Indicates different types of the badge */
  type?: "tag";

  /** Indicates different sizes of the badge */
  size?: BadgeSizes;
}

/** Badge component with type "state" interface */
export interface StateTypeBadgeProps extends BadgeDefaultProps {
  /** Indicates different types of the badge */
  type?: "state";

  /** Indicates different sizes of the badge */
  size?: BadgeSizes;
}

/** Badge component interface */
export type IBadgeProps = BadgeTypeBadgeProps | TagTypeBadgeProps | StateTypeBadgeProps;

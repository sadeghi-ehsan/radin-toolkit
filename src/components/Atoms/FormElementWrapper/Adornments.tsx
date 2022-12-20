import { FC } from "react";
import { Close } from "@sadeghi-ehsan/radin-icon";
import { IAdornmentProps } from ".";
import { classJoin, ifEmpty } from "../../../utils";
import { Divider } from "../Divider";

export const StartAdornment: FC<IAdornmentProps> = ({ component, noDivider, className }) => (
  <div className={classJoin(["flex h-full pr-4", className])}>
    <div className="self-center">{component}</div>
    {!noDivider ? <Divider isVertical className="mr-4" /> : null}
  </div>
);
StartAdornment.defaultProps = { noDivider: false };

export const EndAdornment: FC<IAdornmentProps> = ({ component, noDivider, className }) => (
  <div className={classJoin(["flex h-full pl-4", className])}>
    {!noDivider && <Divider isVertical className="ml-4" />}
    <div className="self-center">{component}</div>
  </div>
);
EndAdornment.defaultProps = { noDivider: false };

export const EndLabelAdornment: FC<IAdornmentProps> = ({ component }) => (
  <div className="absolute top-0 left-0">{component}</div>
);
EndLabelAdornment.defaultProps = {};

export const ClearIcon: FC<IAdornmentProps> = ({ onClick, disabled }) => (
  <div
    className={classJoin([
      "clear-icon self-center ml-4 flex items-center justify-center rounded-[6px] bg-appearing w-[15px] h-[15px]",
      ifEmpty(disabled, "cursor-pointer", "clear-icon-disabled")
    ])}
    onClick={disabled ? undefined : onClick}
  >
    {/* <Icon as={SquircleBorderSvg} size="base" color="appearing" /> */}
    <Close size="1.5xs" className="text-card-bg transition-sbt" />
  </div>
);

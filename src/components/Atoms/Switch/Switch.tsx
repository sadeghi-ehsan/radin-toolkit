import { useRef, useState } from "react";
import { classJoin, isCallable, modifyReactChildren } from "../../../utils";
import { BgSliderType, ISwitch, OffsetType } from "./types";
import SwitchOption from "./SwitchOption";

export const Switch: ISwitch = ({
  name,
  vertical,
  disabled,
  onChange,
  innerClassName,
  outerClassName,
  children,
  value,
  labelClassName,
  ...otherProps
}) => {
  const parentRef = useRef<HTMLDivElement>();

  const [offset, setOffset] = useState<OffsetType>({
    width: 0,
    left: "50%",
    top: "50%",
    isDisabled: false
  });

  const bgSlider = ({ offsetWidth, offsetLeft, offsetHeight, offsetTop, isDisabled = false }: BgSliderType) => {
    setOffset({
      width: `${offsetWidth}px`,
      left: `${offsetLeft}px`,
      top: `${offsetTop}px`,
      height: `${offsetHeight}px`,
      isDisabled
    });
  };

  const onOptionChange = (v, labelRef) => {
    const { offsetWidth, offsetLeft, offsetHeight, offsetTop } = labelRef.current;

    bgSlider({ offsetWidth, offsetLeft, offsetHeight, offsetTop });

    if (isCallable(onChange)) onChange(v, name);
  };

  return (
    <div
      ref={parentRef}
      className={classJoin([
        "sbt-switch flex items-center relative p-1 bg-primary",
        disabled ? "bg-opacity-10" : "hover:bg-primary-hover",
        vertical ? "flex-col" : "h-10",
        outerClassName.includes("rounded") ? outerClassName : classJoin(["rounded-xxl", outerClassName])
      ])}
    >
      {modifyReactChildren(children, {
        ...otherProps,
        checked: value,
        name,
        vertical,
        onChange: onOptionChange,
        disabled,
        bgSlider,
        labelClassName: classJoin([!vertical ? "ml-1 pb-1.2" : "pb-0", labelClassName])
      })}

      <span
        className={classJoin([
          "bg-light-text w-3 inset-y-1 absolute transition-sbt",
          offset.isDisabled || disabled ? "bg-opacity-20" : "",
          innerClassName.includes("rounded") ? innerClassName : classJoin(["rounded-xl", innerClassName])
        ])}
        style={
          vertical
            ? {
                width: offset.width,
                top: offset.top,
                height: offset.height
              }
            : {
                width: offset.width,
                left: offset.left
              }
        }
      />
    </div>
  );
};

Switch.defaultProps = {
  disabled: false,
  innerClassName: "",
  outerClassName: "",
  value: null
};

Switch.Option = SwitchOption;

export default Switch;

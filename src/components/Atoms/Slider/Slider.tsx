import { forwardRef, useEffect, useState } from "react";
import { Slider as AntSlider } from "antd";
import { Check, Error } from "@sadeghi-ehsan/radin-icon";
import { classJoin, empty, isArray, isNumber, isString } from "../../../utils";
import { ISliderProps, ISliderMarksType } from "./types";
import { CompoundedComponent } from "../../../types/common";
import { Typography } from "../Typography";

export const Slider = forwardRef<HTMLElement, ISliderProps>(
  (
    {
      color,
      marks,
      step,
      centerLabel,
      range,
      verified,
      className,
      onChange,
      labelClassName,
      disableMarks,
      ...otherProps
    },
    ref
  ) => {
    const { reverse, tipFormatter, defaultValue } = otherProps;
    const [sliderStep, setSliderStep] = useState(step);
    const [modifiedMarks, setModifiedMarks] = useState(null);
    const [selected, setSelected] = useState(defaultValue);

    const handleChange = e => {
      if (disableMarks) setSelected(e);
      if (onChange) onChange(e);
    };

    useEffect(() => {
      const marksObj = {};
      const sortedKeys = marks
        ? Object.keys(marks)
            .map(key => Number(key))
            .sort((aa, bb) => aa - bb)
        : typeof defaultValue !== "number"
        ? defaultValue
        : [];

      sortedKeys.forEach((point, key) => {
        const pointValue = (
          marks?.[point]
            ? marks?.[point]
            : typeof selected !== "number" && selected.includes(point)
            ? tipFormatter
              ? tipFormatter(point)
              : point
            : ""
        ) as ISliderMarksType;
        let specificStep;
        if (!isString(pointValue) && !isNumber(pointValue) && !isArray(pointValue)) {
          specificStep = typeof pointValue === "object" ? pointValue?.step : null;
          if (sliderStep && specificStep) {
            setSliderStep(null);
          }
        } else {
          specificStep = step;
        }

        marksObj[point] = {
          label: (
            <div>
              {(typeof pointValue === "object" ? pointValue?.label : pointValue) && (
                <div className="h-2 w-px border-r border-solid border-primary mt-1.5" />
              )}
              {(!empty(point) || point === 0) && (
                <Typography
                  className={classJoin([
                    "whitespace-nowrap",
                    labelClassName,
                    centerLabel ? (reverse ? "-translate-x-2/4" : "translate-x-2/4") : ""
                  ])}
                  color="idle"
                >
                  {typeof pointValue === "object" ? pointValue?.label : pointValue}
                </Typography>
              )}
            </div>
          )
        };
        let currentPoint = point + specificStep;
        while (currentPoint < sortedKeys[key + 1]) {
          marksObj[currentPoint] = {
            label:
              !disableMarks ||
              currentPoint === selected ||
              (typeof selected !== "number" && selected?.indexOf(currentPoint) > -1) ? (
                <>
                  <div className="h-2 w-px border-r border-solid border-appearing mt-1.5" />
                  {disableMarks && (
                    <Typography
                      className={classJoin([
                        "whitespace-nowrap",
                        labelClassName,
                        centerLabel ? (reverse ? "-translate-x-2/4" : "translate-x-2/4") : ""
                      ])}
                      color="idle"
                    >
                      {tipFormatter ? tipFormatter(currentPoint) : currentPoint}
                    </Typography>
                  )}
                </>
              ) : null
          };
          currentPoint += Number(specificStep);
        }
      });
      setModifiedMarks(marksObj);
    }, [marks, selected]);

    return (
      <div className="flex">
        <AntSlider
          {...{
            ...(otherProps as any) /** it's safe for put any here. because we check types in our component. ths is just passing parameter to ant. */,
            ref,
            className: classJoin(["sbt-slider", color, range ? "range" : "", className]),
            step: step || null,
            onChange: handleChange,

            /* getTooltipPopupContainer should be here to be found by the slider handle */
            getTooltipPopupContainer: el => el,

            marks: modifiedMarks,
            range
          }}
        />
        {verified ? (
          <Check color="success" size="lg" className="mr-8 -mt-1" />
        ) : verified === false ? (
          <Error color="error" size="lg" className="mr-8 -mt-1" />
        ) : null}
      </div>
    );
  }
) as CompoundedComponent<ISliderProps>;

Slider.defaultProps = {
  color: "primary",
  // marks: {},
  range: false,
  tooltipVisible: undefined,
  centerLabel: true,
  onChange: undefined
};

export default Slider;

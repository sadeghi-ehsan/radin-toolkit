import { ProgressBar as SBTProgressBar, ProgressBarColors, ProgressBarDirections, ProgressBarSizes } from "../../src";
import { progressBarColors, progressBarSizes } from "../../src/components/Atoms/ProgressBar/utils";
import { useState } from "react";
import { classJoin, Button } from "../../src";

const Progress = ({ plus, shape, ...restProps }) => {
  let percent = 10;
  let percent2 = percent;

  return (
    <div className="mb-8">
      <span className="inline-block mt-3 mb-2 text-xl text-light-text">Colors:</span>
      <div className={shape === "circle" ? "flex" : ""}>
        {Object.keys(progressBarColors).map((color: ProgressBarColors, key) => (
          <div key={key} className={classJoin(["mb-4", shape === "circle" ? "ml-2" : ""])}>
            <SBTProgressBar
              {...restProps}
              shape={shape}
              size={shape === "circle" ? "sm" : "md"}
              color={color}
              percent={(percent += 10 + plus)}
            />
          </div>
        ))}
      </div>
      <span className="inline-block mt-4 mb-2 text-xl text-light-text">Sizes:</span>
      <div className={shape === "circle" ? "flex" : ""}>
        {Object.keys(progressBarSizes).map((size: ProgressBarSizes, key) => (
          <div key={key} className={classJoin(["mb-4", shape === "circle" ? "ml-2" : ""])}>
            <SBTProgressBar
              {...restProps}
              shape={shape}
              size={size}
              color="primary"
              percent={(percent2 += 10 + plus)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const step = 2;

  const [plus, setPlus] = useState(0);
  const [direction, setDirection] = useState<ProgressBarDirections>("ltr");

  return (
    <>
      <div className="flex">
        <Button onClick={() => setPlus(plus + step)}>افزایش {step}%</Button>
        <Button onClick={() => setPlus(plus - step)} theme="terminate">
          کاهش {step}%
        </Button>

        <Button onClick={() => setDirection(direction === "ltr" ? "rtl" : "ltr")}>
          جهت ({direction.toUpperCase()})
        </Button>
      </div>
      <Progress plus={plus} shape="line" direction={direction} />
      <Progress plus={plus} shape="circle" direction={direction} />
    </>
  );
};

export default ProgressBar;

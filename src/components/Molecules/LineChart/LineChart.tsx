import { forwardRef, FunctionComponent, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import HighChartBoostModule from "highcharts/modules/boost";
import merge from "lodash.merge";
import { ILineChartProps } from "./types";
import { classJoin, debounce, empty, ifNotEmpty } from "../../../utils";
import { renderInitialOptions, useReflowChart } from "./utils";
import { Slider } from "../../Atoms/Slider";

export const LineChart = forwardRef<HTMLElement, ILineChartProps>(
  (
    {
      className,
      series,
      options,
      customChartLib,
      customToolTip,
      chartTitle,
      showSlider,
      sliderClassName,
      sliderProps,
      ...restProps
    },
    passedRef
  ) => {
    const chartRef = ifNotEmpty(passedRef, passedRef, useRef<HighchartsReact.RefObject>(null));

    useReflowChart(chartRef);
    // HighChartBoostModule(Highcharts);

    const handleRange = debounce(([min, max]) => {
      const chart = chartRef.current?.chart;
      chart.xAxis.forEach(axis => {
        axis.setExtremes(min, max);
      });
    }, 250);

    return (
      <div {...restProps} className={classJoin(["sbt-lineChart w-full mx-auto", className])}>
        <HighchartsReact
          highcharts={!empty(customChartLib) ? customChartLib(Highcharts) : Highcharts}
          options={merge(renderInitialOptions({ chartTitle, customToolTip, series }), options)}
          ref={chartRef}
        />
        {showSlider && (
          <Slider
            className="ml-4"
            range
            reverse
            onChange={val => {
              handleRange(val);
            }}
            {...sliderProps}
          />
        )}
      </div>
    );
  }
) as FunctionComponent<ILineChartProps>;

LineChart.defaultProps = { showSlider: false };

export default LineChart;

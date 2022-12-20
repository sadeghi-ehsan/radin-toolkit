import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import HighChartBoostModule from "highcharts/modules/boost";
import merge from "lodash.merge";
import { classJoin, debounce, empty, ifNotEmpty } from "../../../utils";
import { renderInitialOptions, useReflowChart } from "./utils";
import { Slider } from "../../Atoms/Slider";
export const LineChart = forwardRef(({ className, series, options, customChartLib, customToolTip, chartTitle, showSlider, sliderClassName, sliderProps, ...restProps }, passedRef) => {
    const chartRef = ifNotEmpty(passedRef, passedRef, useRef(null));
    useReflowChart(chartRef);
    // HighChartBoostModule(Highcharts);
    const handleRange = debounce(([min, max]) => {
        const chart = chartRef.current?.chart;
        chart.xAxis.forEach(axis => {
            axis.setExtremes(min, max);
        });
    }, 250);
    return (_jsxs("div", { ...restProps, className: classJoin(["sbt-lineChart w-full mx-auto", className]), children: [_jsx(HighchartsReact, { highcharts: !empty(customChartLib) ? customChartLib(Highcharts) : Highcharts, options: merge(renderInitialOptions({ chartTitle, customToolTip, series }), options), ref: chartRef }), showSlider && (_jsx(Slider, { className: "ml-4", range: true, reverse: true, onChange: val => {
                    handleRange(val);
                }, ...sliderProps }))] }));
});
LineChart.defaultProps = { showSlider: false };
export default LineChart;
//# sourceMappingURL=LineChart.js.map
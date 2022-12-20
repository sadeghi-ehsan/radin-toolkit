import { LineChart as SBTLineChart, ISliderColors } from "../../src";
import Highcharts, { SeriesOptionsType } from "highcharts";
import { Slider } from "antd";

const chartData = [5, 7, 1, 11, 5, 4, 11, 3, 1, 13, 4, 9, 11, 14, 3, 1, 5];
const chartData2 = [9, 3, 10, 13, 7, 9, 15, 5, 3, 10, 12, 15, 15, 8, 5, 10, 15];
const series: Array<SeriesOptionsType> = [
  {
    name: "كل بازار بورس",
    type: "area",
    data: chartData,
    color: "#0A84FF",
    marker: {
      symbol: "circle"
    }
  },
  {
    name: "شاخص نمونه کاربر",
    type: "line",
    data: chartData2,
    color: "#BA38E1",
    marker: {
      symbol: "cross",
      lineColor: null,
      lineWidth: 2
    }
  }
];

const options: Highcharts.Options = {
  title: {
    text: "نمودار شب"
  }
};

const renderTime = value => {
  const dt = new Date(1645434000000 + 300000 * Number(value));
  const hr = dt.getUTCHours();
  const m = `0${dt.getUTCMinutes()}`;
  return `${hr}:${m.substr(-2)}`;
};

const sliderProps = {
  color: "primary" as ISliderColors,
  step: 86400000,
  min: 1616787000000,
  max: 1660332600000,
  defaultValue: [1616787000000, 1660332600000] as [number, number],
  disableMarks: true,
  centerLabel: true,
  labelClassName: "bg-card-bg z-10 px-4",
  tipFormatter: val => new Date(val * 1000).toISOString()
};

const renderTooltip = point => `
<div class="sbt-linechart-tooltip">
  <div style="border-right: 1px solid ${point.color}; padding: 2px 4px">
    <div class="value">${point.y}1,313,546.32</div>
    <div class="date">
      <div>1400/04/16</div>
      <div>${renderTime(point.x)}</div>
    </div>
    <div class="changes">
      <div>-0.157</div>
      <div>(%)تغییر</div>
    </div>
  </div>
</div>
`;

const LineChart = () => (
  <div className="container mx-auto">
    <SBTLineChart
      sliderProps={sliderProps}
      showSlider
      customToolTip={renderTooltip}
      series={series}
      options={options}
    />
  </div>
);

export default LineChart;

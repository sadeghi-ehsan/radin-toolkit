// LineChart.stories.ts|tsx
import { useRef } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import HighChartBoostModule from "highcharts/modules/boost";
import HighChartExportingModule from "highcharts/modules/exporting";
import { ILineChartProps, LineChart } from "./index";
import Highcharts, { SeriesOptionsType } from "highcharts";
import { ISliderColors } from "../../Atoms/Slider";
import { commaSeparator } from "../../../utils";
import { Button } from "../../Atoms/Button";

const options: Highcharts.Options = {
  title: {
    text: "نمودار شب"
  }
};

const withOutLegendOptions: Highcharts.Options = {
  legend: { enabled: false },
  tooltip: { enabled: false },
  chart: { height: 300 },
  title: { text: "نمودار نمونه" }
};

const renderTime = value => {
  const dt = new Date(1645434000000 + 300000 * Number(value));
  const hr = dt.getUTCHours();
  const m = `0${dt.getUTCMinutes()}`;
  return `${hr}:${m.substr(-2)}`;
};

const renderTooltip = point => `
  <div>
    <div class="text-sm text-primary-label text-right">${commaSeparator(point.y)}</div>
    <div class="flex px-0 py-1 justify-between text-xs">
      <div class="pr-1">1400/04/16</div>
      <div>${renderTime(point.x)}</div>
    </div>
    <div class="flex justify-between text-idle pb-0 first:text-prompt first:bg-success first-of-type:bg-error">
      <div>-0.157</div>
      <div>(%)تغییر</div>
    </div>
  </div>
`;

const sliderProps = {
  color: "primary" as ISliderColors,
  step: 10,
  marks: {
    0: "1396",
    20: "1397",
    40: "1398",
    60: "1399",
    80: "1400",
    100: "1401"
  },
  defaultValue: [10, 50] as [number, number]
};

const chartData = [
  6000, 7000, 1000, 11000, 7000, 4000, 11000, 3000, 1000, 13000, 4000, 9000, 11000, 14000, 3000, 1000, 5000
];
const chartData2 = [
  9000, 3000, 10000, 13000, 7000, 9000, 15000, 5000, 3000, 10000, 12000, 15000, 15000, 8000, 5000, 10000, 15000
];
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

const oneSeries: Array<SeriesOptionsType> = [
  {
    name: "كل بازار بورس",
    type: "area",
    data: chartData,
    color: "#0A84FF",
    marker: {
      symbol: "circle"
    }
  }
];

export default {
  title: "components/Molecules/LineChart",
  component: LineChart
} as ComponentMeta<typeof LineChart>;

const Template: ComponentStory<typeof LineChart> = args => {
  return (
    <div className="container w-screen">
      <LineChart {...args}>+ 200</LineChart>
    </div>
  );
};

const ExportTemplate: ComponentStory<typeof LineChart> = args => {
  const ref = useRef<any>();

  return (
    <div className="container w-screen">
      <Button
        onClick={() => {
          if (ref.current) ref.current?.chart?.exportChart({ type: "image/jpeg" });
        }}
      >
        export image
      </Button>
      <LineChart {...args} ref={ref}>
        + 200
      </LineChart>
    </div>
  );
};

export const OneSeries = Template.bind({});
OneSeries.args = {
  ...LineChart.defaultProps,
  series: oneSeries,
  options,
  customToolTip: renderTooltip
} as ILineChartProps;

export const Default = Template.bind({});
Default.args = {
  ...LineChart.defaultProps,
  series,
  options,
  customToolTip: renderTooltip
} as ILineChartProps;

export const showSlider = Template.bind({});
showSlider.args = {
  ...LineChart.defaultProps,
  series,
  showSlider,
  options,
  sliderProps,
  customToolTip: renderTooltip
} as ILineChartProps;

export const withOutLegend = Template.bind({});
withOutLegend.args = {
  ...LineChart.defaultProps,
  series,
  showSlider,
  options: withOutLegendOptions,
  sliderProps,
  customToolTip: renderTooltip
} as ILineChartProps;

export const boostMode = Template.bind({});
boostMode.args = {
  ...LineChart.defaultProps,
  customChartLib: highchart => {
    HighChartBoostModule(highchart);
    return highchart;
  },
  series,
  options: {
    boost: {
      useGPUTranslations: true,
      // Chart-level boost when there are more than 5 series in the chart
      seriesThreshold: 0
    }
  },
  customToolTip: renderTooltip
} as ILineChartProps;

export const Exporting = ExportTemplate.bind({});
Exporting.args = {
  ...LineChart.defaultProps,
  customChartLib: highchart => {
    HighChartExportingModule(highchart);
    return highchart;
  },
  series,
  customToolTip: renderTooltip
} as ILineChartProps;

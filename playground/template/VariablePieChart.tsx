import Highcharts, { Point, SeriesOptionsType } from "highcharts";
import { VariablePieChart as SBTVariablePieChart } from "../../src";
import { colors } from "../../src/constants/tailwind";

const data = [
  {
    y: 33,
    z: 8,
    color: colors.primary
  },
  {
    y: 24,
    z: 7,
    color: colors["primary-hover"]
  },
  {
    y: 15,
    z: 5,
    color: colors["primary-focus"]
  },
  {
    y: 18,
    z: 7,
    color: colors["primary-border"]
  },
  {
    y: 10,
    z: 3,
    color: colors["light-text"]
  }
];

const LineChart = () => (
  <div className="mx-auto">
    <SBTVariablePieChart condition="Descending" data={data} />
  </div>
);

export default LineChart;

import Highcharts, { Point, SeriesOptionsType } from "highcharts";
import { DonutChart as SBTDonutChart } from "../../src";

const data = [
  {
    name: "مرابحه",
    color: "#0A84FF",
    y: 38.04
  },
  {
    name: "مکاشفه",
    color: "#0c4175",
    y: 30.2
  },
  {
    name: "مکالمه",
    color: "#030c73",
    y: 20.66
  },
  {
    name: "مخاطره",
    color: "#989898",
    y: 11.1
  }
];

const centerText = `<span>B</span>1,315`;

const LineChart = () => (
  <div className="mx-auto">
    <SBTDonutChart condition="Descending" centerText={centerText} data={data} />
  </div>
);

export default LineChart;

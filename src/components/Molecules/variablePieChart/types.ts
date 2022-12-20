import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { StandardProps } from "../../../types/common";

interface Point {
  color?: string;
  y?: number;
  z?: number;
}

export interface IVariablePieChartProps extends StandardProps, HighchartsReact.Props {
  /** data of variablePieChart percentages  */
  data: Array<Point>;
  /** indicate Highcharts options  */
  options?: Highcharts.Options;
  /** indicate default text that show in center of chart  */
  initialCenterText?: string;
}

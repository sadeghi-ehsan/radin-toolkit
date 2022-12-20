import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { StandardProps } from "../../../types/common";
export declare const donutChartConditions: {
    Ascending: string;
    Descending: string;
};
declare type IDonutChartCondition = keyof typeof donutChartConditions;
interface Point {
    name: string;
    color: string;
    y: number;
}
export interface IDonutChartProps extends StandardProps, HighchartsReact.Props {
    /** data of donutChart percentages  */
    data: Array<Point>;
    /** indicate Highcharts options  */
    options?: Highcharts.Options;
    /** text that show in center of donut before hover.it must be HTML */
    centerText?: string;
    /** indicate chart is Ascending or Descending to render icon */
    condition?: IDonutChartCondition;
}
export {};

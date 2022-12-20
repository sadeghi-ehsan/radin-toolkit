import Highcharts, { SeriesOptionsType, Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { StandardProps } from "../../../types/common";
import { RangeProps } from "../../Atoms/Slider";

export type THighChartOptions = Options;
export type THighChartSeries = SeriesOptionsType;

export interface ILineChartProps extends StandardProps, HighchartsReact.Props {
  /** Series options for specific data and the data itself.   */
  series: Array<THighChartSeries>;

  /** indicate Highcharts options  */
  options?: THighChartOptions;

  /** want custom tooltip for your chart? give your html here */
  customToolTip?: (point: object) => string;

  /** indicate title of your chart */
  chartTitle?: string;

  /** need slider for your chart? here it is */
  showSlider?: boolean;

  /** to customize style of slider give your className here */
  sliderClassName?: string;

  /** all props to config slider correctly */
  sliderProps?: RangeProps;

  /**
   * it is used to apply custom modules to your chart library
   * @example
   *

   *
   * ```js
   *   import HighChartBoostModule from "highcharts/modules/boost";
   *   import HighChartExportingModule from "highcharts/modules/exporting";
   * 
   *   <LineChart
   *    customChartLib={(highchart) => {
   *      HighChartBoostModule(highchart);
   *      HighChartExportingModule(highchart);
   *
   *      return highchart;
   *    }}
   *  />
   *  ```
   */
  customChartLib?: (arg: typeof Highcharts) => typeof Highcharts;
}

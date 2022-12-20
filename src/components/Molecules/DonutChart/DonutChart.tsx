import { FunctionComponent, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import merge from "lodash.merge";
import { IDonutChartProps } from "./types";
import { classJoin } from "../../../utils";
import { colors } from "../../../constants/tailwind";
import { charTitle } from "./utils";

export const DonutChart: FunctionComponent<IDonutChartProps> = ({
  className,
  data,
  options,
  centerText,
  condition,
  ...restProps
}) => {
  const [hoveredItem, setHoveredItem] = useState<{ value: number; name: string; color: string }>(null);
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  const loadingRef = useRef<number>(0);
  const renderInitialOptions = () => ({
    chart: {
      backgroundColor: "transparent",
      type: "pie",
      marginTop: 0,
      spacingTop: 0,
      height: 180,
      animation: {
        duration: 400
      }
    },
    title: {
      text: charTitle(hoveredItem, centerText, condition),
      useHTML: true,
      y: 39
    },
    legend: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        borderWidth: 3,
        borderColor: colors["card-bg"],
        allowPointSelect: true,
        slicedOffset: 1,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [
      {
        name: "",
        colorByPoint: true,
        innerSize: "81%",
        states: {
          select: {
            borderColor: hoveredItem?.color
          }
        },
        point: {
          events: {
            mouseOver() {
              const item = this;
              if (loadingRef.current > 2) {
                chartRef?.current?.chart?.series[0]?.points?.[item?.x]?.select(true);
                setHoveredItem({ value: item.y, name: item.name, color: item?.color });
              } else {
                loadingRef.current += 1;
              }
            },
            mouseOut() {
              const item = this;
              chartRef?.current?.chart?.series[0]?.points?.[item?.x]?.select(false);
              setHoveredItem(null);
            }
          }
        },
        events: {
          mouseOut() {
            const { chart } = this;
            if (chart.lbl) {
              chart.lbl.hide();
            }
          }
        },
        data
      }
    ]
  });

  return (
    <div className={classJoin(["sbt-DonutChart mx-auto", className])}>
      <HighchartsReact
        {...restProps}
        highcharts={Highcharts}
        options={merge(renderInitialOptions(), options)}
        ref={chartRef}
      />
    </div>
  );
};

export default DonutChart;

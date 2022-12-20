import { FunctionComponent, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import variablePie from "highcharts/modules/variable-pie.js";
import merge from "lodash.merge";
import { IVariablePieChartProps } from "./types";
import { classJoin } from "../../../utils";
import { colors } from "../../../constants/tailwind";
import { charTitle } from "./utils";

export const VariablePieChart: FunctionComponent<IVariablePieChartProps> = ({
  className,
  data,
  options,
  initialCenterText,
  ...restProps
}) => {
  variablePie(Highcharts);
  const [hoveredItem, setHoveredItem] = useState<{ value: number; name: string; color: string }>(null);
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  const loadingRef = useRef<number>(0);

  const renderInitialOptions = () => ({
    chart: {
      backgroundColor: "transparent",
      type: "variablepie",
      marginTop: 0,
      spacingTop: 0,
      height: 250
    },
    title: {
      text: charTitle(initialCenterText, hoveredItem, data),
      useHTML: true,
      y: 114
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
      variablepie: {
        borderWidth: 4,
        borderColor: colors["card-bg"],
        allowPointSelect: true,
        slicedOffset: 3,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [
      {
        minPointSize: 30,
        // zMin: 5,
        // zMax: 10,
        name: "",
        colorByPoint: true,
        innerSize: "20%",
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
                loadingRef.current++;
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
    <div className={classJoin(["sbt-variablePieChart mx-auto", className])}>
      <HighchartsReact
        {...restProps}
        highcharts={Highcharts}
        options={merge(renderInitialOptions(), options)}
        ref={chartRef}
      />
    </div>
  );
};

VariablePieChart.defaultProps = {
  initialCenterText: ""
};

export default VariablePieChart;

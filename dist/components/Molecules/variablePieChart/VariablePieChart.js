import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import variablePie from "highcharts/modules/variable-pie.js";
import merge from "lodash.merge";
import { classJoin } from "../../../utils";
import { colors } from "../../../constants/tailwind";
import { charTitle } from "./utils";
export const VariablePieChart = ({ className, data, options, initialCenterText, ...restProps }) => {
    variablePie(Highcharts);
    const [hoveredItem, setHoveredItem] = useState(null);
    const chartRef = useRef(null);
    const loadingRef = useRef(0);
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
                            }
                            else {
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
    return (_jsx("div", { className: classJoin(["sbt-variablePieChart mx-auto", className]), children: _jsx(HighchartsReact, { ...restProps, highcharts: Highcharts, options: merge(renderInitialOptions(), options), ref: chartRef }) }));
};
VariablePieChart.defaultProps = {
    initialCenterText: ""
};
export default VariablePieChart;
//# sourceMappingURL=VariablePieChart.js.map
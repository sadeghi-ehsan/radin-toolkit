import { useEffect } from "react";
import { colors } from "../../../constants/tailwind";
import { convertIntToCurrency } from "../../../utils";
export const renderTooltip = (point, customToolTip = undefined) => `
  <div class="sbt-linechart-tooltip">
    <div style="border-right: 1px solid ${point.color}; padding: 2px 4px">
    ${customToolTip
    ? customToolTip(point)
    : `
        <div>
          <div>${point.y}</div>
          <div>${point.x}</div>
        </div>
    `}
    </div>
  </div>
`;
export const useReflowChart = (chartRef) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            const chart = chartRef.current?.chart;
            chart.reflow();
        }, 5);
        return () => {
            clearTimeout(timer);
        };
    }, []);
};
export const renderInitialOptions = ({ chartTitle, customToolTip, series }) => ({
    chart: {
        backgroundColor: "transparent"
        // marginTop: 80,
        // spacingTop: 0
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false,
        chartOptions: {
            navigator: {
                enabled: false
            },
            scrollbar: {
                enabled: false
            },
            chart: {
                backgroundColor: "#181D36" // default color, you can change it to any color you want from outside.
            }
        }
    },
    title: {
        style: {
            color: colors["light-text"],
            fontSize: "11px",
            fontFamily: "yekan-bakh"
        },
        text: chartTitle,
        align: "left",
        x: 80
    },
    legend: {
        itemStyle: {
            color: colors["light-text"]
        },
        align: "right",
        verticalAlign: "top",
        x: 0
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        },
        area: {
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, "rgba(10,132,255,0.24)"],
                    [1, "rgba(244,244,244,0)"]
                ]
            },
            lineWidth: 1,
            marker: {
                enabled: false
            },
            shadow: false,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null
        }
    },
    tooltip: {
        backgroundColor: null,
        borderWidth: 0,
        shadow: false,
        useHTML: true,
        formatter() {
            return renderTooltip(this, customToolTip);
        }
    },
    yAxis: {
        gridLineColor: "transparent",
        labels: {
            useHTML: true,
            formatter() {
                const item = this;
                if (typeof item.value !== "number") {
                    const label = item.axis.defaultLabelFormatter.call(this);
                    return `<text>${label}</text>`;
                }
                const converted = convertIntToCurrency(Number(item.value));
                return `<text>${converted.value}</text> ${converted.unit && `<span class="badge">${converted.unit}</span>`}`;
            }
        },
        title: {
            text: ""
        }
    },
    xAxis: {
        gridLineWidth: 1,
        gridLineDashStyle: "DashDot",
        gridLineColor: "rgba(255,255,255,0.18)",
        tickWidth: 0
    },
    series
});
//# sourceMappingURL=utils.js.map
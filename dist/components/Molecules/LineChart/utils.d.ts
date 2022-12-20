import { MutableRefObject } from "react";
import HighchartsReact from "highcharts-react-official";
export declare const renderTooltip: (point: any, customToolTip?: any) => string;
export declare const useReflowChart: (chartRef: MutableRefObject<HighchartsReact.RefObject>) => void;
export declare const renderInitialOptions: ({ chartTitle, customToolTip, series }: {
    chartTitle: any;
    customToolTip: any;
    series: any;
}) => {
    chart: {
        backgroundColor: string;
    };
    credits: {
        enabled: boolean;
    };
    exporting: {
        enabled: boolean;
        chartOptions: {
            navigator: {
                enabled: boolean;
            };
            scrollbar: {
                enabled: boolean;
            };
            chart: {
                backgroundColor: string;
            };
        };
    };
    title: {
        style: {
            color: string;
            fontSize: string;
            fontFamily: string;
        };
        text: any;
        align: string;
        x: number;
    };
    legend: {
        itemStyle: {
            color: string;
        };
        align: string;
        verticalAlign: string;
        x: number;
    };
    plotOptions: {
        series: {
            marker: {
                enabled: boolean;
            };
        };
        area: {
            fillColor: {
                linearGradient: {
                    x1: number;
                    y1: number;
                    x2: number;
                    y2: number;
                };
                stops: (string | number)[][];
            };
            lineWidth: number;
            marker: {
                enabled: boolean;
            };
            shadow: boolean;
            states: {
                hover: {
                    lineWidth: number;
                };
            };
            threshold: any;
        };
    };
    tooltip: {
        backgroundColor: any;
        borderWidth: number;
        shadow: boolean;
        useHTML: boolean;
        formatter(): string;
    };
    yAxis: {
        gridLineColor: string;
        labels: {
            useHTML: boolean;
            formatter(): string;
        };
        title: {
            text: string;
        };
    };
    xAxis: {
        gridLineWidth: number;
        gridLineDashStyle: string;
        gridLineColor: string;
        tickWidth: number;
    };
    series: any;
};

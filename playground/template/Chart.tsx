import { FunctionComponent } from "react";
import VariablePieChart from "./VariablePieChart";
import DonutChart from "./DonutChart";

export const Chart: FunctionComponent = () => {
  return (
    <div>
      <div className="font-bold text-xl dir-ltr">variable-pie-chart:</div>
      <VariablePieChart />
      <div className="font-bold text-xl dir-ltr">donut-chart:</div>
      <DonutChart />
    </div>
  );
};

export default Chart;

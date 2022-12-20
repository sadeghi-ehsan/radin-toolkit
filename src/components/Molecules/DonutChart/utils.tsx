import { donutChartConditions } from "./types";

export const charTitle = (hoveredItem, centerText, condition) => {
  const hoveredValue = `
<div class="sbt-donut-hoveredValue">
  <div>
    <div>%${hoveredItem?.value}</div>
    <span class="${condition === donutChartConditions.Ascending ? "sbt-arrowDown" : "sbt-arrowUp"}" />
  </div>
  <div>${hoveredItem?.name}</div>
</div>
`;

  const initialValue = `
<div class="sbt-chartTitle">${centerText}
  <div class="${condition === donutChartConditions.Ascending ? "sbt-arrowUp" : "sbt-arrowDown"}" />
</div>
`;
  return hoveredItem ? hoveredValue : initialValue;
};

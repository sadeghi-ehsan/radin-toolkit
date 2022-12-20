export const charTitle = (initialCenterText, hoveredItem, data) => `<div class="sbt-hoveredValue">
      <div>${initialCenterText && !hoveredItem ? "" : "%"}${hoveredItem ? hoveredItem?.value : initialCenterText || Math.max(...data.map(item => item.y))}</div>
    </div>`;
//# sourceMappingURL=utils.js.map
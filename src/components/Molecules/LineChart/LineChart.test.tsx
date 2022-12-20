import { render, cleanup } from "@testing-library/react";
import { SeriesOptionsType } from "highcharts";
import { LineChart } from "./index";

const series: Array<SeriesOptionsType> = [
  {
    type: "line",
    data: [9, 3, 10, 13, 7]
  }
];

describe("Card component", () => {
  afterEach(cleanup);

  // chart should render correct class
  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<LineChart series={series} className="testClass" />);
    expect(container.getElementsByClassName("testClass").length).toBe(1);
  });

  // when showSlider is true slider should render correctly.
  // when sliderClassName is defined slider should render with that class.
  // customToolTip should render correctly when hover on points .
});

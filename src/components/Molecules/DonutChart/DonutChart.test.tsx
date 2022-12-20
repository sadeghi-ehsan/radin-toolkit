import { render, cleanup } from "@testing-library/react";
import { DonutChart } from "./index";

const data = [
  {
    name: "مرابحه",
    color: "#0A84FF",
    y: 40
  },
  {
    name: "سهام عدالت",
    color: "#989898",
    y: 60
  }
];

describe("Card component", () => {
  afterEach(cleanup);

  // chart should render correct class
  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<DonutChart className="testClass" data={data} />);
    expect(container.getElementsByClassName("testClass").length).toBe(1);
  });

  // should render correct icon based on condition.
  // should render insideText correctly.
  // chart should show value on hover.
});

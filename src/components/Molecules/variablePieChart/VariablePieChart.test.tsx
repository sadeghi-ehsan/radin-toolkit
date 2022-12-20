import { render, cleanup } from "@testing-library/react";
import { VariablePieChart } from "./index";

const data = [
  {
    color: "#0A84FF",
    y: 40,
    z: 2
  },
  {
    color: "#989898",
    y: 60,
    z: 10
  }
];

describe("Card component", () => {
  afterEach(cleanup);

  // chart should render correct class
  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<VariablePieChart className="testClass" data={data} />);
    expect(container.getElementsByClassName("testClass").length).toBe(1);
  });

  // should render insideText correctly.
  // chart should show value on hover.
});

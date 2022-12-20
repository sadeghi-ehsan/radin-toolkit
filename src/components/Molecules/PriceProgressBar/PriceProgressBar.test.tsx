import { cleanup, render } from "@testing-library/react";
import { PriceProgressBar } from ".";

describe("PriceProgressBar", () => {
  afterEach(cleanup);

  // PriceProgressBar should render the correct display
  test("should have renders with a className equal to the variant", () => {
    const { container } = render(
      <PriceProgressBar count={1748} volume={160372685} percentage={78.04} direction="ltr" className="primary" />
    );

    expect(container.getElementsByClassName("primary").length).toBe(1);
  });

  // both direction values should render correctly
  // percentage value div should move correctly with percentage bar
});

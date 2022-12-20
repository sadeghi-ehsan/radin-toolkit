import { render, cleanup } from "@testing-library/react";
import { ProgressBar } from ".";

describe("ProgressBar kind", () => {
  afterEach(cleanup);

  // ProgressBar should render the correct display
  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<ProgressBar className="primary" />);
    expect(container.getElementsByClassName("primary").length).toBe(1);
  });

  // Should render correct percent
  // Should render correct color
  // Should render correct shape
  // Should render correct direction
  // Should render with showInfo
});

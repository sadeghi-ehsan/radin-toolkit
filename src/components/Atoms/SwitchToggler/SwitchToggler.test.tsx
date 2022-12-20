import { render, cleanup } from "@testing-library/react";
import { SwitchToggler } from ".";

describe("SwitchToggler", () => {
  afterEach(cleanup);

  // Button should render the correct display
  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<SwitchToggler className="test-switch" />);
    expect(container.getElementsByClassName("test-switch").length).toBe(1);
  });

  // Independent should render correct style
  // Should render correct color
  // Should render correct background color
});

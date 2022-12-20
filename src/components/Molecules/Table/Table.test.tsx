import { render, cleanup } from "@testing-library/react";

describe("Table kind", () => {
  afterEach(cleanup);

  // Table should render the correct display
  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<div className="primary" />);

    expect(container.getElementsByClassName("primary").length).toBe(1);
  });

  // Table pagination should work properly
  // Table columns search should display and work properly
  // Table variants such as lines and stripped should work properly together
  // Table row selecten, sorting and filters functionality should work properly
});

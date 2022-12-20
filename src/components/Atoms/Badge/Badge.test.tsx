import { render, cleanup } from "@testing-library/react";
import { Badge } from ".";

describe("Badge kind", () => {
  afterEach(cleanup);

  // Button should render the correct display
  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<Badge className="primary">submit</Badge>);
    expect(container.getElementsByClassName("primary").length).toBe(1);
  });

  // Independent should render correct style
  // describe for each type
  //    Should render each type correctly
  //    Should render correct color for each type
  //    type "badge" should render both content and children correctly
});

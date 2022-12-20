import { render, cleanup } from "@testing-library/react";
import { Skeleton } from ".";

describe("Skeleton kind", () => {
  afterEach(cleanup);

  // Skeleton should render the correct display
  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<Skeleton className="primary" />);

    expect(container.getElementsByClassName("primary").length).toBe(1);
  });

  // different rounded should display correctly
  // different width should display correctly
  // different height should display correctly
});

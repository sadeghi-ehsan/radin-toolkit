import { render, cleanup } from "@testing-library/react";
import { Calendar } from ".";

describe("Header", () => {
  afterEach(cleanup);

  test("should have classNames it's been passed to", () => {
    const component = render(<Calendar className="abc" />);

    expect(component.container.getElementsByClassName("abc").length).toBe(1);
  });
});

/**
 * 1. test showLiveStatus, brandName.
 * 2. test logo image change
 * 3. test startAdornments, middleAdornment, endAdornment.
 * 4. test logoHref.
 */

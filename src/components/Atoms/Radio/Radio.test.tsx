import { render, cleanup } from "@testing-library/react";
import { Radio } from ".";

describe("Radio", () => {
  afterEach(cleanup);

  test("should have classNames it's been passed to", () => {
    const component = render(<Radio name="switch" className="abc" />);

    expect(component.container.getElementsByClassName("abc").length).toBe(1);
  });
});

// Should radio be disabled when passing `disabled` props
// Should radio be selected by default when passing `selected` as props
// Should radio fill line when `block` passed as props
// Should have proper classes related to passed `size` as props
// Should have proper classes related to passed `color` as props

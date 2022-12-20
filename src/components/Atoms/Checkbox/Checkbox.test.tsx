import { render, cleanup } from "@testing-library/react";
import { Checkbox } from "./index";

describe("Checkbox", () => {
  afterEach(cleanup);

  test("should have classNames it's been passed to", () => {
    const component = render(<Checkbox name="switch" className="abc" />);

    expect(component.container.getElementsByClassName("abc").length).toBe(1);
  });
});

// Should checkbox be disabled when passing `disabled` props
// Should checkbox be selected by default when passing `selected` as props
// Should checkbox fill line when `block` passed as props

import { render, cleanup } from "@testing-library/react";
import { Switch } from ".";

describe("Switch", () => {
  afterEach(cleanup);

  test("should have classNames it's been passed to", () => {
    const component = render(<Switch name="switch" value={null} innerClassName="abc" />);

    expect(component.container.getElementsByClassName("abc").length).toBe(1);
  });
});

// Should have label html tag with passed name
// Should have checked input when defaultValue passed
// Should all options be disabled when passing to Switch
// Should have 3 input and 3 label tag when passing 3 SwitchOption as children to Switch
// Should option be disabled when passing disabled to SwitchOption
// Should option be selected by default when passing isSelected to SwitchOption

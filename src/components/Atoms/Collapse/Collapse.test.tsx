import { render, cleanup } from "@testing-library/react";
import { Collapse } from "./index";

describe("Radio", () => {
  afterEach(cleanup);

  test("should have classNames it's been passed to", () => {
    const component = render(<Collapse className="abc" title="تست کالپس" />);

    expect(component.container.getElementsByClassName("abc").length).toBe(1);
  });
});

// Should collapse be disabled when passing `disabled` props
// Should collapse be expanded by default when passing `defaultExpanded` as props
// should collapse expand when withHover props is true

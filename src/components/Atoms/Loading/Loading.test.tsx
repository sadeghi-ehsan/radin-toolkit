import { render, cleanup } from "@testing-library/react";
import { Loading } from ".";

describe("Loading", () => {
  afterEach(cleanup);

  test("should have classNames it's been passed to", () => {
    const component = render(<Loading className="abc" />);

    expect(component.container.getElementsByClassName("abc").length).toBe(1);
  });
});

/**
 *
 * 1.test colors is working in stroke path color or not.
 *
 * 2. test default w-10 & h-10 is working or not if user dont pass any w- or h- classnames.
 *
 */

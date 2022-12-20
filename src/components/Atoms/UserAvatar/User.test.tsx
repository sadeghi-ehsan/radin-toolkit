import { render, cleanup } from "@testing-library/react";
import { UserAvatar } from "./index";

describe("User", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    });
  });
  afterEach(cleanup);

  test("should have classNames it's been passed to", () => {
    const component = render(<UserAvatar className="abc" />);

    expect(component.container.getElementsByClassName("abc").length).toBe(1);
  });
});

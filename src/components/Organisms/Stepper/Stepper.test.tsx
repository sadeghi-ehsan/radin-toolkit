import { render, cleanup } from "@testing-library/react";
import { Stepper } from ".";

describe("Stepper component", () => {
  afterEach(cleanup);

  /**
   * because ant stepper using windows matchMedia. we fix following error by mocking the window.matchMedia method:
   * TypeError: window.matchMedia is not a function
   * @link https://github.com/ant-design/ant-design/issues/21096
   */
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });

  test("test existence", () => {
    const { container } = render(
      <Stepper
        steps={[{ title: "test", description: "test description" }]}
        direction="vertical"
        className="test-class"
      />
    );
    expect(container.getElementsByClassName("test-class").length).toBe(1);
  });

  // 1. test currentStep
  // 2. test editMode
  // 3. test isIconsOutlined
  // 4. test showMidLine
  // 5. test onClickStep
});

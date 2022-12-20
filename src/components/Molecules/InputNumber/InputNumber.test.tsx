import { render, cleanup } from "@testing-library/react";
import { InputNumber } from ".";

describe("InputNumber", () => {
  afterEach(cleanup);

  test("render correctly", () => {
    const { container } = render(<InputNumber className="primary" />);
    expect(container.getElementsByClassName("primary").length).toBe(1);
  });
});

/**
 *
 * 1.test onChange and value
 * 2.test clicking increase and decrease buttons
 * 3.test min and max and color of value of input
 * 4.test onChange and value with up and down arrow key
 *
 */

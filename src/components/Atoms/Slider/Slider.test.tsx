import { render, cleanup } from "@testing-library/react";
import { Slider } from ".";

describe("Slider kind", () => {
  afterEach(cleanup);

  test("should have renders with a className equal to the props it's passed to", () => {
    const { container } = render(<Slider className="testSlider" range={false} value={20} onChange={null} />);
    expect(container.getElementsByClassName("testSlider").length).toBe(1);
  });
});

/**
 *
 * 1. test onChange and it's value
 * 2. test "verified" and presence of verification icon
 *
 */

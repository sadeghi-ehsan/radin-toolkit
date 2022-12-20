import { render, cleanup } from "@testing-library/react";
import { Popover } from ".";

describe("Popover", () => {
  afterEach(cleanup);

  test("should have classNames it's been passed to", () => {
    const component = render(
      <Popover content={<div>ssd</div>}>
        <button type="button" className="triggerButton">
          Open
        </button>
      </Popover>
    );

    expect(component.container.getElementsByClassName("triggerButton").length).toBe(1);
  });
});

/**
 *
 * 1.test open Popover
 */

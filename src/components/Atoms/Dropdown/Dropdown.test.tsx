import { render, cleanup } from "@testing-library/react";
import { Dropdown } from ".";

describe("Dropdown", () => {
  afterEach(cleanup);

  test("should have classNames it's been passed to", () => {
    const component = render(
      <Dropdown className="abc" overlay={<div>ssd</div>}>
        <button type="button">Open</button>
      </Dropdown>
    );

    expect(component.container.getElementsByClassName("abc").length).toBe(1);
  });
});

/**
 *
 * 1.test open Dropdown
 * 2.test Dropdown.Menu
 * 3.test Dropdown.MenuItem
 */

import { render, cleanup } from "@testing-library/react";
import { Select } from ".";

describe("Select", () => {
  afterEach(cleanup);

  let value = "";

  test("onChange", () => {
    const component = render(
      <Select
        id="selectTest"
        className="abc"
        name="test-select"
        onChange={v => {
          value = v;
        }}
        value={value}
      />
    );

    expect(component.container.getElementsByClassName("abc").length).toBe(1);
  });
});

/**
 *
 * 1.onChange,
 * 2.error
 * 3.verified
 * 4.firing onClear callback if clearable is true
 * 5. ...
 *
 */

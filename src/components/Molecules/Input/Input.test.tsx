import { render, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { Input } from ".";

describe("Input", () => {
  afterEach(cleanup);

  let value = "";

  test("onChange", () => {
    render(
      <Input
        id="inputTest"
        name="test-input"
        onChange={v => {
          value = v;
        }}
        value={value}
      />
    );
    fireEvent.change(document.getElementById("inputTest"), {
      target: { value: "a" }
    });
    expect(value).toBe("a");
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

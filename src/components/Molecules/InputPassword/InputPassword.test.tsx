import { render, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { InputPassword } from ".";

describe("Input", () => {
  afterEach(cleanup);

  let value = "";

  test("onChange", () => {
    render(
      <InputPassword
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
 * 1.show/hide password icon (should change the input "type" to "text|password")
 *
 */

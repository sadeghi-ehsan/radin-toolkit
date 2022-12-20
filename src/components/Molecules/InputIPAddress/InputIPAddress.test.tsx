import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputIPAddress } from ".";

describe("Input", () => {
  afterEach(cleanup);

  let value = "";

  test("Testing first 3 character is the same", () => {
    render(
      <InputIPAddress
        id="inputTest"
        name="test-input"
        onChange={v => {
          value = v;
        }}
        value={value}
      />
    );

    const text = "192";
    const element = document.getElementById("inputTest");
    /* TODO fix and remove comment ts-ignore */
    // @ts-ignore
    userEvent.paste(element, text);
    expect(value).toBe(text);
  });
});

/**
 *
 * 1.test is all four field is correct
 * 2.error
 * 3.verified
 * 4.firing onClear callback if clearable is true
 * 5. ...
 *
 */

import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputBankCard } from ".";

describe("Input", () => {
  afterEach(cleanup);

  let value = "";

  test("Testing first 4 character is the same", () => {
    render(
      <InputBankCard
        id="inputTest"
        name="test-input"
        onChange={v => {
          value = v;
        }}
        value={value}
      />
    );

    const text = "1234567890123456";
    const element = document.getElementById("inputTest");
    /* TODO fix and remove comment ts-ignore */
    // @ts-ignore
    userEvent.paste(element, text);
    expect(value).toBe(text.slice(0, 4));
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

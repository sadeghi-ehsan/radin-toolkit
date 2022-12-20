import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/dom";
import { InputSheba } from ".";

describe("Input", () => {
  afterEach(cleanup);

  let value = "";
  const text = "IR062960000000100324200001";

  test("Testing sheba input Paste data", () => {
    render(
      <InputSheba
        id="inputTest"
        name="test-input"
        onChange={v => {
          value = v;
        }}
        value={value}
      />
    );

    const element = document.getElementById("inputTest");
    /* TODO fix and remove comment ts-ignore */
    // @ts-ignore
    userEvent.paste(element, text.replace("IR", ""));
    expect(value).toBe(text);
  });

  test("Testing sheba input onChange", () => {
    render(
      <InputSheba
        id="inputTest"
        name="test-input"
        onChange={v => {
          value = v;
        }}
        value={value}
      />
    );

    fireEvent.change(document.getElementById("inputTest"), {
      target: { value: text.replace("IR", "") }
    });
    expect(value).toBe(text);
  });
});

/**
 *
 * 1.error
 * 2.verified
 * 3.firing onClear callback if clearable is true
 * 4. ...
 *
 */

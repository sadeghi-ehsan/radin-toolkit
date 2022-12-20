import { render, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { InputCodeVerify } from ".";

describe("Input", () => {
  afterEach(cleanup);

  let value = "";

  test("test onchange first field on input code verify", () => {
    render(
      <InputCodeVerify
        id="inputTest"
        name="test-input"
        onChange={v => {
          value = v;
        }}
        value={value}
      />
    );
    fireEvent.change(document.getElementById("inputTest"), {
      target: { value: "1" }
    });
    expect(value).toBe("1");
  });
});

/**
 *
 * 1.test all n fields (pay attention count of fields are dynamic)
 *
 */

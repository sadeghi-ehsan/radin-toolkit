import { render, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { InputCascading } from ".";

describe("InputCascading", () => {
  afterEach(cleanup);

  let value = null;

  test("onChange input", () => {
    render(
      <InputCascading
        id="inputTest"
        name="test-input"
        onChange={v => {
          value = v;
        }}
        value={value}
        firstOptionAsDefault
        options={[
          {
            label: "ریال",
            value: "rial"
          },
          {
            label: "تومان",
            value: "toman"
          }
        ]}
      />
    );
    fireEvent.change(document.getElementById("inputTest"), {
      target: { value: "a" }
    });
    expect(value.selectedOption).toBe("rial");
    expect(value.value).toBe("a");
  });
});

/**
 *
 * 1.onChange dropdown
 *
 */

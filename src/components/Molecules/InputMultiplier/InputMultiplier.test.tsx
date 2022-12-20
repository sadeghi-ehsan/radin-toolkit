import { render, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { InputMultiplier } from ".";

describe("InputMultiplier", () => {
  afterEach(cleanup);

  let value = null;

  test("onChange input", () => {
    render(
      <InputMultiplier
        id="inputTest"
        name="test-input"
        onChange={v => {
          value = v;
        }}
        value={value}
        firstOptionAsDefault
        options={[
          {
            label: "1x",
            value: "1x"
          },
          {
            label: "2x",
            value: "2x"
          }
        ]}
      />
    );
    fireEvent.change(document.getElementById("inputTest"), {
      target: { value: "a" }
    });
    expect(value.selectedOption).toBe("1x");
    expect(value.value).toBe("a");
  });
});

/**
 *
 * 1.onChange dropdown
 *
 */

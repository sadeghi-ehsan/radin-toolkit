import { render, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { BaseInput } from ".";

describe("BaseInput", () => {
  afterEach(cleanup);

  let value = "";

  test("onChange", () => {
    render(
      <BaseInput
        id="baseInputTest"
        name="base-input-test"
        onChange={v => {
          value = v;
        }}
        value={value}
      />
    );
    fireEvent.change(document.getElementById("baseInputTest"), {
      target: { value: "a" }
    });
    expect(value).toBe("a");
  });
});

/**
 *
 * 1.firing onChange should change it's value
 * 2.fire onBlur with a callback function and change a value
 * 3.any test related to inputs
 * 4.testing our props passing down to BaseInput
 *    props like: className ,onKeyDown , onChange , value ...
 *
 */

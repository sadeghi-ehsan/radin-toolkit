import { render, cleanup } from "@testing-library/react";
import { InputMultipleInputs } from ".";

describe("InputMultipleInputs", () => {
  afterEach(cleanup);

  let value = {};

  test("InputMultipleInputs", () => {
    const { container } = render(
      <InputMultipleInputs
        id="inputTest"
        className="test-input"
        onChange={v => {
          value = v;
        }}
        value={value}
      />
    );

    expect(container.getElementsByClassName("test-input").length).toBe(1);
  });
});

/**
 *
 * 1.test is all field is correct
 * 2.error
 * 3.verified
 * 4.firing onClear callback if clearable is true
 * 5. ...
 *
 */

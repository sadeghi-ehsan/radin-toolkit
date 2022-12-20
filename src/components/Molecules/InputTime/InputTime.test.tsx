import { render, cleanup } from "@testing-library/react";
import { InputTime } from ".";

describe("inputTime", () => {
  afterEach(cleanup);

  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<InputTime className="primary" />);
    expect(container.getElementsByClassName("primary").length).toBe(1);
  });
});

/**
 *
 * 1.test entering non-numerical characters
 * 2.test onChange and value while using formatter
 * 3.test Am/Pm switch
 * 4.test passing value like 23:54:33 and expect the switch button's value to be Pm
 * 5. ...
 *
 */

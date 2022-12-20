import { render, cleanup } from "@testing-library/react";
import { Typography } from ".";

describe("Typography", () => {
  afterEach(cleanup);

  test("className props should be passed down to the component and it should be slected by its query selectors", () => {
    const component = render(<Typography className="primary">lorem ipsum</Typography>);
    expect(component.container.getElementsByClassName("primary").length).toBe(1);
  });
});

/**
 *
 * 1. test variant and weight and color props. when its variant is set to a specific value ,it should be selected by its
 *    corresponding className
 *
 * 2. test tag props. when its tag prop is set to 'p' ,it should be selected by getElementsByTagName or its equivalent 
 *     selectors with the argument of 'p'

 */

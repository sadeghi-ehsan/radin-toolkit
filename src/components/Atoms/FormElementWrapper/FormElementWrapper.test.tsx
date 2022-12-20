import { render, cleanup } from "@testing-library/react";
import { FormElementWrapper } from ".";

describe("FormElementWrapper", () => {
  afterEach(cleanup);

  test("testing custom className", () => {
    const component = render(<FormElementWrapper fieldsetClassName="formElementWrapperTest" />);

    expect(component.container.querySelector(".formElementWrapperTest")).toBeTruthy();
  });
});

/**
 *
 * 1.if error is true ,it should have a border in error color
 * 2.if error is of type string its border should be of color error and also contain error message
 * 3.if either fieldClassName or legendClassName is passed, it should have the className someWhere
 *   down in the component
 * 4.classNames of each variant considering having error or important prop
 * 5.if verified or error is true it should contain the corresponding validation icon
 * 6.if clearable is true, it should contain the clear icon component and also an onClear callback
 * 7.when clear-icon is clicked and clearValue is not undefined, the value should set to clearValue
 */

import { render } from "@testing-library/react";
import { FieldGroup } from ".";

test("FieldGroup component should be truthy after render", () => {
  const component = render(
    <FieldGroup groupLabel="test" fieldsetClassName="FieldGroupTest">
      <div>testing FieldGroup</div>
      <div>testing FieldGroup</div>
    </FieldGroup>
  );

  expect(component.container.querySelector(".FieldGroupTest")).toBeTruthy();
});

/**
 *
 * 1. by default it should contain classNames such as 'border' and 'border-solid' which are essential for fieldset
 *    to have border.
 *
 * 2. by default it should contain a 'fieldset' tag and a 'legend' nested in it.
 *
 * 3. if error is truthy value it should have a border in error color.
 *
 */

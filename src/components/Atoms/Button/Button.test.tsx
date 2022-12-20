import { render, cleanup } from "@testing-library/react";
import { Button } from ".";

describe("Button kind", () => {
  afterEach(cleanup);

  // Button should render the correct display
  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<Button className="primary">submit</Button>);
    expect(container.getElementsByClassName("primary").length).toBe(1);
  });

  // Should have sbt-theme-primary class when: theme="primary"
  // Should have sbt-theme-terminate class when: theme="terminate"
  // Should have sbt-theme-danger class when: theme="danger"
  // Should have sbt-theme-success class when: theme="success"

  // Should have sbt-variant-default class when: variant="default"
  // Should have sbt-variant-outline class when: variant="outline"
  // Should have sbt-variant-text class when: variant="text"

  // Should button type be button when: type="button" or no type passes
  // Should button type be submit when: type="submit"
  // Should button type be reset when: type="reset"

  // Should have sbt-size-sm class when: size="sm"
  // Should have sbt-size-md class when: size="md"
  // Should have sbt-size-lg class when: size="lg"
  // Should have sbt-size-xl class when: size="xl"

  // Should have no sbt-shape class when no shape props passes
  // Should have sbt-shape-round class when: shape="round"
  // Should have sbt-shape-circle class when: shape="circle"

  // Should output an anchor if called with a href
  // Should have `target` attribute when href passes

  // Should have _self target when: target="_self" or even no target passes
  // Should have _blank target when: target="_blank"
  // Should have _parent target when: target="_parent"
  // Should have _top target when: target="_top"

  // Should call onClick callback
  // Should be disabled
  // Should be disabled link
  // Should have block class
  // Should have a custom style
});

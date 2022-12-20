import { render, cleanup } from "@testing-library/react";
import { Tooltip } from ".";

describe("Tooltip", () => {
  afterEach(cleanup);

  // Button should render the correct display
  test("should have renders with a className equal to the variant", () => {
    render(
      <Tooltip title="tooltip title" overlayClassName="test-class" defaultVisible>
        hover on me
      </Tooltip>
    );
  });

  // 1.test tooltip hover
  // 2.test tooltip click
  // 3.test tooltip focus
});

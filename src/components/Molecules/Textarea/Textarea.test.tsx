import { render, cleanup } from "@testing-library/react";
import { Textarea } from ".";

describe("Textarea", () => {
  afterEach(cleanup);

  test("Textarea", () => {
    const { container } = render(<Textarea className="primary" value="Text Area Content" />);
    expect(container.getElementsByClassName("primary").length).toBe(1);
  });
});

/**
 *
 * 1. test clicking endAdornment button when type is equal to "expand"
 * 2. test className of "text-ellipsis" when type is equal to "more" when scrolled
 * 3. test color of label
 *
 */

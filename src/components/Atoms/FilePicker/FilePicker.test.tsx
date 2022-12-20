import { render, cleanup } from "@testing-library/react";
import { FilePicker } from ".";

describe("FilePicker", () => {
  afterEach(cleanup);

  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<FilePicker className="primary" />);
    expect(container.getElementsByClassName("primary").length).toBe(1);
  });
});

import { render, cleanup } from "@testing-library/react";
import { InputImageUploader } from ".";

describe("InputImageUploader", () => {
  afterEach(cleanup);

  // Button should render the correct display
  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<InputImageUploader className="test" />);
    expect(container.getElementsByClassName("test").length).toBe(1);
  });

  // 1.test opening file picker modal
  // 2.test opening image cropper modal
});

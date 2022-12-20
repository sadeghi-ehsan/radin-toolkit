import React from "react";
import { render, cleanup } from "@testing-library/react";
import { NotificationBox } from "./index";

describe("Card component", () => {
  afterEach(cleanup);

  // Button should render the correct display
  test("should have renders with a className equal to the variant", () => {
    const { container } = render(<NotificationBox className="primary" notificationMessagesList={[]} />);
    expect(container.getElementsByClassName("primary").length).toBe(1);
  });

  // Independent should render correct style
  // Should render correct color
  // Should render correct background color
});

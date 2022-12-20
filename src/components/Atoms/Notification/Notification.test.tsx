import "jest-canvas-mock";
import { cleanup } from "@testing-library/react";
import { Important } from "@sadeghi-ehsan/radin-icon";
import { notification } from ".";

describe("Notification ", () => {
  afterEach(cleanup);

  test("should have classNames it's been passed to", async () => {
    notification({
      message: "aaa",
      color: "error",
      className: "notification-abc",
      duration: 1000,
      key: "test",
      icon: <Important />
    });

    await new Promise(r => {
      setTimeout(r, 2000);
    });

    expect(document.querySelectorAll(".notification-abc")).toHaveLength(1);
  });
});

/**
 *
 * 1. 2 notifications with different keys should generate 2 notifications resulting in selecting 2 of a signle className
 * 2. check background and border colors by their classNames
 * 3. those with confirm and cancel buttons should not close after a time automatically unless the
 *    cancel/confirm button is clicked
 * 4. after clicking confirm/cancel button notification should get closed
 * 5.
 *
 */

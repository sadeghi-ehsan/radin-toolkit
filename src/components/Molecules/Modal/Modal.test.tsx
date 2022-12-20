import { cleanup, render } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import { Modal } from ".";

describe("Modal", () => {
  afterEach(cleanup);

  test("testing modal exist and modal title exist", async () => {
    const { queryByText } = render(
      <div>
        <Modal title="Modal title" visible>
          <p>Modal content</p>
        </Modal>
      </div>
    );

    // fireEvent.click(container.querySelector("#closeModal"));

    // expect(baseElement).toMatchSnapshot(); // added snapshot

    await waitFor(() => expect(queryByText("Modal title")).toBeInTheDocument());
  });
});

/**
 *
 * 1.show/hide modal
 * 2.test Modal.confirm()
 * 3.onCancel/onOk callback
 */

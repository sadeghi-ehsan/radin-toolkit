import { render, cleanup } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import { ImageCropper } from ".";

describe("ImageCropper", () => {
  afterEach(cleanup);

  test("should render the cropper", async () => {
    const { container } = render(
      <ImageCropper
        imageSrc="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==" // sample 1x1 base64 image
        className="cropper"
        onCropEnd={() => {}}
      />
    );

    await waitFor(() => expect(container.getElementsByClassName("cropper").length).toBe(1));
  });
});

/**
 *
 * 1. test cropped preview
 *    to have border.
 *
 * 2. test crop. i.e. by setting autoCropArea to 100% and preview image size should same az original image or etc.
 *
 */

// Badge.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRef } from "react";
import useState from "storybook-addon-state";
import { ImageCropper } from ".";
import { Button } from "../Button";
import { IImageCropperProps } from "./types";

export default {
  title: "components/Atoms/ImageCropper",
  component: ImageCropper
} as ComponentMeta<typeof ImageCropper>;

const Template: ComponentStory<typeof ImageCropper> = args => {
  const [imageSrc, setImageSrc]: any = useState("imageSrc", []);
  const [cropData, setCropData]: any = useState("croppedImageUrl", null);
  const [rotateDeg, setRotateDeg]: any = useState("rotateDeg", 0);
  const cropperRef: any = useRef();

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setImageSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  function handleResetAll() {
    setRotateDeg(0);
    cropperRef.current.cropper.reset();
    cropperRef.current.cropper.setAspectRatio(null);
  }

  function handleRotate(deg: number) {
    const deg_ = rotateDeg + deg;
    cropperRef.current.cropper.rotateTo(deg_);

    setTimeout(() => {
      setRotateDeg(deg_);
    }, 0);
  }

  return (
    <div>
      <h1 className="mb-4 text-lg">please refresh page everytime change storybook settings</h1>

      <div className="flex mb-5 space-x-2 space-x-reverse">
        <Button onClick={() => handleRotate(-5)}>Rotate +5 deg</Button>
        <Button onClick={() => handleRotate(+5)}>Rotate -5 deg</Button>
        <Button onClick={() => cropperRef.current.cropper.disable()}>disable</Button>
        <Button onClick={() => cropperRef.current.cropper.enable()}>enable</Button>
        <Button theme="error" onClick={handleResetAll}>
          reset
        </Button>
      </div>

      <div className="flex mb-10 space-x-2 space-x-reverse">
        <Button onClick={() => cropperRef.current.cropper.zoom(0.1)}>zoom + 0.1</Button>
        <Button onClick={() => cropperRef.current.cropper.zoom(-0.1)}>zoom - 0.1</Button>
        <Button onClick={() => cropperRef.current.cropper.scaleX(-1)}>scaleX -1</Button>
        <Button onClick={() => cropperRef.current.cropper.scaleY(-1)}>scaleY -1</Button>
        <Button onClick={() => cropperRef.current.cropper.setAspectRatio(2 / 1)}>setAspectRatio 2 / 1</Button>
      </div>

      <ImageCropper
        {...args}
        ref={cropperRef}
        imageSrc={imageSrc?.length ? imageSrc : "https://picsum.photos/id/1041/200/200"}
        onCropEnd={base64CroppedImage => {
          setCropData(base64CroppedImage);
        }}
      />

      <div className="my-8">
        <input type="file" accept="image/*" onChange={onSelectFile} />
      </div>

      <div className="mt-8">
        <h1>Preview:</h1>
        <div className="w-40 h-40">{cropData && <img style={{ width: "100%" }} src={cropData} alt="cropped" />}</div>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...ImageCropper.defaultProps,
  minContainerHeight: 300
} as IImageCropperProps;

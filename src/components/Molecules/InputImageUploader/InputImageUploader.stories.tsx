// Badge.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { InputImageUploader } from ".";
import { IInputImageUploaderProps } from "./types";

export default {
  title: "components/Molecules/InputImageUploader",
  component: InputImageUploader
} as ComponentMeta<typeof InputImageUploader>;

const Template: ComponentStory<typeof InputImageUploader> = args => {
  const [uploadPercent, setUploadPercent]: any = useState(0);
  const [uploadedImageSrc, setUploadedImageSrc]: any = useState(args.uploadedImageSrc || null);

  // simulate async server upload progress with interval
  const UploadToServer = croppedImageBase64 => {
    setUploadPercent(5);

    const timer = setInterval(() => {
      setUploadPercent(uploadPercent => {
        if (uploadPercent < 100) {
          return uploadPercent + 10;
        }
        clearInterval(timer);
        setUploadedImageSrc(croppedImageBase64);
        return 0; // at the end, setUploadPercent to 0
      });
    }, 350);
  };

  return (
    <InputImageUploader
      {...args}
      uploadedImageSrc={uploadedImageSrc}
      progressPercent={uploadPercent}
      onSelectImage={UploadToServer}
      onCancelUpload={() => {}}
      onDeleteImage={() => setUploadedImageSrc(null)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  ...InputImageUploader.defaultProps,
  label: "تصــــویر رنگــی روی کــارت ملــی",
  placeholder: "لــطفا تصــویر خواســته شــده را بارگــذاری کــنید",
  filePickerProps: {
    accept: "image/*",
    description: "برای بارگذاری لطفا تصویر خود را از صفحه دسکتاپ بکشید و اینجا رها کنید و یا روی اینجا کلیک کنید"
  },
  imageCropperModalProps: {
    maskClosable: true
  },
  imageCropperProps: {
    background: false
  }
} as IInputImageUploaderProps;

export const PreFilled = Template.bind({});
PreFilled.args = {
  ...Default.args,
  uploadedImageSrc: "https://picsum.photos/id/1041/200/200",
  verified: true
} as IInputImageUploaderProps;

const CustomComponentTemplate: ComponentStory<typeof InputImageUploader> = args => {
  const [uploadedImageSrc, setUploadedImageSrc]: any = useState();

  return (
    <div className="flex flex-col gap-5">
      <InputImageUploader
        {...args}
        uploadedImageSrc={uploadedImageSrc}
        onSelectImage={setUploadedImageSrc}
        renderInputComponent={({ pickImage, editImage }) => {
          return (
            <div className="flex gap-4">
              {uploadedImageSrc ? (
                <>
                  <div
                    className="bg-primary px-2 py-1 rounded cursor-pointer"
                    onClick={() => editImage(uploadedImageSrc)}
                  >
                    Edit
                  </div>
                  <div
                    className="bg-terminate px-2 py-1 rounded cursor-pointer"
                    onClick={() => setUploadedImageSrc(null)}
                  >
                    Delete
                  </div>
                </>
              ) : (
                <div onClick={pickImage} className="bg-primary px-2 py-1 rounded cursor-pointer">
                  Pick
                </div>
              )}
            </div>
          );
        }}
      />

      {uploadedImageSrc && (
        <div>
          <img src={uploadedImageSrc} />
        </div>
      )}
    </div>
  );
};

export const CustomComponent = CustomComponentTemplate.bind({});
CustomComponent.args = {
  ...Default.args
} as IInputImageUploaderProps;

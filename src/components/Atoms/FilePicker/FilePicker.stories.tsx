import { ComponentMeta, ComponentStory } from "@storybook/react";
import useState from "storybook-addon-state";
import { FilePicker } from ".";
import { IFilePickerProps } from "./types";

export default {
  title: "components/Atoms/FilePicker",
  component: FilePicker
} as ComponentMeta<typeof FilePicker>;

const Template: ComponentStory<typeof FilePicker> = args => {
  const [file, setFile] = useState("file", null);
  const [filesList, setFilesList] = useState("filesList", []);

  return (
    <div>
      <div className="w-96">
        <FilePicker
          {...args}
          className=""
          onChange={info => {
            console.log(info);

            if (info.file.status !== "uploading") {
              setFile(info.file);
              setFilesList(info.fileList);
            }
          }}
        />
      </div>

      <br />
      <div className="mx-auto w-96">
        {file && (
          <>
            <p>picked image:</p>
            <img src={file ? URL.createObjectURL(file) : ""} width="100" height="auto" alt="" />
          </>
        )}
        <br />
        <br />
        {filesList?.length > 0 && (
          <div className="w-full">
            <p>picked image(s) list:</p>
            <div className="flex flex-wrap w-full space-x-2 space-x-reverse">
              {filesList.map((file, index) => (
                <img key={index} src={URL.createObjectURL(file?.originFileObj)} width="50" height="auto" alt="" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...FilePicker.defaultProps,
  error: "فرمت تصویر اشتباه است!"
} as IFilePickerProps;

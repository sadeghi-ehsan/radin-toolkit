import { FunctionComponent } from "react";
import { Upload } from "antd";

import { AddImage, Error } from "radin-icon";
import { classJoin, empty, isCallable, modifyReactChildren } from "../../../utils";
import { IFilePickerProps } from "./types";

const { Dragger } = Upload;

export const FilePicker: FunctionComponent<IFilePickerProps> = ({
  children,
  className,
  description,
  icon,
  onChange,
  disabled,
  error,
  ...restProps
}) => (
  /* TODO fix and remove comment ts-ignore */
  // @ts-ignore
  <Dragger
    {...restProps}
    className={classJoin([
      "transition-colors duration-200 border-2 border-dashed  rounded-xxl ",
      disabled ? "border-disabled !cursor-not-allowed" : "border-idle-border hover:border-idle cursor-pointer",
      className
    ])}
    prefixCls="sbt-upload"
    {...{
      beforeUpload: () => false,
      showUploadList: false,
      disabled,
      onChange(info) {
        if (!empty(onChange) && isCallable(onChange)) {
          onChange(info);
        }
      }
    }}
  >
    <div className="flex flex-col justify-center h-full pb-8 pointer-events-none select-none pt-9 px-11">
      {!empty(icon) &&
        modifyReactChildren(icon, { className: classJoin(["mx-auto mb-6", disabled ? "!text-disabled" : ""]) })}
      <p className={classJoin(["font-light ", disabled ? "text-disabled" : "text-description"])}>{description}</p>
      {error && (
        <div className="flex mt-2">
          <Error weight="bold" className="ml-2" color="error" />
          <p className="text-sm text-error">{error}</p>
        </div>
      )}
    </div>
  </Dragger>
);

FilePicker.defaultProps = {
  description: "برای بارگذاری لطفا تصویر خود را از صفحه دسکتاپ بکشید و اینجا رها کنید و یا روی اینجا کلیک کنید",
  icon: <AddImage size="5xl" className="text-primary" />,
  disabled: false,
  multiple: false,
  maxCount: 1,
  openFileDialogOnClick: true,
  accept: "image/*"
};

export default FilePicker;

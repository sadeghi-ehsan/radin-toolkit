import { useState } from "react";
import { Switch as SBTSwitch } from "../../src";

const Switch = () => {
  const [option, setOption] = useState<string | number>("login");
  const [option2, setOption2] = useState<string | number>("register");
  const [option3, setOption3] = useState<string | number>();

  return (
    <>
      <div className="flex items-center mb-2">
        <span className="ml-1">Normal Switch:</span>
        <SBTSwitch
          name="switch-primary"
          onChange={v => {
            setOption(v);
          }}
          defaultValue={option}
        >
          <SBTSwitch.Option value="login">ورود</SBTSwitch.Option>
          <SBTSwitch.Option value="register">ثبت نام</SBTSwitch.Option>
        </SBTSwitch>
      </div>
      <div className="flex items-center mb-2">
        <span className="ml-1">Disabled Switch:</span>
        <SBTSwitch
          name="switch-disabled"
          disabled
          onChange={v => {
            setOption(v);
          }}
          defaultValue={"register"}
        >
          <SBTSwitch.Option value="login">ورود</SBTSwitch.Option>
          <SBTSwitch.Option value="register">ثبت نام</SBTSwitch.Option>
        </SBTSwitch>
      </div>
      <div className="flex items-center mb-2">
        <span className="ml-1">Option(s) Disabled Switch:</span>
        <SBTSwitch
          name="switch-d2"
          onChange={v => {
            setOption2(v);
          }}
          defaultValue={option2}
        >
          <SBTSwitch.Option value="login">ورود</SBTSwitch.Option>
          <SBTSwitch.Option value="register" disabled>
            ثبت نام
          </SBTSwitch.Option>
          <SBTSwitch.Option value="forget">فراموشی</SBTSwitch.Option>
        </SBTSwitch>
      </div>

      <div className="flex items-center mb-2">
        <span className="ml-1">No Default Option Switch:</span>
        <SBTSwitch
          name="switch-nd"
          onChange={v => {
            setOption3(v);
          }}
          defaultValue={option3}
        >
          <SBTSwitch.Option value="login">ورود</SBTSwitch.Option>
          <SBTSwitch.Option value="register">ثبت نام</SBTSwitch.Option>
          <SBTSwitch.Option value="forget">فراموشی</SBTSwitch.Option>
        </SBTSwitch>
      </div>
    </>
  );
};

export default Switch;

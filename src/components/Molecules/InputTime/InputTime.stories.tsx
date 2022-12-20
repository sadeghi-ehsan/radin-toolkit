import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IInputTimeProps, InputTime } from ".";
import useState from "storybook-addon-state";

export default {
  component: InputTime,
  title: "components/Molecules/InputTime"
} as ComponentMeta<typeof InputTime>;

const SimpleTemplate: ComponentStory<typeof InputTime> = (args: any) => {
  const [value1, setValue1] = useState("value1", args?.defaultValue);

  return (
    <div>
      <div>
        <InputTime {...args} value={value1} onChange={setValue1} />
      </div>
      <br />
      <br />

      <div>{value1 || ""}</div>
    </div>
  );
};

export const Default = SimpleTemplate.bind({});
Default.args = {
  ...InputTime.defaultProps,
  name: "input",
  groupLabel: "زمان ورود",
  inputVariant: "outline"
} as IInputTimeProps;

export const DefaultValue = SimpleTemplate.bind({});
DefaultValue.args = {
  ...InputTime.defaultProps,
  name: "input",
  groupLabel: "زمان ورود",
  defaultValue: 7930300,
  inputVariant: "outline"
} as IInputTimeProps;

export const Validation = SimpleTemplate.bind({});
Validation.args = {
  ...InputTime.defaultProps,
  name: "input",
  groupLabel: "زمان ورود",
  required: true,
  inputVariant: "outline"
} as IInputTimeProps;

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IInputIPAddressProps, InputIPAddress } from ".";
import useState from "storybook-addon-state";

export default {
  component: InputIPAddress,
  title: "components/Molecules/InputIPAddress"
} as ComponentMeta<typeof InputIPAddress>;

const SimpleTemplate: ComponentStory<typeof InputIPAddress> = (args: any) => {
  const [value1, setValue1] = useState("value1", args?.initialValue);

  return (
    <div>
      <InputIPAddress {...args} value={value1} onChange={setValue1} />
      <br />
      <div>{value1 || ""}</div>
    </div>
  );
};

export const Default = SimpleTemplate.bind({});
Default.args = {
  ...InputIPAddress.defaultProps,
  name: "input",
  label: "آدرس IP",
  placeholder: "255",
  variant: InputIPAddress.defaultProps.variant
} as IInputIPAddressProps;

export const InitialValue = SimpleTemplate.bind({});
InitialValue.args = {
  ...Default.args,
  initialValue: "192.168.1.50"
} as IInputIPAddressProps;

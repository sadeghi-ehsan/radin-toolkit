import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IInputPasswordProps, InputPassword } from ".";
import useState from "storybook-addon-state";

export default {
  component: InputPassword,
  title: "components/Molecules/InputPassword"
} as ComponentMeta<typeof InputPassword>;

const SimpleTemplate: ComponentStory<typeof InputPassword> = (args: any) => {
  const [value1, setValue1] = useState("value1", "");

  return (
    <InputPassword
      {...args}
      value={value1}
      onChange={val => {
        setValue1(val);
      }}
    />
  );
};

export const Default = SimpleTemplate.bind({});
Default.args = {
  ...InputPassword.defaultProps,
  name: "input",
  label: "رمز عبور",
  placeholder: "مقدار ورودی ...",
  variant: InputPassword.defaultProps.variant
} as IInputPasswordProps;

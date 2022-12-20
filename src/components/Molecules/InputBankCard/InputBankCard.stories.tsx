import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IInputBankCardProps, InputBankCard } from ".";
import useState from "storybook-addon-state";

export default {
  component: InputBankCard,
  title: "components/Molecules/InputBankCard"
} as ComponentMeta<typeof InputBankCard>;

const SimpleTemplate: ComponentStory<typeof InputBankCard> = (args: any) => {
  const [value1, setValue1] = useState("value1", args?.initialValue);

  return (
    <div>
      <div>
        <InputBankCard {...args} value={value1} onChange={setValue1} />
      </div>
      <br />
      <br />

      <div>{value1 || ""}</div>
    </div>
  );
};

export const Default = SimpleTemplate.bind({});
Default.args = {
  ...InputBankCard.defaultProps,
  id: "inputTest",
  name: "input",
  label: "شماره کارت",
  placeholder: "",
  variant: InputBankCard.defaultProps.variant
} as IInputBankCardProps;

export const InitialValue = SimpleTemplate.bind({});
InitialValue.args = {
  ...Default.args,
  initialValue: "1234567890123456"
} as IInputBankCardProps;

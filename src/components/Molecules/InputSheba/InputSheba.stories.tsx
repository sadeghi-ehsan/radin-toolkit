import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IInputShebaProps, InputSheba } from ".";
import useState from "storybook-addon-state";

export default {
  component: InputSheba,
  title: "components/Molecules/InputSheba"
} as ComponentMeta<typeof InputSheba>;

const SimpleTemplate: ComponentStory<typeof InputSheba> = (args: any) => {
  const [value1, setValue1] = useState("value1", args?.initialValue);

  return (
    <div>
      <div>
        <InputSheba {...args} value={value1} onChange={setValue1} />
      </div>
      <br />
      <br />

      <div>{value1 || ""}</div>
    </div>
  );
};

export const Default = SimpleTemplate.bind({});
Default.args = {
  ...InputSheba.defaultProps,
  name: "input",
  label: "شبا",
  placeholder: "",
  variant: InputSheba.defaultProps.variant
} as IInputShebaProps;

export const InitialValue = SimpleTemplate.bind({});
InitialValue.args = {
  ...Default.args,
  initialValue: "IR062960000000100324200001"
} as IInputShebaProps;

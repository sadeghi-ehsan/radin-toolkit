import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IInputMultiplierProps, InputMultiplier } from ".";
import useState from "storybook-addon-state";

export default {
  component: InputMultiplier,
  title: "components/Molecules/InputMultiplier"
} as ComponentMeta<typeof InputMultiplier>;

const SimpleTemplate: ComponentStory<typeof InputMultiplier> = (args: any) => {
  const [value1, setValue1] = useState("value1", args.value);

  return (
    <div>
      <InputMultiplier
        {...args}
        value={value1}
        onChange={val => {
          setValue1(val);
        }}
      />
      <br />
      <div className="w-56">{JSON.stringify(value1)}</div>
    </div>
  );
};

export const Default = SimpleTemplate.bind({});
Default.args = {
  ...InputMultiplier.defaultProps,
  name: "input",
  label: "عنوان",
  placeholder: "مقدار ورودی ...",
  align: "right",
  options: [
    {
      label: "3x",
      value: "3x"
    },
    {
      label: "2x",
      value: "2x"
    },
    {
      label: "100x",
      value: "100x"
    }
  ]
} as IInputMultiplierProps;

export const InitialValue = SimpleTemplate.bind({});
InitialValue.args = {
  ...Default.args,
  value: {
    value: 10000,
    selectedOption: "1x"
  }
} as IInputMultiplierProps;

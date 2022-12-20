import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IInputMultipleInputsProps, InputMultipleInputs } from ".";
import useState from "storybook-addon-state";

export default {
  component: InputMultipleInputs,
  title: "components/Molecules/InputMultipleInputs"
} as ComponentMeta<typeof InputMultipleInputs>;

const SimpleTemplate: ComponentStory<typeof InputMultipleInputs> = (args: any) => {
  const [value1, setValue1] = useState("value1", args?.initialValue);

  return (
    <div>
      <div className="">
        <InputMultipleInputs {...args} value={value1} onChange={setValue1} />
      </div>
      <br />
      <br />

      <div>{JSON.stringify(value1) || ""}</div>
    </div>
  );
};

export const Default = SimpleTemplate.bind({});
Default.args = {
  ...InputMultipleInputs.defaultProps,
  name: "input",
  label: "آدرس پستی",
  placeholder: "",
  variant: InputMultipleInputs.defaultProps.variant,
  schema: [
    {
      name: "address",
      type: "text",
      placeholder: "آدرس",
      rootClassName: "basis-full"
    },
    {
      name: "no",
      type: "text",
      placeholder: "پلاک",
      rootClassName: "basis-1/4"
    },
    {
      name: "floor",
      type: "text",
      placeholder: "طبقه",
      rootClassName: "basis-1/4"
    },
    {
      name: "unit",
      type: "text",
      placeholder: "واحد",
      rootClassName: "basis-1/4"
    }
  ]
} as IInputMultipleInputsProps;

export const InitialValue = SimpleTemplate.bind({});
InitialValue.args = {
  ...Default.args,
  initialValue: { address: "خیابان مرزداران، کوچه نسترن ،", no: "پلاک ۸", floor: "طبقه 10", unit: "واحد 202" }
} as IInputMultipleInputsProps;

export const ClearedValue = SimpleTemplate.bind({});
ClearedValue.args = {
  ...Default.args,
  clearable: true,
  clearedValue: { address: "خیابان مرزداران، کوچه نسترن ،", no: "پلاک ۸", floor: "طبقه 5000", unit: "واحد 202" }
} as IInputMultipleInputsProps;

import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IInputNumberProps, InputNumber } from ".";

export default {
  component: InputNumber,
  title: "components/Molecules/InputNumber"
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args: any) => {
  const [value1, setValue1] = useState<number>(null);

  return (
    <div>
      <InputNumber
        {...args}
        value={value1}
        onChange={val => {
          setValue1(val);
        }}
      />
      <div dir="ltr" className="mt-3 text-right">
        {value1}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...InputNumber.defaultProps,
  name: "input",
  label: "عنوان",
  placeholder: "۵۰",
  min: -2,
  max: 6
} as IInputNumberProps;

export const PlusMinus = Template.bind({});
PlusMinus.args = {
  ...InputNumber.defaultProps,
  name: "PlusMinus",
  label: "عنوان",
  placeholder: "۵۰",
  counterType: "plus/minus",
  min: -2,
  max: 6
} as IInputNumberProps;

export const NoCounterButton = Template.bind({});
NoCounterButton.args = {
  ...InputNumber.defaultProps,
  name: "NoCounterButton",
  label: "عنوان",
  placeholder: "۵۰",
  counterType: "none",
  min: -2,
  max: 6
} as IInputNumberProps;

export const SmallInputNumber = Template.bind({});
SmallInputNumber.args = {
  ...InputNumber.defaultProps,
  name: "SmallInputNumber",
  label: "M",
  placeholder: "۵۰",
  counterType: "none",
  variant: "fill",
  baseInputClassName: "w-9 h-auto !text-center !px-0",
  legendClassName: "!mx-auto"
} as IInputNumberProps;

export const MinMax = Template.bind({});
MinMax.args = {
  ...InputNumber.defaultProps,
  name: "PlusMinus",
  label: "عنوان",
  placeholder: "۵۰",
  counterType: "plus/minus",
  min: -200,
  max: 600
} as IInputNumberProps;

export const negativePositives = Template.bind({});
negativePositives.args = {
  ...InputNumber.defaultProps,
  name: "PlusMinus",
  label: "عنوان",
  placeholder: "۵۰",
  counterType: "plus/minus",
  min: -200,
  max: 600,
  negativesInRed: true,
  positivesInGreen: true
} as IInputNumberProps;

export const commaSeparated = Template.bind({});
commaSeparated.args = {
  ...InputNumber.defaultProps,
  name: "PlusMinus",
  label: "عنوان",
  placeholder: "۵۰",
  counterType: "plus/minus",
  min: -20000,
  max: 60000,
  commaSeparated: true
} as IInputNumberProps;

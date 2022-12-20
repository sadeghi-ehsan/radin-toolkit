// Slider.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import useState from "storybook-addon-state";
import { Slider } from ".";
import { ISliderProps } from "./types";

export default {
  title: "components/Atoms/Slider",
  component: Slider,
  argTypes: {
    children: { control: { disable: true } }
  }
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = args => {
  const [value1, setValue1] = useState<number>("value1", 0);

  return (
    <div className="w-96">
      <Slider
        {...args}
        range={false} /** because of typescript */
        onChange={val => {
          setValue1(val);
        }}
        value={value1}
        defaultValue={args.defaultValue as number}
      />
      <div>{value1}</div>
    </div>
  );
};

const RangeTemplate: ComponentStory<typeof Slider> = args => {
  const [value2, setValue2] = useState<[number, number]>("value2", (args.defaultValue as [number, number]) || [10, 50]);

  return (
    <div className="w-96">
      <Slider
        {...args}
        range
        onChange={val => {
          setValue2(val);
        }}
        value={value2}
        defaultValue={args.defaultValue as [number, number]}
      />
      <div>{value2}</div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Slider.defaultProps,
  min: 0,
  max: 100,
  color: "primary",
  marks: {
    0: { label: "0", step: 5 },
    20: { label: "20", step: 12 },
    40: "40",
    60: { label: "60", step: 22 },
    80: "80",
    100: "بیش از ۱۰۰"
  }
} as ISliderProps;

export const TooltipAlwaysVisible = Template.bind({});
TooltipAlwaysVisible.args = {
  ...Default.args,
  tooltipVisible: true
} as ISliderProps;

export const Marks = Template.bind({});
Marks.args = {
  ...Slider.defaultProps,
  min: 0,
  max: 100,
  color: "primary",
  step: 10,
  marks: {
    0: "0",
    30: "30",
    40: "40",
    70: "70",
    100: "بیش از ۱۰۰"
  },
  tooltipVisible: true
} as ISliderProps;

export const Time_HH_MM_SS = Template.bind({});
Time_HH_MM_SS.args = {
  ...Slider.defaultProps,
  min: 0,
  max: 86399,
  color: "primary",
  step: 1,
  tipFormatter: val => new Date(val * 1000).toISOString().substring(11, 19),
  tooltipVisible: true
} as ISliderProps;

export const Time_HH_MM = Template.bind({});
Time_HH_MM.args = {
  ...Slider.defaultProps,
  min: 0,
  max: 86399,
  color: "primary",
  step: 60,
  tipFormatter: val => new Date(val * 1000).toISOString().substring(11, 16),
  tooltipVisible: true
} as ISliderProps;

export const Center = Template.bind({});
Center.args = {
  ...Slider.defaultProps,
  min: 0,
  max: 100,
  color: "primary",
  step: 10,
  marks: {
    0: "0",
    20: "20",
    40: "40",
    60: "60",
    80: "80",
    100: "بیش از ۱۰۰"
  },
  centerLabel: true,
  tooltipVisible: true
} as ISliderProps;

export const Error = Template.bind({});
Error.args = {
  ...Slider.defaultProps,
  min: 0,
  max: 100,
  color: "error",
  step: 10,
  marks: {
    0: "0",
    20: "20",
    40: "40",
    60: "60",
    80: "80",
    100: "بیش از ۱۰۰"
  },
  tooltipVisible: true
} as ISliderProps;

export const Range = RangeTemplate.bind({});
Range.args = {
  ...Slider.defaultProps,
  min: 0,
  max: 100,
  color: "primary",
  step: 10,
  marks: {
    0: "0",
    20: "20",
    40: "40",
    60: "60",
    80: "80",
    100: "بیش از ۱۰۰"
  },
  defaultValue: [10, 80],
  tooltipVisible: true
} as ISliderProps;

export const DisableMarks = RangeTemplate.bind({});
DisableMarks.args = {
  ...Slider.defaultProps,
  min: 0,
  max: 100,
  color: "primary",
  step: 10,
  marks: {
    0: "0",
    100: "100"
  },
  defaultValue: [10, 80],
  disableMarks: true
} as ISliderProps;

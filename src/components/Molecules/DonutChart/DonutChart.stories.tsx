// DonutChart.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DonutChart, IDonutChartProps } from "./index";

const centerText = `<span>B</span>1,315`;

const data1 = [
  {
    name: "مرابحه",
    color: "#0A84FF",
    y: 38.04
  },
  {
    name: "مکاشفه",
    color: "#0c4175",
    y: 30.2
  },
  {
    name: "اوراق بانکی",
    color: "#030c73",
    y: 20.66
  },
  {
    name: "سهام عدالت",
    color: "#989898",
    y: 11.1
  }
];

const data2 = [
  {
    name: "مرابحه",
    color: "#0A84FF",
    y: 64
  },
  {
    name: "سهام عدالت",
    color: "#989898",
    y: 36
  }
];

export default {
  title: "components/Molecules/DonutChart",
  component: DonutChart
} as ComponentMeta<typeof DonutChart>;

const Template: ComponentStory<typeof DonutChart> = args => {
  return (
    <div className="container">
      <DonutChart {...args} />
    </div>
  );
};

export const TwoValues = Template.bind({});
TwoValues.args = {
  ...DonutChart.defaultProps,
  data: data2,
  centerText,
  condition: "Ascending"
} as IDonutChartProps;

export const MoreValues = Template.bind({});
MoreValues.args = {
  ...DonutChart.defaultProps,
  centerText,
  condition: "Descending",
  data: data1
} as IDonutChartProps;

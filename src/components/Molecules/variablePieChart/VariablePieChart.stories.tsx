// variablePieChart.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { VariablePieChart, IVariablePieChartProps } from "./index";
import { colors } from "../../../constants/tailwind";

const data = [
  {
    y: 33,
    z: 8,
    color: colors.primary
  },
  {
    y: 24,
    z: 7,
    color: colors["primary-hover"]
  },
  {
    y: 15,
    z: 5,
    color: colors["primary-focus"]
  },
  {
    y: 18,
    z: 7,
    color: colors["primary-border"]
  },
  {
    y: 10,
    z: 3,
    color: colors["light-text"]
  }
];

export default {
  title: "components/Molecules/variablePieChart",
  component: VariablePieChart
} as ComponentMeta<typeof VariablePieChart>;

const Template: ComponentStory<typeof VariablePieChart> = args => {
  return (
    <div className="container">
      <VariablePieChart {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...VariablePieChart.defaultProps,
  data: data
} as IVariablePieChartProps;

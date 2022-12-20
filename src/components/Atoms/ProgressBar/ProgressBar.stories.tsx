// ProgressBar.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProgressBar } from ".";
import { IProgressBarProps } from "./types";

export default {
  title: "components/Atoms/ProgressBar",
  component: ProgressBar,
  argTypes: {
    children: { control: { disable: true } }
  }
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = args => {
  return (
    <div className="w-60">
      <ProgressBar {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...ProgressBar.defaultProps,
  percent: 30
} as IProgressBarProps;

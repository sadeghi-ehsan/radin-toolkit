import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tooltip } from ".";
import { ITooltipProps } from "./types";

export default {
  title: "components/Atoms/Tooltip",
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => {
  return <Tooltip {...args}>Hover on me</Tooltip>;
};

export const Default = Template.bind({});
Default.args = {
  ...Tooltip.defaultProps,
  title: "Hover tooltip"
} as ITooltipProps;

// Divider.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Divider } from ".";
import { IDividerProps } from "./types";

export default {
  title: "components/Atoms/Divider",
  component: Divider
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = args => {
  return (
    <div className={[args.isVertical ? "flex" : "", "text-white"].join(" ")}>
      before divider
      <Divider {...args} />
      after divider
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Divider.defaultProps,
  isVertical: false
} as IDividerProps;

export const Vertical = Template.bind({});
Vertical.args = {
  ...Divider.defaultProps,
  isVertical: true
} as IDividerProps;

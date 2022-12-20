// Badge.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SwitchToggler } from ".";
import { ISwitchTogglerProps } from "./types";

export default {
  title: "components/Atoms/SwitchToggler",
  component: SwitchToggler
} as ComponentMeta<typeof SwitchToggler>;

const Template: ComponentStory<typeof SwitchToggler> = args => {
  return <SwitchToggler {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...SwitchToggler.defaultProps
} as ISwitchTogglerProps;

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IToggleButtonProps, ToggleButton } from "./index";

export default {
  title: "components/Atoms/ToggleButton",
  component: ToggleButton,
  argTypes: {
    value: { control: { disable: true } }
  }
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = args => {
  return (
    <div className="flex w-125 justify-around">
      <ToggleButton {...args} onChange={checked => console.log("checked", checked)}>
        همه دوره ها
      </ToggleButton>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...ToggleButton.defaultProps
} as IToggleButtonProps;

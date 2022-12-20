import { ComponentStory } from "@storybook/react";

export default {
  title: "components/Atoms/Scrollbar"
};

const Template: ComponentStory<any> = args => {
  return (
    <div {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  );
};

export const Vertical = Template.bind({});
Vertical.args = {
  className: "h-48 w-36 overflow-y-auto scrollbar-primary"
};
export const VerticalSmall = Template.bind({});
VerticalSmall.args = {
  className: "h-48 w-36 overflow-y-auto scrollbar-primary-sm"
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  className: "h-10 max-w-md overflow-x-scroll overflow-y-hidden scrollbar-primary whitespace-nowrap"
};

export const VerticalWhite = Template.bind({});
VerticalWhite.args = {
  className: "h-48 w-36 overflow-y-auto scrollbar-white"
};

export const VerticalWhiteSmall = Template.bind({});
VerticalWhiteSmall.args = {
  className: "h-48 w-36 overflow-y-auto scrollbar-white-sm"
};

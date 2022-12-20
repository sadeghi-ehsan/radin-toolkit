import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loading } from ".";
import { ILoadingProps } from "./types";

export default {
  title: "components/Atoms/Loading",
  component: Loading
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = args => {
  return (
    <>
      <div className="flex items-center space-x-10 space-x-reverse">
        <Loading {...args} className="w-16 h-16" />
        <Loading {...args} />
        <Loading {...args} className="w-5 h-5" />
        <Loading {...args} className="w-3 h-3" />
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Loading.defaultProps
} as ILoadingProps;

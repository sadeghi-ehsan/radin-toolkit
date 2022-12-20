// Divider.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { classJoin } from "../../../utils";
import { Header } from ".";
import { IHeaderProps } from "./types";

export default {
  title: "components/Organisms/Header",
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => {
  return (
    <div className={classJoin(["-m-4 h-screen w-screen"])}>
      <Header {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  profileName: "مهراد رمضانی پور",
  handleClickLogout: () => {
    console.log("handleClickLogout");
  },
  handleClickNotification: () => {
    console.log("handleClickNotification");
  },
  ...Header.defaultProps
} as IHeaderProps;

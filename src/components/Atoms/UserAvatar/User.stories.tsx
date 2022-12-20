// UserAvatar.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserAvatar } from ".";
import { IUserProps } from "./types";

const users: Array<IUserProps> = [
  { firstName: "سجاد", lastName: "موسوی" },
  { firstName: "حسن", lastName: "حسینی" },
  { firstName: "ژاله", lastName: "کبیری" },
  { firstName: "اکبر", lastName: "فرهادی" }
];

export default {
  title: "components/Atoms/UserAvatar",
  component: UserAvatar
} as ComponentMeta<typeof UserAvatar>;

const Template: ComponentStory<typeof UserAvatar> = args => {
  return <UserAvatar {...args} />;
};

export const singleUser = Template.bind({});
singleUser.args = {
  ...UserAvatar.defaultProps,
  role: "ویرایشگر",
  firstName: "سجاد",
  lastName: "موسوی"
} as IUserProps;

export const multiUser = Template.bind({});
multiUser.args = {
  ...UserAvatar.defaultProps,
  users: users
} as IUserProps;

// Notification.stories.ts|tsx

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FunctionComponent } from "react";
import { BankCardAdd } from "@sadeghi-ehsan/radin-icon";
import { notification } from ".";
import { Button } from "../Button";
import { INotificationProps } from "./types";

export default {
  title: "components/Atoms/notification",
  component: notification
} as ComponentMeta<FunctionComponent<INotificationProps>>;

const Template: ComponentStory<FunctionComponent<INotificationProps>> = args => (
  <Button
    className="p-4"
    onClick={() => {
      notification(args);
    }}
  >
    open notification
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  title: "عنوان",
  message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
  color: "primary",
  duration: 3,
  hasIcon: true,
  hasConfirm: false,
  confirmText: "تایید",
  hasCancel: false,
  hasCloseIcon: true,
  cancelText: "انصراف",
  onClose: () => {
    console.log("close fired in storybook demo");
  },
  onConfirm: close => {
    close();
    console.log("Confirm fired in storybook demo");
  },
  onCancel: close => {
    close();
    console.log("Cancel fired in storybook demo");
  },
  subDescription: null
  // icon: Check
} as INotificationProps;

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  ...Default.args,
  icon: <BankCardAdd />
} as INotificationProps;

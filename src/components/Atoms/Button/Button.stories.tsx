// Button.stories.ts|tsx

import { Button, IButtonProps } from ".";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Chevron, Envelope, Plus, PlusSquare } from "radin-icon";
import failIcon from "./story-book-assets/fail.lottiefile.json";
import loadingIcon from "./story-book-assets/loading.lottiefile.json";
import successIcon from "./story-book-assets/success.lottiefile.json";
import LottieComponent from "./story-book-components/LottieComponent";
import { buttonThemes } from "./utils";

export default {
  title: "components/Atoms/Button",
  component: Button,
  argTypes: {
    theme: { control: { disable: true } },
    variant: { control: { disable: true } }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <>
    {Object.keys(buttonThemes).map((value, index) => (
      <div key={index} className="w-full mb-5 flex justify-center items-center flex-col">
        <h6 className="text-white">{value}</h6>
        <Button {...args} theme={value as any} />
      </div>
    ))}
  </>
);

const SuccessRender: ComponentStory<typeof Button> = args => (
  <div className="w-full mb-5 flex justify-center items-center flex-col">
    <h6 className="text-white">Success</h6>
    <Button {...args} theme={"success"} />
  </div>
);

const FailRender: ComponentStory<typeof Button> = args => (
  <div className="w-full mb-5 flex justify-center items-center flex-col">
    <h6 className="text-white">Failed</h6>
    <Button {...args} theme={"error"} />
  </div>
);

const LoadingRender: ComponentStory<typeof Button> = args => (
  <div className="w-full mb-5 flex justify-center items-center flex-col">
    <h6 className="text-white">Loading</h6>
    <Button {...args} theme={"primary"} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...Button.defaultProps,
  variant: "default",
  className: "my-1",
  children: "ورود"
} as IButtonProps;

export const Outline = Template.bind({});
Outline.args = {
  ...Default.args,
  variant: "outline"
} as IButtonProps;

export const Text = Template.bind({});
Text.args = {
  ...Default.args,
  variant: "text"
} as IButtonProps;

export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
  ...Default.args,
  variant: "text",
  children: "ورود با ایــــمیل",
  startIcon: <Envelope />,
  endIcon: <Chevron weight="bold" size=".6xs" />
} as IButtonProps;

export const Icon = Template.bind({});
Icon.args = {
  ...Default.args,
  isIcon: true,
  children: <PlusSquare size="xl" />,
  className: ""
} as IButtonProps;

export const IconOutline = Template.bind({});
IconOutline.args = {
  ...Default.args,
  variant: "outline",
  isIcon: true,
  children: <PlusSquare size="xl" />,
  className: ""
} as IButtonProps;

export const AnimatedSuccess = SuccessRender.bind({});
AnimatedSuccess.args = {
  ...Default.args,
  children: "تایید",
  startIcon: <LottieComponent animationFile={successIcon} />
} as IButtonProps;

export const AnimatedFail = FailRender.bind({});
AnimatedFail.args = {
  ...Default.args,
  children: "تلاش مجدد",
  startIcon: <LottieComponent animationFile={failIcon} />
} as IButtonProps;

export const AnimatedLoad = LoadingRender.bind({});
AnimatedLoad.args = {
  ...Default.args,
  children: "تایید",
  startIcon: <LottieComponent animationFile={loadingIcon} />
} as IButtonProps;

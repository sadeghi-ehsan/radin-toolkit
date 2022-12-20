import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Textarea } from ".";
import { ITextareaProps } from "./types";

export default {
  component: Textarea,
  title: "components/Molecules/Textarea"
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = args => {
  const text =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.";

  const [value, setValue] = React.useState(text);

  return (
    <div className="w-60">
      <Textarea
        {...args}
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
      />
      <div className="mt-4">{value}</div>
    </div>
  );
};

export const Default: ComponentStory<typeof Textarea> = Template.bind({});
Default.args = {
  ...Textarea.defaultProps,
  label: "عنوان",
  variant: "outline"
} as ITextareaProps;

export const KeepOpen: ComponentStory<typeof Textarea> = Template.bind({});
KeepOpen.args = {
  ...Textarea.defaultProps,
  label: "عنوان",
  variant: "outline",
  keepOpen: true,
  rows: 10
} as ITextareaProps;

export const Disabled: ComponentStory<typeof Textarea> = Template.bind({});
Disabled.args = {
  ...Textarea.defaultProps,
  label: "عنوان",
  variant: "outline",
  disabled: true
} as ITextareaProps;

export const ReadOnly: ComponentStory<typeof Textarea> = Template.bind({});
ReadOnly.args = {
  ...Textarea.defaultProps,
  label: "عنوان",
  variant: "outline",
  readOnly: true
} as ITextareaProps;

export const Resizable: ComponentStory<typeof Textarea> = Template.bind({});
Resizable.args = {
  ...Textarea.defaultProps,
  label: "عنوان",
  variant: "outline",
  resize: "both",
  block: false,
  keepOpen: false
} as ITextareaProps;

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge, Typography } from "../../../";
import { IFormElWrapperProps, FormElementWrapper } from ".";
import { Activity } from "@sadeghi-ehsan/radin-icon";

export default {
  component: FormElementWrapper,
  title: "components/Atoms/FormElementWrapper"
} as ComponentMeta<typeof FormElementWrapper>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof FormElementWrapper> = (args: any) => (
  <div className="w-72">
    <FormElementWrapper {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...FormElementWrapper.defaultProps,
  name: "input",
  label: "پیش‌فرض",
  placeholder: "مقدار ورودی ..."
} as IFormElWrapperProps;

export const DefaultWithValidation = Template.bind({});
DefaultWithValidation.args = {
  ...Default.args,
  label: "پیش‌فرض (با احراز)",
  error: "مقدار فیلد الزامی است"
} as IFormElWrapperProps;

export const Line = Template.bind({});
Line.args = {
  ...Default.args,
  label: "خط دور",
  variant: "line"
} as IFormElWrapperProps;

export const LineWithValidation = Template.bind({});
LineWithValidation.args = {
  ...Line.args,
  label: "خط دور (با احراز)",
  error: "مقدار فیلد الزامی است"
} as IFormElWrapperProps;

export const Fill = Template.bind({});
Fill.args = {
  ...Default.args,
  label: "رنگ پرشده",
  variant: "fill"
} as IFormElWrapperProps;

export const FillWithValidation = Template.bind({});
FillWithValidation.args = {
  ...Fill.args,
  label: "رنگ پرشده (با احراز)",
  error: "مقدار فیلد الزامی است"
} as IFormElWrapperProps;

export const ClearIcon = Template.bind({});
ClearIcon.args = {
  ...Default.args,
  label: "دگمه پاک‌کردن",
  variant: FormElementWrapper.defaultProps.variant,
  clearable: true
} as IFormElWrapperProps;

export const IsRequired = Template.bind({});
IsRequired.args = {
  ...Default.args,
  label: "الزامی",
  variant: FormElementWrapper.defaultProps.variant,
  required: true
} as IFormElWrapperProps;

export const IsImportant = Template.bind({});
IsImportant.args = {
  ...Default.args,
  label: "با اهمیت",
  variant: FormElementWrapper.defaultProps.variant,
  important: true
} as IFormElWrapperProps;

export const StartAdornmentText = Template.bind({});
StartAdornmentText.args = {
  ...Default.args,
  label: "متن ابتدا",
  variant: FormElementWrapper.defaultProps.variant,
  startAdornment: (
    <Typography color="idle" className="whitespace-nowrap" variant="body1">
      خرید (٪)
    </Typography>
  )
} as IFormElWrapperProps;
export const EndAdornmentText = Template.bind({});
EndAdornmentText.args = {
  ...Default.args,
  label: "متن انتها",
  variant: FormElementWrapper.defaultProps.variant,
  endAdornment: (
    <Typography color="idle" className="whitespace-nowrap" variant="body1">
      خرید (٪)
    </Typography>
  )
} as IFormElWrapperProps;

export const StartAdornmentBadge = Template.bind({});
StartAdornmentBadge.args = {
  ...Default.args,
  label: "نشان ابتدا",
  variant: FormElementWrapper.defaultProps.variant,
  startAdornment: <Badge>تومان</Badge>
} as IFormElWrapperProps;

export const StartAdornmentIcon = Template.bind({});
StartAdornmentIcon.args = {
  ...Default.args,
  label: "آیکون ابتدا",
  variant: FormElementWrapper.defaultProps.variant,
  startAdornment: <Activity size="xl" color="idle" />
} as IFormElWrapperProps;

export const EndAdornmentIcon = Template.bind({});
EndAdornmentIcon.args = {
  ...Default.args,
  label: "آیکون انتها",
  variant: FormElementWrapper.defaultProps.variant,
  endAdornment: <Activity size="xl" color="idle" />
} as IFormElWrapperProps;

export const Help = Template.bind({});
Help.args = {
  ...Default.args,
  label: "متن راهنما",
  variant: FormElementWrapper.defaultProps.variant,
  help: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
} as IFormElWrapperProps;

export const HelpWithValidation = Template.bind({});
HelpWithValidation.args = {
  ...Help.args,
  error: "مقدار فیلد الزامی است"
} as IFormElWrapperProps;

export const IconSequence = Template.bind({});
IconSequence.args = {
  ...Default.args,
  label: "تمام امکانات",
  variant: FormElementWrapper.defaultProps.variant,
  startAdornment: <Activity size="xl" color="idle" />,
  endAdornment: <Activity size="xl" color="idle" />,
  clearable: true
} as IFormElWrapperProps;

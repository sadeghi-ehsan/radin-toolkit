import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge, Popover, Typography } from "../../../";
import { IInputProps, Input } from ".";
import useState from "storybook-addon-state";
import { Activity, ExternalLink } from "radin-icon";
import { classJoin } from "../../../utils";

export default {
  component: Input,
  title: "components/Molecules/Input",
  argTypes: {
    validators: { control: { disable: true } }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ validators, ...args }: IInputProps & { validators: any[] }) => {
  const [value, setValue] = useState("value1", undefined);

  return (
    <div className="w-72">
      <Input {...args} value={value} onChange={v => setValue(v)} />
      <br />
      <div className="max-w-[380px]">{value}</div>
    </div>
  );
};

// eslint-disable-next-line react/jsx-props-no-spreading
const ModalOpenerTemplate: ComponentStory<typeof Input> = ({ validators, ...args }: any) => {
  // states that should be used for a single input without RHF
  const [isPopoverVisible, setPopoverVisible] = useState("value1", false);

  return (
    <form className="w-72">
      <Input
        {...args}
        endAdornment={
          <Popover trigger={["click"]} content={args?.popoverContent} onVisibleChange={v => setPopoverVisible(v)}>
            <ExternalLink
              size="xl"
              className={classJoin([
                "cursor-pointer",
                isPopoverVisible ? "text-primary" : "text-idle hover:text-primary"
              ])}
            />
          </Popover>
        }
      />
      <br />
    </form>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Input.defaultProps,
  name: "input",
  label: "پیش‌فرض",
  placeholder: "مقدار ورودی ..."
} as IInputProps;

export const DefaultWithError = Template.bind({});
DefaultWithError.args = {
  ...Default.args,
  label: "پیش‌فرض (با خطا)",
  error: "نمونه خطا"
} as IInputProps;

export const Line = Template.bind({});
Line.args = {
  ...Default.args,
  label: "خط دور",
  variant: "line"
} as IInputProps;

export const LineWithError = Template.bind({});
LineWithError.args = {
  ...Line.args,
  label: "خط دور (با احراز)",
  error: "نمونه خطا"
} as IInputProps;

export const Fill = Template.bind({});
Fill.args = {
  ...Default.args,
  label: "رنگ پرشده",
  variant: "fill"
} as IInputProps;

export const FillWithError = Template.bind({});
FillWithError.args = {
  ...Fill.args,
  label: "رنگ پرشده (با احراز)",
  error: "نمونه خطا"
} as IInputProps;

export const ClearIcon = Template.bind({});
ClearIcon.args = {
  ...Default.args,
  label: "دگمه پاک‌کردن",
  variant: Input.defaultProps.variant,
  clearable: true
} as IInputProps;

export const IsRequired = Template.bind({});
IsRequired.args = {
  ...Default.args,
  label: "الزامی",
  variant: Input.defaultProps.variant,
  required: true
} as IInputProps;

export const IsImportant = Template.bind({});
IsImportant.args = {
  ...Default.args,
  label: "با اهمیت",
  variant: Input.defaultProps.variant,
  important: true
} as IInputProps;

export const StartAdornmentText = Template.bind({});
StartAdornmentText.args = {
  ...Default.args,
  label: "متن ابتدا",
  variant: Input.defaultProps.variant,
  startAdornment: (
    <Typography color="idle" className="whitespace-nowrap" variant="body1">
      خرید (٪)
    </Typography>
  )
} as IInputProps;
export const EndAdornmentText = Template.bind({});
EndAdornmentText.args = {
  ...Default.args,
  label: "متن انتها",
  variant: Input.defaultProps.variant,
  endAdornment: (
    <Typography color="idle" className="whitespace-nowrap" variant="body1">
      خرید (٪)
    </Typography>
  )
} as IInputProps;

export const StartAdornmentBadge = Template.bind({});
StartAdornmentBadge.args = {
  ...Default.args,
  label: "نشان ابتدا",
  variant: Input.defaultProps.variant,
  startAdornment: <Badge>تومان</Badge>
} as IInputProps;

export const StartAdornmentIcon = Template.bind({});
StartAdornmentIcon.args = {
  ...Default.args,
  label: "آیکون ابتدا",
  variant: Input.defaultProps.variant,
  startAdornment: <Activity size="xl" color="idle" />
} as IInputProps;

export const EndAdornmentIcon = Template.bind({});
EndAdornmentIcon.args = {
  ...Default.args,
  label: "آیکون انتها",
  variant: Input.defaultProps.variant,
  endAdornment: <Activity size="xl" color="idle" />
} as IInputProps;

export const Help = Template.bind({});
Help.args = {
  ...Default.args,
  label: "متن راهنما",
  variant: Input.defaultProps.variant,
  error: "نمونه خطا",
  help: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
} as IInputProps;

export const IconSequence = Template.bind({});
IconSequence.args = {
  ...Default.args,
  label: "تمام امکانات",
  variant: Input.defaultProps.variant,
  startAdornment: <Activity size="xl" color="idle" />,
  endAdornment: <Activity size="xl" color="idle" />,
  clearable: true
} as IInputProps;

export const ModalOpener = ModalOpenerTemplate.bind({});
ModalOpener.args = {
  ...Default.args,
  label: "ModalOpenerInput",
  popoverContent: <div>body of the popover</div>
} as IInputProps;

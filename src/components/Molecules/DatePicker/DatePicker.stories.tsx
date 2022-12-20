// DatePicker.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DatePicker } from "./index";
import { IDatePickerProps } from "./types";
import { Button } from "../../../index";
import { BankCardAdd } from "@sadeghi-ehsan/radin-icon";
import { toJalaliDay } from "../../../utils";
import useState from "storybook-addon-state";

export default {
  title: "components/Molecules/DatePicker",
  component: DatePicker
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = args => {
  const [value, setValue] = useState<any>("value1", args.value);

  return <DatePicker {...args} onChange={v => console.log("storybook onchange: ", v)} />;
};

export const Default = Template.bind({});
Default.args = {
  ...DatePicker.defaultProps,
  placeholder: "لطفا تاریخ عضویت را انتخاب کنید",
  label: "تاریخ",
  calendarProps: {
    header: "انتخاب تاریخ عضویت"
  }
} as IDatePickerProps;

export const Plain = Template.bind({});
Plain.args = {
  ...DatePicker.defaultProps,
  placeholder: "لطفا تاریخ عضویت را انتخاب کنید",
  endAdornment: null,
  variant: "none",
  calendarProps: {
    header: "انتخاب تاریخ عضویت"
  }
} as IDatePickerProps;

export const InitialValue = Template.bind({});
InitialValue.args = {
  ...DatePicker.defaultProps,
  value: "2020-03-01T20:30:00.000Z", // 2020-03-01T20:30:00.000Z | 2020-02-01T20:30:00+00:00 | 2020-02-01
  placeholder: "لطفا تاریخ عضویت را انتخاب کنید",
  calendarProps: {
    label: "تاریخ",
    header: "انتخاب تاریخ عضویت"
  }
} as IDatePickerProps;

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  ...DatePicker.defaultProps,
  calendarProps: {
    header: "انتخاب تاریخ عضویت"
  },
  element: <BankCardAdd />
} as IDatePickerProps;

export const CustomComponent = Template.bind({});
CustomComponent.args = {
  ...DatePicker.defaultProps,
  calendarProps: {
    header: "انتخاب تاریخ عضویت"
  },
  element: ({ value }) => (
    <div>{Array.isArray(value) ? "" : toJalaliDay(value).format() || "هنوز تاریخ انتخاب نشده"}</div>
  )
} as IDatePickerProps;

export const Footer = Template.bind({});
Footer.args = {
  ...DatePicker.defaultProps,
  calendarProps: {
    children: (
      <div className="flex flex-row text-center justify-center pb-2">
        <Button className="m-2" theme={"error"}>
          انصراف
        </Button>
        <Button className="m-2">اعمال تاریخ</Button>
      </div>
    )
  }
} as IDatePickerProps;

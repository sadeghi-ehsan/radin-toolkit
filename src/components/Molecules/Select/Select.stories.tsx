import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ISelectProps, Select } from ".";

const options = [
  { value: "آبان دخت", label: "آبان دخت" },
  { value: "آبتين", label: "آبتين" },
  { value: "آتوسا", label: "آتوسا" },
  { value: "آفر", label: "آفر" },
  { value: "آفره دخت", label: "آفره دخت" },
  { value: "نامور", label: "نامور" },
  { value: "ناهيد", label: "ناهيد" },
  { value: "ندا", label: "ندا" },
  { value: "نرسي", label: "نرسي" },
  { value: "نرگس", label: "نرگس" },
  { value: "نرمک", label: "نرمک" },
  { value: "نرمين", label: "نرمين" },
  { value: "نريمان", label: "نريمان" },
  { value: "نسترن", label: "نسترن" },
  { value: "نسرين", label: "نسرين" },
  { value: "نسرين دخت", label: "نسرين دخت" },
  { value: "نسرين نوش", label: "نسرين نوش" },
  { value: "نکيسا", label: "نکيسا" },
  { value: "نگار", label: "نگار" },
  { value: "نگاره", label: "نگاره" },
  { value: "نگارين", label: "نگارين" },
  { value: "نگين", label: "نگين" },
  { value: "نوا", label: "نوا" },
  { value: "نوش ( انوش )", label: "نوش ( انوش )" }
];

export default {
  component: Select,
  title: "components/Molecules/Select",
  argTypes: {}
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => (
  <div className="w-[380px]">
    <Select {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...Select.defaultProps,
  type: "default",
  name: "select",
  label: "پیش‌فرض",
  placeholder: "انتخاب کنید ...",
  options: options
} as ISelectProps;

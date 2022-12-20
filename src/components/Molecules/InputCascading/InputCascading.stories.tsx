import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IInputCascadingProps, InputCascading } from ".";
import useState from "storybook-addon-state";

export default {
  component: InputCascading,
  title: "components/Molecules/InputCascading"
} as ComponentMeta<typeof InputCascading>;

const SimpleTemplate: ComponentStory<typeof InputCascading> = (args: any) => {
  const [value1, setValue1] = useState("value1", args.value);

  return (
    <div>
      <InputCascading {...args} value={value1} onChange={setValue1} />

      <div className="mt-5 whitespace-pre dir-ltr">{JSON.stringify(value1, null, 10)}</div>
    </div>
  );
};

export const Default = SimpleTemplate.bind({});
Default.args = {
  ...InputCascading.defaultProps,
  name: "input",
  label: "عنوان",
  placeholder: "مقدار ورودی ...",
  options: [
    {
      label: "ریال",
      value: "rial"
    },
    {
      label: "تومان",
      value: "toman"
    }
  ]
} as IInputCascadingProps;

export const InitialValue = SimpleTemplate.bind({});
InitialValue.args = {
  ...Default.args,
  value: {
    value: 10000,
    selectedOption: "toman"
  }
} as IInputCascadingProps;

export const Select = SimpleTemplate.bind({});
Select.args = {
  ...Default.args,
  inputType: "select",
  label: "پیش‌فرض",
  placeholder: "انتخاب کنید ...",
  selectOptions: [
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
  ]
} as IInputCascadingProps;

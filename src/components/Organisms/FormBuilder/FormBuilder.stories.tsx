import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormBuilder } from ".";
import { IFormBuilderProps } from "./types";
import { yup } from "../../../utils";
import { Button } from "../../Atoms/Button";
import useFormBuilder from "./components/useFormBuilder";

export default {
  title: "components/Organisms/FormBuilder",
  component: FormBuilder
} as ComponentMeta<typeof FormBuilder>;

const Template: ComponentStory<typeof FormBuilder> = args => {
  const form = useFormBuilder();
  const { control, formState, getFieldState, getValues, register, reset, watch, handleSubmit } = form.formProps;

  const isFormSubmitting = formState.isSubmitting;

  return (
    <div className="w-full max-w-xl my-4">
      <div className="mb-10">
        <p>
          1. نمایش کد پستی وابسته به فیلد دیگری است. کد پستی در صورتی نمایش داده می‌شود که آدرس خالی نباشد (جهت تست مخفی
          سازی فیلد در schema)
        </p>
        <p>
          2. ولیدیشن شماره تلفن ثابت وابسته به فیلد دیگری است. در صورتی اجباری می‌شود که فیلد آدرس پستی پر شده باشد.
          (جهت تست ولیدیشن های وابسته به فیلد دیگر)
        </p>
        <p>
          3. اگر در آدرس کلمه ی تهران باشد، فیلد تلفن ولیدیشن می‌گیرد که باید ۸ رقمی باشد (جهت تست ولیدیشن بر اساس مقدار
          فیلد دیگر)
        </p>
        <p>4. شماره موبایل ولیدیشن کاستوم گرفته است و علاوه بر اجباری بودن، فقط 11 رقم را میگیرد. (جهت تست ولیدیشن)</p>
        <p>5. شماره شبا اگر شماره کارت خالی باشد disable می‌شود (جهت تست کردن دسترسی به فرم در schema)</p>
        <p>6. اگر فرم در حالت view باشد تمام اینپوت ها به حالت readOnly درمی آیند.</p>
        <p>
          7. فیلد شماره تلفن کاری جهت تست کردن ولیدیشن آپشنال است. تنها در صورتی ولیدیشن چک میشود که پر باشد. اگر خالی
          بود دیگر ولیدیشن آن چک نخواهد شد.
        </p>
      </div>

      <FormBuilder
        id="form-1"
        form={form}
        {...args}
        onSubmit={handleSubmit(args.onSubmit || (() => console.log("form submitted")))}
      />

      <Button type="submit" form="form-1" variant="outline" className="mt-2">
        دکمه ای که خارج از فرم قرار دارد
      </Button>
    </div>
  );
};

const TemplateEmpty: ComponentStory<typeof FormBuilder> = args => {
  const form = useFormBuilder();
  const { handleSubmit } = form.formProps;

  return (
    <div className="w-full max-w-xl my-4 min-w-96">
      <FormBuilder
        form={form}
        {...args}
        onSubmit={handleSubmit(args.onSubmit || (() => console.log("form submitted")))}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...FormBuilder.defaultProps,
  onSubmit: (formValues: any) => console.log(formValues),
  schema: [
    {
      fieldType: "Input",
      // className: "w-full sm:w-1/2"
      width: "1/2",
      rule: yup.string().required("نام الزامی میباشد").ucFirst(),
      props: {
        name: "firstName",
        label: "نام",
        placeholder: "نام",
        required: true,
        preserveErrorBox: true
      }
    },
    {
      fieldType: "Input",
      width: "1/2",
      props: {
        name: "lastName",
        label: "نام خانوادگی",
        placeholder: "نام خانوادگی",
        // required: true,
        preserveErrorBox: true
      }
    },
    {
      fieldType: "Input",
      props: {
        name: "address",
        label: "آدرس پستی",
        placeholder: "آدرس پستی",
        preserveErrorBox: true
      }
    },
    {
      fieldType: "Input",
      width: "1/2",
      rule: yup.string().required("کد پستی الزامی میباشد").iranPostalCode("کد پستی صحیح نیست"),
      hideOnForm: ({ formProps, formMethod }) => (!formProps.watch("address") ? true : false),
      props: {
        name: "postalCode",
        label: "کد پستی",
        placeholder: "کد پستی",
        type: "number",
        preserveErrorBox: true
      }
    },
    {
      fieldType: "Input",
      width: "1/2",
      rule: yup.string().required("موبایل الزامی میباشد").iranMobile("فرمت موبایل صحیح نیست"),
      props: {
        name: "mobileNum",
        label: "شماره موبایل",
        placeholder: "شماره موبایل",
        type: "number",
        required: true,
        preserveErrorBox: true
      }
    },
    {
      fieldType: "Input",
      width: "1/2",
      rule: yup
        .string()
        .when("address", {
          is: val => val?.length > 0,
          then: yup.string().required("در صورتی که آدرس پر شده باشد تلفن اجباری می‌شود")
        })
        .when("address", {
          is: val => val?.includes("تهران"),
          then: yup.string().length(8, "اگر در آدرس کلمه ی تهران باشد تلفن باید 8 رقمی باشد")
        }),
      props: {
        name: "phoneNum",
        label: "شماره تلفن ثابت",
        placeholder: "شماره تلفن ثابت",
        type: "number",
        required: true,
        preserveErrorBox: true
      }
    },
    {
      fieldType: "Input",
      width: "1/2",
      rule: yup.string().length(8, "تلفن باید 8 رقمی باشد").optional(),
      // rule: yup.string().when("workingPhone", {
      //   is: (value: string | any[]) => value?.length, // چک می‌کند اگر فیلد پر باشد
      //   then: yup.string().length(8, "تلفن باید 8 رقمی باشد")
      // }),
      props: {
        name: "workingPhone",
        label: "شماره تلفن کاری",
        placeholder: "شماره تلفن کاری",
        type: "number",
        required: true,
        preserveErrorBox: true
      }
    },
    {
      fieldType: "Input",
      width: "1/2",
      rule: yup.string().iranNationalId("کد ملی صحیح نیست").required("کد ملی الزامی میباشد"),
      props: {
        name: "nationalId",
        label: "کد‌ملی",
        placeholder: "کد‌ملی",
        type: "number",
        required: true,
        preserveErrorBox: true
      }
    },
    {
      fieldType: "InputBankCard",
      rule: yup.string().iranBankCard("شماره کارت صحیح نیست").required("شماره کارت الزامی میباشد"),
      props: {
        name: "bankcard",
        label: "شماره کارت بانکی",
        preserveErrorBox: true,
        required: true
      }
    },
    {
      fieldType: "InputSheba",
      rule: yup.string().iranShebaNumber("شماره شبا صحیح نیست"),
      props: ({ formProps: { watch } }) => ({
        name: "shebaNum",
        label: "شماره شبا",
        preserveErrorBox: true,
        disabled: !watch("bankcard") ? true : false
      }),
      width: "1/2"
    },
    {
      fieldType: "InputIPAddress",
      rule: yup.string().ipAddress("آدرس ip صحیح نیست"),
      props: {
        name: "ipaddress",
        label: "آدرس IP",
        preserveErrorBox: true,
        required: true
      }
    },
    {
      fieldType: "InputCascading",
      rule: yup.object().required("مقدار سرمایه الزامی میباشد"),
      props: {
        name: "invest_amount",
        label: "مقدار سرمایه",
        required: true,
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
      }
    },
    {
      fieldType: "Button",
      name: "submit",
      props: {
        type: "submit",
        children: "ثبت نام اولیه",
        className: "mt-4"
      },
      width: "1/2"
    }
  ]
} as IFormBuilderProps;

const ServerResponse: any = {
  firstName: "sepehr",
  lastName: "karimi",
  address: "test",
  shebaNum: "IR999999999999999999999999",
  bankcard: "1234123412341234",
  invest_amount: { value: "10000000", selectedOption: "toman" }
};

export const InitialValues = Template.bind({});
InitialValues.args = {
  ...Default.args,
  formDefaultValues: ServerResponse,
  schema: [
    ...Default.args.schema,
    {
      name: "submit",
      rule: yup.object().required("الزامی می‌باشد"),
      component: ({ formProps, field, fieldState, formState }) => {
        const { reset, setError } = formProps;

        return (
          <div className="flex mt-4 mb-6 space-x-2 space-x-reverse">
            <Button variant="outline" theme="warning" onClick={() => reset()}>
              ریست کردن فرم به حالت اولیه
            </Button>
            {/* <Button variant="outline" theme="warning" onClick={() => reset(null, {})}>
              خالی کردن فرم
            </Button> */}
            <Button
              variant="outline"
              theme="error"
              onClick={() => setError("firstName", { message: "نام در دیتابیس یافت نشد!" })}
            >
              انداختن ارور روی فیلد نام
            </Button>
          </div>
        );
      }
    }
  ]
} as IFormBuilderProps;

export const FieldGroup = TemplateEmpty.bind({});
FieldGroup.args = {
  ...FormBuilder.defaultProps,
  onSubmit: (formValues: any) => console.log(formValues),
  schema: [
    {
      fieldType: "FieldGroup",
      name: "hoviyati",
      props: {
        groupLabel: "اطلاعات هویتی",
        preserveErrorBox: true
      },
      fields: [
        {
          fieldType: "Input",
          rule: yup.string().required("موبایل الزامی میباشد"),
          props: {
            name: "mobileNum",
            label: "شماره موبایل",
            placeholder: "شماره موبایل",
            type: "number",
            required: true,
            preserveErrorBox: true
          }
        },
        {
          fieldType: "Input",
          rule: yup.string().required("کدملی الزامی میباشد"),
          props: {
            name: "codemelli",
            label: "کدملی",
            placeholder: "کدملی",
            // type: "number",
            required: true,
            preserveErrorBox: true
          }
        }
      ]
    },
    {
      fieldType: "Button",
      name: "submit",
      props: {
        type: "submit",
        children: "ثبت (چک کردن ولیدیشن ها)"
      },
      width: "1/2"
    },
    {
      name: "custom-field",
      component: ({ formProps }) => {
        const { reset, setError } = formProps;

        return (
          <div className="flex mt-4 mb-6 space-x-2 space-x-reverse">
            <Button variant="outline" theme="warning" onClick={() => reset()}>
              ریست کردن فرم به حالت اولیه
            </Button>
            <Button
              variant="outline"
              theme="error"
              onClick={() => setError("hoviyati", { message: "شماره موبایل با کد ملی نمی‌خواند!" })}
            >
              انداختن ارور روی فیلد گروپ
            </Button>
            <Button
              variant="outline"
              theme="error"
              onClick={() => setError("codemelli", { message: "کد ملی در سامانه یافت نشد" })}
            >
              انداختن ارور روی کد ملی
            </Button>
          </div>
        );
      }
    }
  ]
} as IFormBuilderProps;

export const FieldOnDidMount = TemplateEmpty.bind({});
FieldOnDidMount.args = {
  ...FormBuilder.defaultProps,
  onSubmit: (formValues: any) => console.log(formValues),
  schema: [
    {
      fieldType: "Input",
      onDidMount: formProps => {
        alert("input-1 mounted!");
      },
      onDidUnMount: formProps => {
        alert("input-1 unmounted!");
      },
      props: {
        name: "input",
        label: "input-1",
        placeholder: "input",
        preserveErrorBox: true
      }
    }
  ]
} as IFormBuilderProps;

const ServerResponse2: any = {
  "DatePicker-1": "2020-03-01T20:30:00.000Z"
};

export const AllFields = TemplateEmpty.bind({});
AllFields.args = {
  ...FormBuilder.defaultProps,
  onSubmit: (formValues: any) => console.log(formValues),
  formDefaultValues: ServerResponse2,
  schema: [
    {
      fieldType: "Input",
      props: {
        name: "input",
        label: "input",
        placeholder: "input",
        preserveErrorBox: true
      }
    },
    {
      fieldType: "InputBankCard",
      props: {
        name: "InputBankCard",
        label: "InputBankCard",
        preserveErrorBox: true
      }
    },
    {
      fieldType: "InputSheba",
      props: {
        name: "InputSheba",
        label: "InputSheba",
        preserveErrorBox: true
      }
    },
    {
      fieldType: "InputIPAddress",
      props: {
        name: "InputIPAddress",
        label: "InputIPAddress",
        preserveErrorBox: true
      }
    },
    {
      fieldType: "InputCascading",
      props: {
        name: "InputCascading",
        label: "InputCascading",
        preserveErrorBox: true,
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
      }
    },
    {
      fieldType: "InputCodeVerify",
      props: {
        name: "InputCodeVerify",
        label: "InputCodeVerify",
        preserveErrorBox: true,
        inputsLength: 6
      }
    },
    {
      fieldType: "InputMultiplier",
      props: {
        name: "InputMultiplier",
        label: "InputMultiplier",
        preserveErrorBox: true,
        options: [
          {
            label: "3x",
            value: "3x"
          },
          {
            label: "2x",
            value: "2x"
          },
          {
            label: "100x",
            value: "100x"
          }
        ]
      }
    },
    {
      fieldType: "InputPassword",
      props: {
        name: "InputPassword",
        label: "InputPassword",
        preserveErrorBox: true
      }
    },
    {
      fieldType: "InputNumber",
      props: {
        name: "InputNumber",
        label: "InputNumber",
        preserveErrorBox: true
      }
    },
    {
      fieldType: "InputMultipleInputs",
      props: {
        name: "InputMultipleInputs",
        label: "InputMultipleInputs",
        preserveErrorBox: true,
        schema: [
          {
            name: "phone",
            type: "number",
            placeholder: "12345678",
            rootClassName: "basis-full",
            align: "left"
          },
          {
            name: "phoneCode",
            type: "number",
            placeholder: "021",
            rootClassName: "w-12"
          }
        ]
      }
    },
    {
      fieldType: "Select",
      props: {
        name: "Select",
        label: "Select",
        preserveErrorBox: true,
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
      }
    },
    {
      fieldType: "Slider",
      name: "slider-1",
      props: {
        min: 0,
        max: 100,
        color: "primary",
        marks: {
          0: { label: "0", step: 5 },
          20: { label: "20", step: 12 },
          40: "40",
          60: { label: "60", step: 22 },
          80: "80",
          100: "بیش از ۱۰۰"
        }
      }
    },
    {
      fieldType: "Textarea",
      name: "Textarea-1",
      props: {
        name: "Textarea",
        label: "Textarea",
        placeholder: "Textarea",
        preserveErrorBox: true
      }
    },
    {
      fieldType: "Textarea",
      name: "Textarea-2",
      props: {
        name: "Textarea2",
        label: "Textarea2",
        placeholder: "Textarea2",
        preserveErrorBox: true,
        keepOpen: true
      }
    },
    {
      fieldType: "DatePicker",
      name: "DatePicker-1",
      props: {
        formElementWrapperProps: {
          placeholder: "لطفا تاریخ عضویت را انتخاب کنید",
          label: "تاریخ",
          preserveErrorBox: true
        }
      }
    },
    {
      fieldType: "Button",
      name: "button",
      width: "1/4",
      props: ({ formProps: { reset } }) => ({
        type: "button",
        children: "Reset",
        onClick: () => reset(),
        theme: "warning"
      })
    },
    {
      fieldType: "Button",
      name: "button-2",
      width: "1/4",
      props: {
        type: "submit",
        children: "submit",
        className: "mt-4"
        // onClick: e => e.preventDefault()
      }
    }
  ]
} as IFormBuilderProps;

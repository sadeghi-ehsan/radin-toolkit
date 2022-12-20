// Badge.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge } from "../../Atoms/Badge";
import { Card } from ".";
import { ICardProps } from "./types";
import { Typography } from "../../Atoms/Typography";
import { Activity, Plus, Error } from "radin-icon";
import { Input } from "../../Molecules/Input";
import { Button } from "../../Atoms/Button";
import { Divider } from "../../Atoms/Divider";
import { InputPassword } from "../InputPassword";

export default {
  title: "components/Molecules/Card",
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => {
  return <Card {...args}></Card>;
};

export const Default = Template.bind({});
Default.args = {
  ...Card.defaultProps,
  image: <img src="https://picsum.photos/id/1041/500/500" />,
  children: (
    <div>
      <Typography variant="heading8">عنوان</Typography>
      <Typography color="idle" variant="body3">
        1400/08/23
      </Typography>
      <Typography className="max-w-xs mt-4">
        شما باید برای دسترسی به این صفحه وارد شوید. این اطلاعات ورود متفاوت از نام کاربری و رمز عبور وب سایت شما
        است.جدول راه راه گورخری (zebra Stripes) که برای دیتای زیاد استفاده میشه، به خصوص زمانی که مهم هست کاربر هر
      </Typography>
    </div>
  ),
  footer: (
    <div className="flex items-center justify-between">
      <Typography variant="heading8" className="cursor-pointer">
        بیشتــــر {" >"}
      </Typography>
      <Badge color="success">200+</Badge>
    </div>
  )
} as ICardProps;

export const Empty = Template.bind({});
Empty.args = {
  ...Card.defaultProps,
  children: (
    <div>
      <Typography variant="heading8">عنوان</Typography>
      <Typography color="idle" variant="body3">
        1400/08/23
      </Typography>
      <Typography className="max-w-xs mt-4">
        شما باید برای دسترسی به این صفحه وارد شوید. این اطلاعات ورود متفاوت از نام کاربری و رمز عبور وب سایت شما
        است.جدول راه راه گورخری (zebra Stripes) که برای دیتای زیاد استفاده میشه، به خصوص زمانی که مهم هست کاربر هر
      </Typography>
    </div>
  )
} as ICardProps;

export const Stats = Template.bind({});
Stats.args = {
  ...Card.defaultProps,
  bodyClassName: "cursor-default",
  size: "md",
  children: (
    <div>
      <div className="p-3 mb-2 transition-all duration-500 bg-primary rounded-xl max-w-min bg-opacity-10 group-hover:bg-opacity-100">
        <Activity className="" />
      </div>
      <Typography color="idle" variant="body3">
        ارزش خالص دارایی های صندوق
      </Typography>
      <Typography variant="heading8">200.000.000.000</Typography>
    </div>
  )
} as ICardProps;

export const Editable = Template.bind({});
Editable.args = {
  ...Stats.args,
  actionAdornment: (
    <div className="flex items-center justify-center w-6 h-6 rounded-full cursor-pointer bg-primary">
      <Plus />
    </div>
  )
} as ICardProps;

export const Stats2 = Template.bind({});
Stats2.args = {
  ...Card.defaultProps,
  bodyClassName: "cursor-default min-w-60",
  size: "md",
  children: (
    <>
      <div className="flex justify-between">
        <Typography color="idle" variant="body2">
          NAV صدور
        </Typography>
        <Typography variant="body2" className="-mb-1 transition-all duration-500 group-hover:text-primary">
          30,000 ریال
        </Typography>
      </div>
      <div className="flex justify-between">
        <Typography color="idle" variant="body2">
          NAV ابطال
        </Typography>
        <Typography variant="body2" className="-mb-1 transition-all duration-500 group-hover:text-primary">
          29,000 ریال
        </Typography>
      </div>
      <div className="flex justify-between">
        <Typography color="idle" variant="body2">
          NAV آماری
        </Typography>
        <Typography variant="body2" className="-mb-1 transition-all duration-500 group-hover:text-primary">
          29,500 ریال
        </Typography>
      </div>
    </>
  ),
  footer: (
    <div className="flex items-center justify-between">
      <Typography color="idle" variant="body3">
        آخرین تاریخ محاسبه NAV
      </Typography>
      <Typography color="primary" variant="body3">
        1400/4/4
      </Typography>
    </div>
  )
} as ICardProps;

export const Stats3 = Template.bind({});
Stats3.args = {
  ...Card.defaultProps,
  bodyClassName: "cursor-default",
  children: (
    <div className="text-center">
      <Typography variant="heading8" className="-mb-1 transition-all duration-500 group-hover:text-primary">
        20.000
      </Typography>
      <Typography color="idle" variant="body3">
        هفته فعلی
      </Typography>
    </div>
  )
} as ICardProps;

export const Form = Template.bind({});
Form.args = {
  ...Card.defaultProps,
  bodyClassName: "cursor-default",
  children: (
    <div className="max-w-sm">
      <Typography variant="body1">عنوان</Typography>
      <Typography color="idle" variant="body2" className="mb-6">
        جدول راه راه گورخری (zebra Stripes) که برای دیتای زیاد استفاده میشه، به خصوص زمانی که مهم هست کاربر هر
      </Typography>

      <Input label="نام و نام خانوادگی" variant="fill" className="my-6" />
      <Divider className="border-card-border" />
      <InputPassword label="رمز عبور" variant="fill" className="my-6" />
      <Divider className="border-card-border" />
      <InputPassword label="تکرار رمز عبور" variant="fill" className="my-6" />
      <div className="flex items-center justify-between">
        <Button variant="default">تایید</Button>
        <Button variant="text">انصراف</Button>
      </div>
    </div>
  )
} as ICardProps;

export const Form2 = Template.bind({});
Form2.args = {
  ...Card.defaultProps,
  bodyClassName: "cursor-default",
  children: (
    <>
      <div className="flex items-center">
        <Error weight="bold" color="warning" />
        <Typography variant="heading8" className="mx-2">
          عنوان
        </Typography>
      </div>

      <div className="flex justify-between max-w-md">
        <Typography color="light-text" variant="body1" weight="light">
          جدول راه راه گورخری (zebra Stripes) که برای دیتای زیاد استفاده میشه، به خصوص زمانی که مهم هست کاربر هر
        </Typography>

        <Button variant="outline" theme="terminate" size="sm" className="mr-8">
          حذف
        </Button>
      </div>
    </>
  )
} as ICardProps;

export const Form3 = Template.bind({});
Form3.args = {
  ...Card.defaultProps,
  bodyClassName: "cursor-default",
  children: (
    <div className="">
      <Typography variant="heading8" className="-mb-1 transition-all duration-500 group-hover:text-primary">
        عنوان
      </Typography>
      <Typography color="idle" variant="body3">
        متن بدنه
      </Typography>

      <div className="flex items-center mt-3">
        <Input placeholder="example@gmail.com" variant="fill" className="!py-0 !my-0" size="sm" />
        <Button variant="default" size="sm" className="!h-11.8 mr-1">
          ارسال
        </Button>
      </div>
    </div>
  )
} as ICardProps;

export const Progress = Template.bind({});
Progress.args = {
  ...Card.defaultProps,
  bodyClassName: "cursor-default",
  progressBarProps: { percent: 30, showInfo: false },
  children: (
    <div className="min-w-56">
      <div className="flex justify-between">
        <div className="p-3 mb-2 transition-all duration-500 bg-primary rounded-xl max-w-min bg-opacity-10">
          <Activity className="" />
        </div>
        <div className="flex-1 mx-2">
          <Typography color="idle" variant="body3">
            عنوان
          </Typography>
          <Typography variant="heading8">متن اصلی</Typography>
        </div>
        <Plus />
      </div>
    </div>
  )
} as ICardProps;

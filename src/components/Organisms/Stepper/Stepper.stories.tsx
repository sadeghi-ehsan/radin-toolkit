import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Stepper } from ".";
import { IStepperProps } from "./types";
import { Time, TripleSquare, AddImage, Ip, BankCardAdd, Lock, Activity } from "radin-icon";

export default {
  title: "components/Organisms/Stepper",
  component: Stepper
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = args => {
  return (
    <div className="min-h-screen min-w-48">
      <p className="mb-10">icon sizes {"&"} etc is responsive in mobile size! try resizing page</p>

      <Stepper {...args} />
    </div>
  );
};

const Template2: ComponentStory<typeof Stepper> = args => {
  return (
    <div className="min-h-screen w-24">
      <Stepper {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Stepper.defaultProps,
  direction: "vertical",
  currentStep: 2,
  currentStepStatus: undefined, // "wait" | "process" | "finish" | "error",
  editMode: false,
  isIconsOutlined: false,
  showMidLine: true,
  beforeStep: 4,
  onClickStep: i => console.log("onClickStep", i),
  steps: [
    {
      title: "مشـــخصات فـــردی",
      description: "مربـــوط به اطلاعـــات شخـــصی",
      icon: <Time size="xl" />,
      disabled: true
      // status: "finish"
    },
    {
      title: "مــدارک",
      description: "مربـــوط به مــدارک هویـــتی",
      icon: <Activity size="xl" />
      // status: "wait"
    },
    {
      title: "مـــحل ســـکونت",
      description: "مکــانی کــه الان زنـــدگی می کنــید",
      icon: <Lock size="xl" />
      // status: "error"
    },
    {
      title: "مشـــخصات شـــغلی",
      description: "کـــاری که به آن مشـــغول هســـتید",
      icon: <BankCardAdd size="xl" />,
      disabled: true
    },
    {
      title: "اطلاعـــات حســـاب بــانکی",
      description: "مشخـــصات حســـاب بــانکی",
      icon: <Ip size="xl" />
    },
    {
      title: "ســـایر اطلاعـــات",
      description: "قـــوانین و مقـــــررات",
      icon: <AddImage size="xl" />
      // status: "finish"
    },
    {
      title: "آزمـــــــون",
      description: "چـــند ســـوال اقـــتصادی",
      icon: <TripleSquare size="xl" />
    },
    {
      title: "تایید اطلاعات",
      description: "همه اطلاعات در یک نگاه",
      icon: <TripleSquare size="xl" />,
      status: "error"
    }
  ]
} as IStepperProps;

export const WithoutIcon = Template2.bind({});
WithoutIcon.args = {
  ...Stepper.defaultProps,
  direction: "vertical",
  currentStep: 0,
  currentStepStatus: null, // "wait" | "process" | "finish" | "error",
  editMode: false,
  isIconsOutlined: false,
  showMidLine: true,
  isShowPreLine: false,
  isShowLastLine: true,
  onClickStep: i => console.log("onClickStep", i),
  steps: [
    {
      title: "اطلاعات پایه"
    },
    {
      title: "افزودن نماد",
      disabled: true
    }
  ]
} as IStepperProps;

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...Default.args,
  direction: "horizontal"
} as IStepperProps;

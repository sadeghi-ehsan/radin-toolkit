// Switch.stories.ts|tsx

import { Switch, ISwitchProps } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import useState from "storybook-addon-state";

export default {
  title: "components/Atoms/Switch",
  component: Switch,
  argTypes: {
    name: { control: { disable: true } },
    defaultValue: { control: { disable: true } }
  }
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = ({ children, defaultValue, ...args }) => {
  const [option, setOption] = useState("option", defaultValue);
  return (
    <div>
      <Switch {...args} value={option} onChange={v => setOption(v)}>
        {/*@ts-ignore*/}
        {children.map(({ children, ...chProps }, i) => (
          <Switch.Option key={i} {...chProps}>
            {children}
          </Switch.Option>
        ))}
      </Switch>
      <br />
      <br />
      {option}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Switch.defaultProps,
  name: "form",
  defaultValue: "login",
  children: [
    { children: "ورود", value: "login" },
    { children: "ثبت نام", value: "register" },
    { children: "غیرفعال", value: "disabled", isOptionDisabled: true },
    { children: "فراموشی", value: "forget" }
  ]
} as ISwitchProps;

export const AM_PM = Template.bind({});
AM_PM.args = {
  ...Switch.defaultProps,
  name: "AM_PM_with_default",
  vertical: true,
  children: [
    { children: "AM", value: "AM" },
    { children: "PM", value: "PM" }
  ]
} as ISwitchProps;

export const AM_PM_with_default = Template.bind({});
AM_PM_with_default.args = {
  ...Switch.defaultProps,
  name: "AM_PM_with_default",
  defaultValue: "PM",
  vertical: true,
  children: [
    { children: "AM", value: "AM" },
    { children: "PM", value: "PM" }
  ]
} as ISwitchProps;

export const AM_PM_withCustomClass = Template.bind({});
AM_PM_withCustomClass.args = {
  ...Switch.defaultProps,
  name: "AM_PM",
  vertical: true,
  noLabelStyle: true,
  labelClassName: "text-xs px-1.5 py-0 leading-4 pt-0.75",
  innerClassName: "rounded",
  outerClassName: "rounded-lg",
  children: [
    { children: "AM", value: "AM" },
    { children: "PM", value: "PM" }
  ]
} as ISwitchProps;

// Tabs.stories.ts|tsx

import { Tabs, ITabsProps, TabsPane } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Molecules/Tabs",
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const single = [
  {
    title: "جدوال 1",
    disabled: false,
    key: "11"
  }
];

const tabs = [
  {
    title: "جدوال 1",
    disabled: false,
    key: "11"
  },
  {
    title: "جدول سوابق نماد",
    disabled: false,
    key: "22"
  },
  {
    title: "جدول تخصیص",
    key: "33",
    pin: true,
    notification: true
  },
  {
    title: "جدول سهامداران",
    disabled: true,
    key: "44"
  },
  {
    title: "جدول روزنامه",
    disabled: false,
    favorite: true,
    key: "66"
  }
];

const tabs1 = [
  {
    title: "جدوال 1",
    disabled: false,
    key: "11"
  },
  {
    title: "جدول سوابق نماد",
    disabled: false,
    key: "22",
    notification: true
  },
  {
    title: "جدول تخصیص",
    key: "33",
    pin: true,
    notification: true
  },
  {
    title: "جدول سهامداران",
    disabled: true,
    key: "44"
  },
  {
    title: "جدول روزنامه",
    disabled: false,
    favorite: true,
    key: "66"
  },
  {
    title: "جدول ضرب",
    disabled: false,
    key: "77"
  }
];

const SingleActiveTabTemplate: ComponentStory<typeof Tabs> = args => {
  return (
    <div style={{ minWidth: "1400px" }}>
      <Tabs showRemove growTabs showFavorite showAddButton className="min-w-max">
        {single.map(item => {
          const { key, title } = item;
          return (
            <TabsPane {...{ key, title }}>
              <h1>{item.title} تست تب فعال</h1>
            </TabsPane>
          );
        })}
      </Tabs>
    </div>
  );
};

const Template: ComponentStory<typeof Tabs> = args => {
  return (
    <div style={{ minWidth: "1400px" }}>
      <Tabs showRemove growTabs showFavorite showAddButton className="mx-10">
        {tabs.map(item => {
          const { pin, key, title, favorite, disabled, notification } = item;
          return (
            <TabsPane {...{ pin, key, title, favorite, disabled, notification }}>
              <h1>{item.title} تست تب فعال</h1>
            </TabsPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export const SingleActiveTab = SingleActiveTabTemplate.bind({});
SingleActiveTab.args = {
  ...Tabs.defaultProps,
  growTabs: true
} as ITabsProps;

export const Default = Template.bind({});
Default.args = {
  ...Tabs.defaultProps,
  growTabs: true
} as ITabsProps;

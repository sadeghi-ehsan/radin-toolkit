// TabPanel.stories.ts|tsx

import { TabPanel, ITabPanelProps, TabPane } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BankCardAdd, Edit, ExternalLink, Eye } from "@sadeghi-ehsan/radin-icon";

export default {
  title: "components/Atoms/TabPanel",
  component: TabPanel
} as ComponentMeta<typeof TabPanel>;

const tabs = [
  {
    title: "جدوال 1",
    key: "11"
  },
  {
    title: "جدول سوابق نماد",
    key: "22"
  },
  {
    title: "جدول تخصیص",
    key: "33"
  },
  {
    title: "جدول سهامداران",
    key: "44"
  },
  {
    title: "",
    // icon: icon,
    // icon: "https://img.icons8.com/material-outlined/24/000000/apple-camera.png",
    icon: <BankCardAdd color="light-text" size="lg" />,
    key: 55
  }
];

const tabs1 = [
  {
    title: "جدوال 1",
    key: "11"
  },
  {
    title: "جدول سوابق نماد",
    disabled: true,
    key: "22"
  },
  {
    title: "جدول تخصیص",
    key: "33",
    disabled: true
  },
  {
    title: "جدول سهامداران",
    disabled: true,
    key: "44"
  },
  {
    title: "",
    // icon: icon,
    // icon: "https://img.icons8.com/material-outlined/24/000000/apple-camera.png",
    icon: <ExternalLink color="light-text" size="lg" />,
    disabled: true,
    key: 55
  }
];

const tools = [
  {
    icon: <ExternalLink color="light-text" size="lg" />,
    key: "1"
  },
  {
    icon: <Edit color="light-text" size="lg" />,
    key: "2"
  },
  {
    // icon: "https://img.icons8.com/material-outlined/24/000000/apple-camera.png",
    icon: <Eye color="light-text" size="lg" />,
    key: "3"
  },
  {
    title: "1m",
    key: "4"
  }
];

const Template: ComponentStory<typeof TabPanel> = args => {
  return (
    <TabPanel>
      {tabs.map(item => (
        <TabPane tools={tools} key={item.key} title={item.title} icon={item.icon}>
          <div className="px-2 h-60">
            <h1>{item.title} تست تب فعال</h1>
          </div>
        </TabPane>
      ))}
    </TabPanel>
  );
};

const OneActiveTabTemplate: ComponentStory<typeof TabPanel> = args => {
  return (
    <TabPanel>
      {tabs1.map(item => (
        <TabPane tools={tools} key={item.key} title={item.title} icon={item.icon} disabled={item.disabled}>
          <div className="px-2 h-60">
            <h1>{item.title} تست تب فعال</h1>
          </div>
        </TabPane>
      ))}
    </TabPanel>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...TabPanel.defaultProps
} as ITabPanelProps;

export const OneActiveTab = OneActiveTabTemplate.bind({});
OneActiveTab.args = {
  ...Default.args,
  withHover: true
} as ITabPanelProps;

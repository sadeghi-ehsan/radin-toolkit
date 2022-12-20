import { IToolsTabPanel, TabPane as SBTTabPane, TabPanel as SBTTabPanel } from "../../src";
import { Edit, ExternalLink, Eye } from "radin-icon";
// @ts-ignore
import icon from "../../assets/icons/bank-card-add/bank-card-add.svg";
import { useState } from "react";

const tabs = [
  // {
  //   title: "جدوال 1",
  //   icon: "",
  //   disabled: false,
  //   key: "11"
  // },
  // {
  //   title: "جدول سوابق نماد",
  //   icon: "",
  //   disabled: true,
  //   key: "22"
  // },
  // {
  //   title: "جدول تخصیص",
  //   icon: "",
  //   key: "33"
  // },
  // {
  //   title: "جدول سهامداران",
  //   icon: "",
  //   disabled: false,
  //   key: "44"
  // },
  {
    title: "جدول روزنامه",
    icon: "",
    disabled: false,
    key: "66"
  },
  {
    title: "جدول ضرب",
    icon: "",
    disabled: false,
    key: "77"
  },
  {
    title: "",
    icon: <ExternalLink color="light-text" size="lg" />,
    disabled: false,
    key: 55
  }
];

const renderTools = (setFullScreen): IToolsTabPanel[] => {
  return [
    {
      icon: <ExternalLink color="light-text" size="lg" />,
      key: "1",
      onClick: i => {
        setFullScreen(true);
      }
    },
    {
      icon: <Edit color="light-text" size="lg" />,
      key: "2"
    },
    {
      icon: <Eye color="light-text" size="lg" />,
      key: "3"
    },
    {
      title: "1m",
      key: "4"
    }
  ];
};

const renderTools1 = (setFullScreen): IToolsTabPanel[] => {
  return [
    {
      icon: <ExternalLink color="light-text" size="lg" />,
      key: "1",
      onClick: i => {
        setFullScreen(true);
      }
    }
  ];
};

const TabPanel = () => {
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <div className="-m-4 lg:p-36 min-h-screen bg-main-bg">
      <SBTTabPanel tools={renderTools(setFullScreen)}>
        {tabs.map((item, index) => (
          <SBTTabPane
            className={fullScreen ? "absolute w-screen h-screen top-0 right-0 bg-table-zebra-light" : ""}
            tools={index === 1 && renderTools1(setFullScreen)}
            key={item.key}
            title={item.title}
            icon={item.icon}
            disabled={item.disabled}
          >
            <div className="px-2 h-60">
              <h1>{item.title} تست تب فعال</h1>
            </div>
          </SBTTabPane>
        ))}
      </SBTTabPanel>
    </div>
  );
};

export default TabPanel;

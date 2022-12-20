import React from "react";
import Home from "./template/Home";
import Button from "./template/Button";
import Typography from "./template/Typography";
import Switch from "./template/Switch";
import Icon from "./template/Icon";
import Radio from "./template/Radio";
import Badge from "./template/Badge";
import Checkbox from "./template/Checkbox";
import DatePicker from "./template/DatePicker";
import ProgressBar from "./template/ProgressBar";
import Input from "./template/Input";
import Select from "./template/Select";
import LineChart from "./template/LineChart";
import Collapse from "./template/Collapse";
import TabPanel from "./template/TabPanel";
import User from "./template/User";
import Chart from "./template/Chart";
import Table from "./template/Table";
import Tabs from "./template/Tabs";

const routes = [
  {
    title: "Home",
    path: "/",
    component: extraParams => <Home {...extraParams} />
  },
  {
    title: "Button",
    path: "/button",
    component: extraParams => <Button {...extraParams} />
  },
  {
    title: "Icon",
    path: "/icon",
    component: extraParams => <Icon {...extraParams} />
  },
  {
    title: "Typography",
    path: "/typography",
    component: extraParams => <Typography {...extraParams} />
  },
  {
    title: "Switch",
    path: "/switch",
    component: extraParams => <Switch {...extraParams} />
  },
  {
    title: "Radio",
    path: "/radio",
    component: extraParams => <Radio {...extraParams} />
  },
  {
    title: "Badge",
    path: "/badge",
    component: extraParams => <Badge {...extraParams} />
  },
  {
    title: "Checkbox",
    path: "/checkbox",
    component: extraParams => <Checkbox {...extraParams} />
  },
  {
    title: "ProgressBar",
    path: "/progress-bar",
    component: extraParams => <ProgressBar {...extraParams} />
  },
  {
    title: "DatePicker",
    path: "/DatePicker",
    component: extraParams => <DatePicker {...extraParams} />
  },
  {
    title: "Input",
    path: "/input",
    component: extraParams => <Input {...extraParams} />
  },
  {
    title: "LineChart",
    path: "/line-chart",
    component: extraParams => <LineChart {...extraParams} />
  },
  {
    title: "Chart",
    path: "/chart",
    component: extraParams => <Chart {...extraParams} />
  },
  {
    title: "Collapse",
    path: "/collapse",
    component: extraParams => <Collapse {...extraParams} />
  },
  {
    title: "TabPanel",
    path: "/tabPanel",
    component: extraParams => <TabPanel {...extraParams} />
  },
  {
    title: "UserAvatar",
    path: "/user",
    component: extraParams => <User {...extraParams} />
  },
  {
    title: "Tabs",
    path: "/tabs",
    component: extraParams => <Tabs {...extraParams} />
  },
  {
    title: "Select",
    path: "/select",
    component: extraParams => <Select {...extraParams} />
  },
  {
    title: "Table",
    path: "/table",
    component: extraParams => <Table {...extraParams} />
  }
];
export default routes;

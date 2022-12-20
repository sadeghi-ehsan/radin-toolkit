import React, { useEffect } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NotificationBox } from "./index";
import { INotificationBoxProps } from "./types";
import { Check, Error, Refresh, Trash } from "@sadeghi-ehsan/radin-icon";
import useState from "storybook-addon-state";

export default {
  title: "components/Organisms/NotificationBox",
  component: NotificationBox
} as ComponentMeta<typeof NotificationBox>;

const Template: ComponentStory<typeof NotificationBox> = args => {
  const [notificationsList, setNotificationsList] = useState("notificationsList", args.notificationMessagesList || []);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setNotificationsList([
        {
          id: Math.random(),
          title: "تگ عمومی",
          description: " تگ عمومی شاهرود-کلاته خیج توسط ادمین عمومی",
          read: false,
          isCollapsed: true,
          dateTime: "",
          iconType: <Check color="primary" size="lg" />,
          hasConfirm: false
        },
        ...notificationsList
      ]);
    }, 20000);
    return () => clearTimeout(timeoutID);
  });

  return (
    <div
      className="!w-125 !h-125 px-5 py-6 group relative overflow-hidden bg-card-bg border
     border-card-border hover:border-primary-border focus-within:border-primary-border transition rounded-xxl"
    >
      <NotificationBox {...args} notificationMessagesList={notificationsList} />
    </div>
  );
};

const Template2: ComponentStory<typeof NotificationBox> = args => {
  return <NotificationBox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...NotificationBox.defaultProps,
  headerAdornments: {
    headerTitle: "صندوق پیام ها",
    unreadMessages: 11
  },
  notificationMessagesList: [
    {
      id: 1,
      title: "تگ عمومی",
      description:
        " تگ عمومی شاهرود-کلاته خیج توسط ادمین عمومی نرم افزار شما 3:20 پیش بروز رسانی شد. از ویژگی های جدید نرم افزار ورژن 25.3.4 افزودن مدیریت صندوق و سبد از داشبورد سبدگردان می باشد. aaaaaaaaaaaaaa",
      read: true,
      isCollapsed: true,
      dateTime: "",
      iconType: <Check color="primary" size="lg" />,
      hasConfirm: false
    },
    {
      id: 2,
      title: "بارگذاری مدارک",
      description: " بارگذاری اسناد و مدارک صندوق قرض الحس",
      read: false,
      isCollapsed: true,
      dateTime: "",
      iconType: <Check color="primary" size="lg" fontWeight="bold" />,
      hasConfirm: true
    },
    {
      id: 3,
      title: "به روز رسانی نرم افزار",
      description:
        "نرم افزار شما 3:20 پیش بروز رسانی شد. از ویژگی های جدید نرم افزار ورژن 25.3.4 افزودن مدیریت صندوق و سبد از داشبورد سبدگردان می باشد. aaaaaaaaaaaaaa",
      read: true,
      isCollapsed: false,
      dateTime: "",
      iconType: <Refresh color="primary" size="lg" />,
      hasConfirm: true
    },
    {
      id: 4,
      title: "خرید موفق",
      description: " خرید سهام دکوثر برای صندوق مالک با مو",
      read: true,
      isCollapsed: true,
      dateTime: "",
      iconType: <Check color="success" size="lg" />,
      hasConfirm: false
    },
    {
      id: 5,
      title: "خطای پرداخت",
      description: " عملیات واریز مبلغ 5,000,000,000 ریال به ص",
      read: false,
      isCollapsed: true,
      dateTime: "",
      iconType: <Error color="error" size="lg" weight="bold" />,
      hasConfirm: false
    },
    {
      id: 6,
      title: "حذف تگ",
      description: " بارگذاری اسناد و مدارک صندوق قرض الحس",
      read: true,
      isCollapsed: true,
      dateTime: " 1401/04/31 , ساعت 11:10",
      iconType: <Trash color="terminate" size="lg" />,
      hasConfirm: true
    },
    {
      id: 7,
      title: "خطای پرداخت",
      description: " عملیات واریز مبلغ 5,000,000,000 ریال به ص",
      read: false,
      isCollapsed: true,
      dateTime: "",
      iconType: <Error color="error" size="lg" weight="bold" />,
      hasConfirm: true
    },
    {
      id: 8,
      title: "حذف تگ",
      description: " بارگذاری اسناد و مدارک صندوق قرض الحس",
      read: false,
      isCollapsed: true,
      dateTime: " 1401/04/31 , ساعت 11:10",
      iconType: <Trash color="terminate" size="lg" />,
      hasConfirm: true
    },
    {
      id: 9,
      title: "خطای پرداخت",
      description: " عملیات واریز مبلغ 5,000,000,000 ریال به ص",
      read: true,
      isCollapsed: true,
      dateTime: "",
      iconType: <Error color="error" size="lg" weight="bold" />,
      hasConfirm: true
    },
    {
      id: 10,
      title: "حذف تگ",
      description: " بارگذاری اسناد و مدارک صندوق قرض الحس",
      read: true,
      isCollapsed: true,
      dateTime: " 1401/04/31 , ساعت 11:10",
      iconType: <Trash color="terminate" size="lg" />,
      hasConfirm: true
    }
  ],
  notificationButtonLabels: {
    cancel: "انصراف",
    submit: "تایید",
    readAll: "خواندن همه"
  },
  customUnreadMessage: "",
  hasMessage: true,
  enableReadAll: true,
  onClose: () => {
    console.log("close fired in storybook demo");
  },
  onConfirm: (e, id) => {
    console.log("Confirm fired in storybook demo with id :", id);
  },
  onCancel: (e, id) => {
    console.log("Cancel fired in storybook demo with id :", id);
  },
  onCollapse: () => {
    console.log("close expansion fired in storybook demo");
  },
  onExpand: id => {
    console.log("open expansion fired in storybook demo id:", "notification " + id + " expanded");
  },
  onReadAll: readAllFlag => {
    console.log("read all messages fired in storybook demo flag is", readAllFlag);
  }
} as INotificationBoxProps;

export const SidebarUsage = Template2.bind({});
SidebarUsage.args = {
  ...NotificationBox.defaultProps,
  headerAdornments: {
    headerTitle: "صندوق پیام ها",
    unreadMessages: 11
  },
  notificationMessagesList: [
    {
      id: 1,
      title: "تگ عمومی",
      description:
        " تگ عمومی شاهرود-کلاته خیج توسط ادمین عمومی نرم افزار شما 3:20 پیش بروز رسانی شد. از ویژگی های جدید نرم افزار ورژن 25.3.4 افزودن مدیریت صندوق و سبد از داشبورد سبدگردان می باشد. aaaaaaaaaaaaaa",
      read: true,
      isCollapsed: true,
      dateTime: "",
      iconType: <Check color="primary" size="lg" />,
      hasConfirm: false
    },
    {
      id: 2,
      title: "بارگذاری مدارک",
      description: " بارگذاری اسناد و مدارک صندوق قرض الحس",
      read: false,
      isCollapsed: true,
      dateTime: "",
      iconType: <Check color="primary" size="lg" fontWeight="bold" />,
      hasConfirm: true
    },
    {
      id: 3,
      title: "به روز رسانی نرم افزار",
      description:
        "نرم افزار شما 3:20 پیش بروز رسانی شد. از ویژگی های جدید نرم افزار ورژن 25.3.4 افزودن مدیریت صندوق و سبد از داشبورد سبدگردان می باشد. aaaaaaaaaaaaaa",
      read: true,
      isCollapsed: false,
      dateTime: "",
      iconType: <Refresh color="primary" size="lg" />,
      hasConfirm: true
    },
    {
      id: 4,
      title: "خرید موفق",
      description: " خرید سهام دکوثر برای صندوق مالک با مو",
      read: true,
      isCollapsed: true,
      dateTime: "",
      iconType: <Check color="success" size="lg" />,
      hasConfirm: false
    },
    {
      id: 5,
      title: "خطای پرداخت",
      description: " عملیات واریز مبلغ 5,000,000,000 ریال به ص",
      read: false,
      isCollapsed: true,
      dateTime: "",
      iconType: <Error color="error" size="lg" weight="bold" />,
      hasConfirm: false
    },
    {
      id: 6,
      title: "حذف تگ",
      description: " بارگذاری اسناد و مدارک صندوق قرض الحس",
      read: true,
      isCollapsed: true,
      dateTime: " 1401/04/31 , ساعت 11:10",
      iconType: <Trash color="terminate" size="lg" />,
      hasConfirm: true
    },
    {
      id: 7,
      title: "خطای پرداخت",
      description: " عملیات واریز مبلغ 5,000,000,000 ریال به ص",
      read: false,
      isCollapsed: true,
      dateTime: "",
      iconType: <Error color="error" size="lg" weight="bold" />,
      hasConfirm: true
    },
    {
      id: 8,
      title: "حذف تگ",
      description: " بارگذاری اسناد و مدارک صندوق قرض الحس",
      read: false,
      isCollapsed: true,
      dateTime: " 1401/04/31 , ساعت 11:10",
      iconType: <Trash color="terminate" size="lg" />,
      hasConfirm: true
    },
    {
      id: 9,
      title: "خطای پرداخت",
      description: " عملیات واریز مبلغ 5,000,000,000 ریال به ص",
      read: true,
      isCollapsed: true,
      dateTime: "",
      iconType: <Error color="error" size="lg" weight="bold" />,
      hasConfirm: true
    },
    {
      id: 10,
      title: "حذف تگ",
      description: " بارگذاری اسناد و مدارک صندوق قرض الحس",
      read: true,
      isCollapsed: true,
      dateTime: " 1401/04/31 , ساعت 11:10",
      iconType: <Trash color="terminate" size="lg" />,
      hasConfirm: true
    }
  ],
  notificationButtonLabels: {
    cancel: "انصراف",
    submit: "تایید",
    readAll: "خواندن همه"
  },
  customUnreadMessage: "",
  hasMessage: false,
  enableReadAll: false,
  onClose: () => {
    console.log("close fired in storybook demo");
  },
  onConfirm: id => {
    console.log("Confirm fired in storybook demo with id :", id);
  },
  onCancel: id => {
    console.log("Cancel fired in storybook demo with id :", id);
  },
  onCollapse: () => {
    console.log("close expansion fired in storybook demo");
  },
  onExpand: id => {
    console.log("open expansion fired in storybook demo id:", id);
  },
  onReadAll: readAllFlag => {
    console.log("read all messages fired in storybook demo flag is", readAllFlag);
  }
} as INotificationBoxProps;

export const WithOutNotification = Template2.bind({});
WithOutNotification.args = {
  ...NotificationBox.defaultProps,
  headerAdornments: {
    headerTitle: "صندوق پیام ها",
    unreadMessages: 0
  },
  notificationMessagesList: [],
  emptyListMessage: "بدون پیغام جدید"
} as INotificationBoxProps;

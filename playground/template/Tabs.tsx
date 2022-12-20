import { TabsPane as SBTTabPane, Tabs as SBTTab, INotice } from "../../src";
import { useEffect, useState } from "react";
import { Calendar } from "@sadeghi-ehsan/radin-icon";
import { Button, Input } from "antd";

const tabs = [
  {
    title: "جدوال 1",
    disabled: false,
    key: 11,
    // key: "primary",
    // pin: true,
    deletable: false,
    editable: false
  },
  {
    title: "جدول سوابق نماد",
    disabled: false,
    key: "22"
    // notice: true
  },
  {
    title: "جدول تخصیص",
    key: "33",
    notice: "private" as INotice
    // pin: true
  },
  {
    title: "جدول سهامداران",
    // disabled: true,
    key: "44",
    notice: false as INotice
  },
  {
    title: "جدول روزنامه",
    disabled: false,
    // favorite: true,
    key: "66",
    notice: "public" as INotice
  },
  {
    title: "جدول ضرب",
    disabled: false,
    key: "77"
    // fix: true
  }
];

const Tabs = () => {
  const [tabList, setTabList] = useState(tabs);

  async function handleDelete(key) {
    return new Promise<string>(function (resolve) {
      setTimeout(function () {
        console.log(key, "deleted");
        resolve(key);
      }, 3000);
    });
  }

  async function handleFavorite(key) {
    return new Promise<string>(function (resolve) {
      setTimeout(function () {
        console.log(key, "favorite");
        resolve(key);
      }, 1000);
    });
  }

  const test = i => {
    if (i > 0) {
      const fuu = JSON.parse(JSON.stringify(tabList));
      fuu.splice(Number(i - 1), 1);
      console.log(fuu, "fuu", i);
      setTabList(fuu);
    }
  };

  return (
    <div className="-m-4 lg:p-36 h-full bg-dark-text">
      {/*<Input onChange={i => test(i.target.value)} />*/}
      <SBTTab
        className="h-full"
        tabActions={{
          onNotice: p => console.log(p, "noticed"),
          onActivate: () => {},
          onFavorite: key => handleFavorite(key)
        }}
        // onDelete={handleDelete}
        newTabDefault={<div>تب جدید</div>}
        onDataChange={newData => console.log("hi", newData)}
        showAddButton
        showFavorite
        // showMoreOptions
        tools={
          <div onClick={() => console.log("hi sepehr")}>
            <Calendar />
          </div>
        }
        showRemove
        growTabs
        editable
        // access
      >
        {tabList.map(item => {
          return (
            <SBTTabPane className="h-full p-20" {...item}>
              <h1>{item.title} تست تب فعال</h1>
            </SBTTabPane>
          );
        })}
      </SBTTab>
    </div>
  );
};

export default Tabs;

// Table.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Trash, Ban, Calendar, ExpirationDate } from "radin-icon";
import { CustomColumnType, ITableProps } from "./types";
import { commaSeparator } from "../../../utils/helpers";
import { Table } from ".";
import { Checkbox } from "../../Atoms/Checkbox";

export default {
  title: "components/Molecules/Table",
  component: Table
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => {
  return (
    <div style={{ height: "500px", width: "500px" }}>
      <Table {...args} />
    </div>
  );
};

interface DataType {
  key: React.Key;
  name: string;
  haveOragh: boolean;
  isVirtual: boolean;
  ETF: boolean;
  isPresence: boolean;
  topUnits: number;
  commonUnits: number;
  fixedCost: number;
  manager: string;
  startDate: Date;
}

const data: DataType[] = [
  {
    key: "1",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "2",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "3",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: true,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "4",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "5",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "6",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "7",
    name: "گروه سورن تدبیر",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "8",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "9",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "10",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: true,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "11",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "12",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "13",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "14",
    name: "گروه سورن تدبیر",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "15",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "16",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "17",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: true,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "18",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "19",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "20",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "21",
    name: "گروه سورن تدبیر",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "22",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "23",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "24",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: true,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "25",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "26",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "27",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "28",
    name: "گروه سورن تدبیر",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "29",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "30",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "31",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: true,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "32",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "33",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "34",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "35",
    name: "گروه سورن تدبیر",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "36",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "37",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "38",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: true,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "39",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "40",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "41",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "42",
    name: "گروه سورن تدبیر",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "43",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "44",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "45",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: true,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "46",
    name: "صندوق سرمایه گذاری پدیده",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "47",
    name: "...گروه سرمایه گذاری راهیان",
    haveOragh: true,
    isVirtual: true,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "48",
    name: "گروه سورن تدبیر",
    haveOragh: true,
    isVirtual: false,
    ETF: true,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  },
  {
    key: "49",
    name: "گروه سورن تدبیر",
    haveOragh: false,
    isVirtual: false,
    ETF: false,
    topUnits: 5800,
    commonUnits: 500,
    fixedCost: 16000,
    manager: "وحید حیدری",
    isPresence: true,
    startDate: new Date()
  }
];

const columns: CustomColumnType<DataType>[] = [
  {
    title: "عنوان",
    dataIndex: "name",
    key: "name"
    // fixed: "left",
    // search: {
    //   type: "text",
    //   onFilter: (val: string) => {
    //     console.log(val);
    //   }
    // }
  },
  {
    title: "دارای اوراق",
    dataIndex: "haveOragh",
    key: "haveOragh",
    render: val => {
      if (val) {
        return <Checkbox name={`row-checkbox-checked`} selected variant="check" color="success" disabled />;
      }

      return <Checkbox name={`row-checkbox-unchecked`} selected={false} variant="check" color="success" disabled />;
    }
    // search: {
    //   type: "boolean",
    //   onFilter: (val: boolean) => {
    //     console.log(val);
    //   }
    // }
  },
  {
    title: "مجازی",
    dataIndex: "isVirtual",
    key: "isVirtual",
    render: val => {
      if (val) {
        return <Checkbox name={`row-checkbox-checked`} selected variant="check" color="success" disabled />;
      }

      return <Checkbox name={`row-checkbox-unchecked`} selected={false} variant="check" color="success" disabled />;
    }
    // search: {
    //   type: "boolean",
    //   onFilter: (val: boolean) => {
    //     console.log(val);
    //   }
    // }
  },
  {
    title: "ETF",
    dataIndex: "ETF",
    key: "ETF",
    render: val => (val ? "دارایکم" : "دارادوم")
    // search: {
    //   type: "boolean",
    //   onFilter: (val: boolean) => {
    //     console.log(val);
    //   }
    // }
  },
  {
    title: "صرفا حضوری",
    dataIndex: "isPresence",
    key: "isPresence",
    render: val => {
      if (val) {
        return <Checkbox name={`row-checkbox-checked`} selected variant="check" color="success" disabled />;
      }

      return <Checkbox name={`row-checkbox-unchecked`} selected={false} variant="check" color="success" disabled />;
    }
    // search: {
    //   type: "boolean",
    //   onFilter: (val: boolean) => {
    //     console.log(val);
    //   }
    // }
  },
  {
    title: "واحد های ممتاز",
    dataIndex: "topUnits",
    key: "topUnits",
    width: 200,
    sorter: (a, b) => a.topUnits - b.topUnits
    // search: {
    //   type: "number",
    //   onFilter: (val: number) => {
    //     console.log(val);
    //   }
    // }
  },
  {
    title: "واحد عادی",
    dataIndex: "commonUnits",
    key: "commonUnits",
    width: 200,
    sorter: (a, b) => a.topUnits - b.topUnits
    // search: {
    //   type: "number",
    //   onFilter: (val: number) => {
    //     console.log(val);
    //   }
    // }
  },
  {
    title: "هزینه های ثابت",
    dataIndex: "fixedCost",
    key: "fixedCost",
    render: (val: number) => `${commaSeparator(val)} ریال`
    // search: {
    //   type: "number",
    //   onFilter: (val: number) => {
    //     console.log(val);
    //   }
    // }
  },
  {
    title: "مدیر صندوق",
    dataIndex: "manager",
    key: "manager"
    // search: {
    //   type: "text",
    //   onFilter: (val: string) => {
    //     console.log(val);
    //   }
    // }
  },
  {
    title: "آغاز فعالیت",
    dataIndex: "startDate",
    key: "startDate",
    render: (val: Date) => `${val.getFullYear()}/${val.getMonth() + 1}/${val.getDate()}`
    // search: {
    //   type: "date",
    //   onFilter: (val: Date) => {
    //     console.log(val);
    //   }
    // }
  },
  {
    title: "",
    dataIndex: "key",
    key: "key",
    render: (val: number) => val
  },
  {
    title: "",
    key: "operation",
    fixed: "right",
    width: 40,
    render: (_val, record) => (
      <Table.RowAction
        actions={[
          {
            tooltip: "حذف نماد",
            content: <Trash color="terminate" />,
            onClick: () => {
              console.log(record);
            }
          },
          { tooltip: "ویرایش نماد", content: <Ban color="idle" weight="bold" /> },
          { tooltip: "حذف نماد", content: <ExpirationDate color="idle" /> },
          { tooltip: "حذف نماد", content: <Calendar color="idle" /> }
        ]}
      />
    )
  }
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    name: record.name,
    disabled: false
  })
};

export const Default = Template.bind({});
Default.args = {
  ...Table.defaultProps,
  title: "لیست نماد های شاخص",
  dataSource: data,
  columns: columns,
  pageSize: 2,
  scroll: { y: 1, x: 1500 },
  // displayHeaderPagination: true,
  // hideFooter: true,
  rowSelection: {
    ...rowSelection,
    type: "checkbox"
  }
} as ITableProps;

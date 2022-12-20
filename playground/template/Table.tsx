import { TableRowSelection } from "antd/lib/table/interface";
import { Table as SBTTable, CustomColumnType, Badge as SBTBadge, commaSeparator } from "../../src";

interface DataType {
  key: React.Key;
  name: string;
  registerDate: Date;
  lastPrice: number;
  count: number;
  volume: number;
  value: number;
  dailyInfluence: number;
}

const data: DataType[] = [
  {
    key: "1",
    name: "مارون",
    registerDate: new Date(),
    lastPrice: 1295403.28,
    count: 500,
    volume: 500,
    value: 500,
    dailyInfluence: 1295403.28
  },
  {
    key: "2",
    name: "پارسان",
    registerDate: new Date(),
    lastPrice: 1303545.57,
    count: 250,
    volume: 250,
    value: 250,
    dailyInfluence: 1303545.57
  },
  {
    key: "3",
    name: "فارس",
    registerDate: new Date(),
    lastPrice: 1295403.28,
    count: 300,
    volume: 300,
    value: 300,
    dailyInfluence: 1295403.28
  },
  {
    key: "4",
    name: "جم",
    registerDate: new Date(),
    lastPrice: 1303545.57,
    count: 400,
    volume: 400,
    value: 400,
    dailyInfluence: 1303545.57
  },
  {
    key: "5",
    name: "آپال",
    registerDate: new Date(),
    lastPrice: 1295403.28,
    count: 1000,
    volume: 1000,
    value: 1000,
    dailyInfluence: 1295403.28
  },

  {
    key: "6",
    name: "بو علی",
    registerDate: new Date(),
    lastPrice: 1295403.28,
    count: 500,
    volume: 500,
    value: 500,
    dailyInfluence: 1295403.28
  },
  {
    key: "7",
    name: "پدرخش",
    registerDate: new Date(),
    lastPrice: 1303545.57,
    count: 250,
    volume: 250,
    value: 250,
    dailyInfluence: 1303545.57
  },
  {
    key: "8",
    name: "خچرخش",
    registerDate: new Date(),
    lastPrice: 1295403.28,
    count: 300,
    volume: 300,
    value: 300,
    dailyInfluence: 1295403.28
  },
  {
    key: "9",
    name: "خمحركه",
    registerDate: new Date(),
    lastPrice: 1303545.57,
    count: 400,
    volume: 400,
    value: 400,
    dailyInfluence: 1303545.57
  },
  {
    key: "10",
    name: "دسبحان",
    registerDate: new Date(),
    lastPrice: 1295403.28,
    count: 1000,
    volume: 1000,
    value: 1000,
    dailyInfluence: 1295403.28
  },

  {
    key: "11",
    name: "مارون",
    registerDate: new Date(),
    lastPrice: 1295403.28,
    count: 500,
    volume: 500,
    value: 500,
    dailyInfluence: 1295403.28
  },
  {
    key: "12",
    name: "پارسان",
    registerDate: new Date(),
    lastPrice: 1303545.57,
    count: 250,
    volume: 250,
    value: 250,
    dailyInfluence: 1303545.57
  },
  {
    key: "13",
    name: "فارس",
    registerDate: new Date(),
    lastPrice: 1295403.28,
    count: 300,
    volume: 300,
    value: 300,
    dailyInfluence: 1295403.28
  },
  {
    key: "14",
    name: "جم",
    registerDate: new Date(),
    lastPrice: 1303545.57,
    count: 400,
    volume: 400,
    value: 400,
    dailyInfluence: 1303545.57
  },
  {
    key: "15",
    name: "آپال",
    registerDate: new Date(),
    lastPrice: 1295403.28,
    count: 1000,
    volume: 1000,
    value: 1000,
    dailyInfluence: 1295403.28
  },

  {
    key: "16",
    name: "بو علی",
    registerDate: new Date(),
    lastPrice: 1295403.28,
    count: 500,
    volume: 500,
    value: 500,
    dailyInfluence: 1295403.28
  },
  {
    key: "17",
    name: "پدرخش",
    registerDate: new Date(),
    lastPrice: 1303545.57,
    count: 250,
    volume: 250,
    value: 250,
    dailyInfluence: 1303545.57
  },
  {
    key: "18",
    name: "خچرخش",
    registerDate: new Date(),
    lastPrice: 1295403.28,
    count: 300,
    volume: 300,
    value: 300,
    dailyInfluence: 1295403.28
  },
  {
    key: "19",
    name: "خمحركه",
    registerDate: new Date(),
    lastPrice: 1303545.57,
    count: 400,
    volume: 400,
    value: 400,
    dailyInfluence: 1303545.57
  },
  {
    key: "20",
    name: "دسبحان",
    registerDate: new Date(),
    lastPrice: 1295403.28,
    count: 1000,
    volume: 1000,
    value: 1000,
    dailyInfluence: 1295403.28
  }
];

const columns: CustomColumnType<DataType>[] = [
  {
    title: "نام نماد",
    dataIndex: "name",
    key: "name",
    width: 120,
    render: (val, item) => {
      const badgeClassName = item.count > 600 ? "bg-prompt text-prompt" : "bg-warning text-warning";

      return (
        <div className="flex items-center">
          <SBTBadge type="state" className={badgeClassName} />
          <span className="mr-1">{val}</span>
        </div>
      );
    }
  },
  {
    title: "تاریخ عضویت در شاخص",
    dataIndex: "registerDate",
    key: "registerDate",
    render: (val: Date) => `${val.getFullYear()}/${val.getMonth()}/${val.getDate()}`
  },
  {
    title: "قیمت پایانی",
    dataIndex: "lastPrice",
    key: "lastPrice",
    render: (val, item) => {
      const badgeClassName = item.count > 600 ? "bg-prompt text-prompt" : "bg-warning text-warning";

      return (
        <div className="flex items-center">
          <span className="ml-1">{commaSeparator(val)}</span>
          <SBTBadge type="tag" color="success">
            0.0985 %
          </SBTBadge>
        </div>
      );
    }
  },
  {
    title: "تعداد",
    dataIndex: "count",
    key: "count",
    width: 70,
    sorter: (a, b) => a.count - b.count
  },
  {
    title: "حجم",
    dataIndex: "volume",
    key: "volume"
  },
  {
    title: "ارزش",
    dataIndex: "value",
    key: "value"
  },
  {
    title: "تاثیر روزانه در شاخص کل",
    dataIndex: "dailyInfluence",
    key: "dailyInfluence",
    render: (val: number) => `${commaSeparator(val)}`
  }
];

const rowSelection: TableRowSelection<any> = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    name: record.name,
    disabled: false
  }),
  type: "checkbox"
};

// renderCell: (value, record, index, originNode: any) => {
//   return (
//     <div>
//       {originNode}
//       <Checkbox
//         name={`row-selection-checkbox-${index}`}
//         selected={value}
//         variant="check"
//         color="success"
//         onChange={(_value, checked) => {}}
//       />
//     </div>
//   );

//   // return (
//   //   <input
//   //     type="checkbox"
//   //     id="vehicle1"
//   //     name="vehicle1"
//   //     checked={value}
//   //     onChange={e => originNode.props.onChange(e)}
//   //   />
//   // );
// }

const Badge = () => (
  <div style={{ width: "1000px" }}>
    <SBTTable
      dataSource={data}
      columns={columns}
      className="w-full"
      line="horizontalLine"
      striped
      title="لیست نماد های شاخص"
      rowSelection={rowSelection}
    />
  </div>
);

export default Badge;

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Calendar } from ".";
import { ICalendarProps } from "./types";
import useState from "storybook-addon-state";
import { toJalaliDay } from "../../../utils";

export default {
  title: "components/Organisms/Calendar",
  component: Calendar
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = args => {
  const [value, setValue] = useState<any>("value1", null);

  return (
    <div>
      <div>
        <Calendar {...args} onChange={v => (Array.isArray(v) ? null : setValue(toJalaliDay(v).format()))} />
      </div>
      {value && <div className="mt-4">{value}</div>}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Calendar.defaultProps,
  value: "2020-03-01T20:30:00.000Z"
} as ICalendarProps;

import { useState } from "react";
import { DatePicker as SBTDatePicker } from "../../src";
import { Calendar } from "../../src";

import type { Value } from "react-multi-date-picker";

const DatePicker = () => {
  const [value, setValue] = useState<Value>();

  return (
    <div className="flex mb-2">
      <SBTDatePicker
        placeholder="asda"
        className="w-96"
        name={"asd"}
        label={"تاریخ"}
        editable
        // @ts-ignore
        value={value}
        onChange={e => {
          setValue(e);
        }}
      />
      <Calendar />
    </div>
  );
};

export default DatePicker;

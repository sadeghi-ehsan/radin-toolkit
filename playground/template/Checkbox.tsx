import { ReactElement, useState } from "react";
import { Checkbox as SBTCheckbox, CheckboxSize, CheckboxVariant, ICheckboxProps } from "../../src";
import { checkboxSizes, checkboxVariants } from "../../src/components/Atoms/Checkbox/utils";

const CheckboxPack: (props: ICheckboxProps & { checkAll: boolean }) => ReactElement = ({ checkAll, ...props }) => {
  const [options, setOptions] = useState<string[]>([]);

  return (
    <div className="flex">
      <div className="ml-2">
        {Object.keys(checkboxVariants).map((va: CheckboxVariant, j) => (
          <SBTCheckbox
            key={j}
            {...props}
            value={`${va}${j}`}
            color="success"
            variant={va}
            className="ml-2"
            selected={v => options.includes(v) || checkAll}
            onChange={(v, checked) =>
              checked ? setOptions([...options, v]) : setOptions(options.filter(o => o !== v))
            }
          >
            گزینه {j + 1}
          </SBTCheckbox>
        ))}
      </div>
    </div>
  );
};

const Checkbox = () => {
  const [checkAll, setCheckAll] = useState<boolean>(true);
  return (
    <>
      <SBTCheckbox
        name="check-all"
        className="mb-2"
        value="check-all"
        color="success"
        block
        selected={checkAll}
        onChange={(v, checked) => setCheckAll(checked)}
      >
        Check All
      </SBTCheckbox>
      Default:
      <CheckboxPack checkAll={checkAll} name="gender" />
      <br />
      {Object.keys(checkboxSizes).map((s: CheckboxSize, i) => (
        <div key={i} className="mt-2">
          <span className="text-lg text-light-text">{s}:</span>
          <CheckboxPack checkAll={checkAll} name={`gender${i}`} size={s} />
        </div>
      ))}
      <br />
      <div className="mt-2">
        Disabled:
        <CheckboxPack checkAll={checkAll} name="disabled-gender" disabled />
      </div>
    </>
  );
};

export default Checkbox;

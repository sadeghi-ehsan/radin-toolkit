import { Fragment, useState } from "react";
import { Input as SBTInput, Typography as SBTTypography, WrapperVariant } from "../../src";
import { wrapperVariants, wrapperSizes } from "../../src/components/Atoms/FormElementWrapper/utils";
import { baseInputAlignments } from "../../src/components/Atoms/BaseInput/utils";
import { inputTypes } from "../../src/components/Molecules/Input/utils";

const Input = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex">
      {Object.keys(wrapperVariants).map((variant: WrapperVariant, vk) => (
        <div key={vk} className="w-full ml-5 flex flex-col justify-between">
          <SBTTypography variant="heading7">variant: {variant}</SBTTypography>
          {Object.entries({
            size: Object.keys(wrapperSizes(variant === "line")),
            important: [true],
            required: [true],
            readOnly: [true],
            disabled: [true],
            clearable: [true],
            verified: [true],
            error: [true, "یک متن خطا"],
            help: ["یک متن راهنما"],
            align: Object.keys(baseInputAlignments),
            type: Object.keys(inputTypes)
          }).map(([k, values], pk) => (
            <Fragment key={pk}>
              {values.map((v, vv) => (
                <div key={vv} className="mt-1">
                  <SBTTypography variant="heading8">
                    {k}: {v}
                  </SBTTypography>
                  <SBTInput
                    name="uncontrolled"
                    label="نام"
                    variant={variant}
                    value={value}
                    onChange={setValue}
                    {...{ [k]: v }}
                  />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Input;

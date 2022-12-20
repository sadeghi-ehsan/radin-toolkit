import { useState } from "react";
import { Radio as SBTRadio } from "../../src";
import { radioColors, radioSizes } from "../../src/components/Atoms/Radio/utils";

const RadioPack = props => {
  const [option, setOption] = useState<string>("male");

  return (
    <div className="flex">
      {Object.keys(radioColors).map((c, i) => (
        <div key={i} className="ml-2">
          <span className="text-idle mb-1 block">
            {c}
            <hr />
          </span>
          <SBTRadio {...props} value="female" color={c} selected={v => option === v} onChange={v => setOption(v)}>
            من یک زن هستم
          </SBTRadio>
          <SBTRadio
            {...props}
            className="mt-1"
            value="male"
            color={c}
            selected={v => option === v}
            onChange={v => setOption(v)}
          >
            من یک مرد هستم
          </SBTRadio>
        </div>
      ))}
    </div>
  );
};

const Radio = () => {
  return (
    <>
      Default:
      <RadioPack name="gender" />
      <br />
      {Object.keys(radioSizes).map((s, i) => (
        <div key={i} className="mt-2">
          <span className="text-lg text-light-text">{s}:</span>
          <RadioPack name={`gender${i}`} size={s} />
        </div>
      ))}
      <br />
      <div className="mt-2">
        Disabled:
        <RadioPack name="disabled-gender" disabled />
      </div>
    </>
  );
};

export default Radio;

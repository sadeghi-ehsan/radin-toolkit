import { FunctionComponent, useEffect, useState } from "react";
import { empty, isCallable } from "../../../utils";
import { IInputCascadingProps } from "./types";
import { renderTypeInputContent, renderTypeSelectContent } from "./utils";

const InputCascading: FunctionComponent<IInputCascadingProps> = props => {
  const { value, options, onChange, name, firstOptionAsDefault, inputType, ...restProps } = props;

  const defaultSelectedOption = (firstOptionAsDefault && options?.length ? options?.[0]?.value : "") || "";
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [combinedValue, setCombinedValue] = useState({
    value: value?.value || "",
    selectedOption: value?.selectedOption || defaultSelectedOption
  });

  /**
   * onChange handler
   */
  useEffect(() => {
    if (
      !empty(onChange) &&
      isCallable(onChange) &&
      !empty(combinedValue) &&
      JSON.stringify(combinedValue) !== JSON.stringify(value)
    ) {
      onChange(combinedValue, name);
    }
  }, [combinedValue]);

  useEffect(() => {
    if (
      !empty(value) &&
      (value?.value !== combinedValue.value || value?.selectedOption !== combinedValue.selectedOption)
    ) {
      setCombinedValue({
        value: value?.value || "",
        selectedOption: value?.selectedOption || defaultSelectedOption
      });
    }
  }, [value]);

  const renderFunctionsParams = {
    ...restProps,
    name,
    combinedValue,
    options,
    setCombinedValue,
    setIsDropDownVisible,
    isDropDownVisible,
    value
  };

  if (inputType === "select") return renderTypeSelectContent(renderFunctionsParams);

  return renderTypeInputContent(renderFunctionsParams);
};

InputCascading.defaultProps = {
  inputType: "input",
  firstOptionAsDefault: true
};

export default InputCascading;

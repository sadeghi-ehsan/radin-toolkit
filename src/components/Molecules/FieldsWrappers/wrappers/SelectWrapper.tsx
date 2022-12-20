import { Controller } from "react-hook-form";
import { IFormBuilderFieldWrapperProps } from "../../../Organisms/FormBuilder";
import { isCallable } from "../../../../utils";
import { Select } from "../../Select";

/**
 * @param formProps: react-hook-form formProps.
 * @param propsInFieldSchema: props object in the field schema.
 */
const SelectWrapper: IFormBuilderFieldWrapperProps = ({ fieldSchema, formProps, propsInFieldSchema }) => {
  const { control } = formProps;
  const { name, options, onChange } = propsInFieldSchema;

  return (
    <Controller
      name={fieldSchema.name || name}
      control={control}
      render={({ field, fieldState }) => (
        <Select
          {...{ ...field, error: fieldState.error?.message, ...propsInFieldSchema }}
          onChange={v => (onChange && isCallable(onChange) ? onChange(v) : field.onChange(v?.value))}
          value={
            field.value && {
              value: field.value,
              label: options?.find(o => o.value === field.value)?.label || field.value
            }
          }
        />
      )}
    />
  );
};

export default SelectWrapper;

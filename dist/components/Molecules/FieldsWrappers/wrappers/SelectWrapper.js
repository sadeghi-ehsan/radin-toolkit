import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { isCallable } from "../../../../utils";
import { Select } from "../../Select";
/**
 * @param formProps: react-hook-form formProps.
 * @param propsInFieldSchema: props object in the field schema.
 */
const SelectWrapper = ({ fieldSchema, formProps, propsInFieldSchema }) => {
    const { control } = formProps;
    const { name, options, onChange } = propsInFieldSchema;
    return (_jsx(Controller, { name: fieldSchema.name || name, control: control, render: ({ field, fieldState }) => (_jsx(Select, { ...{ ...field, error: fieldState.error?.message, ...propsInFieldSchema }, onChange: v => (onChange && isCallable(onChange) ? onChange(v) : field.onChange(v?.value)), value: field.value && {
                value: field.value,
                label: options?.find(o => o.value === field.value)?.label || field.value
            } })) }));
};
export default SelectWrapper;
//# sourceMappingURL=SelectWrapper.js.map
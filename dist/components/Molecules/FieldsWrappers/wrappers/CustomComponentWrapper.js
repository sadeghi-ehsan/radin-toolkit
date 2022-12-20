import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { randomStr } from "../../../../utils";
/**
 * @param formProps: react-hook-form formProps.
 * @param propsInFieldSchema: props object in the field schema.
 * @param component: component to render.
 */
const CustomComponentWrapper = ({ fieldSchema, formProps, propsInFieldSchema, component, returningParams }) => (_jsx(Controller, { name: fieldSchema.name || propsInFieldSchema.name || randomStr(), control: formProps.control, render: ({ field, fieldState, formState }) => component({ field, fieldState, formState, ...(returningParams || {}) }) }));
export default CustomComponentWrapper;
//# sourceMappingURL=CustomComponentWrapper.js.map
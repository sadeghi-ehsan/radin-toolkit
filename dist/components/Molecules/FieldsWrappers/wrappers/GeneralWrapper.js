import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { randomStr } from "../../../../utils";
/**
 * @param formProps: react-hook-form formProps.
 * @param propsInFieldSchema: props object in the field schema.
 * @param component: component to render.
 */
const GeneralWrapper = ({ fieldSchema, formProps, propsInFieldSchema, component: Component }) => (_jsx(Controller, { name: fieldSchema.name || propsInFieldSchema.name || randomStr(), control: formProps.control, render: ({ field, fieldState }) => (_jsx(Component, { ...{ ...field, error: fieldState.error?.message, ...propsInFieldSchema } })) }));
export default GeneralWrapper;
//# sourceMappingURL=GeneralWrapper.js.map
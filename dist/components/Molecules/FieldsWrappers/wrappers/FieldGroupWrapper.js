import { jsx as _jsx } from "react/jsx-runtime";
import { FieldGroup } from "../../../Atoms/FieldGroup";
import RenderField from "../../../Organisms/FormBuilder/components/RenderField";
/**
 * @param formProps: react-hook-form formProps.
 * @param propsInFieldSchema: props object in the field schema.
 * @param component: component to render.
 */
const FieldGroupWrapper = ({ fieldSchema, formProps, formMethod, modifyValidationSchema, propsInFieldSchema, returningParams }) => {
    const formErrors = formProps?.formState?.errors;
    // map on object formErrors to find if contains the field name which in the fieldSchema.fields.
    const isChildInputsHasError = formErrors && Object.keys(formErrors)?.some(key => fieldSchema?.fields?.some(field => field?.props?.name === key));
    return (_jsx(FieldGroup, { ...propsInFieldSchema, error: formErrors?.[propsInFieldSchema?.name]?.message || isChildInputsHasError, children: fieldSchema?.fields?.map((item, index) => (_jsx(RenderField, { fieldSchema: item, formMethod: formMethod, modifyValidationSchema: modifyValidationSchema, returningParams: returningParams }, index))) }));
};
export default FieldGroupWrapper;
//# sourceMappingURL=FieldGroupWrapper.js.map
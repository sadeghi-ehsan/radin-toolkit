import * as yup from "yup";
import { empty, isCallable, isString } from "../../../utils";
export const widthMap = {
    "1/2": "sm:!w-1/2",
    "1/3": "sm:!w-1/3",
    "2/3": "sm:!w-2/3",
    "1/4": "sm:!w-1/4",
    "2/4": "sm:!w-2/4",
    "3/4": "sm:!w-3/4"
};
/**
 * generate the validation object for the form.
 */
export const generateValidationObj = ({ returningParams, schema, validationsToIgnore, defaultRequiredErrorMessage }) => schema.reduce((prev, field) => {
    const props = isCallable(field.props) ? field.props(returningParams) : field.props;
    const name = field.name || props?.name;
    let rule = field.rule || null;
    /**
     * for handle nested fields
     * i.e. fields inside FieldGroup component which have `fields` array inside himself.
     */
    if (field?.fields) {
        rule = generateValidationObj({
            returningParams,
            schema: field.fields,
            validationsToIgnore,
            defaultRequiredErrorMessage
        });
        return { ...prev, ...(rule && { ...rule }) };
    }
    /**
     * return if field hasn't `name` prop or prop is empty or exist in validations to ignore.
     */
    if (!props || !name || validationsToIgnore?.includes(name)) {
        return prev;
    }
    if (!rule && "required" in props && props?.required) {
        rule = yup
            .string()
            .required(defaultRequiredErrorMessage?.replace("$", !empty(props?.label) && isString(props?.label) ? props?.label : ""));
    }
    return { ...prev, ...(rule && { [name]: rule }) };
}, {});
/**
 * form default values.
 */
export const formDefaultValuesObj = ({ returningParams, schema, formDefaultValues }) => schema.reduce((prev, field) => {
    const { props } = field;
    const propsInFieldSchema = typeof props === "function" ? props(returningParams) : props;
    const name = field.name || propsInFieldSchema?.name;
    /**
     * for handle nested fields
     * i.e. fields inside FieldGroup component which have `fields` array inside himself.
     */
    if (field?.fields) {
        const value = formDefaultValuesObj({ returningParams, schema: field.fields, formDefaultValues });
        return { ...prev, ...(value && { ...value }) };
    }
    if (!propsInFieldSchema || !name)
        return prev;
    const value = field.value
        ? isCallable(field.value)
            ? field.value(returningParams)
            : field.value
        : formDefaultValues?.[name];
    return { ...prev, ...(value && { [name]: value }) };
}, {});
/**
 * set validations to ignore.
 * @param fieldName : field name
 * @param isAdd : i want to add to array / remove from array
 */
export function modifyValidationSchema(fieldName, isAdd, { formProps, validationsToIgnore, setValidationsToIgnore }) {
    if (isAdd) {
        // add to ignore this field in the validation.
        if (!validationsToIgnore?.includes(fieldName)) {
            // if not exist in array
            formProps.setValue(fieldName, undefined); // remove the value from the form.
            setValidationsToIgnore(prev => [...prev, fieldName]);
        }
    }
    else if (validationsToIgnore?.includes(fieldName)) {
        // remove from array to un-ignore this field in the validation.
        setValidationsToIgnore(prev => prev.filter(a => a !== fieldName));
    }
}
//# sourceMappingURL=utils.js.map
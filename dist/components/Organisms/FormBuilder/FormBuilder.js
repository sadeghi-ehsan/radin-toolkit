import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react/no-array-index-key */
import { forwardRef, useEffect, useRef, useState } from "react";
import { FormProvider } from "react-hook-form";
import { classJoin, ifNotEmpty } from "../../../utils";
import { formDefaultValuesObj, generateValidationObj, modifyValidationSchema } from "./utils";
import RenderField from "./components/RenderField";
export const FormBuilder = forwardRef(({ schema, form, onSubmit, defaultRequiredErrorMessage, formDefaultValues, className, formMethod, children, ...restProps }, passedRef) => {
    const ref = ifNotEmpty(passedRef, passedRef, useRef());
    const [validationsToIgnore, setValidationsToIgnore] = useState([]);
    if (!form) {
        throw new Error("`form` property is required in FormBuilder");
    }
    const { formProps, setValidationSchemaObj } = form;
    /**
     * params returned in the following functions (in schema):
     * - props
     * - hideOnForm
     * - onDidMount
     * - onDidUnMount
     *
     * i.e:
     *  props: ({ formProps, formMethod }) => ({
     *  ...
     * })
     */
    const returningParams = {
        formProps,
        formMethod
    };
    /**
     * set form initial values.
     * we use 'useEffect" because we need to pass 'formProps' to formDefaultValuesObj.
     * because in formDefaultValuesObj we pass 'formProps' to the 'schema'. because sometimes the 'props' is not object but function in schema.
     */
    useEffect(() => {
        const obj = formDefaultValuesObj({ returningParams, schema, formDefaultValues });
        if (obj) {
            formProps.reset(obj);
        }
    }, [formDefaultValues]);
    /**
     * set validation schema.
     * we use 'useEffect" because we need to pass 'formProps' to generateValidationObj.
     * because in generateValidationObj we pass 'formProps' to the 'schema'. because sometimes the 'props' is not object but function in schema.
     */
    useEffect(() => {
        const obj = generateValidationObj({ returningParams, schema, validationsToIgnore, defaultRequiredErrorMessage });
        if (obj) {
            setValidationSchemaObj(obj);
        }
    }, [validationsToIgnore]);
    const _modifyValidationSchema = (fieldName, isAdd) => modifyValidationSchema(fieldName, isAdd, { formProps, validationsToIgnore, setValidationsToIgnore });
    return (_jsx(FormProvider, { ...formProps, children: _jsxs("form", { ref: ref, onSubmit: onSubmit, className: classJoin(["flex flex-wrap sm:-mx-2", className]), ...restProps, children: [schema.map((item, index) => (_jsx(RenderField, { fieldSchema: item, formMethod: formMethod, modifyValidationSchema: _modifyValidationSchema, returningParams: returningParams }, index))), children && children] }) }));
});
FormBuilder.defaultProps = {
    defaultRequiredErrorMessage: "$ الزامی می‌باشد",
    formMethod: "new" // new | edit | view
};
export default FormBuilder;
//# sourceMappingURL=FormBuilder.js.map
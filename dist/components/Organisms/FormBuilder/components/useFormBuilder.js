import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const useFormBuilder = ({ formOptions } = {}) => {
    const [validationSchemaObj, setValidationSchemaObj] = useState({});
    /**
     * form validation Cyclic dependency
     * usage: if in form we check conditionally a field with himself,
     * we need to pass array of that field in order to prevent cyclic dependency
     * how? we will have `deps` in each item of `validationSchemaObj`. we use `deps` object and combine them together.
     */
    const formValidationSchemaCyclicDeps = Object.values(validationSchemaObj).reduce((acc, curr) => {
        if (curr.deps?.length) {
            curr.deps
                ?.filter((item, pos) => curr.deps.indexOf(item) === pos) // remove duplicates
                ?.map(dep => acc.push([dep, dep]));
        }
        return acc;
    }, []);
    const formProps = useForm({
        resolver: yupResolver(yup.object().shape(validationSchemaObj, formValidationSchemaCyclicDeps)),
        ...(formOptions || {})
    });
    return { formProps, setValidationSchemaObj };
};
export default useFormBuilder;
//# sourceMappingURL=useFormBuilder.js.map
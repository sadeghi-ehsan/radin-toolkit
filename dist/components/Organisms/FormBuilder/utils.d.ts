export declare const widthMap: {
    "1/2": string;
    "1/3": string;
    "2/3": string;
    "1/4": string;
    "2/4": string;
    "3/4": string;
};
/**
 * generate the validation object for the form.
 */
export declare const generateValidationObj: ({ returningParams, schema, validationsToIgnore, defaultRequiredErrorMessage }: {
    returningParams: any;
    schema: any;
    validationsToIgnore: any;
    defaultRequiredErrorMessage: any;
}) => any;
/**
 * form default values.
 */
export declare const formDefaultValuesObj: ({ returningParams, schema, formDefaultValues }: {
    returningParams: any;
    schema: any;
    formDefaultValues: any;
}) => any;
/**
 * set validations to ignore.
 * @param fieldName : field name
 * @param isAdd : i want to add to array / remove from array
 */
export declare function modifyValidationSchema(fieldName: any, isAdd: boolean, { formProps, validationsToIgnore, setValidationsToIgnore }: {
    formProps: any;
    validationsToIgnore: any;
    setValidationsToIgnore: any;
}): void;

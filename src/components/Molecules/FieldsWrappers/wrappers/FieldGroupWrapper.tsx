/* eslint-disable react/no-array-index-key */
import { IFormBuilderFieldWrapperProps } from "../../../Organisms/FormBuilder";
import { FieldGroup } from "../../../Atoms/FieldGroup";
import RenderField from "../../../Organisms/FormBuilder/components/RenderField";

/**
 * @param formProps: react-hook-form formProps.
 * @param propsInFieldSchema: props object in the field schema.
 * @param component: component to render.
 */
const FieldGroupWrapper: IFormBuilderFieldWrapperProps = ({
  fieldSchema,
  formProps,
  formMethod,
  modifyValidationSchema,
  propsInFieldSchema,
  returningParams
}) => {
  const formErrors = formProps?.formState?.errors;

  // map on object formErrors to find if contains the field name which in the fieldSchema.fields.
  const isChildInputsHasError =
    formErrors && Object.keys(formErrors)?.some(key => fieldSchema?.fields?.some(field => field?.props?.name === key));

  return (
    <FieldGroup
      {...propsInFieldSchema}
      error={formErrors?.[propsInFieldSchema?.name]?.message || isChildInputsHasError}
    >
      {fieldSchema?.fields?.map((item, index) => (
        <RenderField
          key={index}
          fieldSchema={item}
          formMethod={formMethod}
          modifyValidationSchema={modifyValidationSchema}
          returningParams={returningParams}
        />
      ))}
    </FieldGroup>
  );
};

export default FieldGroupWrapper;

import { Controller } from "react-hook-form";
import { randomStr } from "../../../../utils";
import { IFormBuilderFieldWrapperProps } from "../../../Organisms/FormBuilder";

/**
 * @param formProps: react-hook-form formProps.
 * @param propsInFieldSchema: props object in the field schema.
 * @param component: component to render.
 */
const CustomComponentWrapper: IFormBuilderFieldWrapperProps = ({
  fieldSchema,
  formProps,
  propsInFieldSchema,
  component,
  returningParams
}) => (
  <Controller
    name={fieldSchema.name || propsInFieldSchema.name || randomStr()}
    control={formProps.control}
    render={({ field, fieldState, formState }) =>
      component({ field, fieldState, formState, ...(returningParams || {}) })
    }
  />
);

export default CustomComponentWrapper;

import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { classJoin, empty, isCallable } from "../../../../utils";
import { FormBuilderRenderFieldType } from "..";
import FieldComponent from "./FieldComponent";
import { widthMap } from "../utils";

export default function RenderField({
  fieldSchema,
  formMethod,
  modifyValidationSchema,
  returningParams
}: FormBuilderRenderFieldType): ReactElement {
  const formProps = useFormContext(); // retrieve all hook methods
  const { width, className, hideOnForm } = fieldSchema;
  const fieldComponent = FieldComponent({
    fieldSchema,
    formProps,
    returningParams,
    formMethod,
    modifyValidationSchema
  });

  /**
   * if fieldComponent is not found.
   */
  if (empty(fieldComponent)) return null;

  /**
   * handle if we need to hide the field on the form.
   */
  if (
    !empty(hideOnForm) &&
    isCallable(hideOnForm) &&
    fieldSchema.props &&
    ("name" in fieldSchema.props || fieldSchema.name)
  ) {
    const isShouldHide = hideOnForm(returningParams);

    if (isShouldHide) {
      modifyValidationSchema(fieldSchema.name || fieldSchema.props.name, true); // add to ignore this field in the validation.
      return null; // hide component
    }
    modifyValidationSchema(fieldSchema.name || fieldSchema.props.name, false); // bring back hidden field to validation
  }

  return <div className={classJoin(["w-full sm:px-2", widthMap[width], className])}>{fieldComponent}</div>;
}

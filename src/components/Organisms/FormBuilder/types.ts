import { ControllerFieldState, UseFormProps, UseFormReturn } from "react-hook-form";
import { FormEventHandler, FormHTMLAttributes, ReactElement } from "react";
import { StandardProps } from "../../../types/common";
import { widthMap } from "./utils";
import { IButtonProps } from "../../Atoms/Button";
import { IInputProps } from "../../Molecules/Input";
import { IInputBankCardProps } from "../../Molecules/InputBankCard";
import { IInputCascadingProps } from "../../Molecules/InputCascading";
import { IInputCodeVerifyProps } from "../../Molecules/InputCodeVerify";
import { IInputImageUploaderProps } from "../../Molecules/InputImageUploader";
import { IInputIPAddressProps } from "../../Molecules/InputIPAddress";
import { IInputMultipleInputsProps } from "../../Molecules/InputMultipleInputs";
import { IInputMultiplierProps } from "../../Molecules/InputMultiplier";
import { IInputPasswordProps } from "../../Molecules/InputPassword";
import { IInputShebaProps } from "../../Molecules/InputSheba";
import { IFieldGroupProps } from "../../Atoms/FieldGroup";
import { IInputNumberProps } from "../../Molecules/InputNumber";
import { ISelectProps } from "../../Molecules/Select";
import { ISliderProps } from "../../Atoms/Slider";
import { ITextareaProps } from "../../Molecules/Textarea";
import { IDatePickerProps } from "../../Molecules/DatePicker";

export interface IFormBuilderProps extends StandardProps, FormHTMLAttributes<HTMLFormElement> {
  /**
   * default error message for all fields in the form that are not have their own error message and required in props.
   * the $ in the string will replaced with the field name in the error message automatically.
   */
  defaultRequiredErrorMessage?: string;

  /**
   * is this is a create form or an edit form or a view form.
   * @default 'new'
   */
  formMethod?: TFormBuilderFormMethod;

  /**
   * schema of the form. This is used to generate the form fields.
   */
  schema: TFormBuilderSchemaTypes[];

  /**
   * form hook returned values.
   */
  form: TUseFormBuilderReturn;

  /**
   * callback function that will be called when the form is submitted.
   */
  onSubmit?: FormEventHandler<HTMLFormElement>;

  /**
   * form default (initial) values.
   */
  formDefaultValues?: object;

  /**
   * className of the form container.
   * will pass to <form> tag.
   */
  className?: string;
}

export type TFormBuilderFormMethod = "new" | "update" | "readOnly";
export type TFormBuilderUseFormReturn = UseFormReturn;
export type TUseFormBuilder = (args?: { formOptions?: UseFormProps }) => TUseFormBuilderReturn;
export type TUseFormBuilderReturn = {
  formProps: TFormBuilderUseFormReturn;
  setValidationSchemaObj: (schema: any) => void;
};
export type IFormBuilderCustomComponentProps = {
  formProps: TFormBuilderUseFormReturn;
  field?: any;
  fieldState?: ControllerFieldState;
  formState?: any;
  formMethod?: TFormBuilderFormMethod;
};

/**
 * just for /src/components/Organisms/FormBuilder/RenderField.tsx
 */
export interface FormBuilderRenderFieldType {
  fieldSchema: TFormBuilderSchemaTypes;
  formMethod: TFormBuilderFormMethod;
  modifyValidationSchema: (fieldName: string, isAdd: boolean) => void;
  returningParams: TFormBuilderReturningParams;
}

/**
 * just for /src/components/Organisms/FormBuilder/FieldComponent.tsx
 */
export interface FormBuilderFieldComponentType {
  fieldSchema: TFormBuilderSchemaTypes;
  formMethod: TFormBuilderFormMethod;
  formProps: TFormBuilderUseFormReturn;
  modifyValidationSchema: (fieldName: string, isAdd: boolean) => void;
  returningParams: TFormBuilderReturningParams;
}

export type TFormBuilderReturningParams = {
  formProps: TFormBuilderUseFormReturn;
  formMethod?: TFormBuilderFormMethod;
};

export type IFormBuilderFieldWrapperProps = (args: {
  fieldSchema: TFormBuilderSchemaTypes;
  formProps: TFormBuilderUseFormReturn;
  returningParams: TFormBuilderReturningParams;
  propsInFieldSchema: any;
  formMethod: TFormBuilderFormMethod;
  modifyValidationSchema: (fieldName: string, isAdd: boolean) => void;
  component?: any;
}) => ReactElement;

interface ComponentSchemaType<ComponentTypeName, ComponentType> {
  fieldType: ComponentTypeName;
  props: ComponentType | ((args: TFormBuilderReturningParams) => ComponentType); // need add formMethod
  width?: keyof typeof widthMap;
  value?: string | ((args: TFormBuilderReturningParams) => void);
  rule?: any;
  className?: string;
  hideOnForm?: (args: TFormBuilderReturningParams) => boolean;
  component?: (props: IFormBuilderCustomComponentProps) => ReactElement;
  onDidMount?: (args: TFormBuilderReturningParams) => void;
  onDidUnMount?: (args: TFormBuilderReturningParams) => void;
  fields?: TFormBuilderSchemaTypes[]; // for nested schema in schema (i.e. FieldGroup)
  name?: string;
}

export type TFormBuilderSchemaTypes =
  | ComponentSchemaType<null, any>
  | ComponentSchemaType<"space", any>
  | ComponentSchemaType<"Button", IButtonProps>
  | ComponentSchemaType<"Input", IInputProps>
  | ComponentSchemaType<"InputBankCard", IInputBankCardProps>
  | ComponentSchemaType<"InputCascading", IInputCascadingProps>
  | ComponentSchemaType<"InputCodeVerify", IInputCodeVerifyProps>
  | ComponentSchemaType<"InputImageUploader", IInputImageUploaderProps>
  | ComponentSchemaType<"InputIPAddress", IInputIPAddressProps>
  | ComponentSchemaType<"InputMultipleInputs", IInputMultipleInputsProps>
  | ComponentSchemaType<"InputMultiplier", IInputMultiplierProps>
  | ComponentSchemaType<"InputPassword", IInputPasswordProps>
  | ComponentSchemaType<"InputSheba", IInputShebaProps>
  | ComponentSchemaType<"InputNumber", IInputNumberProps>
  | ComponentSchemaType<"Select", ISelectProps>
  | ComponentSchemaType<"Slider", ISliderProps>
  | ComponentSchemaType<"FieldGroup", IFieldGroupProps>
  | ComponentSchemaType<"Textarea", ITextareaProps>
  | ComponentSchemaType<"DatePicker", IDatePickerProps>;

export type TFormBuilderFieldTypes =
  | "space"
  | "Button"
  | "Input"
  | "InputSheba"
  | "InputBankCard"
  | "InputCascading"
  | "InputCodeVerify"
  | "InputImageUploader"
  | "InputIPAddress"
  | "InputMultipleInputs"
  | "InputMultiplier"
  | "InputPassword"
  | "InputNumber"
  | "Select"
  | "Slider"
  | "FieldGroup"
  | "Textarea"
  | "DatePicker";

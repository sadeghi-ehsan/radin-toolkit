import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import * as Components from "../../../..";
import * as ComponentWrappers from "../../../Molecules/FieldsWrappers";
import { isCallable, ucFirst } from "../../../../utils";
import CustomComponentWrapper from "../../../Molecules/FieldsWrappers/wrappers/CustomComponentWrapper";
/**
 * render the field component.
 */
export default function FieldComponent({ fieldSchema, formProps, formMethod, modifyValidationSchema, returningParams }) {
    const { fieldType, props, onDidMount, onDidUnMount } = fieldSchema;
    const ـfieldType = fieldType && ucFirst(fieldType);
    /**
     * onDidMount is a function that will be called after the field is mounted.
     * onDidUnMount is a function that will be called after the field is unmounted.
     */
    useEffect(() => {
        if (onDidMount && isCallable(onDidMount)) {
            onDidMount(returningParams);
        }
        return () => {
            if (onDidUnMount && isCallable(onDidUnMount)) {
                onDidUnMount(returningParams);
            }
        };
    }, []);
    /**
     * render empty component.
     */
    if (fieldType === "space") {
        return _jsx("div", {});
    }
    /**
     * props In Field Schema
     */
    let propsInFieldSchema = isCallable(props) ? props(returningParams) : props;
    propsInFieldSchema = {
        ...(propsInFieldSchema || {}),
        ...{ readOnly: formMethod === "readOnly" || (propsInFieldSchema && propsInFieldSchema?.readOnly) }
    };
    /**
     * if fieldType : Component
     */
    if (fieldSchema.component && isCallable(fieldSchema.component)) {
        return (_jsx(CustomComponentWrapper, { component: fieldSchema.component, ...{ fieldSchema, formProps, returningParams, propsInFieldSchema, formMethod, modifyValidationSchema } }));
    }
    /**
     * if component have a specific wrapper.
     * find the component in the components in the folder `FieldsWrappers`.
     * if the component wrapper founded:
     */
    const ComponentFoundedWrapper = ComponentWrappers[`${ـfieldType}Wrapper`];
    if (ComponentFoundedWrapper && isCallable(ComponentFoundedWrapper)) {
        return (_jsx(ComponentFoundedWrapper, { ...{ fieldSchema, formProps, returningParams, propsInFieldSchema, formMethod, modifyValidationSchema } }));
    }
    /**
     * if component have NOT specific wrapper.
     * then check if component is exist in the folder `src`.
     * if the component founded:
     * @param component: component to render.
     */
    const MyComponent = Components[ـfieldType];
    const { GeneralWrapper } = ComponentWrappers;
    if (MyComponent) {
        return (_jsx(GeneralWrapper, { component: MyComponent, ...{ fieldSchema, formProps, returningParams, propsInFieldSchema, formMethod, modifyValidationSchema } }));
    }
    /**
     * if nothing founded.
     */
    return null;
}
//# sourceMappingURL=FieldComponent.js.map
import { forwardRef, useRef, useState } from "react";
import { FormElementWrapper, IFormElWrapperProps } from "../../Atoms/FormElementWrapper";
import { CompoundedComponent } from "../../../types/common";
import { ISelectProps } from "./types";
import { classJoin, empty, extractFormElementProps, ifNotEmpty, isCallable, randomStr } from "../../../utils";
import { customComponents as selectCustomComponents, customStyles, customTheme, selectTypes } from "./utils";

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  (
    {
      // Select props
      className,
      clearedValue,
      searchable,
      id: _id,
      onChange,
      onInputChange,
      disabled,
      value,
      name,
      style,
      loading,
      multi,
      placeholder,
      type,
      onMenuOpen,
      onMenuClose,

      // FormElementWrapper props,
      size,
      clearable,
      childrenClassName,
      fieldsetClassName,
      customComponents,
      ...restProps
    },
    passedRef
  ) => {
    const id = _id || `InputSelect-${name || randomStr()}`;
    const ref = ifNotEmpty(passedRef, passedRef, useRef());
    const [open, setOpen] = useState(false);

    const SelectComponent = selectTypes[type];

    const [wrapperProps, componentProps] = extractFormElementProps(restProps);

    const handleChange = (v, o?) => {
      if (!empty(onChange) && isCallable(onChange)) {
        onChange(v, name, o);
      }
    };

    const handleInputChange = v => {
      if (!empty(onInputChange) && isCallable(onInputChange) && v) onInputChange(v);
    };

    const onClear = () => {
      handleChange(clearedValue);

      if (value === undefined) {
        if (!empty(ref?.current)) {
          ref.current.value = "";
        }
      }
    };

    const fieldsetClicked = () => {
      // setOpen(!open);
    };
    return (
      <FormElementWrapper
        {...wrapperProps}
        {...({
          id,
          onClear,
          size,
          disabled,
          style,
          clearable: false,
          allowClear: !empty(value) || value === undefined,
          className: classJoin(["sbt-select", className]),
          childrenClassName: classJoin(["py-0 pl-0 pr-0", childrenClassName]),
          onFieldsetClick: fieldsetClicked,
          fieldsetClassName: classJoin([
            "!py-0 focus-within:shadow-none",
            ifNotEmpty(
              open,
              "rounded-b-none border-b-transparent bg-red hover:border-b-transparent focus-within:border-b-transparent"
            ),
            fieldsetClassName
          ])
        } as IFormElWrapperProps)}
      >
        <SelectComponent
          {...componentProps}
          {...{ [type === "asyncPaginate" ? "selectRef" : "ref"]: ref }}
          classNamePrefix="select"
          value={value}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onInputChange={handleInputChange}
          menuPlacement="auto"
          menuPosition="absolute"
          menuPortalTarget={document.body}
          styles={customStyles<unknown>()}
          theme={customTheme()}
          components={{
            ...selectCustomComponents,
            ...customComponents
          }}
          // menuIsOpen
          onMenuOpen={() => {
            setOpen(true);

            if (onMenuOpen) onMenuOpen();
          }}
          onMenuClose={() => {
            setOpen(false);

            if (onMenuClose) onMenuClose();
          }}
          closeMenuOnSelect={!multi}
          // open={open}
          // onDropdownVisibleChange={setOpen}
          // showSearch={searchable}
          // bordered={false}
          isDisabled={disabled}
          isSearchable={searchable || ["creatable", "async", "asyncCreatable"].includes(type)}
          isLoading={loading}
          isClearable={clearable}
          isMulti={multi}
          isRtl
          parentRef={ref}
          // dropdownClassName="sbt-select-dropdown py-0 overflow-visible"
        />
      </FormElementWrapper>
    );
  }
) as CompoundedComponent<ISelectProps>;

Select.defaultProps = {
  ...FormElementWrapper.defaultProps,
  customComponents: {},
  type: "default",
  clearedValue: "",
  searchable: false
};

export default Select;

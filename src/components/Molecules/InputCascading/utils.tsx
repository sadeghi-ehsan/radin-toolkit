import { Chevron } from "@sadeghi-ehsan/radin-icon";
import { components, ControlProps } from "react-select";
import { classJoin, ifNotEmpty } from "../../../utils";
import { Input } from "../Input";
import { Select } from "../Select";
import { Dropdown } from "../../Atoms/Dropdown";
import { Badge } from "../../Atoms/Badge";

const endAdornmentComponent = params => {
  const { disabled, readOnly, combinedValue, options, setCombinedValue, setIsDropDownVisible, isDropDownVisible } =
    params;

  return (
    <Dropdown
      trigger={["click"]}
      placement="bottomCenter"
      visible={isDropDownVisible}
      onVisibleChange={v => {
        setIsDropDownVisible(v);
      }}
      disabled={disabled || readOnly}
      overlay={
        <Dropdown.Menu align="right">
          {options?.map(option => (
            <Dropdown.MenuItem
              key={option.value}
              active={combinedValue?.selectedOption === option.value}
              onClick={() => {
                setCombinedValue(prev => ({
                  ...prev,
                  selectedOption: option.value
                }));
                setIsDropDownVisible(false);
              }}
            >
              {option.label}
            </Dropdown.MenuItem>
          ))}
        </Dropdown.Menu>
      }
    >
      <div className={classJoin(["p-1 rounded-md bg-appearing", disabled || readOnly ? "" : "cursor-pointer "])}>
        <Chevron
          flip={!isDropDownVisible ? "vertical" : null}
          rotate="90"
          color={disabled || readOnly ? "disabled" : isDropDownVisible ? "white" : "idle"}
          size=".9xs"
        />
      </div>
    </Dropdown>
  );
};

const startAdornmentComponent = params => {
  const { disabled, readOnly, combinedValue, options } = params;

  return combinedValue?.selectedOption ? (
    <Badge color={disabled || readOnly ? "disabled" : "primary"}>
      {options && options.find(option => option.value === combinedValue.selectedOption)?.label}
    </Badge>
  ) : null;
};

export const renderTypeInputContent = params => {
  const { name, disabled, readOnly, setCombinedValue, align, value, ...restProps } = params;

  return (
    <Input
      {...restProps}
      {...{
        name,
        disabled,
        readOnly
      }}
      startAdornment={startAdornmentComponent(params)}
      endAdornment={endAdornmentComponent(params)}
      onChange={v => {
        setCombinedValue(prev => ({
          ...prev,
          value: v
        }));
      }}
      align={align || ifNotEmpty(value, "left", "right")}
      value={value?.value}
    />
  );
};

const Control =
  params =>
  ({ children, ...props }: ControlProps<any>) =>
    (
      <components.Control {...props}>
        <div className="pl-4 ml-3 border-l border-idle-border">{startAdornmentComponent(params)}</div>
        <div className="flex-1 min-w-44 flex items-center justify-between">{children}</div>
        <div className="pr-4 mr-3 border-r border-idle-border" onMouseDown={e => e.stopPropagation()}>
          {endAdornmentComponent(params)}
        </div>
      </components.Control>
    );

export const renderTypeSelectContent = params => {
  const { name, disabled, readOnly, setCombinedValue, value, selectOptions, setIsDropDownVisible, ...restProps } =
    params;

  return (
    <Select
      {...restProps}
      {...{
        name,
        disabled,
        readOnly
      }}
      customComponents={{ Control: Control(params), DropdownIndicator: () => null }}
      onMenuOpen={() => {
        setIsDropDownVisible(false);
      }}
      value={value?.value}
      options={selectOptions}
      onChange={v => {
        setCombinedValue(prev => ({
          ...prev,
          value: v
        }));
      }}
    />
  );
};

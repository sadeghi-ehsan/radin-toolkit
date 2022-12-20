import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { classJoin } from "../../../utils";
import { Button } from "../Button";
const ToggleButton = ({ id, block, disabled, selected, className, onChange, children, size, theme, shape, ...restProps }) => {
    const [isSelected, setIsSelected] = useState(selected);
    const changeState = () => {
        setIsSelected(!isSelected);
        onChange(isSelected);
    };
    return (_jsx(Button, { block: block, size: size, theme: theme, disabled: disabled, shape: shape, className: classJoin([isSelected ? "sbt-variant-toggle" : "sbt-variant-unToggle"]), ...restProps, onClick: changeState, children: children }));
};
ToggleButton.defaultProps = {
    theme: "primary",
    selected: false,
    disabled: false,
    shape: "toggle"
};
export default ToggleButton;
//# sourceMappingURL=ToggleButton.js.map
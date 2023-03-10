import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactSelectCreatable from "react-select/creatable";
import ReactSelectAsync from "react-select/async";
import ReactSelectAsyncCreatable from "react-select/async-creatable";
import { AsyncPaginate } from "react-select-async-paginate";
import ReactSelect, { components as selectComponents } from "react-select";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Close } from "@sadeghi-ehsan/radin-icon";
import { colors } from "../../../constants/tailwind";
import { classJoin, empty, filterObj, ifEmpty, isArray, useDrag, usePreventBodyScroll } from "../../../utils";
export const selectTypes = {
    default: ReactSelect,
    creatable: ReactSelectCreatable,
    // Use the Async component to load options from a remote source as the user types
    async: ReactSelectAsync,
    asyncCreatable: ReactSelectAsyncCreatable,
    asyncPaginate: AsyncPaginate
};
const MultiValueLabel = ({ opt, removeValue, className }) => {
    const { disable = false, label } = opt;
    return (_jsxs("div", { className: classJoin([
            "inline-flex items-center text-light-text text-sm bg-appearing rounded py-0.5 px-2 cursor-default whitespace-nowrap",
            className
        ]), children: [label, _jsx(Close, { className: classJoin(["mr-2", ifEmpty(disable, "cursor-pointer transition-sbt hover:text-terminate")]), ...ifEmpty(disable, {
                    onClick: function onClick() {
                        return removeValue(opt);
                    },
                    onTouchEnd: function onTouchEnd() {
                        return removeValue(opt);
                    }
                }, {}) })] }));
};
const exObj = (list, keys) => filterObj(list, (v, k) => !keys.includes(k));
export const customStyles = () => ({
    control: provided => ({
        ...provided,
        backgroundColor: "transparent",
        borderWidth: 0,
        height: "100%",
        boxShadow: "none"
    }),
    menuPortal: provided => ({
        ...provided,
        zIndex: 9999
    }),
    menu: provided => ({
        ...exObj(provided, ["marginTop", "marginBottom", "borderRadius", "boxShadow"]),
        backgroundColor: colors["card-bg"]
    }),
    menuList: provided => ({
        ...exObj(provided, ["paddingTop", "paddingBottom"])
    }),
    option: (provided, state) => ({
        ...exObj(provided, ["backgroundColor", "cursor", "padding"]),
        ...(state.isSelected ? { color: colors.primary } : {})
    }),
    input: provided => ({
        ...exObj(provided, ["color", "margin", "paddingTop", "paddingBottom"])
    }),
    singleValue: (provided, state) => ({
        ...exObj(provided, ["marginLeft", "marginRight"]),
        ...(state.isDisabled ? { color: colors.disabled } : { color: colors["light-text"] })
    }),
    valueContainer: provided => ({
        ...exObj(provided, ["padding"])
    }),
    placeholder: provided => ({
        ...exObj(provided, ["marginLeft", "marginRight"])
    })
});
export const customTheme = () => t => ({
    ...t
});
const ValueContainer = props => {
    const { children, className, cx, innerProps, isMulti, getStyles, getValue, hasValue, selectProps: { menuIsOpen, getOptionLabel, isDisabled, placeholder, parentRef } } = props;
    const selectValue = getValue();
    return (_jsxs("div", { style: getStyles("valueContainer", props), className: cx({
            "value-container": true,
            "value-container--is-multi": isMulti,
            "value-container--has-value": hasValue
        }, className), ...innerProps, children: [isMulti && !empty(selectValue) && menuIsOpen ? (_createElement(selectComponents.Placeholder, { ...props, key: "placeholder", isDisabled: isDisabled, isFocused: false, innerProps: { id: parentRef?.current?.getElementId("placeholder") } }, placeholder)) : null, children.map((child, index) => {
                if (isMulti && isArray(child)) {
                    if (menuIsOpen) {
                        return undefined;
                    }
                    return (_jsx("div", { className: "truncate text-light-text", children: selectValue.map(opt => getOptionLabel(opt)).join(", ") }, child?.props?.id ?? index));
                }
                return child;
            })] }));
};
const Menu = props => {
    const { children, className, cx, getStyles, getValue, isMulti, innerRef, innerProps, selectProps: { getOptionValue, onChange } } = props;
    const selectValue = getValue();
    const removeValue = removedValue => {
        const candidate = getOptionValue(removedValue);
        const newValueArray = selectValue.filter(i => getOptionValue(i) !== candidate);
        const newValue = isMulti ? newValueArray : newValueArray[0] || null;
        // @ts-ignore
        onChange(newValue, {
            action: "remove-value",
            removedValue
        });
    };
    const onWheel = (apiObj, ev) => {
        const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
        if (isTouchpad) {
            ev.stopPropagation();
            return;
        }
        if (ev.deltaY > 0) {
            apiObj.scrollNext();
        }
        else if (ev.deltaY < 0) {
            apiObj.scrollPrev();
        }
    };
    const { disableScroll, enableScroll } = usePreventBodyScroll();
    const { dragStart, dragStop, dragMove } = useDrag();
    const handleDrag = ({ scrollContainer }) => (ev) => 
    // @ts-ignore
    dragMove(ev, posDiff => {
        if (scrollContainer.current) {
            // eslint-disable-next-line no-param-reassign
            scrollContainer.current.scrollLeft += posDiff;
        }
    });
    return (_jsxs("div", { ...innerProps, ref: innerRef, style: getStyles("menu", props), className: cx({
            menu: true
        }, classJoin(["sbt-select-Menu dir-rtl pl-4 pr-2 py-3", className])), children: [isMulti && !empty(selectValue) && (_jsx("div", { onMouseEnter: disableScroll, onMouseLeave: () => {
                    enableScroll();
                    dragStop();
                }, className: "mb-3", children: _jsx(ScrollMenu
                // @ts-ignore
                , { 
                    // @ts-ignore
                    onWheel: onWheel, onMouseDown: () => dragStart, onMouseUp: () => dragStop, 
                    // @ts-ignore
                    onMouseMove: handleDrag, children: selectValue.map((opt, ind) => (_jsx(MultiValueLabel, { 
                        // @ts-ignore
                        itemId: getOptionValue(opt), opt: opt, removeValue: removeValue, className: selectValue.length === ind + 1 ? "ml-9" : "ml-2" }, getOptionValue(opt)))) }) })), _jsx("div", { className: "border-t border-card-border mb-3 mr-2" }), children] }));
};
export const customComponents = {
    Menu,
    ValueContainer,
    IndicatorSeparator: () => null
};
//# sourceMappingURL=utils.js.map
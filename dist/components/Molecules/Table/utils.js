import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { More, Chevron, DoubleArrow, FilterSquare } from "@sadeghi-ehsan/radin-icon";
import { Tooltip } from "../../Atoms/Tooltip";
import { Checkbox } from "../../Atoms/Checkbox";
import { Popover } from "../../Atoms/Popover";
import { Input } from "../Input";
import { InputNumber } from "../InputNumber";
import { classJoin } from "../../../utils/helpers";
const ColumnFilter = ({ column, ...resetProps }) => {
    const [value, setValue] = useState(null);
    switch (column.search.type) {
        case "boolean":
            return (_jsx(Checkbox, { ...resetProps, className: "pt-0", color: "success", name: "table-filter-choose", onChange: (val, checked) => {
                    setValue(checked);
                    column.search.onFilter(checked);
                }, size: "lg", variant: "check", selected: value }));
        case "number":
            return (_jsx(InputNumber, { ...resetProps, className: "pt-0", fieldsetClassName: "!h-6 bg-filled-bg rounded-lg pr-2 ml-0", value: value, onChange: val => {
                    setValue(val);
                    column.search.onFilter(val);
                }, size: "sm", variant: "none" }));
        default:
            return (_jsx(Input, { ...resetProps, className: "pt-0", fieldsetClassName: "!h-6 bg-filled-bg rounded-lg pr-2 ml-0", type: "text", variant: "none", size: "sm", name: "table-filter-input", clearable: true, onChange: val => {
                    setValue(val);
                    column.search.onFilter(val);
                }, placeholder: "\u0645\u0642\u062F\u0627\u0631 \u0648\u0631\u0648\u062F\u06CC ...", value: value }));
    }
};
/**
 * Custom AntDesign components function which return TableComponents object
 * @param tableColumns: Table columns
 * @returns TableComponents
 */
export const tableComponents = (columns) => ({
    header: {
        row: ({ children, ...restProps }) => {
            const newChildren = [...children];
            columns.forEach(column => {
                for (let i = 0; i < newChildren.length; i++) {
                    if (newChildren[i].key === column.key) {
                        newChildren[i] = {
                            ...newChildren[i],
                            props: {
                                ...newChildren[i].props,
                                children: (_jsxs(_Fragment, { children: [newChildren[i].props.children, column.search !== undefined && (_jsxs("div", { className: "flex flex-row items-center mt-2", onClick: e => e.stopPropagation(), children: [_jsx("span", { className: "ml-1", children: _jsx(FilterSquare, { size: "lg", color: "idle" }) }), _jsx(ColumnFilter, { column: column })] }))] }))
                            }
                        };
                        break;
                    }
                }
            });
            return (_jsx("tr", { ...restProps, className: "whitespace-pre", children: newChildren }));
        }
    }
});
const TablePagination = ({ page, count, onPageChange, onPageSizeChange, pageSize, pageSizes }) => {
    const [visible, setVisible] = useState(false);
    const handleVisibleChange = (newVisible) => {
        setVisible(newVisible);
    };
    const onFirstPageClick = () => {
        onPageChange(1);
    };
    const onNextPageClick = () => {
        if (page < count)
            onPageChange(page + 1);
    };
    const onPrevPageClick = () => {
        if (page > 1)
            onPageChange(page - 1);
    };
    const onLastPageClick = () => {
        if (count > 0)
            onPageChange(count);
    };
    const onPageSizeChangeClick = value => {
        onPageSizeChange({ value });
        handleVisibleChange(false);
    };
    return (_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Popover, { visible: visible, trigger: "click", onVisibleChange: handleVisibleChange, content: _jsx(_Fragment, { children: pageSizes.map(pageSizeItem => (_jsxs("div", { onClick: () => onPageSizeChangeClick(pageSizeItem), className: classJoin([
                            "p-2 hover:bg-primary-hover/20 cursor-pointer rounded flex",
                            pageSizeItem === pageSize ? "text-primary" : null
                        ]), children: [_jsx("div", { className: "ml-1", children: pageSizeItem }), " \u0631\u062F\u06CC\u0641"] }, pageSizeItem))) }), children: _jsxs("div", { className: classJoin([
                        "rounded-xl border border-filled-bg px-2 py-1 flex items-center cursor-pointer hover:border-primary",
                        visible ? "!border-primary" : null
                    ]), children: [pageSize, " \u0631\u062F\u06CC\u0641 ", _jsx(Chevron, { className: "mr-2", rotate: "90", flip: "vertical" })] }) }), _jsxs("div", { className: "flex flex-row items-center select-none text-idle mr-3", children: [_jsx(DoubleArrow, { weight: "fill", size: ".7xs", color: page === 1 ? "disabled" : "primary", onClick: onFirstPageClick, className: classJoin(["ml-1 cursor-pointer"]), rotate: "180" }), "\u0635\u0641\u062D\u0647", _jsxs("div", { className: "flex flex-row items-center w-24 p-1 mx-2 bg-filled-bg rounded-llg", children: [_jsx(Chevron, { size: "sm", color: page === 1 ? "disabled" : "primary", onClick: onPrevPageClick, className: classJoin(["ml-1.5 cursor-pointer"]), flip: "vertical" }), _jsx("div", { className: "flex-1 text-center text-light-text", children: page }), _jsx(Chevron, { size: "sm", color: page === count ? "disabled" : "primary", onClick: onNextPageClick, className: classJoin(["mr-1 cursor-pointer"]) })] }), "\u0627\u0632", _jsx("span", { className: "mr-1 text-light-text", children: count }), _jsx(DoubleArrow, { weight: "fill", size: ".7xs", color: page === count ? "disabled" : "primary", onClick: onLastPageClick, className: classJoin(["mr-1.5 cursor-pointer"]) })] })] }));
};
/** Table footer */
export const TableFooter = props => {
    const { footerClassName, hideFooterPagination } = props;
    return (_jsx("div", { className: classJoin(["sbt-table-footer", footerClassName]), children: !hideFooterPagination ? _jsx(TablePagination, { ...props }) : null }));
};
/** Table top header */
export const TableHeader = props => {
    const { startContent, endContent, title, headerClassName, displayHeaderPagination } = props;
    return (_jsxs("div", { className: classJoin([
            "flex flex-row items-center justify-between px-4 pt-6 pb-5 border-t border-r border-l border-card-border rounded-t-3xl",
            headerClassName
        ]), children: [startContent, _jsx("div", { className: "text-base text-primary-label font-bold flex-1", children: title }), displayHeaderPagination ? _jsx(TablePagination, { ...props }) : null, endContent] }));
};
/** Indicate Table line and striped variants */
export const tableVariants = {
    none: "sbt-table-variant-none",
    striped: "sbt-table-variant-striped",
    horizontalLine: "sbt-table-variant-horizontalLine",
    grid: "sbt-table-variant-grid"
};
export const RowAction = ({ actions, ...restProps }) => {
    const [visible, setVisible] = useState(false);
    const renderPopoverContent = () => (_jsx("div", { className: "flex space-x-4 space-x-reverse", children: actions.map(({ tooltip, content, onClick }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        _jsx(Tooltip, { title: tooltip, children: _jsx("div", { className: "cursor-pointer", onClick: () => {
                    if (onClick)
                        onClick(() => setVisible(false));
                }, children: content }) }, index))) }));
    return (_jsx(Popover, { content: renderPopoverContent(), trigger: "click", ...restProps, visible: visible, onVisibleChange: setVisible, children: _jsx(More, { className: "cursor-pointer" }) }));
};
RowAction.defaultProps = {
    placement: "bottomLeft"
};
//# sourceMappingURL=utils.js.map
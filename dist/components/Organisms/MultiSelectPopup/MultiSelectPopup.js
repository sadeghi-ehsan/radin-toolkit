import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import List from "rc-virtual-list";
import { useGesture } from "@use-gesture/react";
import { WatchlistAdd, Eye, Increase, Close, FilterSquare, Search } from "@sadeghi-ehsan/radin-icon";
import ParentSelectPopup from "./components/ParentSelectPopup";
import { classJoin } from "../../../utils";
import { Button } from "../../Atoms/Button";
import { Tooltip } from "../../Atoms/Tooltip";
import { Popover } from "../../Atoms/Popover";
import { Loading } from "../../Atoms/Loading";
import { Badge } from "../../Atoms/Badge";
import { Input } from "../../Molecules/Input";
import { searchInObject } from "./utils";
const MultiSelectPopup = forwardRef(({ isLoading, data, dataTextField, dataValueField, dataChildrenField, dataGrowthField, dataSearchFields, labels: customLabels, defaultValue, onClose, onSubmit, className, submitButtonProps, cancelButtonProps, ...restProps }, ref) => {
    const [parentSelectorVisible, setParentSelectorVisible] = useState(false);
    const [selectedParents, setSelectedParents] = useState([]);
    const [selectedPopupParents, setSelectedPopupParents] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [search, setSearch] = useState("");
    const selectedItemsRef = useRef();
    const labels = {
        cancel: "بازگشت",
        submit: "تایید",
        clearSelectedParents: "حذف فیلتر ها",
        parentSelectPopupTitle: "انتخاب صنعت",
        notFoundMessage: "اطلاعاتی یافت نشد",
        ...customLabels
    };
    const bind = useGesture({
        onDrag({ offset: [ox] }) {
            selectedItemsRef.current.scrollLeft = -ox;
        }
    }, {
        drag: {
            axis: "x",
            filterTaps: true,
            from: () => [-selectedItemsRef.current.scrollLeft, 0]
        }
    });
    useEffect(() => {
        if (defaultValue.length > 0)
            setSelectedItems(defaultValue);
    }, []);
    const searchedData = useMemo(() => {
        let filteredByParent;
        let result = [];
        /** filter data if any parents are selected and filtered  */
        if (selectedParents.length > 0) {
            filteredByParent = data.filter(item => selectedParents.some(selectedParent => selectedParent === item[dataValueField]));
        }
        else {
            filteredByParent = data;
        }
        /** filter data if search is not empty */
        if (search) {
            filteredByParent.forEach(item => {
                if (searchInObject({ search, item, dataSearchFields, dataTextField }))
                    result.push(item);
                else if (item[dataChildrenField] && item[dataChildrenField].length > 0) {
                    const searchedChildren = [];
                    item[dataChildrenField].forEach(child => {
                        if (searchInObject({ search, item: child, dataSearchFields, dataTextField }))
                            searchedChildren.push(child);
                    });
                    if (searchedChildren.length > 0) {
                        result.push({
                            [dataValueField]: item[dataValueField],
                            [dataTextField]: item[dataTextField],
                            [dataChildrenField]: searchedChildren
                        });
                    }
                }
            });
        }
        else {
            result = filteredByParent;
        }
        return result.reduce((acc, cur) => {
            const parent = { ...cur };
            parent.isParent = true;
            if (cur[dataChildrenField] && cur[dataChildrenField].length > 0) {
                return [...acc, parent, ...cur[dataChildrenField]];
            }
            return [...acc, parent];
        }, []);
    }, [JSON.stringify(data), JSON.stringify(selectedParents), search]);
    const clear = () => {
        setSelectedItems([]);
    };
    const onSubmitClick = async () => {
        onSubmit({ selectedItems, clear });
    };
    const onChildrenItemClick = item => {
        if (selectedItems.some(s => s === item[dataValueField])) {
            setSelectedItems(selectedItems.filter(s => s !== item[dataValueField]));
            return;
        }
        setSelectedItems(prev => [...prev, item[dataValueField]]);
    };
    const onParentItemClick = item => {
        const isParentSelected = item[dataChildrenField].every(child => selectedItems.some(s => s === child[dataValueField]));
        if (!isParentSelected) {
            setSelectedItems([
                ...selectedItems.filter(s => !item[dataChildrenField].some(i => s === i[dataValueField])),
                ...item[dataChildrenField].map(i => i[dataValueField])
            ]);
            return;
        }
        setSelectedItems([...selectedItems.filter(s => !item[dataChildrenField].some(i => s === i[dataValueField]))]);
    };
    const onSelectedItemClick = deleteId => {
        setSelectedItems(selectedItems.filter(s => s !== deleteId));
    };
    const onClearSelectedParents = () => {
        setSelectedParents([]);
        setSelectedPopupParents([]);
    };
    const onParentSelectPopupSubmit = items => {
        setSelectedParents(items);
        setParentSelectorVisible(false);
    };
    const onParentSelectPopupClose = () => {
        setParentSelectorVisible(false);
    };
    const renderListItem = (item) => {
        if (item.isParent) {
            return (_jsxs("div", { className: "sbt-multi-select-popup-parent", onClick: () => onParentItemClick(item), children: [_jsx("div", { className: "ml-1", children: "-" }), item[dataTextField], _jsx("div", { className: "flex-1 flex justify-end", children: item[dataChildrenField] && item[dataChildrenField].length > 0 ? (item[dataChildrenField].every(child => selectedItems.some(s => s === child[dataValueField])) ? (_jsx(Eye, { color: "primary", className: "shrink-0", size: "1.4xl" })) : (_jsx(WatchlistAdd, { color: "white", className: "shrink-0", size: "1.4xl" }))) : null })] }));
        }
        return (_jsxs("div", { className: classJoin(["sbt-multi-select-popup-child"]), onClick: () => onChildrenItemClick(item), children: [item[dataTextField], _jsxs("div", { className: "flex-1 flex justify-end", children: [item[dataGrowthField] && (_jsx("div", { className: classJoin([
                                "flex-1 flex justify-end ml-4",
                                item[dataGrowthField] === 0 || typeof item[dataGrowthField] === "string"
                                    ? "text-idle"
                                    : item[dataGrowthField] > 0
                                        ? "text-success"
                                        : "text-prompt"
                            ]), children: typeof item[dataGrowthField] === "string" ? (item[dataGrowthField]) : (_jsxs(_Fragment, { children: [_jsx("span", { className: "dir-ltr", children: `${Math.abs(item[dataGrowthField])} %` }), _jsx(Increase, { className: "mr-2", flip: item[dataGrowthField] > 0 ? null : "horizontal" })] })) })), selectedItems.some(s => s === item[dataValueField]) ? (_jsx(Eye, { color: "primary", className: "shrink-0", size: "1.4xl" })) : (_jsx(WatchlistAdd, { color: "white", className: "shrink-0", size: "1.4xl" }))] })] }, item[dataValueField]));
    };
    const renderList = () => {
        if (isLoading) {
            return (_jsx("div", { className: "flex items-center justify-center text-idle text-xl mb-3 h-75", children: _jsx(Loading, {}) }));
        }
        if (searchedData.length === 0) {
            return (_jsx("div", { className: "flex items-center justify-center text-idle text-xl mb-3 h-75", children: labels.notFoundMessage }));
        }
        return (_jsx(List, { data: searchedData, height: 300, itemHeight: 38, itemKey: dataValueField, className: "mb-3", children: item => renderListItem(item) }));
    };
    const renderSelectedItems = () => {
        if (selectedItems.length === 0)
            return null;
        const selectedData = data.reduce((prev, dataItem) => {
            const result = dataItem[dataChildrenField]
                ? dataItem[dataChildrenField].filter(child => selectedItems.includes(child[dataValueField]))
                : [];
            return [...prev, ...result];
        }, []);
        return (_jsx("div", { className: "relative select-none overflow-hidden", children: _jsx("div", { className: "sbt-multi-select-popup-selected", ref: selectedItemsRef, ...bind(), children: selectedData.map(s => (_jsxs("div", { className: "py-1 px-2 bg-appearing rounded flex items-center text-light cursor-pointer hover:bg-appearing/80 hover:text-terminate whitespace-nowrap transition-all", onClick: () => onSelectedItemClick(s[dataValueField]), children: [_jsx("span", { className: "text-light", children: s[dataTextField] }), _jsx(Close, { weight: "fill", size: ".6xs", className: "mr-2 font-bold" })] }, s[dataValueField]))) }) }));
    };
    const renderSelectedParentsTooltip = () => selectedParents.map(selectedParent => (_jsx("div", { className: "m-1", children: data.find(item => item[dataValueField] === selectedParent)[dataTextField] }, selectedParent)));
    const renderHeaderSection = () => (_jsxs("div", { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(Search, { color: "primary", className: "ml-1 shrink-0", size: "1.4xl" }), _jsx(Input, { variant: "none", className: "!p-0", childrenClassName: "!p-0", value: search, onChange: setSearch, fieldsetClassName: "!h-9" }), selectedParents.length > 0 ? (_jsxs("div", { className: "flex items-center ml-4 cursor-pointer", onClick: onClearSelectedParents, children: [_jsx("div", { className: "text-idle text-sm whitespace-nowrap ml-2", children: labels.clearSelectedParents }), _jsx("div", { className: "bg-appearing w-4 h-4 rounded-md flex items-center justify-center hover:bg-terminate transition-colors", children: _jsx(Close, { weight: "fill", size: ".6xs", color: "card-bg", className: "shrink-0" }) })] })) : null, !isLoading ? (_jsx(Popover, { trigger: "click", content: _jsx(ParentSelectPopup, { data: data, selectedItems: selectedPopupParents, setSelectedItems: setSelectedPopupParents, dataTextField: dataTextField, dataValueField: dataValueField, onClose: onParentSelectPopupClose, onSubmit: onParentSelectPopupSubmit, labels: labels }), visible: parentSelectorVisible, onVisibleChange: setParentSelectorVisible, placement: "bottomLeft", className: "", children: selectedParents.length > 0 ? (_jsx(Tooltip, { title: renderSelectedParentsTooltip(), placement: "bottom", children: _jsx(Badge, { type: "badge", color: "warning-black", content: _jsx(FilterSquare, { className: "cursor-pointer shrink-0", size: "1.4xl", color: "primary" }), children: selectedParents.length }) })) : (_jsx(FilterSquare, { className: "cursor-pointer shrink-0", size: "1.4xl", color: "idle" })) })) : null] }));
    const renderFooterSection = () => {
        const disableSubmitButton = (selectedItems.length === 0 && defaultValue.length === 0) || isLoading;
        return (_jsxs("div", { className: "flex", children: [_jsx(Button, { block: true, onClick: onSubmitClick, disabled: disableSubmitButton, ...submitButtonProps, children: labels.submit }), _jsx(Button, { onClick: onClose, block: true, variant: "text", ...cancelButtonProps, children: labels.cancel })] }));
    };
    return (_jsxs("div", { className: classJoin(["sbt-multi-select-popup w-125 select-none", className]), ...restProps, ref: ref, children: [renderHeaderSection(), renderSelectedItems(), _jsx("div", { className: "border-b border-b-idle-border mb-4" }), renderList(), _jsx("div", { className: "border-b border-b-idle-border mb-4" }), renderFooterSection()] }));
});
MultiSelectPopup.defaultProps = {
    defaultValue: [],
    dataTextField: "name",
    dataValueField: "id",
    dataChildrenField: "children",
    dataGrowthField: "growth"
};
export default MultiSelectPopup;
//# sourceMappingURL=MultiSelectPopup.js.map
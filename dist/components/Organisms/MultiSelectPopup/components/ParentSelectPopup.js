import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { classJoin } from "../../../../utils";
import { Button } from "../../../Atoms/Button";
const ParentSelectPopup = ({ data, onClose, onSubmit, dataTextField, dataValueField, labels, selectedItems, setSelectedItems }) => {
    const onSubmitClick = () => {
        onSubmit(selectedItems);
    };
    const onItemClick = selectedId => {
        if (selectedItems.some(selectedItem => selectedItem === selectedId)) {
            setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== selectedId));
            return;
        }
        setSelectedItems(prev => [...prev, selectedId]);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-light text-base border-b border-card-border mb-4 pb-1", children: labels.parentSelectPopupTitle }), _jsx("div", { className: "grid grid-cols-3 max-h-44 overflow-y-auto scrollbar-primary gap-x-4 gap-y-3 pl-4 mb-4", children: data.map(item => (_jsx("div", { className: classJoin([
                        "sbt-multi-select-popup-parent-select",
                        selectedItems.includes(item[dataValueField]) ? "text-primary bg-primary/10" : "text-light"
                    ]), onClick: () => onItemClick(item[dataValueField]), children: item[dataTextField] }, item[dataValueField]))) }), _jsxs("div", { className: "flex border-t border-card-border p-4", children: [_jsx(Button, { block: true, onClick: onSubmitClick, children: labels.submit }), _jsx(Button, { onClick: onClose, block: true, variant: "text", children: labels.cancel })] })] }));
};
export default ParentSelectPopup;
//# sourceMappingURL=ParentSelectPopup.js.map
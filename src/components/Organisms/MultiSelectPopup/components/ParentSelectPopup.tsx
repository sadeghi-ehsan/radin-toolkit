import React, { FunctionComponent } from "react";
import { classJoin } from "../../../../utils";
import { IParentSelectPopupProps } from "../types";
import { Button } from "../../../Atoms/Button";

const ParentSelectPopup: FunctionComponent<IParentSelectPopupProps> = ({
  data,
  onClose,
  onSubmit,
  dataTextField,
  dataValueField,
  labels,
  selectedItems,
  setSelectedItems
}) => {
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

  return (
    <>
      <div className="text-light text-base border-b border-card-border mb-4 pb-1">{labels.parentSelectPopupTitle}</div>

      <div className="grid grid-cols-3 max-h-44 overflow-y-auto scrollbar-primary gap-x-4 gap-y-3 pl-4 mb-4">
        {data.map(item => (
          <div
            key={item[dataValueField]}
            className={classJoin([
              "sbt-multi-select-popup-parent-select",
              selectedItems.includes(item[dataValueField]) ? "text-primary bg-primary/10" : "text-light"
            ])}
            onClick={() => onItemClick(item[dataValueField])}
          >
            {item[dataTextField]}
          </div>
        ))}
      </div>

      <div className="flex border-t border-card-border p-4">
        <Button block onClick={onSubmitClick}>
          {labels.submit}
        </Button>
        <Button onClick={onClose} block variant="text">
          {labels.cancel}
        </Button>
      </div>
    </>
  );
};

export default ParentSelectPopup;

import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
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
import { IMultiSelectPopupProps } from "./types";
import { searchInObject } from "./utils";

const MultiSelectPopup = forwardRef<HTMLDivElement, IMultiSelectPopupProps>(
  (
    {
      isLoading,
      data,
      dataTextField,
      dataValueField,
      dataChildrenField,
      dataGrowthField,
      dataSearchFields,
      labels: customLabels,
      defaultValue,
      onClose,
      onSubmit,
      className,
      submitButtonProps,
      cancelButtonProps,
      ...restProps
    },
    ref
  ) => {
    const [parentSelectorVisible, setParentSelectorVisible] = useState(false);
    const [selectedParents, setSelectedParents] = useState([]);
    const [selectedPopupParents, setSelectedPopupParents] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [search, setSearch] = useState("");
    const selectedItemsRef = useRef<any>();

    const labels = {
      cancel: "بازگشت",
      submit: "تایید",
      clearSelectedParents: "حذف فیلتر ها",
      parentSelectPopupTitle: "انتخاب صنعت",
      notFoundMessage: "اطلاعاتی یافت نشد",
      ...customLabels
    };

    const bind = useGesture(
      {
        onDrag({ offset: [ox] }) {
          selectedItemsRef.current.scrollLeft = -ox;
        }
      },
      {
        drag: {
          axis: "x",
          filterTaps: true,
          from: () => [-selectedItemsRef.current.scrollLeft, 0]
        }
      }
    );

    useEffect(() => {
      if (defaultValue.length > 0) setSelectedItems(defaultValue);
    }, []);

    const searchedData = useMemo(() => {
      let filteredByParent: Array<any>;
      let result: Array<any> = [];

      /** filter data if any parents are selected and filtered  */
      if (selectedParents.length > 0) {
        filteredByParent = data.filter(item =>
          selectedParents.some(selectedParent => selectedParent === item[dataValueField])
        );
      } else {
        filteredByParent = data;
      }

      /** filter data if search is not empty */
      if (search) {
        filteredByParent.forEach(item => {
          if (searchInObject({ search, item, dataSearchFields, dataTextField })) result.push(item);
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
      } else {
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
      const isParentSelected = item[dataChildrenField].every(child =>
        selectedItems.some(s => s === child[dataValueField])
      );

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

    const renderListItem = (item: any) => {
      if (item.isParent) {
        return (
          <div className="sbt-multi-select-popup-parent" onClick={() => onParentItemClick(item)}>
            <div className="ml-1">-</div>
            {item[dataTextField]}
            <div className="flex-1 flex justify-end">
              {item[dataChildrenField] && item[dataChildrenField].length > 0 ? (
                item[dataChildrenField].every(child => selectedItems.some(s => s === child[dataValueField])) ? (
                  <Eye color="primary" className="shrink-0" size="1.4xl" />
                ) : (
                  <WatchlistAdd color="white" className="shrink-0" size="1.4xl" />
                )
              ) : null}
            </div>
          </div>
        );
      }

      return (
        <div
          key={item[dataValueField]}
          className={classJoin(["sbt-multi-select-popup-child"])}
          onClick={() => onChildrenItemClick(item)}
        >
          {item[dataTextField]}

          <div className="flex-1 flex justify-end">
            {item[dataGrowthField] && (
              <div
                className={classJoin([
                  "flex-1 flex justify-end ml-4",
                  item[dataGrowthField] === 0 || typeof item[dataGrowthField] === "string"
                    ? "text-idle"
                    : item[dataGrowthField] > 0
                    ? "text-success"
                    : "text-prompt"
                ])}
              >
                {typeof item[dataGrowthField] === "string" ? (
                  item[dataGrowthField]
                ) : (
                  <>
                    <span className="dir-ltr">{`${Math.abs(item[dataGrowthField])} %`}</span>

                    <Increase className="mr-2" flip={item[dataGrowthField] > 0 ? null : "horizontal"} />
                  </>
                )}
              </div>
            )}
            {selectedItems.some(s => s === item[dataValueField]) ? (
              <Eye color="primary" className="shrink-0" size="1.4xl" />
            ) : (
              <WatchlistAdd color="white" className="shrink-0" size="1.4xl" />
            )}
          </div>
        </div>
      );
    };

    const renderList = () => {
      if (isLoading) {
        return (
          <div className="flex items-center justify-center text-idle text-xl mb-3 h-75">
            <Loading />
          </div>
        );
      }

      if (searchedData.length === 0) {
        return (
          <div className="flex items-center justify-center text-idle text-xl mb-3 h-75">{labels.notFoundMessage}</div>
        );
      }

      return (
        <List data={searchedData} height={300} itemHeight={38} itemKey={dataValueField} className="mb-3">
          {item => renderListItem(item)}
        </List>
      );
    };

    const renderSelectedItems = () => {
      if (selectedItems.length === 0) return null;

      const selectedData = data.reduce((prev, dataItem) => {
        const result = dataItem[dataChildrenField]
          ? dataItem[dataChildrenField].filter(child => selectedItems.includes(child[dataValueField]))
          : [];

        return [...prev, ...result];
      }, []);

      return (
        <div className="relative select-none overflow-hidden">
          <div className="sbt-multi-select-popup-selected" ref={selectedItemsRef} {...bind()}>
            {selectedData.map(s => (
              <div
                key={s[dataValueField]}
                className="py-1 px-2 bg-appearing rounded flex items-center text-light cursor-pointer hover:bg-appearing/80 hover:text-terminate whitespace-nowrap transition-all"
                onClick={() => onSelectedItemClick(s[dataValueField])}
              >
                <span className="text-light">{s[dataTextField]}</span>

                <Close weight="fill" size=".6xs" className="mr-2 font-bold" />
              </div>
            ))}
          </div>
        </div>
      );
    };

    const renderSelectedParentsTooltip = () =>
      selectedParents.map(selectedParent => (
        <div className="m-1" key={selectedParent}>
          {data.find(item => item[dataValueField] === selectedParent)[dataTextField]}
        </div>
      ));

    const renderHeaderSection = () => (
      <div className="flex flex-row items-center justify-between pb-2">
        <Search color="primary" className="ml-1 shrink-0" size="1.4xl" />
        <Input
          variant="none"
          className="!p-0"
          childrenClassName="!p-0"
          value={search}
          onChange={setSearch}
          fieldsetClassName="!h-9"
        />
        {selectedParents.length > 0 ? (
          <div className="flex items-center ml-4 cursor-pointer" onClick={onClearSelectedParents}>
            <div className="text-idle text-sm whitespace-nowrap ml-2">{labels.clearSelectedParents}</div>
            <div className="bg-appearing w-4 h-4 rounded-md flex items-center justify-center hover:bg-terminate transition-colors">
              <Close weight="fill" size=".6xs" color="card-bg" className="shrink-0" />
            </div>
          </div>
        ) : null}

        {!isLoading ? (
          <Popover
            trigger="click"
            content={
              <ParentSelectPopup
                data={data}
                selectedItems={selectedPopupParents}
                setSelectedItems={setSelectedPopupParents}
                dataTextField={dataTextField}
                dataValueField={dataValueField}
                onClose={onParentSelectPopupClose}
                onSubmit={onParentSelectPopupSubmit}
                labels={labels}
              />
            }
            visible={parentSelectorVisible}
            onVisibleChange={setParentSelectorVisible}
            placement="bottomLeft"
            className=""
          >
            {selectedParents.length > 0 ? (
              <Tooltip title={renderSelectedParentsTooltip()} placement="bottom">
                <Badge
                  type="badge"
                  color="warning-black"
                  content={<FilterSquare className="cursor-pointer shrink-0" size="1.4xl" color="primary" />}
                >
                  {selectedParents.length}
                </Badge>
              </Tooltip>
            ) : (
              <FilterSquare className="cursor-pointer shrink-0" size="1.4xl" color="idle" />
            )}
          </Popover>
        ) : null}
      </div>
    );

    const renderFooterSection = () => {
      const disableSubmitButton: boolean = (selectedItems.length === 0 && defaultValue.length === 0) || isLoading;

      return (
        <div className="flex">
          <Button block onClick={onSubmitClick} disabled={disableSubmitButton} {...submitButtonProps}>
            {labels.submit}
          </Button>
          <Button onClick={onClose} block variant="text" {...cancelButtonProps}>
            {labels.cancel}
          </Button>
        </div>
      );
    };

    return (
      <div className={classJoin(["sbt-multi-select-popup w-125 select-none", className])} {...restProps} ref={ref}>
        {renderHeaderSection()}
        {renderSelectedItems()}
        <div className="border-b border-b-idle-border mb-4" />
        {renderList()}
        <div className="border-b border-b-idle-border mb-4" />
        {renderFooterSection()}
      </div>
    );
  }
);

MultiSelectPopup.defaultProps = {
  defaultValue: [],
  dataTextField: "name",
  dataValueField: "id",
  dataChildrenField: "children",
  dataGrowthField: "growth"
};

export default MultiSelectPopup;

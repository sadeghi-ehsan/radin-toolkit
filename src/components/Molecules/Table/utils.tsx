import React, { useState, FunctionComponent } from "react";
import { More, Chevron, DoubleArrow, FilterSquare } from "@sadeghi-ehsan/radin-icon";
// eslint-disable-next-line import/no-extraneous-dependencies
import { TableComponents } from "rc-table/lib/interface";
import {
  CustomColumnType,
  TableFooterProps,
  TableHeaderProps,
  TableRecordType,
  TableColumnFilterProps,
  RowActionProps,
  TablePaginationProps
} from "./types";
import { Tooltip } from "../../Atoms/Tooltip";
import { Checkbox } from "../../Atoms/Checkbox";
import { Popover } from "../../Atoms/Popover";
import { Input } from "../Input";
import { InputNumber } from "../InputNumber";
import { classJoin } from "../../../utils/helpers";

const ColumnFilter: FunctionComponent<TableColumnFilterProps> = ({ column, ...resetProps }) => {
  const [value, setValue] = useState<any>(null);

  switch (column.search.type) {
    case "boolean":
      return (
        <Checkbox
          {...resetProps}
          className="pt-0"
          color="success"
          name="table-filter-choose"
          onChange={(val, checked) => {
            setValue(checked);
            column.search.onFilter(checked);
          }}
          size="lg"
          variant="check"
          selected={value}
        />
      );
    case "number":
      return (
        <InputNumber
          {...resetProps}
          className="pt-0"
          fieldsetClassName="!h-6 bg-filled-bg rounded-lg pr-2 ml-0"
          value={value}
          onChange={val => {
            setValue(val);
            column.search.onFilter(val);
          }}
          size="sm"
          variant="none"
        />
      );

    default:
      return (
        <Input
          {...resetProps}
          className="pt-0"
          fieldsetClassName="!h-6 bg-filled-bg rounded-lg pr-2 ml-0"
          type="text"
          variant="none"
          size="sm"
          name="table-filter-input"
          clearable
          onChange={val => {
            setValue(val);
            column.search.onFilter(val);
          }}
          placeholder="مقدار ورودی ..."
          value={value}
        />
      );
  }
};

/**
 * Custom AntDesign components function which return TableComponents object
 * @param tableColumns: Table columns
 * @returns TableComponents
 */
export const tableComponents = (columns: CustomColumnType<any>[]): TableComponents<TableRecordType> => ({
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
                children: (
                  <>
                    {newChildren[i].props.children}
                    {column.search !== undefined && (
                      <div className="flex flex-row items-center mt-2" onClick={e => e.stopPropagation()}>
                        <span className="ml-1">
                          <FilterSquare size="lg" color="idle" />
                        </span>
                        <ColumnFilter column={column} />
                      </div>
                    )}
                  </>
                )
              }
            };
            break;
          }
        }
      });

      return (
        <tr {...restProps} className="whitespace-pre">
          {newChildren}
        </tr>
      );
    }
  }
});

const TablePagination: FunctionComponent<TablePaginationProps> = ({
  page,
  count,
  onPageChange,
  onPageSizeChange,
  pageSize,
  pageSizes
}) => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  const onFirstPageClick = (): void => {
    onPageChange(1);
  };

  const onNextPageClick = (): void => {
    if (page < count) onPageChange(page + 1);
  };

  const onPrevPageClick = (): void => {
    if (page > 1) onPageChange(page - 1);
  };

  const onLastPageClick = (): void => {
    if (count > 0) onPageChange(count);
  };

  const onPageSizeChangeClick = value => {
    onPageSizeChange({ value });
    handleVisibleChange(false);
  };

  return (
    <div className="flex items-center justify-between">
      <Popover
        visible={visible}
        trigger="click"
        onVisibleChange={handleVisibleChange}
        content={
          <>
            {pageSizes.map(pageSizeItem => (
              <div
                onClick={() => onPageSizeChangeClick(pageSizeItem)}
                key={pageSizeItem}
                className={classJoin([
                  "p-2 hover:bg-primary-hover/20 cursor-pointer rounded flex",
                  pageSizeItem === pageSize ? "text-primary" : null
                ])}
              >
                <div className="ml-1">{pageSizeItem}</div> ردیف
              </div>
            ))}
          </>
        }
      >
        <div
          className={classJoin([
            "rounded-xl border border-filled-bg px-2 py-1 flex items-center cursor-pointer hover:border-primary",
            visible ? "!border-primary" : null
          ])}
        >
          {pageSize} ردیف <Chevron className="mr-2" rotate="90" flip="vertical" />
        </div>
      </Popover>

      <div className="flex flex-row items-center select-none text-idle mr-3">
        <DoubleArrow
          weight="fill"
          size=".7xs"
          color={page === 1 ? "disabled" : "primary"}
          onClick={onFirstPageClick}
          className={classJoin(["ml-1 cursor-pointer"])}
          rotate="180"
        />
        صفحه
        <div className="flex flex-row items-center w-24 p-1 mx-2 bg-filled-bg rounded-llg">
          <Chevron
            size="sm"
            color={page === 1 ? "disabled" : "primary"}
            onClick={onPrevPageClick}
            className={classJoin(["ml-1.5 cursor-pointer"])}
            flip="vertical"
          />

          <div className="flex-1 text-center text-light-text">{page}</div>

          <Chevron
            size="sm"
            color={page === count ? "disabled" : "primary"}
            onClick={onNextPageClick}
            className={classJoin(["mr-1 cursor-pointer"])}
          />
        </div>
        از
        <span className="mr-1 text-light-text">{count}</span>
        <DoubleArrow
          weight="fill"
          size=".7xs"
          color={page === count ? "disabled" : "primary"}
          onClick={onLastPageClick}
          className={classJoin(["mr-1.5 cursor-pointer"])}
        />
      </div>
    </div>
  );
};

/** Table footer */
export const TableFooter: FunctionComponent<TableFooterProps> = props => {
  const { footerClassName, hideFooterPagination } = props;

  return (
    <div className={classJoin(["sbt-table-footer", footerClassName])}>
      {!hideFooterPagination ? <TablePagination {...props} /> : null}
    </div>
  );
};

/** Table top header */
export const TableHeader: FunctionComponent<TableHeaderProps> = props => {
  const { startContent, endContent, title, headerClassName, displayHeaderPagination } = props;

  return (
    <div
      className={classJoin([
        "flex flex-row items-center justify-between px-4 pt-6 pb-5 border-t border-r border-l border-card-border rounded-t-3xl",
        headerClassName
      ])}
    >
      {startContent}
      <div className="text-base text-primary-label font-bold flex-1">{title}</div>
      {displayHeaderPagination ? <TablePagination {...props} /> : null}
      {endContent}
    </div>
  );
};

/** Indicate Table line and striped variants */
export const tableVariants = {
  none: "sbt-table-variant-none",
  striped: "sbt-table-variant-striped",
  horizontalLine: "sbt-table-variant-horizontalLine",
  grid: "sbt-table-variant-grid"
};

export const RowAction: FunctionComponent<RowActionProps> = ({ actions, ...restProps }) => {
  const [visible, setVisible] = useState(false);

  const renderPopoverContent = () => (
    <div className="flex space-x-4 space-x-reverse">
      {actions.map(({ tooltip, content, onClick }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Tooltip key={index} title={tooltip}>
          <div
            className="cursor-pointer"
            onClick={() => {
              if (onClick) onClick(() => setVisible(false));
            }}
          >
            {content}
          </div>
        </Tooltip>
      ))}
    </div>
  );

  return (
    <Popover
      content={renderPopoverContent()}
      trigger="click"
      {...restProps}
      visible={visible}
      onVisibleChange={setVisible}
    >
      <More className="cursor-pointer" />
    </Popover>
  );
};

RowAction.defaultProps = {
  placement: "bottomLeft"
};

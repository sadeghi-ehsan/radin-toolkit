import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { TableProps, ColumnType } from "antd/lib/table";
import { StandardProps } from "../../../types/common";
import { IPopoverProps } from "../../Atoms/Popover";
/** Indicates Table data records type */
export interface TableRecordType {
    [key: string]: any;
}
/** Indicates Table columns search properties */
interface Search {
    /** Indicate type of column search  */
    type: "text" | "number" | "date" | "dateTime" | "boolean";
    /**
     * callback when filter component changed
     * @param value: changed value of filter component
     */
    onFilter: (value: any) => void;
}
/** Custom Table column with search propery that extends Ant design ColumnType interface  */
export interface CustomColumnType<T> extends ColumnType<T> {
    /** Column optional search propery for search ability on column */
    search?: Search;
}
export interface TablePaginationProps {
    /** Table records count */
    count: number;
    /** Table pagination page */
    page: number;
    /**
     * Table pagination change callback
     * @param page: changed value of page
     */
    onPageChange: (page: number) => void;
    /** Table page size array */
    pageSizes: number[];
    /** Indicate Table page size */
    pageSize: number;
    /**
     * Table page size change callback
     * @param data: changed page size data with value property
     */
    onPageSizeChange: ({ value: number }: {
        value: any;
    }) => void;
}
/** Table Footer component props interface */
export interface TableFooterProps extends TablePaginationProps {
    footerClassName?: string;
    hideFooterPagination?: boolean;
}
/** Table header component props interface */
export interface TableHeaderProps extends TablePaginationProps {
    /** Optional ReactNode array for rendering buttons onleft side of Table header */
    startContent: React.ReactNode;
    endContent: React.ReactNode;
    title: string;
    headerClassName?: string;
    displayHeaderPagination?: boolean;
}
/** Table Column Filter component props interface */
export interface TableColumnFilterProps {
    /**
     * Table columns item
     */
    column: CustomColumnType<any>;
}
export interface TableComponentOptions {
    headerClassName?: string;
}
export interface RowActionProps extends Omit<IPopoverProps, "content" | "trigger"> {
    actions: {
        content: React.ReactNode;
        tooltip?: string;
        onClick?: (close?: () => void) => void;
    }[];
}
/** Table component interface */
export interface ITableProps<T extends TableRecordType = any> extends Omit<TableProps<T>, "bordered" | "title" | "loading">, Omit<StandardProps, "children"> {
    /** Ability to add zebra-striping to table rows */
    striped?: boolean;
    /** indicate line between cells */
    line?: "none" | "horizontalLine" | "grid";
    /** Custom Table column with search propery that extends Ant design ColumnType interface */
    columns?: CustomColumnType<T>[];
    /** Table page size array */
    pageSizes?: number[];
    /** Indicate Table page size */
    pageSize?: number;
    /** Indicate Table page number */
    page?: number;
    headerStartContent?: React.ReactNode;
    headerEndContent?: React.ReactNode;
    title?: string;
    loading?: boolean;
    footerClassName?: string;
    headerClassName?: string;
    antTableClassName?: string;
    antTableContainerClassName?: string;
    hideHeader?: boolean;
    hideFooter?: boolean;
    displayHeaderPagination?: boolean;
    hideFooterPagination?: boolean;
}
export interface ITableInterface extends ForwardRefExoticComponent<ITableProps & RefAttributes<HTMLDivElement>> {
    RowAction?: React.FunctionComponent<RowActionProps>;
}
export {};

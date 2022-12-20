import { FunctionComponent } from "react";
import { TableComponents } from "rc-table/lib/interface";
import { CustomColumnType, TableFooterProps, TableHeaderProps, TableRecordType, RowActionProps } from "./types";
/**
 * Custom AntDesign components function which return TableComponents object
 * @param tableColumns: Table columns
 * @returns TableComponents
 */
export declare const tableComponents: (columns: CustomColumnType<any>[]) => TableComponents<TableRecordType>;
/** Table footer */
export declare const TableFooter: FunctionComponent<TableFooterProps>;
/** Table top header */
export declare const TableHeader: FunctionComponent<TableHeaderProps>;
/** Indicate Table line and striped variants */
export declare const tableVariants: {
    none: string;
    striped: string;
    horizontalLine: string;
    grid: string;
};
export declare const RowAction: FunctionComponent<RowActionProps>;

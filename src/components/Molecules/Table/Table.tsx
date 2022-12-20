import React, { useState, useEffect, forwardRef } from "react";
import Lottie from "react-lottie";
import { Table as AntTable } from "antd";
import { ITableInterface, ITableProps } from "./types";
import { classJoin } from "../../../utils";
import { tableComponents, tableVariants, TableFooter, TableHeader, RowAction } from "./utils";
import loadingData from "./loading.lottiefile.json";

export const Table: ITableInterface = forwardRef<HTMLDivElement, ITableProps>(
  (
    {
      id,
      style,
      className,
      antTableClassName,
      antTableContainerClassName,
      columns,
      striped,
      line,
      dataSource,
      pageSizes,
      page,
      pageSize,
      headerStartContent,
      headerEndContent,
      headerClassName,
      footerClassName,
      title,
      loading,
      hideHeader,
      hideFooter,
      hideFooterPagination,
      displayHeaderPagination,
      ...restProps
    },
    ref
  ) => {
    const [pageData, setPageData] = useState({ value: 1, size: 1 });

    useEffect(() => {
      setPageData({ value: page, size: pageSize });
    }, []);

    const paginationProps = {
      count: Math.ceil(dataSource.length / pageData.size),
      page: pageData.value,
      onPageChange: value => setPageData({ ...pageData, value }),
      pageSizes,
      pageSize: pageData.size,
      onPageSizeChange: freshPageSize => {
        setPageData({ ...pageData, size: freshPageSize.value });
      }
    };

    const renderLoading = () => {
      if (!loading) return null;

      return (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-card-border/60 backdrop-blur-md flex items-center justify-center rounded-3xl z-20">
          {/* @ts-ignore */}
          <Lottie
            width={69}
            height={62}
            speed={2}
            style={{
              cursor: "default"
            }}
            options={{
              loop: true,
              autoplay: true,
              animationData: loadingData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            isClickToPauseDisabled
          />
        </div>
      );
    };

    const renderHeader = (): React.ReactNode => {
      if (hideHeader) return null;

      return (
        <TableHeader
          {...paginationProps}
          startContent={headerStartContent}
          endContent={headerEndContent}
          title={title}
          headerClassName={headerClassName}
          displayHeaderPagination={displayHeaderPagination}
        />
      );
    };

    const renderFooter = (): React.ReactNode => {
      if (hideFooter) return null;

      return (
        <TableFooter
          {...paginationProps}
          footerClassName={footerClassName}
          hideFooterPagination={hideFooterPagination}
        />
      );
    };

    return (
      <div
        className={classJoin(["sbt-table-root", striped && tableVariants.striped, tableVariants[line], className])}
        id={id}
        style={style}
      >
        {renderHeader()}
        <div
          className={classJoin([
            "border-l border-r border-card-border flex-1 overflow-hidden",
            antTableContainerClassName
          ])}
        >
          <AntTable
            {...restProps}
            ref={ref}
            components={tableComponents(columns)}
            columns={columns}
            dataSource={dataSource}
            pagination={{ current: pageData.value, pageSize: pageData.size, className: "hidden" }}
            prefixCls="sbt-table"
            className={antTableClassName}
          />
        </div>
        {renderFooter()}
        {renderLoading()}
      </div>
    );
  }
);

Table.defaultProps = {
  striped: false,
  line: "none",
  pageSizes: [10, 20, 50, 100],
  pageSize: 5,
  page: 1
};

Table.RowAction = RowAction;

export default Table;

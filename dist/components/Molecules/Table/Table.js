import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, forwardRef } from "react";
import Lottie from "react-lottie";
import { Table as AntTable } from "antd";
import { classJoin } from "../../../utils";
import { tableComponents, tableVariants, TableFooter, TableHeader, RowAction } from "./utils";
import loadingData from "./loading.lottiefile.json";
export const Table = forwardRef(({ id, style, className, antTableClassName, antTableContainerClassName, columns, striped, line, dataSource, pageSizes, page, pageSize, headerStartContent, headerEndContent, headerClassName, footerClassName, title, loading, hideHeader, hideFooter, hideFooterPagination, displayHeaderPagination, ...restProps }, ref) => {
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
        if (!loading)
            return null;
        return (_jsx("div", { className: "absolute top-0 bottom-0 right-0 left-0 bg-card-border/60 backdrop-blur-md flex items-center justify-center rounded-3xl z-20", children: _jsx(Lottie, { width: 69, height: 62, speed: 2, style: {
                    cursor: "default"
                }, options: {
                    loop: true,
                    autoplay: true,
                    animationData: loadingData,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                    }
                }, isClickToPauseDisabled: true }) }));
    };
    const renderHeader = () => {
        if (hideHeader)
            return null;
        return (_jsx(TableHeader, { ...paginationProps, startContent: headerStartContent, endContent: headerEndContent, title: title, headerClassName: headerClassName, displayHeaderPagination: displayHeaderPagination }));
    };
    const renderFooter = () => {
        if (hideFooter)
            return null;
        return (_jsx(TableFooter, { ...paginationProps, footerClassName: footerClassName, hideFooterPagination: hideFooterPagination }));
    };
    return (_jsxs("div", { className: classJoin(["sbt-table-root", striped && tableVariants.striped, tableVariants[line], className]), id: id, style: style, children: [renderHeader(), _jsx("div", { className: classJoin([
                    "border-l border-r border-card-border flex-1 overflow-hidden",
                    antTableContainerClassName
                ]), children: _jsx(AntTable, { ...restProps, ref: ref, components: tableComponents(columns), columns: columns, dataSource: dataSource, pagination: { current: pageData.value, pageSize: pageData.size, className: "hidden" }, prefixCls: "sbt-table", className: antTableClassName }) }), renderFooter(), renderLoading()] }));
});
Table.defaultProps = {
    striped: false,
    line: "none",
    pageSizes: [10, 20, 50, 100],
    pageSize: 5,
    page: 1
};
Table.RowAction = RowAction;
export default Table;
//# sourceMappingURL=Table.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Table = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _reactLottie = _interopRequireDefault(require("react-lottie"));
var _antd = require("antd");
var _utils = require("../../../utils");
var _utils2 = require("./utils");
var _loadingLottiefile = _interopRequireDefault(require("./loading.lottiefile.json"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["id", "style", "className", "antTableClassName", "antTableContainerClassName", "columns", "striped", "line", "dataSource", "pageSizes", "page", "pageSize", "headerStartContent", "headerEndContent", "headerClassName", "footerClassName", "title", "loading", "hideHeader", "hideFooter", "hideFooterPagination", "displayHeaderPagination"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Table = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
    style = _ref.style,
    className = _ref.className,
    antTableClassName = _ref.antTableClassName,
    antTableContainerClassName = _ref.antTableContainerClassName,
    columns = _ref.columns,
    striped = _ref.striped,
    line = _ref.line,
    dataSource = _ref.dataSource,
    pageSizes = _ref.pageSizes,
    page = _ref.page,
    pageSize = _ref.pageSize,
    headerStartContent = _ref.headerStartContent,
    headerEndContent = _ref.headerEndContent,
    headerClassName = _ref.headerClassName,
    footerClassName = _ref.footerClassName,
    title = _ref.title,
    loading = _ref.loading,
    hideHeader = _ref.hideHeader,
    hideFooter = _ref.hideFooter,
    hideFooterPagination = _ref.hideFooterPagination,
    displayHeaderPagination = _ref.displayHeaderPagination,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)({
      value: 1,
      size: 1
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    pageData = _useState2[0],
    setPageData = _useState2[1];
  (0, _react.useEffect)(function () {
    setPageData({
      value: page,
      size: pageSize
    });
  }, []);
  var paginationProps = {
    count: Math.ceil(dataSource.length / pageData.size),
    page: pageData.value,
    onPageChange: function onPageChange(value) {
      return setPageData(_objectSpread(_objectSpread({}, pageData), {}, {
        value: value
      }));
    },
    pageSizes: pageSizes,
    pageSize: pageData.size,
    onPageSizeChange: function onPageSizeChange(freshPageSize) {
      setPageData(_objectSpread(_objectSpread({}, pageData), {}, {
        size: freshPageSize.value
      }));
    }
  };
  var renderLoading = function renderLoading() {
    if (!loading) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "absolute top-0 bottom-0 right-0 left-0 bg-card-border/60 backdrop-blur-md flex items-center justify-center rounded-3xl z-20",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactLottie["default"], {
        width: 69,
        height: 62,
        speed: 2,
        style: {
          cursor: "default"
        },
        options: {
          loop: true,
          autoplay: true,
          animationData: _loadingLottiefile["default"],
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        },
        isClickToPauseDisabled: true
      })
    });
  };
  var renderHeader = function renderHeader() {
    if (hideHeader) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_utils2.TableHeader, _objectSpread(_objectSpread({}, paginationProps), {}, {
      startContent: headerStartContent,
      endContent: headerEndContent,
      title: title,
      headerClassName: headerClassName,
      displayHeaderPagination: displayHeaderPagination
    }));
  };
  var renderFooter = function renderFooter() {
    if (hideFooter) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_utils2.TableFooter, _objectSpread(_objectSpread({}, paginationProps), {}, {
      footerClassName: footerClassName,
      hideFooterPagination: hideFooterPagination
    }));
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _utils.classJoin)(["sbt-table-root", striped && _utils2.tableVariants.striped, _utils2.tableVariants[line], className]),
    id: id,
    style: style,
    children: [renderHeader(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _utils.classJoin)(["border-l border-r border-card-border flex-1 overflow-hidden", antTableContainerClassName]),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Table, _objectSpread(_objectSpread({}, restProps), {}, {
        ref: ref,
        components: (0, _utils2.tableComponents)(columns),
        columns: columns,
        dataSource: dataSource,
        pagination: {
          current: pageData.value,
          pageSize: pageData.size,
          className: "hidden"
        },
        prefixCls: "sbt-table",
        className: antTableClassName
      }))
    }), renderFooter(), renderLoading()]
  });
});
exports.Table = Table;
Table.defaultProps = {
  striped: false,
  line: "none",
  pageSizes: [10, 20, 50, 100],
  pageSize: 5,
  page: 1
};
Table.RowAction = _utils2.RowAction;
var _default = Table;
exports["default"] = _default;
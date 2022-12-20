"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commaRemover = exports.classJoin = exports.allNotEmpty = exports.allEmpty = void 0;
exports.commaSeparator = commaSeparator;
exports.convertIntToCurrency = convertIntToCurrency;
exports.convertMsToTime = void 0;
Object.defineProperty(exports, "createSearchField", {
  enumerable: true,
  get: function get() {
    return _text.createSearchField;
  }
});
exports.debounce = debounce;
exports.decodeBase64 = decodeBase64;
exports.empty = empty;
exports.encodeBase64 = encodeBase64;
exports.extractFormElementProps = exports.extendChildren = void 0;
Object.defineProperty(exports, "extractNumbers", {
  enumerable: true,
  get: function get() {
    return _numbers.extractNumbers;
  }
});
exports.filterObjectHaveVal = exports.filterObj = exports.fileToBase64 = void 0;
exports.getObjectNestedValue = getObjectNestedValue;
exports.isCallable = exports.isBoolean = exports.isArray = exports.ifNotEmpty = exports.ifEmpty = void 0;
Object.defineProperty(exports, "isEnglish", {
  enumerable: true,
  get: function get() {
    return _text.isEnglish;
  }
});
exports.mapObj = exports.keyboardEventChecker = exports.isString = exports.isObject = exports.isNumberString = exports.isNumberOrNumberStr = exports.isNumber = void 0;
exports.mergeTwoArraysByKey = mergeTwoArraysByKey;
exports.modifyReactChildren = modifyReactChildren;
Object.defineProperty(exports, "normalizePersianText", {
  enumerable: true,
  get: function get() {
    return _text.normalizePersianText;
  }
});
Object.defineProperty(exports, "persianToEnglishNumber", {
  enumerable: true,
  get: function get() {
    return _numbers.persianToEnglishNumber;
  }
});
exports.randomStr = void 0;
Object.defineProperty(exports, "removeSpaces", {
  enumerable: true,
  get: function get() {
    return _spaces.removeSpaces;
  }
});
exports.toJalaliDay = toJalaliDay;
exports.ucFirst = void 0;
exports.useDrag = useDrag;
exports.usePreventBodyScroll = usePreventBodyScroll;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _react = _interopRequireWildcard(require("react"));
var _dayjs2 = _interopRequireDefault(require("dayjs"));
var _jalaliday = _interopRequireDefault(require("jalaliday"));
var _FormElementWrapper = require("../components/Atoms/FormElementWrapper");
var _constants = require("./constants");
var _numbers = require("./modules/numbers");
var _spaces = require("./modules/spaces");
var _text = require("./modules/text");
require("dayjs/plugin/calendar");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
_dayjs2["default"].extend(_jalaliday["default"]);
function empty(data) {
  var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataType = (0, _typeof2["default"])(data);
  if (dataType === "string" && data.length === 0) {
    return true;
  }
  if (dataType === "number" && data === 0 && strict) {
    return true;
  }
  if (dataType === "boolean" && !data && strict) {
    return true;
  }
  if (dataType === "undefined" || data === null) {
    return true;
  }
  if (Array.isArray(data)) {
    return data.length === 0;
  }
  if (dataType === "object") {
    return Object.keys(data).length === 0;
  }
  return false;
}

/** used for check if all of multiple variables is empty */
var allEmpty = function allEmpty(value) {
  var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return value.every(function (val) {
    return empty(val, strict);
  });
};

/** used for check if all of multiple variables is NOT empty */
exports.allEmpty = allEmpty;
var allNotEmpty = function allNotEmpty(value) {
  var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return value.every(function (val) {
    return !empty(val, strict);
  });
};

/** checks if param is an object */
exports.allNotEmpty = allNotEmpty;
var isObject = function isObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
};

/** checks if param is an array */
exports.isObject = isObject;
var isArray = function isArray(val) {
  return Array.isArray(val);
};

/** checks if param is string */
exports.isArray = isArray;
var isString = function isString(val) {
  return typeof val === "string";
};

/** checks if param is number */
exports.isString = isString;
var isNumber = function isNumber(val) {
  return typeof val === "number";
};

/** checks if param is number string */
exports.isNumber = isNumber;
var isNumberString = function isNumberString(val) {
  return isString(val) && !isNaN(Number(val));
};

/** checks if param is number in value */
exports.isNumberString = isNumberString;
var isNumberOrNumberStr = function isNumberOrNumberStr(val) {
  return isNumber(val) || isNumberString(val);
};

/** checks if param is boolean */
exports.isNumberOrNumberStr = isNumberOrNumberStr;
var isBoolean = function isBoolean(val) {
  return typeof val === "boolean";
};

/** checks if param is a function or it's callable */
exports.isBoolean = isBoolean;
var isCallable = function isCallable(val) {
  return typeof val === "function";
};

/** used for concatenating multiple classNames */
exports.isCallable = isCallable;
var classJoin = function classJoin(classes) {
  return classes.filter(function (cls) {
    return cls;
  }).map(function (cls) {
    return cls.trim();
  }).join(" ");
};
exports.classJoin = classJoin;
var ifEmpty = function ifEmpty(value) {
  var trueCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value;
  var falseCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return empty(value) ? trueCase : falseCase;
};
exports.ifEmpty = ifEmpty;
var ifNotEmpty = function ifNotEmpty(value) {
  var trueCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value;
  var falseCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return ifEmpty(value, falseCase, trueCase);
};
exports.ifNotEmpty = ifNotEmpty;
var filterObj = function filterObj(obj, callback) {
  // Convert `obj` to a key/value array
  var filtered = Object.entries(obj).filter(function (_ref, i) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];
    return callback(v, k, i);
  });
  // Convert the key/value array back to an object:
  return Object.fromEntries(filtered);
};
exports.filterObj = filterObj;
var mapObj = function mapObj(obj, callback) {
  // Convert `obj` to a key/value array
  var mapped = Object.entries(obj).map(function (_ref3, i) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
      k = _ref4[0],
      v = _ref4[1];
    return [k, callback(v, k, i)];
  });
  // Convert the key/value array back to an object:
  return Object.fromEntries(mapped);
};

/* generates random string based on the length provided */
exports.mapObj = mapObj;
var randomStr = function randomStr() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.concat(i === 0 ? "" : numbers).charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

/* This method will extract props related to Wrapper from all received props in Components like: Input, Select, ... */
exports.randomStr = randomStr;
var extractFormElementProps = function extractFormElementProps(props) {
  var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _FormElementWrapper.formElWrapperProps;
  var wrapperProps = {};
  var componentProps = {};
  Object.entries(props).forEach(function (_ref5) {
    var _ref6 = (0, _slicedToArray2["default"])(_ref5, 2),
      key = _ref6[0],
      value = _ref6[1];
    if (list.includes(key)) {
      wrapperProps[key] = value;
    } else {
      componentProps[key] = value;
    }
  });
  return [wrapperProps, componentProps];
};

/**
 * check pressed key is specific key
 * ex: we want to make sure user press backspace key
 * @param e
 * @param code
 * @param keyCode
 * @returns Boolean
 */
exports.extractFormElementProps = extractFormElementProps;
var keyboardEventChecker = function keyboardEventChecker(e, typeCode) {
  var keyCode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (empty(keyCode) && !_constants.keyboardCodesList[typeCode]) {
    return undefined;
  }
  // check e is equal to code and keyCode
  return e.code === typeCode || e.keyCode === _constants.keyboardCodesList[typeCode] || keyCode;
};

/**
 * Modify React children's
 * ex: append className or other props to children's
 * @param children
 * @param props
 * @param callbackWhenString
 * @returns JSX.Element | String
 */
exports.keyboardEventChecker = keyboardEventChecker;
function modifyReactChildren(children, props, callbackWhenString) {
  return _react["default"].Children.map(children, function (child) {
    var _child$props;
    if (isString(child)) {
      return !empty(callbackWhenString) && isCallable(callbackWhenString) ? callbackWhenString(child) : child;
    }
    return /*#__PURE__*/_react["default"].cloneElement(child, _objectSpread(_objectSpread(_objectSpread({}, child === null || child === void 0 ? void 0 : child.props), props), {}, {
      className: classJoin([child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.className, props.className]) // merge className from props and child's className together
    }));
  });
}

/**
 * extendChildren is used in a case where you want to pass additional props down to children
 * of a component. way of using it is extendChildren(props.children ,{color:"red"})
 */
var extendChildren = function extendChildren(children, props) {
  return _react.Children.map(children, function (child) {
    if ( /*#__PURE__*/(0, _react.isValidElement)(child)) {
      return /*#__PURE__*/(0, _react.cloneElement)(child, props);
    }
    return child;
  });
};

/**
 * debounce function to avoid multiple calls at the same time and to avoid calling function too often
 * @param func
 * @param timeout
 * @returns
 */
exports.extendChildren = extendChildren;
function debounce(func) {
  var _this = this;
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(_this, args);
    }, timeout);
  };
}

/**
 * convert File tp base64 string
 * @param file
 * @returns base64 string
 */
var fileToBase64 = function fileToBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      return resolve(reader.result);
    };
    reader.onerror = function (error) {
      return reject(error);
    };
  });
};

/**
 * convert number to comma separated string with N decimal places
 * @param number
 * @param decimalPlaces default: 0
 * @param roundTheDecimals default: true
 *
 * @returns {string}
 *
 * @example
 * ```js
 * commaSeparator(123456.29999999, 4, true) // 123,456.3000
 * commaSeparator(123456.29999999, 4, false) // 123,456.2999
 * commaSeparator(123456789.29999999) // 123,456,789
 * ```
 */
exports.fileToBase64 = fileToBase64;
function commaSeparator(number) {
  var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var roundTheDecimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!isNumberOrNumberStr(number)) return undefined;
  var value = Number(number);
  if (roundTheDecimals) {
    // number with decimals with rounding last digit
    value = value.toFixed(decimalPlaces);
  } else {
    // number with decimals without rounding
    value = (Math.floor(value * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)).toFixed(decimalPlaces);
  }
  var parts = value.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
var commaRemover = function commaRemover(val) {
  return val.toString().replace(/\$\s?|(,*)/g, "");
};

/**
 * capitalize first letter of string
 * @param string
 * @returns
 */
exports.commaRemover = commaRemover;
var ucFirst = function ucFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * filter a object by val
 * only those have values will be returned
 * @param obj
 * @returns filtered object
 */
exports.ucFirst = ucFirst;
var filterObjectHaveVal = function filterObjectHaveVal(obj) {
  var _Object$keys;
  return (_Object$keys = Object.keys(obj)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.reduce(function (acc, key) {
    if (obj[key]) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

/**
 * encode string to base64
 * @param value
 * @returns
 */
exports.filterObjectHaveVal = filterObjectHaveVal;
function encodeBase64(value) {
  return Buffer.from(value, "ascii").toString("base64");
}

/**
 * decode base64 to string
 * @param value
 * @returns
 */
function decodeBase64(value) {
  return Buffer.from(value, "base64").toString("ascii");
}
function useDrag() {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    clicked = _React$useState2[0],
    setClicked = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    dragging = _React$useState4[0],
    setDragging = _React$useState4[1];
  var position = _react["default"].useRef(0);
  var dragStart = _react["default"].useCallback(function (ev) {
    position.current = ev.clientX;
    setClicked(true);
  }, []);
  var dragStop = _react["default"].useCallback(function () {
    return (
      // NOTE: need some delay so item under cursor won't be clicked
      window.requestAnimationFrame(function () {
        setDragging(false);
        setClicked(false);
      })
    );
  }, []);
  var dragMove = function dragMove(ev, cb) {
    var newDiff = position.current - ev.clientX;
    var movedEnough = Math.abs(newDiff) > 5;
    if (clicked && movedEnough) {
      setDragging(true);
    }
    if (dragging && movedEnough) {
      position.current = ev.clientX;
      cb(newDiff);
    }
  };
  return {
    dragStart: dragStart,
    dragStop: dragStop,
    dragMove: dragMove,
    dragging: dragging,
    position: position,
    setDragging: setDragging
  };
}

/** Used in usePreventBodyScroll Function */
var preventDefault = function preventDefault(ev) {
  if (ev.preventDefault) {
    ev.preventDefault();
  }
  // eslint-disable-next-line no-param-reassign
  ev.returnValue = false;
};

/** Used in usePreventBodyScroll Function */
var enableBodyScroll = function enableBodyScroll() {
  if (document) {
    document.removeEventListener("wheel", preventDefault, false);
  }
};

/** Used in usePreventBodyScroll Function */
var disableBodyScroll = function disableBodyScroll() {
  if (document) {
    document.addEventListener("wheel", preventDefault, {
      passive: false
    });
  }
};
function usePreventBodyScroll() {
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    hidden = _React$useState6[0],
    setHidden = _React$useState6[1];
  _react["default"].useEffect(function () {
    if (hidden) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
    return enableBodyScroll;
  }, [hidden]);
  var disableScroll = _react["default"].useCallback(function () {
    return setHidden(true);
  }, []);
  var enableScroll = _react["default"].useCallback(function () {
    return setHidden(false);
  }, []);
  return {
    disableScroll: disableScroll,
    enableScroll: enableScroll
  };
}
function toJalaliDay(date, formats, strict) {
  var _dayjs, _dayjs$calendar;
  // @ts-ignore
  return (_dayjs = (0, _dayjs2["default"])(date, formats, strict)) === null || _dayjs === void 0 ? void 0 : (_dayjs$calendar = _dayjs.calendar("jalali")) === null || _dayjs$calendar === void 0 ? void 0 : _dayjs$calendar.locale("fa");
}
/* convert To International Currency System */
function convertIntToCurrency(val) {
  // Nine Zeroes for Billions
  return Math.abs(Number(val)) >= 1.0e9 ? {
    value: (Math.abs(Number(val)) / 1.0e9).toFixed(2),
    unit: "B"
  } // Six Zeroes for Millions
  : Math.abs(Number(val)) >= 1.0e6 ? {
    value: (Math.abs(Number(val)) / 1.0e6).toFixed(2),
    unit: "M"
  } // Three Zeroes for Thousands
  : Math.abs(Number(val)) >= 1.0e3 ? {
    value: (Math.abs(Number(val)) / 1.0e3).toFixed(2),
    unit: "K"
  } : {
    value: Math.abs(Number(val)).toFixed(2),
    unit: ""
  };
}

/**
 * convert milliseconds input parameter to array with am/pm time items.
 * @param milliseconds milliseconds
 * @returns
 */
var convertMsToTime = function convertMsToTime(milliseconds) {
  var seconds = Math.floor((milliseconds || 0) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  var ampm = hours >= 12 ? "pm" : "am";
  if (hours === 0) hours = 12;else if (hours >= 13) hours %= 12;
  return [hours, minutes, seconds, ampm];
};

/**
 * merge two array objects by key(id or etc.)
 *
 * @example
 * ```js
 * const a = [{id: 1, name: "a"}, {id: 2, name: "b"}];
 * const b = [{id: 1, name: "c"}, {id: 3, name: "d"}];
 * mergeTwoArraysByKey(a, b, "id");
 *
 * // result: [ { id: 1, name: 'c' }, { id: 2, name: 'b' }, { id: 3, name: 'd' } ]
 * ```
 */
exports.convertMsToTime = convertMsToTime;
function mergeTwoArraysByKey(array1, array2) {
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "id";
  return (0, _toConsumableArray2["default"])([].concat((0, _toConsumableArray2["default"])(array1), (0, _toConsumableArray2["default"])(array2)).reduce(function (acc, curr) {
    return acc.set(curr[key], _objectSpread(_objectSpread({}, acc.get(curr[key])), curr));
  }, new Map()).values());
}

/**
 * Gets the value at `path` of `obj`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.

 * @returns {*} Returns the resolved value.
 * @example
 *
 *  getObjectNestedValue(object, 'profile.user.canEdit')
 */
function getObjectNestedValue(obj, path) {
  if (!path) return obj;
  var properties = path.split(".");
  return getObjectNestedValue(obj[properties.shift()], properties.join("."));
}
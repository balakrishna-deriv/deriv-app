webpackHotUpdatesmartcharts("main",{

/***/ "./src/components/BottomWidgetsContainer.jsx":
/*!***************************************************!*\
  !*** ./src/components/BottomWidgetsContainer.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_Connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/Connect */ "./src/store/Connect.js");
/* harmony import */ var _sass_components_bottom_widget_container_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sass/components/_bottom-widget-container.scss */ "./sass/components/_bottom-widget-container.scss");
/* harmony import */ var _sass_components_bottom_widget_container_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_components_bottom_widget_container_scss__WEBPACK_IMPORTED_MODULE_3__);





var BottomWidgetsContainer = function BottomWidgetsContainer(_ref) {
  var bottom = _ref.bottom,
      children = _ref.children,
      isReadyToShow = _ref.isReadyToShow,
      top = _ref.top,
      updateChartMargin = _ref.updateChartMargin;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var component = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children);
    updateChartMargin(!!(component && component.props.bottomWidgets));
  }, [children, updateChartMargin]);

  if (!isReadyToShow) {
    return null;
  }

  var styles = {
    top: top,
    bottom: bottom
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cq-bottom-ui-widgets",
    style: styles
  }, children);
};

BottomWidgetsContainer.propTypes = {
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  isReadyToShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  updateChartMargin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
BottomWidgetsContainer.defaultProps = {
  bottom: 0,
  isReadyToShow: false,
  top: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_store_Connect__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (_ref2) {
  var store = _ref2.bottomWidgetsContainer;
  return {
    bottom: store.bottom,
    isReadyToShow: store.isReadyToShow,
    top: store.top,
    updateChartMargin: store.updateChartMargin
  };
})(BottomWidgetsContainer));

/***/ }),

/***/ "./src/components/Chart.jsx":
/*!**********************************!*\
  !*** ./src/components/Chart.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(t) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RenderInsideChart_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderInsideChart.jsx */ "./src/components/RenderInsideChart.jsx");
/* harmony import */ var _ChartTitle_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChartTitle.jsx */ "./src/components/ChartTitle.jsx");
/* harmony import */ var _Loader_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.jsx */ "./src/components/Loader.jsx");
/* harmony import */ var _Barrier_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Barrier.jsx */ "./src/components/Barrier.jsx");
/* harmony import */ var _BottomWidget_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BottomWidget.jsx */ "./src/components/BottomWidget.jsx");
/* harmony import */ var _BottomWidgetsContainer_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BottomWidgetsContainer.jsx */ "./src/components/BottomWidgetsContainer.jsx");
/* harmony import */ var _NavigationWidget_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavigationWidget.jsx */ "./src/components/NavigationWidget.jsx");
/* harmony import */ var _HighestLowestMarker_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HighestLowestMarker.jsx */ "./src/components/HighestLowestMarker.jsx");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-tabs/style/react-tabs.css */ "./node_modules/react-tabs/style/react-tabs.css");
/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui */ "./src/components/ui/index.js");
/* harmony import */ var _ChartControls_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ChartControls.jsx */ "./src/components/ChartControls.jsx");
/* harmony import */ var _ChartFooter_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ChartFooter.jsx */ "./src/components/ChartFooter.jsx");
/* harmony import */ var _Crosshair_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Crosshair.jsx */ "./src/components/Crosshair.jsx");
/* harmony import */ var _store_Connect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store/Connect */ "./src/store/Connect.js");
/* harmony import */ var _utils_ga__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/ga */ "./src/utils/ga.js");
/* harmony import */ var _PaginationLoader_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PaginationLoader.jsx */ "./src/components/PaginationLoader.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











/* css + scss */











var Chart = function Chart(props) {
  var _classNames2;

  var rootRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var updateProps = props.updateProps,
        init = props.init,
        otherProps = _objectWithoutProperties(props, ["updateProps", "init"]);

    Object(_utils_ga__WEBPACK_IMPORTED_MODULE_17__["initGA"])();
    Object(_utils_ga__WEBPACK_IMPORTED_MODULE_17__["logPageView"])();
    updateProps(otherProps);
    init(rootRef.current, otherProps);
    return function () {
      props.destroy();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var updateProps = props.updateProps,
        init = props.init,
        otherProps = _objectWithoutProperties(props, ["updateProps", "init"]);

    updateProps(otherProps);
  });

  var defaultTopWidgets = function defaultTopWidgets() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChartTitle_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  };

  var DrawToolsSettingsDialog = props.DrawToolsSettingsDialog,
      StudySettingsDialog = props.StudySettingsDialog,
      isCandle = props.isCandle,
      isSpline = props.isSpline,
      _props$isMobile = props.isMobile,
      isMobile = _props$isMobile === void 0 ? false : _props$isMobile,
      isChartAvailable = props.isChartAvailable,
      isHighestLowestMarkerEnabled = props.isHighestLowestMarkerEnabled,
      _props$barriers = props.barriers,
      barriers = _props$barriers === void 0 ? [] : _props$barriers,
      children = props.children,
      chartControlsWidgets = props.chartControlsWidgets,
      AggregateChartSettingsDialog = props.AggregateChartSettingsDialog,
      topWidgets = props.topWidgets,
      chartContainerHeight = props.chartContainerHeight,
      containerWidth = props.containerWidth,
      isChartClosed = props.isChartClosed,
      theme = props.theme,
      position = props.position,
      bottomWidgets = props.bottomWidgets,
      _props$enabledChartFo = props.enabledChartFooter,
      enabledChartFooter = _props$enabledChartFo === void 0 ? true : _props$enabledChartFo,
      _props$enabledNavigat = props.enabledNavigationWidget,
      enabledNavigationWidget = _props$enabledNavigat === void 0 ? true : _props$enabledNavigat,
      toolbarWidget = props.toolbarWidget,
      onCrosshairChange = props.onCrosshairChange,
      isLoading = props.isLoading;
  var hasPosition = chartControlsWidgets && position && !isMobile;
  var TopWidgets = topWidgets || defaultTopWidgets; // if there are any markers, then increase the subholder z-index

  var ToolbarWidget = toolbarWidget;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('smartcharts', "smartcharts-".concat(theme), _defineProperty({
      'smartcharts--navigation-widget': enabledNavigationWidget,
      'smartcharts--loading': isLoading,
      'smartcharts--has-markers': children && children.length
    }, "smartcharts-".concat(containerWidth), !isMobile))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'smartcharts-mobile': isMobile,
      'smartcharts-desktop': !isMobile
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cq-context",
    ref: rootRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classNames2 = {}, _defineProperty(_classNames2, "cq-chart-control-".concat(position), hasPosition), _defineProperty(_classNames2, 'cq-chart-control-bottom', !hasPosition), _classNames2))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ciq-chart-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ciq-chart', {
      'closed-chart': isChartClosed
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RenderInsideChart_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    at: "holder"
  }, barriers.map(function (barr, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Barrier_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
      key: "barrier-".concat(idx) // eslint-disable-line react/no-array-index-key

    }, barr));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RenderInsideChart_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    at: "subholder"
  }, !isCandle && !isSpline && isHighestLowestMarkerEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighestLowestMarker_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RenderInsideChart_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    at: "subholder",
    hideInScrollToEpoch: true
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RenderInsideChart_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    at: "subholder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaginationLoader_jsx__WEBPACK_IMPORTED_MODULE_18__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cq-top-ui-widgets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopWidgets, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chartContainer",
    style: {
      height: chartContainerHeight
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Crosshair_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], null)), enabledNavigationWidget && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationWidget_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onCrosshairChange: onCrosshairChange
  }), toolbarWidget && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToolbarWidget, null), !isChartAvailable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cq-chart-unavailable"
  }, t.translate('Chart data is not available for this symbol.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BottomWidgetsContainer_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BottomWidget_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bottomWidgets: bottomWidgets
  }))), chartControlsWidgets !== null && !enabledChartFooter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChartControls_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
    widgets: chartControlsWidgets
  }), enabledChartFooter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChartFooter_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawToolsSettingsDialog, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AggregateChartSettingsDialog, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StudySettingsDialog, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "smartcharts_modal",
    className: "ciq-modal"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_store_Connect__WEBPACK_IMPORTED_MODULE_16__["connect"])(function (_ref) {
  var chart = _ref.chart,
      drawTools = _ref.drawTools,
      studies = _ref.studies,
      chartSetting = _ref.chartSetting,
      chartType = _ref.chartType,
      state = _ref.state,
      loader = _ref.loader;
  return {
    init: chart.init,
    destroy: chart.destroy,
    StudySettingsDialog: studies.StudySettingsDialog,
    DrawToolsSettingsDialog: drawTools.DrawToolsSettingsDialog,
    AggregateChartSettingsDialog: chartType.AggregateChartSettingsDialog,
    isCandle: chartType.isCandle,
    isChartAvailable: chart.isChartAvailable,
    isSpline: chartType.isSpline,
    updateProps: state.updateProps,
    chartContainerHeight: chart.chartContainerHeight,
    containerWidth: chart.containerWidth,
    isChartClosed: state.isChartClosed,
    theme: chartSetting.theme,
    position: chartSetting.position,
    isHighestLowestMarkerEnabled: chartSetting.isHighestLowestMarkerEnabled,
    isLoading: loader.isActive
  };
})(Chart));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/Translation.js */ "./src/Translation.js")["t"]))

/***/ }),

/***/ "./src/components/ChartTitle.jsx":
/*!***************************************!*\
  !*** ./src/components/ChartTitle.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(t) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_Connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/Connect */ "./src/store/Connect.js");
/* harmony import */ var _sass_components_chart_title_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sass/components/_chart-title.scss */ "./sass/components/_chart-title.scss");
/* harmony import */ var _sass_components_chart_title_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_components_chart_title_scss__WEBPACK_IMPORTED_MODULE_3__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var ChartTitle = function ChartTitle(props) {
  var chartId = props.chartId,
      ChartTitleMenu = props.ChartTitleMenu,
      containerId = props.containerId,
      currentSymbol = props.currentSymbol,
      enabled = props.enabled,
      isMobile = props.isMobile,
      MarketSelector = props.MarketSelector,
      portalNodeId = props.portalNodeId,
      onChange = props.onChange,
      SymbolSelectButton = props.SymbolSelectButton,
      setMenuOpen = props.setMenuOpen,
      searchInputClassName = props.searchInputClassName,
      theme = props.theme,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      open = props.open,
      open_market = props.open_market,
      isNestedList = props.isNestedList;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var updateProps = props.updateProps,
        otherProps = _objectWithoutProperties(props, ["updateProps"]);

    updateProps(otherProps); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, open_market]);

  if (!currentSymbol) {
    return null;
  }

  var ChartTitleContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChartTitleMenu, {
    enabled: enabled,
    className: "cq-chart-title stx-show cq-symbols-display",
    isFullscreen: true,
    portalNodeId: portalNodeId,
    title: isMobile ? t.translate('Underlying Assets') : '',
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChartTitleMenu.Title, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SymbolSelectButton, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChartTitleMenu.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarketSelector, {
    portalNodeId: portalNodeId,
    isNestedList: isNestedList,
    searchInputClassName: searchInputClassName,
    onSelectItem: function onSelectItem(x) {
      if (x.symbol !== currentSymbol.symbol) {
        onChange(x.symbol, chartId);
      }

      setMenuOpen(false);
    }
  })));

  if (containerId) {
    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "smartcharts-".concat(theme)
    }, ChartTitleContainer), document.getElementById(containerId));
  }

  return ChartTitleContainer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_store_Connect__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (_ref) {
  var c = _ref.chartTitle,
      chart = _ref.chart,
      state = _ref.state,
      chartSetting = _ref.chartSetting;
  return {
    chartId: state.chartId,
    ChartTitleMenu: c.ChartTitleMenu,
    currentSymbol: c.currentSymbol,
    isMobile: chart.isMobile,
    MarketSelector: c.MarketSelector,
    onChange: c.setSymbol,
    setMenuOpen: c.menu.setOpen,
    SymbolSelectButton: c.SymbolSelectButton,
    onMouseEnter: c.onMouseEnter,
    onMouseLeave: c.onMouseLeave,
    updateProps: c.updateProps,
    theme: chartSetting.theme
  };
})(ChartTitle));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/Translation.js */ "./src/Translation.js")["t"]))

/***/ }),

/***/ "./src/components/FastMarker.jsx":
/*!***************************************!*\
  !*** ./src/components/FastMarker.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_Connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Connect */ "./src/store/Connect.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



 // Render given Components under stx-subholder.
// This component is used to position a marker on the chart.
//
// USAGE:
//
//  - setRef({setPosition, div}) will be called on mount.
//  - "div" is the dom element containing the marker with "your-css-class"
//  - "setPosition({epoch, price})" is a function that you will use to update the div position.
//  - calling "setPosition({epoch: null, price: null})" will hide the marker.
//  - use "div.querySelector('...')" to get a dom reference in order to update your content .
//  - "setRef(null)" will be called when the marker unmounts.
//
//  <FastMarker
//      markerRef={setRef}
//      threshold={optional visibility threshold}
//      className="your-css-class"
//  >
//     <your content here/>
//  </FastMarker>
//
//  - the chart can have a zoom level, if `threshold` is provided
//    the marker will only be shown if it's within that zoom threshold.

var FastMarker = /*#__PURE__*/function (_Component) {
  _inherits(FastMarker, _Component);

  var _super = _createSuper(FastMarker);

  function FastMarker() {
    var _this;

    _classCallCheck(this, FastMarker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.price = null;
    _this.date = null;
    _this.elem = null;
    _this.ctx = null;
    _this.stx = null;
    _this.injectionId = null;

    _this.setPosition = function (_ref) {
      var epoch = _ref.epoch,
          price = _ref.price;
      _this.price = +price || null;
      _this.date = CIQ.strToDateTime(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getUTCDate"])(epoch));

      _this.updateCSS();
    };

    _this.updateCSS = function () {
      if (!_this.elem || !_this.ctx) {
        return;
      }

      if (!_this.date) {
        _this.elem.style.visibility = 'hidden';
        return;
      }

      var offsetTop = _this.props.offsetTop || 0;
      var offsetLeft = _this.props.offsetLeft || 0;
      var elem = _this.elem;
      var stx = _this.stx;
      var chart = stx.chart;
      var top = 0,
          left = 0,
          show = true;
      var threshold = +_this.props.threshold || 0;
      show = !threshold || stx.layout.candleWidth >= threshold;

      if (show && chart.dataSet && chart.dataSet.length && stx.mainSeriesRenderer) {
        var tickIdx = stx.tickFromDate(_this.date, chart);

        if (tickIdx > -1 && stx.chart.dataSet[tickIdx] && stx.chart.dataSet[tickIdx].Close !== _this.price) {
          delete stx.chart.tickCache[_this.date.getTime()];
          tickIdx = stx.tickFromDate(_this.date, chart);
        }

        var x = stx.pixelFromTick(tickIdx, chart); // ChartIQ doesn't support placing markers in the middle of ticks.

        var bar = chart.dataSet[tickIdx]; // Here we interpolate the pixel distance between two adjacent ticks.

        if (bar && bar.DT < _this.date) {
          var barNext = chart.dataSet[tickIdx + 1];
          var barPrev = tickIdx > 0 ? chart.dataSet[tickIdx - 1] : null;

          if (barNext && barNext.Close && barNext.DT > _this.date) {
            var pixelToNextBar = stx.pixelFromTick(tickIdx + 1, chart) - x;
            x += (_this.date - bar.DT) / (barNext.DT - bar.DT) * pixelToNextBar;
          } else if (barPrev && barPrev.Close) {
            var pixelFromPrevBar = x - stx.pixelFromTick(tickIdx - 1, chart);
            x += (_this.date - bar.DT) / (bar.DT - barPrev.DT) * pixelFromPrevBar;
          }
        }

        var y = _this.price ? stx.pixelFromPrice(_this.price, chart.panel) : 0;

        if (chart.yAxis.left > x && chart.yAxis.top <= y && chart.yAxis.bottom >= y) {
          top = +y;
          left = Math.round(x);
        } else {
          show = false;
        }
      } // patch DOM without triggering recalculate layout.


      elem.style.transform = "translate(".concat(left + offsetLeft, "px, ").concat(top + offsetTop, "px)");
      elem.style.visibility = show ? 'visible' : 'hidden';
    };

    _this.setRef = function (ref) {
      _this.elem = ref;
      var data = ref ? {
        div: ref,
        setPosition: _this.setPosition
      } : null;

      if (_this.props.markerRef) {
        _this.props.markerRef(data);
      }

      if (ref !== null) {
        var contextPromise = _this.props.contextPromise;
        contextPromise.then(function (ctx) {
          _this.ctx = ctx;
          _this.stx = _this.ctx.stx;
          _this.injectionId = _this.stx.append('draw', _this.updateCSS);

          _this.updateCSS();
        });
      } else if (_this.injectionId) {
        // remove the injection on unmount
        _this.stx.removeInjection(_this.injectionId);

        _this.ctx = null;
        _this.stx = null;
      }
    };

    return _this;
  }

  _createClass(FastMarker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: className,
        ref: this.setRef,
        style: {
          position: 'absolute'
        }
      }, children);
    }
  }]);

  return FastMarker;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_store_Connect__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (_ref2) {
  var chart = _ref2.chart;
  return {
    contextPromise: chart.contextPromise
  };
})(FastMarker));

/***/ }),

/***/ "./src/components/RawMarker.jsx":
/*!**************************************!*\
  !*** ./src/components/RawMarker.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_Connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Connect */ "./src/store/Connect.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var RawMarker = /*#__PURE__*/function (_React$Component) {
  _inherits(RawMarker, _React$Component);

  var _super = _createSuper(RawMarker);

  function RawMarker() {
    var _this;

    _classCallCheck(this, RawMarker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.price = null;
    _this.date = null;
    _this.elem = null;
    _this.ctx = null;
    _this.stx = null;
    _this.injectionId = null;
    _this.hasUnmountedBeforeInjection = false;
    _this.shouldRedraw = false;
    _this.canvas_height = 0;

    _this.draw = function () {
      if (!_this.ctx) {
        return;
      }

      var _this$props = _this.props,
          _this$props$threshold = _this$props.threshold,
          threshold = _this$props$threshold === void 0 ? 0 : _this$props$threshold,
          epoch_array = _this$props.epoch_array,
          draw_callback = _this$props.draw_callback,
          _this$props$price_arr = _this$props.price_array,
          price_array = _this$props$price_arr === void 0 ? [] : _this$props$price_arr;

      if (!_this.last_epoch_array || _this.last_epoch_array.toString() !== epoch_array.toString()) {
        _this.date_array = epoch_array.map(function (epoch) {
          return {
            date: CIQ.strToDateTime(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getUTCDate"])(epoch)),
            epoch: epoch
          };
        });
        _this.last_epoch_array = epoch_array;
      }

      var stx = _this.stx;
      var chart = stx.chart;
      var show = !threshold || stx.layout.candleWidth >= threshold;

      if (show && chart.dataSet && chart.dataSet.length && stx.mainSeriesRenderer) {
        var points = [];

        _this.date_array.forEach(function (_ref) {
          var date = _ref.date,
              epoch = _ref.epoch;
          var tick_idx = stx.tickFromDate(date, chart); // ChartIQ doesn't support placing markers in the middle of ticks.

          var bar = chart.dataSet[tick_idx];
          var bar_next = chart.dataSet[tick_idx + 1];
          var bar_prev = tick_idx > 0 ? chart.dataSet[tick_idx - 1] : null;
          var x = stx.pixelFromTick(tick_idx, chart); // let x = pixelFromTick(stx, tick_idx);

          var price = bar ? bar.Close : null; // const price = (bar || bar_prev || bar_next || {}).Close;
          // Here we interpolate the pixel distance between two adjacent ticks.

          if (bar && bar.DT < date) {
            if (bar_next && bar_next.Close && bar_next.DT > date) {
              var delta_x = stx.pixelFromTick(tick_idx + 1, chart) - x; // const delta_x = pixelFromTick(stx, tick_idx + 1) - x;

              var delta_y = bar_next.Close - price;
              var ratio = (date - bar.DT) / (bar_next.DT - bar.DT);
              price += ratio * delta_y;
              x += ratio * delta_x;
            } else if (bar_prev && bar_prev.Close) {
              var _delta_x = x - stx.pixelFromTick(tick_idx - 1, chart); // const delta_x = x - pixelFromTick(stx, tick_idx - 1);


              var _delta_y = price - bar_prev.Close;

              var _ratio = (date - bar.DT) / (bar.DT - bar_prev.DT);

              x += _ratio * _delta_x;
              price += _ratio * _delta_y;
            }
          }

          var y = price ? stx.pixelFromPrice(price, chart.panel) : 0;
          var visible = x >= 0 && chart.yAxis.left > x && chart.yAxis.top <= y && chart.yAxis.bottom >= y;
          var yAxis = chart.yAxis;
          var top = Math.min(Math.max(+y, yAxis.top), yAxis.bottom);
          var left = Math.min(Math.max(x, 0), yAxis.left);
          var zoom = stx.layout.candleWidth;
          points.push({
            epoch: epoch,
            visible: visible,
            top: top,
            left: left,
            zoom: zoom,
            max_left: yAxis.left
          });
        });

        var prices = price_array.map(function (price) {
          return stx.pixelFromPrice(price * 1, chart.panel);
        });
        var canvas = stx.chart.context.canvas;

        if (canvas.style.height.indexOf(canvas.height) < 0) {
          _this.canvas_height = canvas.height;
        }

        draw_callback({
          ctx: stx.chart.context,
          canvas_height: _this.canvas_height,
          points: points,
          prices: prices
        });
      }
    };

    return _this;
  }

  _createClass(RawMarker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var contextPromise = this.props.contextPromise;
      contextPromise.then(function (ctx) {
        if (_this2.hasUnmountedBeforeInjection) {
          return;
        }

        _this2.ctx = ctx;
        _this2.stx = _this2.ctx.stx;
        _this2.injectionId = _this2.stx.append('draw', _this2.draw);

        _this2.draw();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      var _this$props2 = this.props,
          shouldRedraw = _this$props2.shouldRedraw,
          contextPromise = _this$props2.contextPromise;

      if (shouldRedraw) {
        contextPromise.then(function (ctx) {
          if (_this3.hasUnmountedBeforeInjection) {
            return;
          }

          _this3.ctx = ctx;
          _this3.stx = _this3.ctx.stx;
          _this3.injectionId = _this3.stx.append('draw', _this3.draw);

          _this3.draw();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.injectionId) {
        // remove the injection on unmount
        this.stx.removeInjection(this.injectionId);
        this.ctx = null;
        this.stx = null;
      } else {
        this.hasUnmountedBeforeInjection = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return RawMarker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_store_Connect__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (_ref2) {
  var chart = _ref2.chart;
  return {
    contextPromise: chart.contextPromise
  };
})(RawMarker));

/***/ }),

/***/ "./src/components/RenderInsideChart.jsx":
/*!**********************************************!*\
  !*** ./src/components/RenderInsideChart.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/utils */ "./src/components/ui/utils.js");
/* harmony import */ var _store_Connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/Connect */ "./src/store/Connect.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var inChartPrefix = 'cq-inchart-'; // Render given Components under stx-holder to position it relative to the active symbol chart.

var RenderInsideChart = /*#__PURE__*/function (_Component) {
  _inherits(RenderInsideChart, _Component);

  var _super = _createSuper(RenderInsideChart);

  function RenderInsideChart(props) {
    var _this;

    _classCallCheck(this, RenderInsideChart);

    _this = _super.call(this, props);
    var _props$at = props.at,
        at = _props$at === void 0 ? 'holder' : _props$at,
        contextPromise = props.contextPromise;
    contextPromise.then(function (context) {
      var nodeName = "".concat(inChartPrefix).concat(at); // reuse existing node when possible:

      var elem = context.topNode.querySelector(".".concat(nodeName));

      if (!elem) {
        elem = Object(_ui_utils__WEBPACK_IMPORTED_MODULE_2__["createElement"])("<div class=\"".concat(nodeName, "\"></div>"));
        context.stx.chart.panel[at].appendChild(elem);
      }

      _this.container = elem;

      _this.forceUpdate(); // force render to be called after getting the container

    });
    return _this;
  }

  _createClass(RenderInsideChart, [{
    key: "render",
    value: function render() {
      if (!this.props.isChartReady) return null;
      if (this.props.hideInScrollToEpoch && this.props.isChartScrollingToEpoch) return null;

      if (this.container) {
        return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(this.props.children, this.container);
      }

      return null;
    }
  }]);

  return RenderInsideChart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_store_Connect__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref) {
  var chart = _ref.chart,
      state = _ref.state;
  return {
    contextPromise: chart.contextPromise,
    isChartReady: state.isChartReady,
    isChartScrollingToEpoch: state.isChartScrollingToEpoch
  };
})(RenderInsideChart));

/***/ })

})
//# sourceMappingURL=main.7f4fa9.hot-update.js.map
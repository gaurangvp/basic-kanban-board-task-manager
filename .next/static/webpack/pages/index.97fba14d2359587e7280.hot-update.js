"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CardItem.js":
/*!********************************!*\
  !*** ./components/CardItem.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_hp_OneDrive_Desktop_kanban_ui_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/image */ "./node_modules/next/dist/client/image.js");
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\hp\\OneDrive\\Desktop\\kanban-ui-main\\components\\CardItem.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_hp_OneDrive_Desktop_kanban_ui_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function CardItem(_ref) {
  var _this = this;

  var data = _ref.data,
      index = _ref.index;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__.Draggable, {
    index: index,
    draggableId: data.id.toString(),
    children: function children(provided) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
        ref: provided.innerRef
      }, provided.draggableProps), provided.dragHandleProps), {}, {
        className: "bg-white rounded-md p-3 m-3 mt-0 last:mb-0",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          className: "bg-gradient-to-r\n              px-2 py-1 rounded text-white text-sm\n              ".concat(data.priority === 0 ? "from-blue-600 to-blue-400" : data.priority === 1 ? "from-green-600 to-green-400" : "from-red-600 to-red-400", "\n              "),
          children: data.priority === 0 ? "Low Priority" : data.priority === 1 ? "Medium Priority" : "High Priority"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
          className: "text-md my-3 text-lg leading-6",
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "flex justify-between",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "flex space-x-2 items-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: "flex space-x-1 items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ChatAlt2Icon, {
                className: "w-4 h-4 text-gray-500"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                children: data.chat
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: "flex space-x-1 items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.PaperClipIcon, {
                className: "w-4 h-4 text-gray-500"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                children: data.attachment
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
            className: "flex space-x-3",
            children: [data.assignees.map(function (ass, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_client_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                  src: ass.avt,
                  width: "36",
                  height: "36",
                  objectFit: "cover",
                  className: " rounded-full "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 21
                }, _this)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 19
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center rounded-full",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.PlusIcon, {
                  className: "w-5 h-5 text-gray-500"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_c = CardItem;
/* harmony default export */ __webpack_exports__["default"] = (CardItem);

var _c;

$RefreshReg$(_c, "CardItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTdmYmExNGQyMzU5NTg3ZTcyODAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7O0FBRUEsU0FBU1EsUUFBVCxPQUFtQztBQUFBOztBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUNqQyxzQkFDRSw4REFBQywwREFBRDtBQUFXLFNBQUssRUFBRUEsS0FBbEI7QUFBeUIsZUFBVyxFQUFFRCxJQUFJLENBQUNFLEVBQUwsQ0FBUUMsUUFBUixFQUF0QztBQUFBLGNBQ0csa0JBQUNDLFFBQUQ7QUFBQSwwQkFDQztBQUNFLFdBQUcsRUFBRUEsUUFBUSxDQUFDQztBQURoQixTQUVNRCxRQUFRLENBQUNFLGNBRmYsR0FHTUYsUUFBUSxDQUFDRyxlQUhmO0FBSUUsaUJBQVMsRUFBQyw0Q0FKWjtBQUFBLGdDQU1FO0FBQ0UsbUJBQVMsZ0dBR0xQLElBQUksQ0FBQ1EsUUFBTCxLQUFrQixDQUFsQixHQUNJLDJCQURKLEdBRUlSLElBQUksQ0FBQ1EsUUFBTCxLQUFrQixDQUFsQixHQUNBLDZCQURBLEdBRUEseUJBUEMscUJBRFg7QUFBQSxvQkFZR1IsSUFBSSxDQUFDUSxRQUFMLEtBQWtCLENBQWxCLEdBQ0csY0FESCxHQUVHUixJQUFJLENBQUNRLFFBQUwsS0FBa0IsQ0FBbEIsR0FDQSxpQkFEQSxHQUVBO0FBaEJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUF3QkU7QUFBSSxtQkFBUyxFQUFDLGdDQUFkO0FBQUEsb0JBQWdEUixJQUFJLENBQUNTO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJGLGVBeUJFO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyw2QkFBZjtBQUFBLG9DQUNFO0FBQU0sdUJBQVMsRUFBQyw2QkFBaEI7QUFBQSxzQ0FDRSw4REFBQyxrRUFBRDtBQUFjLHlCQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUEsMEJBQU9ULElBQUksQ0FBQ1U7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUtFO0FBQU0sdUJBQVMsRUFBQyw2QkFBaEI7QUFBQSxzQ0FDRSw4REFBQyxtRUFBRDtBQUFlLHlCQUFTLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUEsMEJBQU9WLElBQUksQ0FBQ1c7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFZRTtBQUFJLHFCQUFTLEVBQUMsZ0JBQWQ7QUFBQSx1QkFDR1gsSUFBSSxDQUFDWSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsR0FBRCxFQUFNYixLQUFOLEVBQWdCO0FBQ2xDLGtDQUNFO0FBQUEsdUNBQ0UsOERBQUMsK0RBQUQ7QUFDRSxxQkFBRyxFQUFFYSxHQUFHLENBQUNDLEdBRFg7QUFFRSx1QkFBSyxFQUFDLElBRlI7QUFHRSx3QkFBTSxFQUFDLElBSFQ7QUFJRSwyQkFBUyxFQUFDLE9BSlo7QUFLRSwyQkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTZCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFXRCxhQVpBLENBREgsZUFjRTtBQUFBLHFDQUNFO0FBQVEseUJBQVMsRUFBQyw0RkFBbEI7QUFBQSx1Q0FFRSw4REFBQyw4REFBRDtBQUFVLDJCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRUQ7O0tBcEVRRjtBQXNFVCwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcmRJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgQ2hldnJvbkRvd25JY29uLFxuICBQbHVzSWNvbixcbiAgRG90c1ZlcnRpY2FsSWNvbixcbiAgQ2hhdEFsdDJJY29uLFxuICBQYXBlckNsaXBJY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xuXG5mdW5jdGlvbiBDYXJkSXRlbSh7IGRhdGEsIGluZGV4IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8RHJhZ2dhYmxlIGluZGV4PXtpbmRleH0gZHJhZ2dhYmxlSWQ9e2RhdGEuaWQudG9TdHJpbmcoKX0+XG4gICAgICB7KHByb3ZpZGVkKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbiAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbWQgcC0zIG0tMyBtdC0wIGxhc3Q6bWItMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLWdyYWRpZW50LXRvLXJcbiAgICAgICAgICAgICAgcHgtMiBweS0xIHJvdW5kZWQgdGV4dC13aGl0ZSB0ZXh0LXNtXG4gICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgZGF0YS5wcmlvcml0eSA9PT0gMFxuICAgICAgICAgICAgICAgICAgPyBcImZyb20tYmx1ZS02MDAgdG8tYmx1ZS00MDBcIlxuICAgICAgICAgICAgICAgICAgOiBkYXRhLnByaW9yaXR5ID09PSAxXG4gICAgICAgICAgICAgICAgICA/IFwiZnJvbS1ncmVlbi02MDAgdG8tZ3JlZW4tNDAwXCJcbiAgICAgICAgICAgICAgICAgIDogXCJmcm9tLXJlZC02MDAgdG8tcmVkLTQwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZGF0YS5wcmlvcml0eSA9PT0gMFxuICAgICAgICAgICAgICA/IFwiTG93IFByaW9yaXR5XCJcbiAgICAgICAgICAgICAgOiBkYXRhLnByaW9yaXR5ID09PSAxXG4gICAgICAgICAgICAgID8gXCJNZWRpdW0gUHJpb3JpdHlcIlxuICAgICAgICAgICAgICA6IFwiSGlnaCBQcmlvcml0eVwifVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtbWQgbXktMyB0ZXh0LWxnIGxlYWRpbmctNlwiPntkYXRhLnRpdGxlfTwvaDU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTEgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPENoYXRBbHQySWNvbiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZ3JheS01MDBcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPntkYXRhLmNoYXR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0xIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxQYXBlckNsaXBJY29uIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1ncmF5LTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2RhdGEuYXR0YWNobWVudH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAge2RhdGEuYXNzaWduZWVzLm1hcCgoYXNzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXNzLmF2dH1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjM2XCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNlwiXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLWZ1bGwgXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZGFzaGVkIGZsZXggaXRlbXMtY2VudGVyIHctOSBoLTkgYm9yZGVyLWdyYXktNTAwIGp1c3RpZnktY2VudGVyXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPFBsdXNJY29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICApfVxuICAgIDwvRHJhZ2dhYmxlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkSXRlbTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiQ2hldnJvbkRvd25JY29uIiwiUGx1c0ljb24iLCJEb3RzVmVydGljYWxJY29uIiwiQ2hhdEFsdDJJY29uIiwiUGFwZXJDbGlwSWNvbiIsIkRyYWdnYWJsZSIsIkNhcmRJdGVtIiwiZGF0YSIsImluZGV4IiwiaWQiLCJ0b1N0cmluZyIsInByb3ZpZGVkIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsInByaW9yaXR5IiwidGl0bGUiLCJjaGF0IiwiYXR0YWNobWVudCIsImFzc2lnbmVlcyIsIm1hcCIsImFzcyIsImF2dCJdLCJzb3VyY2VSb290IjoiIn0=
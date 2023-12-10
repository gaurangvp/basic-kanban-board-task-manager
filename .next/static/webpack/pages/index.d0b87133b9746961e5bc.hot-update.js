"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_hp_OneDrive_Desktop_kanban_ui_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_hp_OneDrive_Desktop_kanban_ui_main_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/image */ "./node_modules/next/dist/client/image.js");
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _components_CardItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CardItem */ "./components/CardItem.js");
/* harmony import */ var _data_board_data_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/board-data.json */ "./data/board-data.json");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\hp\\OneDrive\\Desktop\\kanban-ui-main\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_hp_OneDrive_Desktop_kanban_ui_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function createGuidId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

function Home() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      ready = _useState[0],
      setReady = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(_data_board_data_json__WEBPACK_IMPORTED_MODULE_8__),
      boardData = _useState2[0],
      setBoardData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      showForm = _useState3[0],
      setShowForm = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0),
      selectedBoard = _useState4[0],
      setSelectedBoard = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    if (true) {
      setReady(true);
    }
  }, []);

  var onDragEnd = function onDragEnd(re) {
    if (!re.destination) return;
    var newBoardData = boardData;
    var dragItem = newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(re.source.index, 1);
    newBoardData[parseInt(re.destination.droppableId)].items.splice(re.destination.index, 0, dragItem);
    setBoardData(newBoardData);
  };

  var onTextAreaKeyPress = function onTextAreaKeyPress(e) {
    if (e.keyCode === 13) //Enter
      {
        var val = e.target.value;

        if (val.length === 0) {
          setShowForm(false);
        } else {
          var prio = val.match(/\d+$/);

          if (prio) {
            prio = ((0,C_Users_hp_OneDrive_Desktop_kanban_ui_main_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__.default)("prio"), parseInt(prio, 10));
          }
        }
      }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "p-10 flex flex-col h-screen",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex flex-initial justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
            className: "text-1xl font-bold text-gray-600",
            children: "Kanban View"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon, {
            className: "w-9 h-9 text-gray-500 rounded-full p-1 bg-white ml-5 shadow-xl"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          className: "flex space-x-3",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_client_image__WEBPACK_IMPORTED_MODULE_5___default()), {
              src: "https://randomuser.me/api/portraits/men/75.jpg",
              width: "36",
              height: "36",
              objectFit: "cover",
              className: " rounded-full "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_client_image__WEBPACK_IMPORTED_MODULE_5___default()), {
              src: "https://randomuser.me/api/portraits/men/76.jpg",
              width: "36",
              height: "36",
              objectFit: "cover",
              className: " rounded-full "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_client_image__WEBPACK_IMPORTED_MODULE_5___default()), {
              src: "https://randomuser.me/api/portraits/men/78.jpg",
              width: "36",
              height: "36",
              objectFit: "cover",
              className: " rounded-full "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
              className: "border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center rounded-full",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.PlusIcon, {
                className: "w-5 h-5 text-gray-500"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), ready && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__.DragDropContext, {
        onDragEnd: onDragEnd,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "grid grid-cols-4 gap-5 my-5",
          children: boardData.map(function (board, bIndex) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__.Droppable, {
                droppableId: bIndex.toString(),
                children: function children(provided, snapshot) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
                    ref: provided.innerRef,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "bg-gray-100 rounded-md shadow-md\n                            flex flex-col relative overflow-hidden\n                            ".concat(snapshot.isDraggingOver && "bg-green-100"),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        className: "w-full h-1 bg-gradient-to-r from-pink-700 to-red-200 absolute inset-x-0 top-0"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                        className: " p-3 flex justify-between items-center mb-2",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                          className: "text-2xl text-gray-600",
                          children: board.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 143,
                          columnNumber: 31
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.DotsVerticalIcon, {
                          className: "w-5 h-5 text-gray-500"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 146,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                        className: "overflow-y-auto overflow-x-hidden h-auto",
                        style: {
                          maxHeight: 'calc(100vh - 290px)'
                        },
                        children: [board.items.length > 0 && board.items.map(function (item, iIndex) {
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_CardItem__WEBPACK_IMPORTED_MODULE_7__.default, {
                            data: item,
                            index: iIndex,
                            className: "m-3"
                          }, item.id, false, {
                            fileName: _jsxFileName,
                            lineNumber: 154,
                            columnNumber: 37
                          }, _this);
                        }), provided.placeholder]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 29
                      }, _this), showForm && selectedBoard === bIndex ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                        className: "p-3",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
                          className: "border-gray-300 rounded focus:ring-purple-400 w-full",
                          rows: 3,
                          placeholder: "Task info",
                          "data-id": bIndex,
                          onKeyDown: function onKeyDown(e) {
                            return onTextAreaKeyPress(e);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 168,
                          columnNumber: 35
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 167,
                        columnNumber: 33
                      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                        className: "flex justify-center items-center my-3 space-x-2 text-lg",
                        onClick: function onClick() {
                          setSelectedBoard(bIndex);
                          setShowForm(true);
                        },
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                          children: "Add task"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 178,
                          columnNumber: 35
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.PlusCircleIcon, {
                          className: "w-5 h-5 text-gray-500"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 179,
                          columnNumber: 35
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 174,
                        columnNumber: 33
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 27
                    }, _this)
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 25
                  }, _this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 21
              }, _this)
            }, board.name, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

_s(Home, "1nYOvQbyTN1mQSzftrvRBcsHVEo=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDBiODcxMzNiOTc0Njk2MWU1YmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTYyxZQUFULEdBQXdCO0FBQ3RCLFNBQU8sdUNBQXVDQyxPQUF2QyxDQUErQyxPQUEvQyxFQUF3RCxVQUFTQyxDQUFULEVBQVk7QUFDekUsUUFBSUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBaEIsR0FBcUIsQ0FBN0I7QUFBQSxRQUFnQ0MsQ0FBQyxHQUFHSixDQUFDLElBQUksR0FBTCxHQUFXQyxDQUFYLEdBQWdCQSxDQUFDLEdBQUcsR0FBSixHQUFVLEdBQTlEO0FBQ0EsV0FBT0csQ0FBQyxDQUFDQyxRQUFGLENBQVcsRUFBWCxDQUFQO0FBQ0QsR0FITSxDQUFQO0FBSUQ7O0FBRWMsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIVCwrQ0FBUSxDQUFDLEtBQUQsQ0FETDtBQUFBLE1BQ3RCVSxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRUtYLCtDQUFRLENBQUNMLGtEQUFELENBRmI7QUFBQSxNQUV0QmlCLFNBRnNCO0FBQUEsTUFFWEMsWUFGVzs7QUFBQSxtQkFHR2IsK0NBQVEsQ0FBQyxLQUFELENBSFg7QUFBQSxNQUd0QmMsUUFIc0I7QUFBQSxNQUdaQyxXQUhZOztBQUFBLG1CQUlhZiwrQ0FBUSxDQUFDLENBQUQsQ0FKckI7QUFBQSxNQUl0QmdCLGFBSnNCO0FBQUEsTUFJUEMsZ0JBSk87O0FBTTdCbEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsY0FBcUI7QUFDbkJZLE1BQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDtBQUNGLEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTU8sU0FBUyxH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QUEsaUNBSkYsZUFLRSw4REFBQyxvRUFBRDtBQUFnQixtQ0FBUyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXpDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBVXdCLEtBQUssQ0FBQ08sSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQWdFRCxXQWpFQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdJRDs7R0E5S3VCckM7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvaW1hZ2VcIjtcbmltcG9ydCB7XG4gIENoZXZyb25Eb3duSWNvbixcbiAgUGx1c0ljb24sXG4gIERvdHNWZXJ0aWNhbEljb24sXG4gIFBsdXNDaXJjbGVJY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgQ2FyZEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZEl0ZW1cIjtcbmltcG9ydCBCb2FyZERhdGEgZnJvbSBcIi4uL2RhdGEvYm9hcmQtZGF0YS5qc29uXCI7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlR3VpZElkKCkge1xuICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG4gICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xuICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtyZWFkeSwgc2V0UmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYm9hcmREYXRhLCBzZXRCb2FyZERhdGFdID0gdXNlU3RhdGUoQm9hcmREYXRhKTtcbiAgY29uc3QgW3Nob3dGb3JtLCBzZXRTaG93Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEJvYXJkLCBzZXRTZWxlY3RlZEJvYXJkXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgc2V0UmVhZHkodHJ1ZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25EcmFnRW5kID0gKHJlKSA9PiB7XG4gICAgaWYgKCFyZS5kZXN0aW5hdGlvbikgcmV0dXJuO1xuICAgIGxldCBuZXdCb2FyZERhdGEgPSBib2FyZERhdGE7XG4gICAgdmFyIGRyYWdJdGVtID1cbiAgICAgIG5ld0JvYXJkRGF0YVtwYXJzZUludChyZS5zb3VyY2UuZHJvcHBhYmxlSWQpXS5pdGVtc1tyZS5zb3VyY2UuaW5kZXhdO1xuICAgIG5ld0JvYXJkRGF0YVtwYXJzZUludChyZS5zb3VyY2UuZHJvcHBhYmxlSWQpXS5pdGVtcy5zcGxpY2UoXG4gICAgICByZS5zb3VyY2UuaW5kZXgsXG4gICAgICAxXG4gICAgKTtcbiAgICBuZXdCb2FyZERhdGFbcGFyc2VJbnQocmUuZGVzdGluYXRpb24uZHJvcHBhYmxlSWQpXS5pdGVtcy5zcGxpY2UoXG4gICAgICByZS5kZXN0aW5hdGlvbi5pbmRleCxcbiAgICAgIDAsXG4gICAgICBkcmFnSXRlbVxuICAgICk7XG4gICAgc2V0Qm9hcmREYXRhKG5ld0JvYXJkRGF0YSk7XG4gIH07XG5cbiAgY29uc3Qgb25UZXh0QXJlYUtleVByZXNzID0gKGUpID0+IHtcbiAgICBpZihlLmtleUNvZGUgPT09IDEzKSAvL0VudGVyXG4gICAge1xuICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBpZih2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNldFNob3dGb3JtKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwcmlvID0gdmFsLm1hdGNoKC9cXGQrJC8pO1xuICAgICAgICBpZiAocHJpbykge1xuICAgICAgICAgICAgcHJpbz1wYXJzZUludChwcmlvLCAxMCk7XG4gICAgICAgICAgfVxuICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMCBmbGV4IGZsZXgtY29sIGgtc2NyZWVuXCI+XG4gICAgICAgIHsvKiBCb2FyZCBoZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWluaXRpYWwganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktNjAwXCI+S2FuYmFuIFZpZXc8L2g0PlxuICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTkgaC05IHRleHQtZ3JheS01MDAgcm91bmRlZC1mdWxsXG4gICAgICAgICAgICBwLTEgYmctd2hpdGUgbWwtNSBzaGFkb3cteGxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNzUuanBnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjM2XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNlwiXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLWZ1bGwgXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi83Ni5qcGdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzZcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjM2XCJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbCBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVuLzc4LmpwZ1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzNlwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzZcIlxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgcm91bmRlZC1mdWxsIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1kYXNoZWQgZmxleCBpdGVtcy1jZW50ZXIgdy05IGgtOSBib3JkZXItZ3JheS01MDAganVzdGlmeS1jZW50ZXJcbiAgICAgICAgICAgICAgICByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBsdXNJY29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTUwMFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQm9hcmQgY29sdW1ucyAqL31cbiAgICAgICAge3JlYWR5ICYmIChcbiAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNSBteS01XCI+XG4gICAgICAgICAgICAgIHtib2FyZERhdGEubWFwKChib2FyZCwgYkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtib2FyZC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD17YkluZGV4LnRvU3RyaW5nKCl9PlxuICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLWdyYXktMTAwIHJvdW5kZWQtbWQgc2hhZG93LW1kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleCBmbGV4LWNvbCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3NuYXBzaG90LmlzRHJhZ2dpbmdPdmVyICYmIFwiYmctZ3JlZW4tMTAwXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1waW5rLTcwMCB0by1yZWQtMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFic29sdXRlIGluc2V0LXgtMCB0b3AtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiIHAtMyBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9hcmQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb3RzVmVydGljYWxJY29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteS1hdXRvIG92ZXJmbG93LXgtaGlkZGVuIGgtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhIZWlnaHQ6J2NhbGMoMTAwdmggLSAyOTBweCknfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9hcmQuaXRlbXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5pdGVtcy5tYXAoKGl0ZW0sIGlJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aUluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Rm9ybSAmJiBzZWxlY3RlZEJvYXJkID09PSBiSW5kZXggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGZvY3VzOnJpbmctcHVycGxlLTQwMCB3LWZ1bGxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfSBwbGFjZWhvbGRlcj1cIlRhc2sgaW5mb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9e2JJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBvblRleHRBcmVhS2V5UHJlc3MoZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteS0zIHNwYWNlLXgtMiB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2VsZWN0ZWRCb2FyZChiSW5kZXgpOyBzZXRTaG93Rm9ybSh0cnVlKTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWRkIHRhc2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNDaXJjbGVJY29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGF5b3V0IiwiSW1hZ2UiLCJDaGV2cm9uRG93bkljb24iLCJQbHVzSWNvbiIsIkRvdHNWZXJ0aWNhbEljb24iLCJQbHVzQ2lyY2xlSWNvbiIsIkNhcmRJdGVtIiwiQm9hcmREYXRhIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJhZ2dhYmxlIiwiRHJvcHBhYmxlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVHdWlkSWQiLCJyZXBsYWNlIiwiYyIsInIiLCJNYXRoIiwicmFuZG9tIiwidiIsInRvU3RyaW5nIiwiSG9tZSIsInJlYWR5Iiwic2V0UmVhZHkiLCJib2FyZERhdGEiLCJzZXRCb2FyZERhdGEiLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwic2VsZWN0ZWRCb2FyZCIsInNldFNlbGVjdGVkQm9hcmQiLCJvbkRyYWdFbmQiLCJyZSIsImRlc3RpbmF0aW9uIiwibmV3Qm9hcmREYXRhIiwiZHJhZ0l0ZW0iLCJwYXJzZUludCIsInNvdXJjZSIsImRyb3BwYWJsZUlkIiwiaXRlbXMiLCJpbmRleCIsInNwbGljZSIsIm9uVGV4dEFyZWFLZXlQcmVzcyIsImUiLCJrZXlDb2RlIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJwcmlvIiwibWF0Y2giLCJtYXAiLCJib2FyZCIsImJJbmRleCIsInByb3ZpZGVkIiwic25hcHNob3QiLCJkcm9wcGFibGVQcm9wcyIsImlubmVyUmVmIiwiaXNEcmFnZ2luZ092ZXIiLCJuYW1lIiwibWF4SGVpZ2h0IiwiaXRlbSIsImlJbmRleCIsImlkIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9
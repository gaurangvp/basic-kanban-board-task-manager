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
            var boardId = e.target.attributes['data-id'].value;
            var item = {
              id: createGuidId(),
              title: val,
              priority: prio,
              chat: 0,
              attachment: 0,
              assignees: []
            };
            var newBoardData = boardData;
            newBoardData[boardId].items.push(item);
            setBoardData(newBoardData);
            setShowForm(false);
            e.target.value = '';
          } else {
            alert('Enter priority at end');
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
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon, {
            className: "w-9 h-9 text-gray-500 rounded-full p-1 bg-white ml-5 shadow-xl"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
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
              lineNumber: 100,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
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
              lineNumber: 109,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
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
              lineNumber: 118,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
              className: "border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center rounded-full",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.PlusIcon, {
                className: "w-5 h-5 text-gray-500"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
                        lineNumber: 155,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                        className: " p-3 flex justify-between items-center mb-2",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                          className: "text-2xl text-gray-600",
                          children: board.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 160,
                          columnNumber: 31
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.DotsVerticalIcon, {
                          className: "w-5 h-5 text-gray-500"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 163,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
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
                            lineNumber: 171,
                            columnNumber: 37
                          }, _this);
                        }), provided.placeholder]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 166,
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
                          lineNumber: 185,
                          columnNumber: 35
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 184,
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
                          lineNumber: 195,
                          columnNumber: 35
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.PlusCircleIcon, {
                          className: "w-5 h-5 text-gray-500"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 196,
                          columnNumber: 35
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 191,
                        columnNumber: 33
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 27
                    }, _this)
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 25
                  }, _this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 21
              }, _this)
            }, board.name, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTVmNjJjMTQ2ZDM3MTg2ZTZiYjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTYyxZQUFULEdBQXdCO0FBQ3RCLFNBQU8sdUNBQXVDQyxPQUF2QyxDQUErQyxPQUEvQyxFQUF3RCxVQUFTQyxDQUFULEVBQVk7QUFDekUsUUFBSUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBaEIsR0FBcUIsQ0FBN0I7QUFBQSxRQUFnQ0MsQ0FBQyxHQUFHSixDQUFDLElBQUksR0FBTCxHQUFXQyxDQUFYLEdBQWdCQSxDQUFDLEdBQUcsR0FBSixHQUFVLEdBQTlEO0FBQ0EsV0FBT0csQ0FBQyxDQUFDQyxRQUFGLENBQVcsRUFBWCxDQUFQO0FBQ0QsR0FITSxDQUFQO0FBSUQ7O0FBRWMsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIVCwrQ0FBUSxDQUFDLEtBQUQsQ0FETDtBQUFBLE1BQ3RCVSxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRUtYLCtDQUFRLENBQUNMLGtEQUFELENBRmI7QUFBQSxNQUV0QmlCLFNBRnNCO0FBQUEsTUFFWEMsWUFGVzs7QUFBQSxtQkFHR2IsK0NBQVEsQ0FBQyxLQUFELENBSFg7QUFBQSxNQUd0QmMsUUFIc0I7QUFBQSxNQUdaQyxXQUhZOztBQUFBLG1CQUlhZiwrQ0FBUSxDQUFDLENBQUQsQ0FKckI7QUFBQSxNQUl0QmdCLGFBSnNCO0FBQUEsTUFJUEMsZ0JBSk87O0FBTTdCbEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsY0FBcUI7QUFDbkJZLE1BQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDtBQUNGLEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTU8sU0FBUyxH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QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0lEOztHQS9MdUJoRDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgQ2hldnJvbkRvd25JY29uLFxuICBQbHVzSWNvbixcbiAgRG90c1ZlcnRpY2FsSWNvbixcbiAgUGx1c0NpcmNsZUljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCBDYXJkSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkSXRlbVwiO1xuaW1wb3J0IEJvYXJkRGF0YSBmcm9tIFwiLi4vZGF0YS9ib2FyZC1kYXRhLmpzb25cIjtcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVHdWlkSWQoKSB7XG4gIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcbiAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3JlYWR5LCBzZXRSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtib2FyZERhdGEsIHNldEJvYXJkRGF0YV0gPSB1c2VTdGF0ZShCb2FyZERhdGEpO1xuICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkQm9hcmQsIHNldFNlbGVjdGVkQm9hcmRdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBzZXRSZWFkeSh0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkRyYWdFbmQgPSAocmUpID0+IHtcbiAgICBpZiAoIXJlLmRlc3RpbmF0aW9uKSByZXR1cm47XG4gICAgbGV0IG5ld0JvYXJkRGF0YSA9IGJvYXJkRGF0YTtcbiAgICB2YXIgZHJhZ0l0ZW0gPVxuICAgICAgbmV3Qm9hcmREYXRhW3BhcnNlSW50KHJlLnNvdXJjZS5kcm9wcGFibGVJZCldLml0ZW1zW3JlLnNvdXJjZS5pbmRleF07XG4gICAgbmV3Qm9hcmREYXRhW3BhcnNlSW50KHJlLnNvdXJjZS5kcm9wcGFibGVJZCldLml0ZW1zLnNwbGljZShcbiAgICAgIHJlLnNvdXJjZS5pbmRleCxcbiAgICAgIDFcbiAgICApO1xuICAgIG5ld0JvYXJkRGF0YVtwYXJzZUludChyZS5kZXN0aW5hdGlvbi5kcm9wcGFibGVJZCldLml0ZW1zLnNwbGljZShcbiAgICAgIHJlLmRlc3RpbmF0aW9uLmluZGV4LFxuICAgICAgMCxcbiAgICAgIGRyYWdJdGVtXG4gICAgKTtcbiAgICBzZXRCb2FyZERhdGEobmV3Qm9hcmREYXRhKTtcbiAgfTtcblxuICBjb25zdCBvblRleHRBcmVhS2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpIC8vRW50ZXJcbiAgICB7XG4gICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0U2hvd0Zvcm0oZmFsc2UpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHByaW8gPSB2YWwubWF0Y2goL1xcZCskLyk7XG4gICAgICAgIGlmIChwcmlvKSB7XG4gICAgICAgICAgICBwcmlvPXBhcnNlSW50KHByaW8sIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IGJvYXJkSWQgPSBlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLWlkJ10udmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICAgICAgICBpZDogY3JlYXRlR3VpZElkKCksXG4gICAgICAgICAgICAgIHRpdGxlOiB2YWwsXG4gICAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvLFxuICAgICAgICAgICAgICBjaGF0OjAsXG4gICAgICAgICAgICAgIGF0dGFjaG1lbnQ6IDAsXG4gICAgICAgICAgICAgIGFzc2lnbmVlczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdCb2FyZERhdGEgPSBib2FyZERhdGE7XG4gICAgICAgICAgICBuZXdCb2FyZERhdGFbYm9hcmRJZF0uaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIHNldEJvYXJkRGF0YShuZXdCb2FyZERhdGEpO1xuICAgICAgICAgICAgc2V0U2hvd0Zvcm0oZmFsc2UpO1xuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgYWxlcnQoJ0VudGVyIHByaW9yaXR5IGF0IGVuZCcpXG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgZmxleCBmbGV4LWNvbCBoLXNjcmVlblwiPlxuICAgICAgICB7LyogQm9hcmQgaGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1pbml0aWFsIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTF4bCBmb250LWJvbGQgdGV4dC1ncmF5LTYwMFwiPkthbmJhbiBWaWV3PC9oND5cbiAgICAgICAgICAgIDxDaGV2cm9uRG93bkljb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy05IGgtOSB0ZXh0LWdyYXktNTAwIHJvdW5kZWQtZnVsbFxuICAgICAgICAgICAgcC0xIGJnLXdoaXRlIG1sLTUgc2hhZG93LXhsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVuLzc1LmpwZ1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzNlwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzZcIlxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgcm91bmRlZC1mdWxsIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNzYuanBnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjM2XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNlwiXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLWZ1bGwgXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi83OC5qcGdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzZcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjM2XCJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbCBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZGFzaGVkIGZsZXggaXRlbXMtY2VudGVyIHctOSBoLTkgYm9yZGVyLWdyYXktNTAwIGp1c3RpZnktY2VudGVyXG4gICAgICAgICAgICAgICAgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQbHVzSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS01MDBcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEJvYXJkIGNvbHVtbnMgKi99XG4gICAgICAgIHtyZWFkeSAmJiAoXG4gICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e29uRHJhZ0VuZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTUgbXktNVwiPlxuICAgICAgICAgICAgICB7Ym9hcmREYXRhLm1hcCgoYm9hcmQsIGJJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9hcmQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9e2JJbmRleC50b1N0cmluZygpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BiZy1ncmF5LTEwMCByb3VuZGVkLW1kIHNoYWRvdy1tZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXggZmxleC1jb2wgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzbmFwc2hvdC5pc0RyYWdnaW5nT3ZlciAmJiBcImJnLWdyZWVuLTEwMFwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMSBiZy1ncmFkaWVudC10by1yIGZyb20tcGluay03MDAgdG8tcmVkLTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhYnNvbHV0ZSBpbnNldC14LTAgdG9wLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIiBwLTMgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvYXJkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG90c1ZlcnRpY2FsSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktYXV0byBvdmVyZmxvdy14LWhpZGRlbiBoLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4SGVpZ2h0OidjYWxjKDEwMHZoIC0gMjkwcHgpJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvYXJkLml0ZW1zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQuaXRlbXMubWFwKChpdGVtLCBpSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2lJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Zvcm0gJiYgc2VsZWN0ZWRCb2FyZCA9PT0gYkluZGV4ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJib3JkZXItZ3JheS0zMDAgcm91bmRlZCBmb2N1czpyaW5nLXB1cnBsZS00MDAgdy1mdWxsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M30gcGxhY2Vob2xkZXI9XCJUYXNrIGluZm9cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPXtiSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gb25UZXh0QXJlYUtleVByZXNzKGUpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXktMyBzcGFjZS14LTIgdGV4dC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNlbGVjdGVkQm9hcmQoYkluZGV4KTsgc2V0U2hvd0Zvcm0odHJ1ZSk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFkZCB0YXNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxheW91dCIsIkltYWdlIiwiQ2hldnJvbkRvd25JY29uIiwiUGx1c0ljb24iLCJEb3RzVmVydGljYWxJY29uIiwiUGx1c0NpcmNsZUljb24iLCJDYXJkSXRlbSIsIkJvYXJkRGF0YSIsIkRyYWdEcm9wQ29udGV4dCIsIkRyYWdnYWJsZSIsIkRyb3BwYWJsZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlR3VpZElkIiwicmVwbGFjZSIsImMiLCJyIiwiTWF0aCIsInJhbmRvbSIsInYiLCJ0b1N0cmluZyIsIkhvbWUiLCJyZWFkeSIsInNldFJlYWR5IiwiYm9hcmREYXRhIiwic2V0Qm9hcmREYXRhIiwic2hvd0Zvcm0iLCJzZXRTaG93Rm9ybSIsInNlbGVjdGVkQm9hcmQiLCJzZXRTZWxlY3RlZEJvYXJkIiwib25EcmFnRW5kIiwicmUiLCJkZXN0aW5hdGlvbiIsIm5ld0JvYXJkRGF0YSIsImRyYWdJdGVtIiwicGFyc2VJbnQiLCJzb3VyY2UiLCJkcm9wcGFibGVJZCIsIml0ZW1zIiwiaW5kZXgiLCJzcGxpY2UiLCJvblRleHRBcmVhS2V5UHJlc3MiLCJlIiwia2V5Q29kZSIsInZhbCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwicHJpbyIsIm1hdGNoIiwiYm9hcmRJZCIsImF0dHJpYnV0ZXMiLCJpdGVtIiwiaWQiLCJ0aXRsZSIsInByaW9yaXR5IiwiY2hhdCIsImF0dGFjaG1lbnQiLCJhc3NpZ25lZXMiLCJwdXNoIiwiYWxlcnQiLCJtYXAiLCJib2FyZCIsImJJbmRleCIsInByb3ZpZGVkIiwic25hcHNob3QiLCJkcm9wcGFibGVQcm9wcyIsImlubmVyUmVmIiwiaXNEcmFnZ2luZ092ZXIiLCJuYW1lIiwibWF4SGVpZ2h0IiwiaUluZGV4IiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9
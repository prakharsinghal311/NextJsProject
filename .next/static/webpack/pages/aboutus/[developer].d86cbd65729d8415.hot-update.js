"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/aboutus/[developer]",{

/***/ "./pages/aboutus/[developer].js":
/*!**************************************!*\
  !*** ./pages/aboutus/[developer].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// our-domain.com/aboutus/developer\nfunction AboutUsPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const developerId = router.query.developer;\n    const details = [\n        {\n            id: 1,\n            name: \"Yash\",\n            role: \"Senior Developer\"\n        },\n        {\n            id: 2,\n            name: \"Vaibhav\",\n            role: \"Backend Developer\"\n        },\n        {\n            id: 3,\n            name: \"Suresh\",\n            role: \"Frontend Developer\"\n        }\n    ];\n    let developerName;\n    let developerRole;\n    // details.forEach((person) => {\n    //   if (developerId == person.id) {\n    //     developerName = person.name;\n    //     developerRole = person.role;\n    //   } else if (developerId != person.id) {\n    //     developerName = \"developer\";\n    //     developerRole = \"doesn't exist\";\n    //   }\n    // });\n    details.find((i)=>i.id === developerId ? {\n            developerName: i.name,\n            developerRole: i.role\n        } : {\n            developerName: \"developer\",\n            developerRole: \"doesn't exist\"\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: developerName\n            }, void 0, false, {\n                fileName: \"E:\\\\other than college\\\\job\\\\sharpenerProjects\\\\codingPractice\\\\NextJsProject\\\\pages\\\\aboutus\\\\[developer].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: developerRole\n            }, void 0, false, {\n                fileName: \"E:\\\\other than college\\\\job\\\\sharpenerProjects\\\\codingPractice\\\\NextJsProject\\\\pages\\\\aboutus\\\\[developer].js\",\n                lineNumber: 38,\n                columnNumber: 37\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AboutUsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = AboutUsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutUsPage);\nvar _c;\n$RefreshReg$(_c, \"AboutUsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dHVzL1tkZXZlbG9wZXJdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFeEMsbUNBQW1DO0FBRW5DLFNBQVNDOztJQUNQLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixNQUFNRyxjQUFjRCxPQUFPRSxNQUFNQztJQUVqQyxNQUFNQyxVQUFVO1FBQ2Q7WUFBRUMsSUFBSTtZQUFHQyxNQUFNO1lBQVFDLE1BQU07UUFBbUI7UUFFaEQ7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQVdDLE1BQU07UUFBb0I7UUFFcEQ7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQVVDLE1BQU07UUFBcUI7S0FDckQ7SUFFRCxJQUFJQztJQUNKLElBQUlDO0lBRUosZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLDJDQUEyQztJQUMzQyxtQ0FBbUM7SUFDbkMsdUNBQXVDO0lBQ3ZDLE1BQU07SUFDTixNQUFNO0lBRU5MLFFBQVFNLEtBQUssQ0FBQ0MsSUFDWkEsRUFBRU4sT0FBT0osY0FDTDtZQUFFTyxlQUFlRyxFQUFFTDtZQUFNRyxlQUFlRSxFQUFFSjtRQUFLLElBQy9DO1lBQUVDLGVBQWU7WUFBYUMsZUFBZTtRQUFnQjtJQUVuRSxxQkFDRTs7MEJBQ0UsOERBQUNHOzBCQUFJSjs7Ozs7O1lBQW1COzBCQUFNLDhEQUFDSTswQkFBSUg7Ozs7Ozs7O0FBR3pDO0dBcENTVjs7UUFDUUQsa0RBQVNBOzs7S0FEakJDO0FBc0NULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fib3V0dXMvW2RldmVsb3Blcl0uanM/MTA1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIG91ci1kb21haW4uY29tL2Fib3V0dXMvZGV2ZWxvcGVyXHJcblxyXG5mdW5jdGlvbiBBYm91dFVzUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgZGV2ZWxvcGVySWQgPSByb3V0ZXIucXVlcnkuZGV2ZWxvcGVyO1xyXG5cclxuICBjb25zdCBkZXRhaWxzID0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogXCJZYXNoXCIsIHJvbGU6IFwiU2VuaW9yIERldmVsb3BlclwiIH0sXHJcblxyXG4gICAgeyBpZDogMiwgbmFtZTogXCJWYWliaGF2XCIsIHJvbGU6IFwiQmFja2VuZCBEZXZlbG9wZXJcIiB9LFxyXG5cclxuICAgIHsgaWQ6IDMsIG5hbWU6IFwiU3VyZXNoXCIsIHJvbGU6IFwiRnJvbnRlbmQgRGV2ZWxvcGVyXCIgfSxcclxuICBdO1xyXG5cclxuICBsZXQgZGV2ZWxvcGVyTmFtZTtcclxuICBsZXQgZGV2ZWxvcGVyUm9sZTtcclxuXHJcbiAgLy8gZGV0YWlscy5mb3JFYWNoKChwZXJzb24pID0+IHtcclxuICAvLyAgIGlmIChkZXZlbG9wZXJJZCA9PSBwZXJzb24uaWQpIHtcclxuICAvLyAgICAgZGV2ZWxvcGVyTmFtZSA9IHBlcnNvbi5uYW1lO1xyXG4gIC8vICAgICBkZXZlbG9wZXJSb2xlID0gcGVyc29uLnJvbGU7XHJcbiAgLy8gICB9IGVsc2UgaWYgKGRldmVsb3BlcklkICE9IHBlcnNvbi5pZCkge1xyXG4gIC8vICAgICBkZXZlbG9wZXJOYW1lID0gXCJkZXZlbG9wZXJcIjtcclxuICAvLyAgICAgZGV2ZWxvcGVyUm9sZSA9IFwiZG9lc24ndCBleGlzdFwiO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0pO1xyXG5cclxuICBkZXRhaWxzLmZpbmQoKGkpID0+XHJcbiAgICBpLmlkID09PSBkZXZlbG9wZXJJZFxyXG4gICAgICA/IHsgZGV2ZWxvcGVyTmFtZTogaS5uYW1lLCBkZXZlbG9wZXJSb2xlOiBpLnJvbGUgfVxyXG4gICAgICA6IHsgZGV2ZWxvcGVyTmFtZTogXCJkZXZlbG9wZXJcIiwgZGV2ZWxvcGVyUm9sZTogXCJkb2Vzbid0IGV4aXN0XCIgfVxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoND57ZGV2ZWxvcGVyTmFtZX08L2g0PiZuYnNwOzxoND57ZGV2ZWxvcGVyUm9sZX08L2g0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRVc1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJBYm91dFVzUGFnZSIsInJvdXRlciIsImRldmVsb3BlcklkIiwicXVlcnkiLCJkZXZlbG9wZXIiLCJkZXRhaWxzIiwiaWQiLCJuYW1lIiwicm9sZSIsImRldmVsb3Blck5hbWUiLCJkZXZlbG9wZXJSb2xlIiwiZmluZCIsImkiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/aboutus/[developer].js\n"));

/***/ })

});
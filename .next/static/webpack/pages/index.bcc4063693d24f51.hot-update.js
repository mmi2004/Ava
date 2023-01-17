"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [apiOutput, setApiOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isGenerating, setIsGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const callGenerateEndpoint = async ()=>{\n        setIsGenerating(true);\n        console.log(\"Calling OpenAI...\");\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                userInput\n            })\n        });\n        const data = await response.json();\n        const { output  } = data;\n        console.log(\"OpenAI replied...\", output.text);\n        setApiOutput(\"\".concat(output.text));\n        setIsGenerating(false);\n    };\n    const onUserChangedText = (event)=>{\n        console.log(event.target.value);\n        setUserInput(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto grid grid-cols-2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"absolute\",\n                            viewBox: \"0 0 200 200\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.path, {\n                                opacity: 1,\n                                animate: {\n                                    d: [\n                                        \"M26.6,-40.4C37.2,-34.6,50.5,-31.8,58.1,-23.9C65.7,-16.1,67.7,-3,63.9,7.8C60.2,18.6,50.7,27.2,43,38.9C35.4,50.7,29.5,65.6,19.7,69.7C9.8,73.9,-4,67.3,-18,62.6C-32,57.8,-46.1,55,-59.1,47.2C-72,39.4,-83.7,26.6,-84.6,12.9C-85.4,-0.8,-75.5,-15.4,-66.6,-28.6C-57.8,-41.9,-50,-53.9,-39.1,-59.6C-28.2,-65.3,-14.1,-64.8,-3.1,-60C8,-55.3,16,-46.3,26.6,-40.4Z\",\n                                        \"M35.1,-60.6C41.8,-50.3,40.9,-34.3,47.5,-21.3C54,-8.3,67.9,1.7,67,9.8C66.2,18,50.6,24.2,40.2,33C29.7,41.8,24.4,53.2,15.8,57.3C7.3,61.3,-4.4,58,-18.6,56.8C-32.9,55.7,-49.7,56.7,-56.2,48.9C-62.6,41.1,-58.7,24.5,-56.3,10.9C-53.9,-2.7,-52.9,-13.2,-48.2,-21.3C-43.4,-29.4,-34.7,-35,-26.1,-44.4C-17.4,-53.7,-8.7,-66.8,2.7,-71.1C14.2,-75.3,28.4,-70.8,35.1,-60.6Z\",\n                                        \"M44.6,-65.1C54.4,-63.2,56.4,-44.9,56.8,-30C57.3,-15.2,56.1,-3.6,53.2,6.8C50.4,17.1,45.7,26.4,38.5,31.7C31.3,37.1,21.5,38.6,11.4,43.7C1.3,48.9,-9.1,57.8,-19.7,58.6C-30.2,59.3,-40.9,52,-45.8,42.1C-50.7,32.1,-49.9,19.6,-49.1,8.5C-48.4,-2.5,-47.9,-12,-43.8,-19.7C-39.8,-27.3,-32.3,-32.9,-24.4,-35.7C-16.5,-38.5,-8.3,-38.4,4.6,-45.5C17.4,-52.6,34.9,-67,44.6,-65.1Z\"\n                                    ]\n                                },\n                                transition: {\n                                    ease: \"easeOut\",\n                                    duration: 3,\n                                    repeat: Infinity,\n                                    repeatType: \"reverse\"\n                                },\n                                fill: \"#FF5959\",\n                                d: \"M26.6,-40.4C37.2,-34.6,50.5,-31.8,58.1,-23.9C65.7,-16.1,67.7,-3,63.9,7.8C60.2,18.6,50.7,27.2,43,38.9C35.4,50.7,29.5,65.6,19.7,69.7C9.8,73.9,-4,67.3,-18,62.6C-32,57.8,-46.1,55,-59.1,47.2C-72,39.4,-83.7,26.6,-84.6,12.9C-85.4,-0.8,-75.5,-15.4,-66.6,-28.6C-57.8,-41.9,-50,-53.9,-39.1,-59.6C-28.2,-65.3,-14.1,-64.8,-3.1,-60C8,-55.3,16,-46.3,26.6,-40.4Z\",\n                                transform: \"translate(100 100)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/baam/Documents/Development/Ava-devbuild/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/baam/Documents/Development/Ava-devbuild/pages/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"absolute\",\n                            viewBox: \"0 0 200 200\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.path, {\n                                opacity: 0.7,\n                                animate: {\n                                    d: [\n                                        \"M27.9,-49C35.4,-38.7,40,-29.5,48,-19.7C56,-9.8,67.3,0.7,66.5,9.9C65.7,19.1,52.9,26.9,44.4,40.7C35.9,54.4,31.7,74.2,21.4,80.8C11.1,87.5,-5.4,81.1,-15.2,69.9C-24.9,58.7,-28,42.8,-37.7,32.3C-47.5,21.8,-64.1,16.7,-65.1,9.4C-66.1,2.1,-51.6,-7.4,-44.7,-19.5C-37.8,-31.7,-38.5,-46.4,-32.3,-57.3C-26.2,-68.2,-13.1,-75.4,-1.4,-73.2C10.2,-71,20.5,-59.4,27.9,-49Z\",\n                                        \"M32.9,-55.6C39.1,-47.2,38.2,-32.1,40.7,-20.4C43.1,-8.7,49,-0.4,50.8,9.3C52.5,19.1,50.2,30.3,45.6,44.3C40.9,58.2,33.9,74.8,24,74.4C14,74.1,1.2,56.7,-8.7,46.2C-18.5,35.6,-25.5,31.9,-36.5,27.2C-47.4,22.5,-62.3,16.8,-66.6,7.7C-70.9,-1.5,-64.6,-14,-56.5,-23.3C-48.4,-32.5,-38.4,-38.4,-28.7,-45.2C-19,-52,-9.5,-59.7,1.9,-62.7C13.3,-65.7,26.7,-64,32.9,-55.6Z\",\n                                        \"M43.9,-72.2C55,-61.3,60.6,-45.8,67,-30.9C73.3,-16,80.4,-1.7,76.9,9.9C73.4,21.5,59.4,30.4,49.3,43.6C39.2,56.8,33.1,74.3,23.2,75.6C13.3,76.9,-0.3,62.1,-15.5,56.1C-30.8,50.2,-47.7,53.1,-58.6,47.1C-69.5,41.2,-74.4,26.3,-72.2,13C-70,-0.3,-60.8,-11.9,-54.9,-25.1C-48.9,-38.2,-46.1,-52.9,-37.5,-64.9C-28.9,-76.9,-14.5,-86.4,1,-87.9C16.4,-89.5,32.9,-83.1,43.9,-72.2Z\"\n                                    ]\n                                },\n                                transition: {\n                                    ease: \"easeOut\",\n                                    duration: 3,\n                                    repeat: Infinity,\n                                    repeatType: \"reverse\"\n                                },\n                                fill: \"#68DAFE\",\n                                d: \"M26.6,-40.4C37.2,-34.6,50.5,-31.8,58.1,-23.9C65.7,-16.1,67.7,-3,63.9,7.8C60.2,18.6,50.7,27.2,43,38.9C35.4,50.7,29.5,65.6,19.7,69.7C9.8,73.9,-4,67.3,-18,62.6C-32,57.8,-46.1,55,-59.1,47.2C-72,39.4,-83.7,26.6,-84.6,12.9C-85.4,-0.8,-75.5,-15.4,-66.6,-28.6C-57.8,-41.9,-50,-53.9,-39.1,-59.6C-28.2,-65.3,-14.1,-64.8,-3.1,-60C8,-55.3,16,-46.3,26.6,-40.4Z\",\n                                transform: \"translate(100 100)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/baam/Documents/Development/Ava-devbuild/pages/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/baam/Documents/Development/Ava-devbuild/pages/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"absolute\",\n                            viewBox: \"0 0 200 200\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.path, {\n                                opacity: 0.7,\n                                animate: {\n                                    d: [\n                                        \"M42.2,-64.2C48.9,-53.3,44.4,-33.1,50.9,-15.9C57.4,1.4,74.9,15.7,74,25.7C73,35.7,53.6,41.3,38.2,52.3C22.7,63.2,11.4,79.4,-2.7,83.1C-16.7,86.8,-33.4,77.9,-47.4,66.5C-61.4,55.1,-72.7,41.2,-72.9,26.9C-73.2,12.6,-62.4,-2.1,-56.8,-18.1C-51.1,-34.1,-50.5,-51.4,-41.9,-61.6C-33.2,-71.8,-16.6,-74.9,0.6,-75.7C17.8,-76.5,35.6,-75,42.2,-64.2Z\",\n                                        \"M43.7,-58.1C58.8,-49.2,74.7,-39.3,76,-26.7C77.2,-14.1,63.9,1.1,57.9,18.6C52,36.1,53.4,55.8,45,64.7C36.6,73.6,18.3,71.5,0.2,71.2C-17.8,70.9,-35.6,72.2,-44.3,63.5C-53,54.7,-52.6,35.8,-58.3,18.8C-64,1.8,-75.9,-13.4,-74.2,-25.9C-72.6,-38.4,-57.4,-48.2,-42.8,-57.3C-28.1,-66.4,-14.1,-74.8,0.1,-74.9C14.3,-75.1,28.6,-67.1,43.7,-58.1Z\",\n                                        \"M40.5,-48.7C55.6,-44.7,73.3,-37.1,74.6,-25.9C75.9,-14.7,60.8,0.1,53.4,15.6C46,31.2,46.2,47.5,38.5,61.2C30.9,75,15.5,86.1,-0.7,87.1C-16.9,88.1,-33.7,78.8,-46.8,66.9C-59.9,54.9,-69.2,40.2,-74,24.3C-78.9,8.4,-79.3,-8.8,-72.3,-21.4C-65.4,-34.1,-51,-42.3,-37.7,-46.8C-24.4,-51.4,-12.2,-52.4,0.2,-52.7C12.7,-53,25.3,-52.6,40.5,-48.7Z\"\n                                    ]\n                                },\n                                transition: {\n                                    ease: \"easeOut\",\n                                    duration: 3,\n                                    repeat: Infinity,\n                                    repeatType: \"reverse\"\n                                },\n                                fill: \"#FCFF80\",\n                                d: \"M26.6,-40.4C37.2,-34.6,50.5,-31.8,58.1,-23.9C65.7,-16.1,67.7,-3,63.9,7.8C60.2,18.6,50.7,27.2,43,38.9C35.4,50.7,29.5,65.6,19.7,69.7C9.8,73.9,-4,67.3,-18,62.6C-32,57.8,-46.1,55,-59.1,47.2C-72,39.4,-83.7,26.6,-84.6,12.9C-85.4,-0.8,-75.5,-15.4,-66.6,-28.6C-57.8,-41.9,-50,-53.9,-39.1,-59.6C-28.2,-65.3,-14.1,-64.8,-3.1,-60C8,-55.3,16,-46.3,26.6,-40.4Z\",\n                                transform: \"translate(100 100)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/baam/Documents/Development/Ava-devbuild/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/baam/Documents/Development/Ava-devbuild/pages/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"../ava.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/baam/Documents/Development/Ava-devbuild/pages/index.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"min-h-screen\"\n                        }, void 0, false, {\n                            fileName: \"/Users/baam/Documents/Development/Ava-devbuild/pages/index.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/baam/Documents/Development/Ava-devbuild/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/baam/Documents/Development/Ava-devbuild/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/baam/Documents/Development/Ava-devbuild/pages/index.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/baam/Documents/Development/Ava-devbuild/pages/index.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"zURHhZF+x6f0bxSt0B3dBbYqFAU=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQWlDO0FBQ0o7QUFDRTtBQUNLO0FBRXBDLE1BQU1JLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXRELE1BQU1XLHVCQUF1QixVQUFZO1FBQ3ZDRCxnQkFBZ0IsSUFBSTtRQUVwQkUsUUFBUUMsR0FBRyxDQUFDO1FBQ1osTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGlCQUFpQjtZQUM1Q0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVmO1lBQVU7UUFDbkM7UUFFQSxNQUFNZ0IsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO1FBQ2hDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO1FBQ25CVCxRQUFRQyxHQUFHLENBQUMscUJBQXFCVSxPQUFPQyxJQUFJO1FBRTVDaEIsYUFBYSxHQUFlLE9BQVplLE9BQU9DLElBQUk7UUFDM0JkLGdCQUFnQixLQUFLO0lBQ3ZCO0lBQ0EsTUFBTWUsb0JBQW9CLENBQUNDLFFBQVU7UUFDbkNkLFFBQVFDLEdBQUcsQ0FBQ2EsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO1FBQzlCdEIsYUFBYW9CLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNqQztJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFHYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBSUQsV0FBVTs0QkFBV0UsU0FBUTs0QkFBY0MsT0FBTTtzQ0FDcEQsNEVBQUM5QixzREFBVztnQ0FFVmdDLFNBQVM7Z0NBQ1RDLFNBQVM7b0NBQUNDLEdBQUU7d0NBQUM7d0NBQ2I7d0NBQ0E7cUNBQTBXO2dDQUFBO2dDQUMxV0MsWUFBWTtvQ0FDVkMsTUFBSztvQ0FDTEMsVUFBVTtvQ0FDVkMsUUFBUUM7b0NBQ1JDLFlBQVk7Z0NBQVM7Z0NBQ3pCQyxNQUFLO2dDQUFVUCxHQUFFO2dDQUE4VlEsV0FBVTs7Ozs7Ozs7Ozs7c0NBSTNYLDhEQUFDZDs0QkFBSUQsV0FBVTs0QkFBV0UsU0FBUTs0QkFBY0MsT0FBTTtzQ0FDcEQsNEVBQUM5QixzREFBVztnQ0FDVmdDLFNBQVM7Z0NBQ1RDLFNBQVM7b0NBQ1BDLEdBQUU7d0NBQ0E7d0NBQ0E7d0NBQ0E7cUNBQ0Q7Z0NBQUE7Z0NBQ0hDLFlBQVk7b0NBQ1ZDLE1BQUs7b0NBQ0xDLFVBQVU7b0NBQ1ZDLFFBQVFDO29DQUNSQyxZQUFZO2dDQUFTO2dDQUN6QkMsTUFBSztnQ0FBVVAsR0FBRTtnQ0FBOFZRLFdBQVU7Ozs7Ozs7Ozs7O3NDQUUzWCw4REFBQ2Q7NEJBQUlELFdBQVU7NEJBQVdFLFNBQVE7NEJBQWNDLE9BQU07c0NBQ3BELDRFQUFDOUIsc0RBQVc7Z0NBRVZnQyxTQUFTO2dDQUNUQyxTQUFTO29DQUNQQyxHQUFFO3dDQUNBO3dDQUNBO3dDQUNBO3FDQUNEO2dDQUFBO2dDQUNIQyxZQUFZO29DQUNWQyxNQUFLO29DQUNMQyxVQUFVO29DQUNWQyxRQUFRQztvQ0FDUkMsWUFBWTtnQ0FBUztnQ0FDekJDLE1BQUs7Z0NBQVVQLEdBQUU7Z0NBQThWUSxXQUFVOzs7Ozs7Ozs7OztzQ0FFM1gsOERBQUNDOzRCQUFJQyxLQUFJOzs7Ozs7c0NBQ1QsOERBQUNsQjs0QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUYzQjtHQTFLTTFCO0tBQUFBO0FBNEtOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthcGlPdXRwdXQsIHNldEFwaU91dHB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2lzR2VuZXJhdGluZywgc2V0SXNHZW5lcmF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGNhbGxHZW5lcmF0ZUVuZHBvaW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzR2VuZXJhdGluZyh0cnVlKTtcbiAgXG4gICAgY29uc29sZS5sb2coXCJDYWxsaW5nIE9wZW5BSS4uLlwiKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2VuZXJhdGUnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJJbnB1dCB9KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgeyBvdXRwdXQgfSA9IGRhdGE7XG4gICAgY29uc29sZS5sb2coXCJPcGVuQUkgcmVwbGllZC4uLlwiLCBvdXRwdXQudGV4dClcblxuICAgIHNldEFwaU91dHB1dChgJHtvdXRwdXQudGV4dH1gKTtcbiAgICBzZXRJc0dlbmVyYXRpbmcoZmFsc2UpO1xuICB9XG4gIGNvbnN0IG9uVXNlckNoYW5nZWRUZXh0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRVc2VySW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbXgtYXV0byBncmlkIGdyaWQtY29scy0yJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBwLTUnPlxuICAgICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPSd0ZXh0LTV4bCBteS01Jz5NZWV0IEF2YSE8L2gxPiAqL31cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2Fic29sdXRlJyB2aWV3Qm94PVwiMCAwIDIwMCAyMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgIDxtb3Rpb24ucGF0aFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG9wYWNpdHk9ezF9XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17e2Q6W1wiTTI2LjYsLTQwLjRDMzcuMiwtMzQuNiw1MC41LC0zMS44LDU4LjEsLTIzLjlDNjUuNywtMTYuMSw2Ny43LC0zLDYzLjksNy44QzYwLjIsMTguNiw1MC43LDI3LjIsNDMsMzguOUMzNS40LDUwLjcsMjkuNSw2NS42LDE5LjcsNjkuN0M5LjgsNzMuOSwtNCw2Ny4zLC0xOCw2Mi42Qy0zMiw1Ny44LC00Ni4xLDU1LC01OS4xLDQ3LjJDLTcyLDM5LjQsLTgzLjcsMjYuNiwtODQuNiwxMi45Qy04NS40LC0wLjgsLTc1LjUsLTE1LjQsLTY2LjYsLTI4LjZDLTU3LjgsLTQxLjksLTUwLC01My45LC0zOS4xLC01OS42Qy0yOC4yLC02NS4zLC0xNC4xLC02NC44LC0zLjEsLTYwQzgsLTU1LjMsMTYsLTQ2LjMsMjYuNiwtNDAuNFpcIixcbiAgICAgICAgICAgICAgICBcIk0zNS4xLC02MC42QzQxLjgsLTUwLjMsNDAuOSwtMzQuMyw0Ny41LC0yMS4zQzU0LC04LjMsNjcuOSwxLjcsNjcsOS44QzY2LjIsMTgsNTAuNiwyNC4yLDQwLjIsMzNDMjkuNyw0MS44LDI0LjQsNTMuMiwxNS44LDU3LjNDNy4zLDYxLjMsLTQuNCw1OCwtMTguNiw1Ni44Qy0zMi45LDU1LjcsLTQ5LjcsNTYuNywtNTYuMiw0OC45Qy02Mi42LDQxLjEsLTU4LjcsMjQuNSwtNTYuMywxMC45Qy01My45LC0yLjcsLTUyLjksLTEzLjIsLTQ4LjIsLTIxLjNDLTQzLjQsLTI5LjQsLTM0LjcsLTM1LC0yNi4xLC00NC40Qy0xNy40LC01My43LC04LjcsLTY2LjgsMi43LC03MS4xQzE0LjIsLTc1LjMsMjguNCwtNzAuOCwzNS4xLC02MC42WlwiLFxuICAgICAgICAgICAgICAgIFwiTTQ0LjYsLTY1LjFDNTQuNCwtNjMuMiw1Ni40LC00NC45LDU2LjgsLTMwQzU3LjMsLTE1LjIsNTYuMSwtMy42LDUzLjIsNi44QzUwLjQsMTcuMSw0NS43LDI2LjQsMzguNSwzMS43QzMxLjMsMzcuMSwyMS41LDM4LjYsMTEuNCw0My43QzEuMyw0OC45LC05LjEsNTcuOCwtMTkuNyw1OC42Qy0zMC4yLDU5LjMsLTQwLjksNTIsLTQ1LjgsNDIuMUMtNTAuNywzMi4xLC00OS45LDE5LjYsLTQ5LjEsOC41Qy00OC40LC0yLjUsLTQ3LjksLTEyLC00My44LC0xOS43Qy0zOS44LC0yNy4zLC0zMi4zLC0zMi45LC0yNC40LC0zNS43Qy0xNi41LC0zOC41LC04LjMsLTM4LjQsNC42LC00NS41QzE3LjQsLTUyLjYsMzQuOSwtNjcsNDQuNiwtNjUuMVpcIl19fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgIGVhc2U6J2Vhc2VPdXQnLCBcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICAgICAgICAgIHJlcGVhdFR5cGU6ICdyZXZlcnNlJ319XG4gICAgICAgICAgICAgIGZpbGw9XCIjRkY1OTU5XCIgZD1cIk0yNi42LC00MC40QzM3LjIsLTM0LjYsNTAuNSwtMzEuOCw1OC4xLC0yMy45QzY1LjcsLTE2LjEsNjcuNywtMyw2My45LDcuOEM2MC4yLDE4LjYsNTAuNywyNy4yLDQzLDM4LjlDMzUuNCw1MC43LDI5LjUsNjUuNiwxOS43LDY5LjdDOS44LDczLjksLTQsNjcuMywtMTgsNjIuNkMtMzIsNTcuOCwtNDYuMSw1NSwtNTkuMSw0Ny4yQy03MiwzOS40LC04My43LDI2LjYsLTg0LjYsMTIuOUMtODUuNCwtMC44LC03NS41LC0xNS40LC02Ni42LC0yOC42Qy01Ny44LC00MS45LC01MCwtNTMuOSwtMzkuMSwtNTkuNkMtMjguMiwtNjUuMywtMTQuMSwtNjQuOCwtMy4xLC02MEM4LC01NS4zLDE2LC00Ni4zLDI2LjYsLTQwLjRaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwMCAxMDApXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdhYnNvbHV0ZScgdmlld0JveD1cIjAgMCAyMDAgMjAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgICAgICAgICBvcGFjaXR5PXswLjd9XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgZDpbXG4gICAgICAgICAgICAgICAgICAgIFwiTTI3LjksLTQ5QzM1LjQsLTM4LjcsNDAsLTI5LjUsNDgsLTE5LjdDNTYsLTkuOCw2Ny4zLDAuNyw2Ni41LDkuOUM2NS43LDE5LjEsNTIuOSwyNi45LDQ0LjQsNDAuN0MzNS45LDU0LjQsMzEuNyw3NC4yLDIxLjQsODAuOEMxMS4xLDg3LjUsLTUuNCw4MS4xLC0xNS4yLDY5LjlDLTI0LjksNTguNywtMjgsNDIuOCwtMzcuNywzMi4zQy00Ny41LDIxLjgsLTY0LjEsMTYuNywtNjUuMSw5LjRDLTY2LjEsMi4xLC01MS42LC03LjQsLTQ0LjcsLTE5LjVDLTM3LjgsLTMxLjcsLTM4LjUsLTQ2LjQsLTMyLjMsLTU3LjNDLTI2LjIsLTY4LjIsLTEzLjEsLTc1LjQsLTEuNCwtNzMuMkMxMC4yLC03MSwyMC41LC01OS40LDI3LjksLTQ5WlwiLFxuICAgICAgICAgICAgICAgICAgICBcIk0zMi45LC01NS42QzM5LjEsLTQ3LjIsMzguMiwtMzIuMSw0MC43LC0yMC40QzQzLjEsLTguNyw0OSwtMC40LDUwLjgsOS4zQzUyLjUsMTkuMSw1MC4yLDMwLjMsNDUuNiw0NC4zQzQwLjksNTguMiwzMy45LDc0LjgsMjQsNzQuNEMxNCw3NC4xLDEuMiw1Ni43LC04LjcsNDYuMkMtMTguNSwzNS42LC0yNS41LDMxLjksLTM2LjUsMjcuMkMtNDcuNCwyMi41LC02Mi4zLDE2LjgsLTY2LjYsNy43Qy03MC45LC0xLjUsLTY0LjYsLTE0LC01Ni41LC0yMy4zQy00OC40LC0zMi41LC0zOC40LC0zOC40LC0yOC43LC00NS4yQy0xOSwtNTIsLTkuNSwtNTkuNywxLjksLTYyLjdDMTMuMywtNjUuNywyNi43LC02NCwzMi45LC01NS42WlwiLFxuICAgICAgICAgICAgICAgICAgICBcIk00My45LC03Mi4yQzU1LC02MS4zLDYwLjYsLTQ1LjgsNjcsLTMwLjlDNzMuMywtMTYsODAuNCwtMS43LDc2LjksOS45QzczLjQsMjEuNSw1OS40LDMwLjQsNDkuMyw0My42QzM5LjIsNTYuOCwzMy4xLDc0LjMsMjMuMiw3NS42QzEzLjMsNzYuOSwtMC4zLDYyLjEsLTE1LjUsNTYuMUMtMzAuOCw1MC4yLC00Ny43LDUzLjEsLTU4LjYsNDcuMUMtNjkuNSw0MS4yLC03NC40LDI2LjMsLTcyLjIsMTNDLTcwLC0wLjMsLTYwLjgsLTExLjksLTU0LjksLTI1LjFDLTQ4LjksLTM4LjIsLTQ2LjEsLTUyLjksLTM3LjUsLTY0LjlDLTI4LjksLTc2LjksLTE0LjUsLTg2LjQsMSwtODcuOUMxNi40LC04OS41LDMyLjksLTgzLjEsNDMuOSwtNzIuMlpcIlxuICAgICAgICAgICAgICAgICAgXX19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgZWFzZTonZWFzZU91dCcsIFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMsXG4gICAgICAgICAgICAgICAgICByZXBlYXQ6IEluZmluaXR5LFxuICAgICAgICAgICAgICAgICAgcmVwZWF0VHlwZTogJ3JldmVyc2UnfX1cbiAgICAgICAgICAgICAgZmlsbD1cIiM2OERBRkVcIiBkPVwiTTI2LjYsLTQwLjRDMzcuMiwtMzQuNiw1MC41LC0zMS44LDU4LjEsLTIzLjlDNjUuNywtMTYuMSw2Ny43LC0zLDYzLjksNy44QzYwLjIsMTguNiw1MC43LDI3LjIsNDMsMzguOUMzNS40LDUwLjcsMjkuNSw2NS42LDE5LjcsNjkuN0M5LjgsNzMuOSwtNCw2Ny4zLC0xOCw2Mi42Qy0zMiw1Ny44LC00Ni4xLDU1LC01OS4xLDQ3LjJDLTcyLDM5LjQsLTgzLjcsMjYuNiwtODQuNiwxMi45Qy04NS40LC0wLjgsLTc1LjUsLTE1LjQsLTY2LjYsLTI4LjZDLTU3LjgsLTQxLjksLTUwLC01My45LC0zOS4xLC01OS42Qy0yOC4yLC02NS4zLC0xNC4xLC02NC44LC0zLjEsLTYwQzgsLTU1LjMsMTYsLTQ2LjMsMjYuNiwtNDAuNFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAwIDEwMClcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nYWJzb2x1dGUnIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5wYXRoXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG9wYWNpdHk9ezAuN30gXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgZDpbXG4gICAgICAgICAgICAgICAgICAgIFwiTTQyLjIsLTY0LjJDNDguOSwtNTMuMyw0NC40LC0zMy4xLDUwLjksLTE1LjlDNTcuNCwxLjQsNzQuOSwxNS43LDc0LDI1LjdDNzMsMzUuNyw1My42LDQxLjMsMzguMiw1Mi4zQzIyLjcsNjMuMiwxMS40LDc5LjQsLTIuNyw4My4xQy0xNi43LDg2LjgsLTMzLjQsNzcuOSwtNDcuNCw2Ni41Qy02MS40LDU1LjEsLTcyLjcsNDEuMiwtNzIuOSwyNi45Qy03My4yLDEyLjYsLTYyLjQsLTIuMSwtNTYuOCwtMTguMUMtNTEuMSwtMzQuMSwtNTAuNSwtNTEuNCwtNDEuOSwtNjEuNkMtMzMuMiwtNzEuOCwtMTYuNiwtNzQuOSwwLjYsLTc1LjdDMTcuOCwtNzYuNSwzNS42LC03NSw0Mi4yLC02NC4yWlwiLFxuICAgICAgICAgICAgICAgICAgICBcIk00My43LC01OC4xQzU4LjgsLTQ5LjIsNzQuNywtMzkuMyw3NiwtMjYuN0M3Ny4yLC0xNC4xLDYzLjksMS4xLDU3LjksMTguNkM1MiwzNi4xLDUzLjQsNTUuOCw0NSw2NC43QzM2LjYsNzMuNiwxOC4zLDcxLjUsMC4yLDcxLjJDLTE3LjgsNzAuOSwtMzUuNiw3Mi4yLC00NC4zLDYzLjVDLTUzLDU0LjcsLTUyLjYsMzUuOCwtNTguMywxOC44Qy02NCwxLjgsLTc1LjksLTEzLjQsLTc0LjIsLTI1LjlDLTcyLjYsLTM4LjQsLTU3LjQsLTQ4LjIsLTQyLjgsLTU3LjNDLTI4LjEsLTY2LjQsLTE0LjEsLTc0LjgsMC4xLC03NC45QzE0LjMsLTc1LjEsMjguNiwtNjcuMSw0My43LC01OC4xWlwiLFxuICAgICAgICAgICAgICAgICAgICBcIk00MC41LC00OC43QzU1LjYsLTQ0LjcsNzMuMywtMzcuMSw3NC42LC0yNS45Qzc1LjksLTE0LjcsNjAuOCwwLjEsNTMuNCwxNS42QzQ2LDMxLjIsNDYuMiw0Ny41LDM4LjUsNjEuMkMzMC45LDc1LDE1LjUsODYuMSwtMC43LDg3LjFDLTE2LjksODguMSwtMzMuNyw3OC44LC00Ni44LDY2LjlDLTU5LjksNTQuOSwtNjkuMiw0MC4yLC03NCwyNC4zQy03OC45LDguNCwtNzkuMywtOC44LC03Mi4zLC0yMS40Qy02NS40LC0zNC4xLC01MSwtNDIuMywtMzcuNywtNDYuOEMtMjQuNCwtNTEuNCwtMTIuMiwtNTIuNCwwLjIsLTUyLjdDMTIuNywtNTMsMjUuMywtNTIuNiw0MC41LC00OC43WlwiXG4gICAgICAgICAgICAgICAgICBdfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICBlYXNlOidlYXNlT3V0JywgXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMyxcbiAgICAgICAgICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXG4gICAgICAgICAgICAgICAgICByZXBlYXRUeXBlOiAncmV2ZXJzZSd9fVxuICAgICAgICAgICAgICBmaWxsPVwiI0ZDRkY4MFwiIGQ9XCJNMjYuNiwtNDAuNEMzNy4yLC0zNC42LDUwLjUsLTMxLjgsNTguMSwtMjMuOUM2NS43LC0xNi4xLDY3LjcsLTMsNjMuOSw3LjhDNjAuMiwxOC42LDUwLjcsMjcuMiw0MywzOC45QzM1LjQsNTAuNywyOS41LDY1LjYsMTkuNyw2OS43QzkuOCw3My45LC00LDY3LjMsLTE4LDYyLjZDLTMyLDU3LjgsLTQ2LjEsNTUsLTU5LjEsNDcuMkMtNzIsMzkuNCwtODMuNywyNi42LC04NC42LDEyLjlDLTg1LjQsLTAuOCwtNzUuNSwtMTUuNCwtNjYuNiwtMjguNkMtNTcuOCwtNDEuOSwtNTAsLTUzLjksLTM5LjEsLTU5LjZDLTI4LjIsLTY1LjMsLTE0LjEsLTY0LjgsLTMuMSwtNjBDOCwtNTUuMywxNiwtNDYuMywyNi42LC00MC40WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDAgMTAwKVwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxpbWcgc3JjPScuLi9hdmEucG5nJyA+PC9pbWc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWluLWgtc2NyZWVuJz48L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcbiAgICAgICAgXG5cblxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmxhY2sgbWluLWgtZml0Jz5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nYWJzb2x1dGUnIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgIDxtb3Rpb24ucGF0aCBcbiAgICAgICAgICAgICAgYW5pbWF0ZT17e2Q6W1wiTTI2LjYsLTQwLjRDMzcuMiwtMzQuNiw1MC41LC0zMS44LDU4LjEsLTIzLjlDNjUuNywtMTYuMSw2Ny43LC0zLDYzLjksNy44QzYwLjIsMTguNiw1MC43LDI3LjIsNDMsMzguOUMzNS40LDUwLjcsMjkuNSw2NS42LDE5LjcsNjkuN0M5LjgsNzMuOSwtNCw2Ny4zLC0xOCw2Mi42Qy0zMiw1Ny44LC00Ni4xLDU1LC01OS4xLDQ3LjJDLTcyLDM5LjQsLTgzLjcsMjYuNiwtODQuNiwxMi45Qy04NS40LC0wLjgsLTc1LjUsLTE1LjQsLTY2LjYsLTI4LjZDLTU3LjgsLTQxLjksLTUwLC01My45LC0zOS4xLC01OS42Qy0yOC4yLC02NS4zLC0xNC4xLC02NC44LC0zLjEsLTYwQzgsLTU1LjMsMTYsLTQ2LjMsMjYuNiwtNDAuNFpcIixcbiAgICAgICAgICAgICAgXCJNMzUuMSwtNjAuNkM0MS44LC01MC4zLDQwLjksLTM0LjMsNDcuNSwtMjEuM0M1NCwtOC4zLDY3LjksMS43LDY3LDkuOEM2Ni4yLDE4LDUwLjYsMjQuMiw0MC4yLDMzQzI5LjcsNDEuOCwyNC40LDUzLjIsMTUuOCw1Ny4zQzcuMyw2MS4zLC00LjQsNTgsLTE4LjYsNTYuOEMtMzIuOSw1NS43LC00OS43LDU2LjcsLTU2LjIsNDguOUMtNjIuNiw0MS4xLC01OC43LDI0LjUsLTU2LjMsMTAuOUMtNTMuOSwtMi43LC01Mi45LC0xMy4yLC00OC4yLC0yMS4zQy00My40LC0yOS40LC0zNC43LC0zNSwtMjYuMSwtNDQuNEMtMTcuNCwtNTMuNywtOC43LC02Ni44LDIuNywtNzEuMUMxNC4yLC03NS4zLDI4LjQsLTcwLjgsMzUuMSwtNjAuNlpcIixcbiAgICAgICAgICAgICAgXCJNNDQuNiwtNjUuMUM1NC40LC02My4yLDU2LjQsLTQ0LjksNTYuOCwtMzBDNTcuMywtMTUuMiw1Ni4xLC0zLjYsNTMuMiw2LjhDNTAuNCwxNy4xLDQ1LjcsMjYuNCwzOC41LDMxLjdDMzEuMywzNy4xLDIxLjUsMzguNiwxMS40LDQzLjdDMS4zLDQ4LjksLTkuMSw1Ny44LC0xOS43LDU4LjZDLTMwLjIsNTkuMywtNDAuOSw1MiwtNDUuOCw0Mi4xQy01MC43LDMyLjEsLTQ5LjksMTkuNiwtNDkuMSw4LjVDLTQ4LjQsLTIuNSwtNDcuOSwtMTIsLTQzLjgsLTE5LjdDLTM5LjgsLTI3LjMsLTMyLjMsLTMyLjksLTI0LjQsLTM1LjdDLTE2LjUsLTM4LjUsLTguMywtMzguNCw0LjYsLTQ1LjVDMTcuNCwtNTIuNiwzNC45LC02Nyw0NC42LC02NS4xWlwiXX19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICBlYXNlOidlYXNlT3V0JywgXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMsXG4gICAgICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICAgICAgICByZXBlYXRUeXBlOiAncmV2ZXJzZSd9fVxuICAgICAgICAgICAgZmlsbD1cIiNGRjAwNjZcIiBkPVwiTTI2LjYsLTQwLjRDMzcuMiwtMzQuNiw1MC41LC0zMS44LDU4LjEsLTIzLjlDNjUuNywtMTYuMSw2Ny43LC0zLDYzLjksNy44QzYwLjIsMTguNiw1MC43LDI3LjIsNDMsMzguOUMzNS40LDUwLjcsMjkuNSw2NS42LDE5LjcsNjkuN0M5LjgsNzMuOSwtNCw2Ny4zLC0xOCw2Mi42Qy0zMiw1Ny44LC00Ni4xLDU1LC01OS4xLDQ3LjJDLTcyLDM5LjQsLTgzLjcsMjYuNiwtODQuNiwxMi45Qy04NS40LC0wLjgsLTc1LjUsLTE1LjQsLTY2LjYsLTI4LjZDLTU3LjgsLTQxLjksLTUwLC01My45LC0zOS4xLC01OS42Qy0yOC4yLC02NS4zLC0xNC4xLC02NC44LC0zLjEsLTYwQzgsLTU1LjMsMTYsLTQ2LjMsMjYuNiwtNDAuNFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAwIDEwMClcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIFxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdhYnNvbHV0ZScgdmlld0JveD1cIjAgMCAyMDAgMjAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPG1vdGlvbi5wYXRoIFxuICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgZDpbXG4gICAgICAgICAgICAgICAgICBcIk0yNy45LC00OUMzNS40LC0zOC43LDQwLC0yOS41LDQ4LC0xOS43QzU2LC05LjgsNjcuMywwLjcsNjYuNSw5LjlDNjUuNywxOS4xLDUyLjksMjYuOSw0NC40LDQwLjdDMzUuOSw1NC40LDMxLjcsNzQuMiwyMS40LDgwLjhDMTEuMSw4Ny41LC01LjQsODEuMSwtMTUuMiw2OS45Qy0yNC45LDU4LjcsLTI4LDQyLjgsLTM3LjcsMzIuM0MtNDcuNSwyMS44LC02NC4xLDE2LjcsLTY1LjEsOS40Qy02Ni4xLDIuMSwtNTEuNiwtNy40LC00NC43LC0xOS41Qy0zNy44LC0zMS43LC0zOC41LC00Ni40LC0zMi4zLC01Ny4zQy0yNi4yLC02OC4yLC0xMy4xLC03NS40LC0xLjQsLTczLjJDMTAuMiwtNzEsMjAuNSwtNTkuNCwyNy45LC00OVpcIixcbiAgICAgICAgICAgICAgICAgIFwiTTMyLjksLTU1LjZDMzkuMSwtNDcuMiwzOC4yLC0zMi4xLDQwLjcsLTIwLjRDNDMuMSwtOC43LDQ5LC0wLjQsNTAuOCw5LjNDNTIuNSwxOS4xLDUwLjIsMzAuMyw0NS42LDQ0LjNDNDAuOSw1OC4yLDMzLjksNzQuOCwyNCw3NC40QzE0LDc0LjEsMS4yLDU2LjcsLTguNyw0Ni4yQy0xOC41LDM1LjYsLTI1LjUsMzEuOSwtMzYuNSwyNy4yQy00Ny40LDIyLjUsLTYyLjMsMTYuOCwtNjYuNiw3LjdDLTcwLjksLTEuNSwtNjQuNiwtMTQsLTU2LjUsLTIzLjNDLTQ4LjQsLTMyLjUsLTM4LjQsLTM4LjQsLTI4LjcsLTQ1LjJDLTE5LC01MiwtOS41LC01OS43LDEuOSwtNjIuN0MxMy4zLC02NS43LDI2LjcsLTY0LDMyLjksLTU1LjZaXCIsXG4gICAgICAgICAgICAgICAgICBcIk00My45LC03Mi4yQzU1LC02MS4zLDYwLjYsLTQ1LjgsNjcsLTMwLjlDNzMuMywtMTYsODAuNCwtMS43LDc2LjksOS45QzczLjQsMjEuNSw1OS40LDMwLjQsNDkuMyw0My42QzM5LjIsNTYuOCwzMy4xLDc0LjMsMjMuMiw3NS42QzEzLjMsNzYuOSwtMC4zLDYyLjEsLTE1LjUsNTYuMUMtMzAuOCw1MC4yLC00Ny43LDUzLjEsLTU4LjYsNDcuMUMtNjkuNSw0MS4yLC03NC40LDI2LjMsLTcyLjIsMTNDLTcwLC0wLjMsLTYwLjgsLTExLjksLTU0LjksLTI1LjFDLTQ4LjksLTM4LjIsLTQ2LjEsLTUyLjksLTM3LjUsLTY0LjlDLTI4LjksLTc2LjksLTE0LjUsLTg2LjQsMSwtODcuOUMxNi40LC04OS41LDMyLjksLTgzLjEsNDMuOSwtNzIuMlpcIlxuICAgICAgICAgICAgICAgIF19fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgZWFzZTonZWFzZU91dCcsIFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXG4gICAgICAgICAgICAgICAgcmVwZWF0VHlwZTogJ3JldmVyc2UnfX1cbiAgICAgICAgICAgIGZpbGw9XCIjMjJGRjIyXCIgZD1cIk0yNi42LC00MC40QzM3LjIsLTM0LjYsNTAuNSwtMzEuOCw1OC4xLC0yMy45QzY1LjcsLTE2LjEsNjcuNywtMyw2My45LDcuOEM2MC4yLDE4LjYsNTAuNywyNy4yLDQzLDM4LjlDMzUuNCw1MC43LDI5LjUsNjUuNiwxOS43LDY5LjdDOS44LDczLjksLTQsNjcuMywtMTgsNjIuNkMtMzIsNTcuOCwtNDYuMSw1NSwtNTkuMSw0Ny4yQy03MiwzOS40LC04My43LDI2LjYsLTg0LjYsMTIuOUMtODUuNCwtMC44LC03NS41LC0xNS40LC02Ni42LC0yOC42Qy01Ny44LC00MS45LC01MCwtNTMuOSwtMzkuMSwtNTkuNkMtMjguMiwtNjUuMywtMTQuMSwtNjQuOCwtMy4xLC02MEM4LC01NS4zLDE2LC00Ni4zLDI2LjYsLTQwLjRaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwMCAxMDApXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgIDxoMT5NZWV0IEF2YSE8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDI+WW91ciBwZXJzb25hbCBndWlkZSB0byBhbGwgdGhpbmdzIHRlY2guPC9oMj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0LWJveFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFzayBhbnl0aGluZyFcIlxuICAgICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVzZXJDaGFuZ2VkVGV4dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21wdC1idXR0b25zXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aXNHZW5lcmF0aW5nID8gJ2dlbmVyYXRlLWJ1dHRvbiBsb2FkaW5nJyA6ICdnZW5lcmF0ZS1idXR0b24nfVxuICAgICAgICAgICAgb25DbGljaz17Y2FsbEdlbmVyYXRlRW5kcG9pbnR9XG4gICAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVcIj5cbiAgICAgICAgICAgIHtpc0dlbmVyYXRpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L3NwYW4+IDogPHA+R2VuZXJhdGU8L3A+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2FwaU91dHB1dCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXQtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwPnthcGlPdXRwdXR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkIiwiSW1hZ2UiLCJtb3Rpb24iLCJIb21lIiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwiYXBpT3V0cHV0Iiwic2V0QXBpT3V0cHV0IiwiaXNHZW5lcmF0aW5nIiwic2V0SXNHZW5lcmF0aW5nIiwiY2FsbEdlbmVyYXRlRW5kcG9pbnQiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwib3V0cHV0IiwidGV4dCIsIm9uVXNlckNoYW5nZWRUZXh0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInN2ZyIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiLCJyZXBlYXRUeXBlIiwiZmlsbCIsInRyYW5zZm9ybSIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
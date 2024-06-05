"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var _useImageUploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useImageUploader */ \"(app-pages-browser)/./app/useImageUploader.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const { imageData, handleImageUpload } = (0,_useImageUploader__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [imageDimensions, setImageDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        ancho: 0,\n        alto: 0\n    });\n    const [imagenRedimensionada, setImagenRedimensionada] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [imagenRedimensionadaDimensiones, setImagenRedimensionadaDimensiones] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        ancho: 0,\n        alto: 0\n    });\n    //esta funcion se ejecuta cuando el usuario elige una imagen en el input\n    const onFileChange = async (event)=>{\n        //obtiene el archivo seleccionado\n        const file = event.target.files[0];\n        try {\n            //await handleImageUpload(file) llama a handleImageUpload y espera a que la promesa se cumpla\n            const dataUrl = await handleImageUpload(file);\n            //creamos un objeto Image para poder obtener sus dimensiones\n            const img = new Image();\n            img.onload = ()=>{\n                setImageDimensions({\n                    ancho: img.width,\n                    alto: img.height\n                });\n            };\n            img.src = dataUrl;\n        //si hay un error durante la subida, se actualiza el estado a error. \n        } catch (err) {\n            setError(err);\n        }\n    };\n    const modificarDimensiones = async ()=>{\n        try {\n            //Llamamos a la api\n            const response = await fetch(\"/api/modificaDimensiones\", {\n                method: \"POST\",\n                //creamos un json que se enviará a la api con las dimensiones que querramos, y la imagen subida\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    ancho: 700,\n                    alto: 700,\n                    imagenURL: imageData\n                })\n            });\n            //esperamos la respuesta de la api, en json\n            const data = await response.json();\n            console.log(data);\n            setImagenRedimensionada(data.imagenRedimensionada);\n            console.log(\"Ancho\", data.ancho);\n            console.log(\"alto:\", data.alto);\n            setImagenRedimensionadaDimensiones({\n                ancho: data.ancho,\n                alto: data.alto\n            });\n            setError(\"\"); // Limpia cualquier error previo\n        } catch (err) {\n            console.error(\"Error:\", err);\n            setError(typeof err === \"string\" ? err : err.message || \"Error al redimensionar la imagen\");\n        }\n    };\n    //me dio paja colocar lo del css (no tenia idea como)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Conversor de im\\xe1genes bacano :D \"\n            }, void 0, false, {\n                fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"custom-file-upload\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"file-upload\",\n                        type: \"file\",\n                        onChange: onFileChange\n                    }, void 0, false, {\n                        fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this),\n                    \"Seleccione un archivo\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"red\"\n                },\n                children: error\n            }, void 0, false, {\n                fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: modificarDimensiones,\n                children: \"Cambiar dimensiones\"\n            }, void 0, false, {\n                fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            imageData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Preview:\"\n                    }, void 0, false, {\n                        fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imageData,\n                        alt: \"Uploaded\",\n                        style: {\n                            maxWidth: \"256px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Ancho: \",\n                            imageDimensions.ancho,\n                            \"px\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Alto: \",\n                            imageDimensions.alto,\n                            \"px\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, this),\n            imagenRedimensionada && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Imagen Redimensionada:\"\n                    }, void 0, false, {\n                        fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imagenRedimensionada,\n                        alt: \"Redimensionada\"\n                    }, void 0, false, {\n                        fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Ancho: \",\n                            imagenRedimensionadaDimensiones.ancho,\n                            \"px\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Alto: \",\n                            imagenRedimensionadaDimensiones.alto,\n                            \"px\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/esperancita/Documentos/GitHub/Taller_4/app/page.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fCdEv/HnbeSqjKD88MmJYJvkRNQ=\", false, function() {\n    return [\n        _useImageUploader__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRTs0QkFBUTNDLGdCQUFnQkUsS0FBSzs0QkFBQzs7Ozs7OztrQ0FDakMsOERBQUN5Qzs7NEJBQUU7NEJBQU8zQyxnQkFBZ0JHLElBQUk7NEJBQUM7Ozs7Ozs7Ozs7Ozs7WUFJbENDLHNDQUNDLDhEQUFDK0I7O2tDQUNDLDhEQUFDYTtrQ0FBRzs7Ozs7O2tDQUVKLDhEQUFDbEM7d0JBQUlLLEtBQUtmO3dCQUFzQjZDLEtBQUk7Ozs7OztrQ0FDcEMsOERBQUNOOzs0QkFBRTs0QkFBUXJDLGdDQUFnQ0osS0FBSzs0QkFBQzs7Ozs7OztrQ0FDakQsOERBQUN5Qzs7NEJBQUU7NEJBQU9yQyxnQ0FBZ0NILElBQUk7NEJBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekQ7R0E5RndCUjs7UUFFbUJELHlEQUFnQkE7OztLQUZuQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnLi9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgdXNlSW1hZ2VVcGxvYWRlciBmcm9tIFwiLi91c2VJbWFnZVVwbG9hZGVyXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBcbiAgY29uc3QgeyBpbWFnZURhdGEsIGhhbmRsZUltYWdlVXBsb2FkIH0gPSB1c2VJbWFnZVVwbG9hZGVyKCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpbWFnZURpbWVuc2lvbnMsIHNldEltYWdlRGltZW5zaW9uc10gPSB1c2VTdGF0ZSh7IGFuY2hvOiAwLCBhbHRvOiAwIH0pO1xuICBjb25zdCBbaW1hZ2VuUmVkaW1lbnNpb25hZGEsIHNldEltYWdlblJlZGltZW5zaW9uYWRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaW1hZ2VuUmVkaW1lbnNpb25hZGFEaW1lbnNpb25lcywgc2V0SW1hZ2VuUmVkaW1lbnNpb25hZGFEaW1lbnNpb25lc10gPSB1c2VTdGF0ZSh7YW5jaG86MCwgYWx0bzowfSk7XG4gIC8vZXN0YSBmdW5jaW9uIHNlIGVqZWN1dGEgY3VhbmRvIGVsIHVzdWFyaW8gZWxpZ2UgdW5hIGltYWdlbiBlbiBlbCBpbnB1dFxuICBjb25zdCBvbkZpbGVDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAvL29idGllbmUgZWwgYXJjaGl2byBzZWxlY2Npb25hZG9cbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIHRyeSB7XG4gICAgICAvL2F3YWl0IGhhbmRsZUltYWdlVXBsb2FkKGZpbGUpIGxsYW1hIGEgaGFuZGxlSW1hZ2VVcGxvYWQgeSBlc3BlcmEgYSBxdWUgbGEgcHJvbWVzYSBzZSBjdW1wbGFcbiAgICAgIGNvbnN0IGRhdGFVcmwgPSBhd2FpdCBoYW5kbGVJbWFnZVVwbG9hZChmaWxlKTtcbiAgICAgIC8vY3JlYW1vcyB1biBvYmpldG8gSW1hZ2UgcGFyYSBwb2RlciBvYnRlbmVyIHN1cyBkaW1lbnNpb25lc1xuICAgICAgY29uc3QgaW1nID1uZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHNldEltYWdlRGltZW5zaW9ucyh7YW5jaG86IGltZy53aWR0aCwgYWx0bzogaW1nLmhlaWdodH0pXG4gICAgICB9O1xuICAgICAgaW1nLnNyYz1kYXRhVXJsO1xuICAgIC8vc2kgaGF5IHVuIGVycm9yIGR1cmFudGUgbGEgc3ViaWRhLCBzZSBhY3R1YWxpemEgZWwgZXN0YWRvIGEgZXJyb3IuIFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoZXJyKTtcbiAgICB9XG4gIFxuICB9O1xuXG4gIGNvbnN0IG1vZGlmaWNhckRpbWVuc2lvbmVzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvL0xsYW1hbW9zIGEgbGEgYXBpXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL21vZGlmaWNhRGltZW5zaW9uZXMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAvL2NyZWFtb3MgdW4ganNvbiBxdWUgc2UgZW52aWFyw6EgYSBsYSBhcGkgY29uIGxhcyBkaW1lbnNpb25lcyBxdWUgcXVlcnJhbW9zLCB5IGxhIGltYWdlbiBzdWJpZGFcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXG4gICAgICAgICAgYW5jaG86IDcwMCwgXG4gICAgICAgICAgYWx0bzogNzAwLCBcbiAgICAgICAgICBpbWFnZW5VUkw6IGltYWdlRGF0YSBcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLy9lc3BlcmFtb3MgbGEgcmVzcHVlc3RhIGRlIGxhIGFwaSwgZW4ganNvblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBzZXRJbWFnZW5SZWRpbWVuc2lvbmFkYShkYXRhLmltYWdlblJlZGltZW5zaW9uYWRhKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQW5jaG9cIixkYXRhLmFuY2hvKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWx0bzpcIixkYXRhLmFsdG8pO1xuXG4gICAgICBzZXRJbWFnZW5SZWRpbWVuc2lvbmFkYURpbWVuc2lvbmVzKHthbmNobzogZGF0YS5hbmNobywgYWx0bzogZGF0YS5hbHRvfSlcbiAgICAgIHNldEVycm9yKCcnKTsgIC8vIExpbXBpYSBjdWFscXVpZXIgZXJyb3IgcHJldmlvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnIpO1xuICAgICAgc2V0RXJyb3IodHlwZW9mIGVyciA9PT0gJ3N0cmluZycgPyBlcnIgOiAoZXJyLm1lc3NhZ2UgfHwgJ0Vycm9yIGFsIHJlZGltZW5zaW9uYXIgbGEgaW1hZ2VuJykpO1xuICAgIH1cbiAgfTtcblxuLy9tZSBkaW8gcGFqYSBjb2xvY2FyIGxvIGRlbCBjc3MgKG5vIHRlbmlhIGlkZWEgY29tbylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDE+Q29udmVyc29yIGRlIGltw6FnZW5lcyBiYWNhbm8gOkQgPC9oMT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLXVwbG9hZFwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlsZS11cGxvYWRcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICBTZWxlY2Npb25lIHVuIGFyY2hpdm9cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIHsvKnNpIG9jdXJyZSB1biBlcnJvciBlbiBsYSBzdWJpZGEgZGVsIGFyY2hpdm8sIGVzdGEgbGluZWEgbXVlc3RyYSB1biBtZW5zYWplIGRlIGVycm9yIGVuIHJvam8qL31cbiAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yfTwvcD59XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e21vZGlmaWNhckRpbWVuc2lvbmVzfT5cbiAgICAgICAgICAgIENhbWJpYXIgZGltZW5zaW9uZXNcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7LypzaSBpbWFnZURhdGEgdGllbmUgdW4gdmFsb3Igb2N1cnJlIGxvIHNpZ3VpZW50ZSAqL31cbiAgICAgIHtpbWFnZURhdGEgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5QcmV2aWV3OjwvaDM+XG4gICAgICAgICAgey8qUGFyYSBtb3N0cmFybG8gZW4gc3VzIHZhbG9yZXMgb3JpZ2luYWxlcyB0ZW5kcmlhbW9zIHF1ZSBxdWl0YXIgXCJzdHlsZT17eyBtYXhXaWR0aDogJzI1NnB4J319XCIgKi99XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlRGF0YX0gYWx0PVwiVXBsb2FkZWRcIiBzdHlsZT17eyBtYXhXaWR0aDogJzI1NnB4JyB9fSAvPlxuICAgICAgICAgIDxwPkFuY2hvOiB7aW1hZ2VEaW1lbnNpb25zLmFuY2hvfXB4PC9wPlxuICAgICAgICAgIDxwPkFsdG86IHtpbWFnZURpbWVuc2lvbnMuYWx0b31weDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7aW1hZ2VuUmVkaW1lbnNpb25hZGEgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5JbWFnZW4gUmVkaW1lbnNpb25hZGE6PC9oMz5cbiAgICAgICAgICB7LypQYXJhIG1vc3RyYXJsbyBlbiBzdXMgdmFsb3JlcyBvcmlnaW5hbGVzIHRlbmRyaWFtb3MgcXVlIHF1aXRhciBcInN0eWxlPXt7IG1heFdpZHRoOiAnMjU2cHgnfX1cIiAqL31cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VuUmVkaW1lbnNpb25hZGF9IGFsdD1cIlJlZGltZW5zaW9uYWRhXCIgLz5cbiAgICAgICAgICA8cD5BbmNobzoge2ltYWdlblJlZGltZW5zaW9uYWRhRGltZW5zaW9uZXMuYW5jaG99cHg8L3A+XG4gICAgICAgICAgPHA+QWx0bzoge2ltYWdlblJlZGltZW5zaW9uYWRhRGltZW5zaW9uZXMuYWx0b31weDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlSW1hZ2VVcGxvYWRlciIsIkhvbWUiLCJpbWFnZURhdGEiLCJoYW5kbGVJbWFnZVVwbG9hZCIsImVycm9yIiwic2V0RXJyb3IiLCJpbWFnZURpbWVuc2lvbnMiLCJzZXRJbWFnZURpbWVuc2lvbnMiLCJhbmNobyIsImFsdG8iLCJpbWFnZW5SZWRpbWVuc2lvbmFkYSIsInNldEltYWdlblJlZGltZW5zaW9uYWRhIiwiaW1hZ2VuUmVkaW1lbnNpb25hZGFEaW1lbnNpb25lcyIsInNldEltYWdlblJlZGltZW5zaW9uYWRhRGltZW5zaW9uZXMiLCJvbkZpbGVDaGFuZ2UiLCJldmVudCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImRhdGFVcmwiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiZXJyIiwibW9kaWZpY2FyRGltZW5zaW9uZXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaW1hZ2VuVVJMIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibGFiZWwiLCJpbnB1dCIsImlkIiwidHlwZSIsIm9uQ2hhbmdlIiwicCIsInN0eWxlIiwiY29sb3IiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiLCJhbHQiLCJtYXhXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});
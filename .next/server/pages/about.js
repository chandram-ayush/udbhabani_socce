/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./components/AppbarComp.js":
/*!**********************************!*\
  !*** ./components/AppbarComp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppbarComp)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar styles = {\n  position: \"absolute\",\n  width: \"100vw\",\n  \".appbar\": {\n    // backdropFilter: \"blur(5px)\",\n    position: \"relative\",\n    padding: {\n      lg: \" 0 50px\",\n      md: \"0 50px\",\n      sm: \"0 30px\",\n      xs: \"0 25px\"\n    },\n    paddingTop: \"10px !important\",\n    boxShadow: \"none\",\n    display: \"flex\",\n    flexDirection: \"row\",\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    \".logo\": {\n      cursor: \"pointer\"\n    }\n  }\n};\nfunction AppbarComp() {\n  var SideBarComp = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/@mui\"), __webpack_require__.e(\"components_SideBarComp_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SideBarComp */ \"./components/SideBarComp.js\"));\n  }, {\n    ssr: false\n  });\n  var NavbarComp = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"components_NavbarComp_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./NavbarComp */ \"./components/NavbarComp.js\"));\n  }, {\n    ssr: false\n  });\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n    _useState2 = _slicedToArray(_useState, 2),\n    top = _useState2[0],\n    setTop = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(function () {\n      return  false ? 0 : 0;\n    }),\n    _useState4 = _slicedToArray(_useState3, 2),\n    width = _useState4[0],\n    setWidth = _useState4[1];\n  var goToHome = function goToHome() {\n    router.push(\"/home\");\n  };\n  var handleTop = function handleTop() {\n    if (window.scrollY === 0) setTop(true);else setTop(false);\n  };\n  var handleResize = function handleResize() {\n    if (false) {}\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    if (false) {}\n  }, []);\n  var isMobile = width < 960;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    sx: styles,\n    className: \"center2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.AppBar, {\n    className: \"appbar\",\n    style: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({\n      mt: \"30px\",\n      background: \"none\"\n    }, \"background\", \"\".concat( false ? 0 : top ? \"none\" : \"linear-gradient(to right, black ,rgb(17 24 39 ),black)\")), \"position\", \"fixed\"), \"left\", \"50%\"), \"transform\", \"translateX(-50%)\"), \"paddingBottom\", \"10px\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n    onClick: goToHome,\n    src: \"/images/udhlogo.png\",\n    alt: \"logo\",\n    width: \"175\",\n    height: \"300\",\n    className: \"logo\"\n  }), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(SideBarComp, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(NavbarComp, null)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcGJhckNvbXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNMO0FBQ0M7QUFDSjtBQUNTO0FBQ1c7QUFDbkQsSUFBTVEsTUFBTSxHQUFHO0VBQ2JDLFFBQVEsRUFBRSxVQUFVO0VBQ3BCQyxLQUFLLEVBQUUsT0FBTztFQUNkLFNBQVMsRUFBRTtJQUNUO0lBQ0FELFFBQVEsRUFBRSxVQUFVO0lBQ3BCRSxPQUFPLEVBQUU7TUFDUEMsRUFBRSxFQUFFLFNBQVM7TUFDYkMsRUFBRSxFQUFFLFFBQVE7TUFDWkMsRUFBRSxFQUFFLFFBQVE7TUFDWkMsRUFBRSxFQUFFO0lBQ04sQ0FBQztJQUNEQyxVQUFVLEVBQUUsaUJBQWlCO0lBQzdCQyxTQUFTLEVBQUUsTUFBTTtJQUNqQkMsT0FBTyxFQUFFLE1BQU07SUFDZkMsYUFBYSxFQUFFLEtBQUs7SUFDcEJDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCQyxjQUFjLEVBQUUsZUFBZTtJQUMvQixPQUFPLEVBQUU7TUFDUEMsTUFBTSxFQUFFO0lBQ1Y7RUFDRjtBQUNGLENBQUM7QUFFYyxTQUFTQyxVQUFVQSxDQUFBLEVBQUc7RUFDbkMsSUFBTUMsV0FBVyxHQUFHdEIsbURBQU8sQ0FBQztJQUFBLE9BQU0scU9BQXVCO0VBQUEsR0FBRTtJQUFFdUIsR0FBRyxFQUFFO0VBQU0sQ0FBQyxDQUFDO0VBQzFFLElBQU1DLFVBQVUsR0FBR3hCLG1EQUFPLENBQUM7SUFBQSxPQUFNLGtPQUFzQjtFQUFBLEdBQUU7SUFBRXVCLEdBQUcsRUFBRTtFQUFNLENBQUMsQ0FBQztFQUV4RSxJQUFNRSxNQUFNLEdBQUd2QixzREFBUyxDQUFDLENBQUM7RUFDMUIsSUFBQXdCLFNBQUEsR0FBc0JyQiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBc0IsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0JHLEdBQUcsR0FBQUYsVUFBQTtJQUFFRyxNQUFNLEdBQUFILFVBQUE7RUFDbEIsSUFBQUksVUFBQSxHQUEwQjFCLCtDQUFRLENBQUM7TUFBQSxPQUNqQyxTQUFnQzJCLENBQWlCLEdBQUcsQ0FBQztJQUFBLENBQ3ZELENBQUM7SUFBQUUsVUFBQSxHQUFBTixjQUFBLENBQUFHLFVBQUE7SUFGTXZCLEtBQUssR0FBQTBCLFVBQUE7SUFBRUMsUUFBUSxHQUFBRCxVQUFBO0VBSXRCLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7SUFDckJYLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDLE9BQU8sQ0FBQztFQUN0QixDQUFDO0VBRUQsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztJQUN0QixJQUFJTixNQUFNLENBQUNPLE9BQU8sS0FBSyxDQUFDLEVBQUVULE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUNsQ0EsTUFBTSxDQUFDLEtBQUssQ0FBQztFQUNwQixDQUFDO0VBRUQsSUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN6QixJQUFJLE9BQStCLEVBRWxDO0VBQ0gsQ0FBQztFQUVEcEMsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSSxPQUErQixFQVFsQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNdUMsUUFBUSxHQUFHbkMsS0FBSyxHQUFHLEdBQUc7RUFFNUIsb0JBQ0VMLDBEQUFBLENBQUNKLDRDQUFHO0lBQUM4QyxFQUFFLEVBQUV2QyxNQUFPO0lBQUN3QyxTQUFTLEVBQUM7RUFBUyxnQkFDbEMzQywwREFBQSxDQUFDTCxpREFBTTtJQUNMZ0QsU0FBUyxFQUFDLFFBQVE7SUFDbEJDLEtBQUssRUFBQUMsZUFBQSxDQUFBQSxlQUFBLENBQUFBLGVBQUEsQ0FBQUEsZUFBQSxDQUFBQSxlQUFBO01BQ0hDLEVBQUUsRUFBRSxNQUFNO01BQ1ZDLFVBQVUsRUFBRTtJQUFNLG9CQUFBQyxNQUFBLENBRWhCLE1BU29ELEdBQ2hELENBQU8sR0FDUHRCLEdBQUcsR0FDRCxNQUFNLEdBQ04sd0RBQXdELGdCQUV0RCxPQUFPLFdBQ1gsS0FBSyxnQkFDQSxrQkFBa0Isb0JBQ2QsTUFBTTtFQUNyQixnQkFFRjFCLDBEQUFBLENBQUNGLG1EQUFLO0lBQ0pzRCxPQUFPLEVBQUVuQixRQUFTO0lBQ2xCb0IsR0FBRyxFQUFDLHFCQUFxQjtJQUN6QkMsR0FBRyxFQUFDLE1BQU07SUFDVmpELEtBQUssRUFBQyxLQUFLO0lBQ1hrRCxNQUFNLEVBQUMsS0FBSztJQUNaWixTQUFTLEVBQUM7RUFBTSxDQUNqQixDQUFDLEVBQ0RILFFBQVEsZ0JBQUd4QywwREFBQSxDQUFDbUIsV0FBVyxNQUFFLENBQUMsZ0JBQUduQiwwREFBQSxDQUFDcUIsVUFBVSxNQUFFLENBQ3JDLENBQ0wsQ0FBQztBQUVWIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGNoYW5kXFxPbmVEcml2ZVxcRGVza3RvcFxcVWRiaGFiYW5pX3NpdGVcXHVkYmhhYmFuaV9zb2NjZVxcY29tcG9uZW50c1xcQXBwYmFyQ29tcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBCYXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgXCIuYXBwYmFyXCI6IHtcclxuICAgIC8vIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHBhZGRpbmc6IHtcclxuICAgICAgbGc6IFwiIDAgNTBweFwiLFxyXG4gICAgICBtZDogXCIwIDUwcHhcIixcclxuICAgICAgc206IFwiMCAzMHB4XCIsXHJcbiAgICAgIHhzOiBcIjAgMjVweFwiLFxyXG4gICAgfSxcclxuICAgIHBhZGRpbmdUb3A6IFwiMTBweCAhaW1wb3J0YW50XCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIFwiLmxvZ29cIjoge1xyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwYmFyQ29tcCgpIHtcclxuICBjb25zdCBTaWRlQmFyQ29tcCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9TaWRlQmFyQ29tcFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG4gIGNvbnN0IE5hdmJhckNvbXAgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vTmF2YmFyQ29tcFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdG9wLCBzZXRUb3BdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgoKSA9PlxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lcldpZHRoIDogMCxcclxuICApO1xyXG5cclxuICBjb25zdCBnb1RvSG9tZSA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9wID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID09PSAwKSBzZXRUb3AodHJ1ZSk7XHJcbiAgICBlbHNlIHNldFRvcChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVUb3ApO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVUb3ApO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHdpZHRoIDwgOTYwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzfSBjbGFzc05hbWU9XCJjZW50ZXIyXCI+XHJcbiAgICAgIDxBcHBCYXJcclxuICAgICAgICBjbGFzc05hbWU9XCJhcHBiYXJcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtdDogXCIzMHB4XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcIm5vbmVcIixcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGAke1xyXG4gICAgICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgICAgICAgICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZXZlbnRzcy95YW50cmFzZWFyY2hcIikgfHxcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZXZlbnRzcy9jYWRhdGhvblwiKSB8fFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9ldmVudHNzL2hlYXRvdmF0aW9uXCIpIHx8XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2V2ZW50c3Mvc2NyYXB5YXJkXCIpIHx8XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2V2ZW50c3MvaVFJZ25pdGlvblwiKSB8fFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9ldmVudHNzL2RlYXRocmFjZVwiKSB8fFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9ldmVudHNzL2Ryb25lUHVyc3VpdFwiKSB8fFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9ldmVudHNzL3ZhbG9yYW50XCIpIHx8XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2V2ZW50c3MvZnVuXCIpKVxyXG4gICAgICAgICAgICAgID8gXCJibGFja1wiXHJcbiAgICAgICAgICAgICAgOiB0b3BcclxuICAgICAgICAgICAgICAgID8gXCJub25lXCJcclxuICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGJsYWNrICxyZ2IoMTcgMjQgMzkgKSxibGFjaylcIlxyXG4gICAgICAgICAgfWAsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC01MCUpXCIsXHJcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBvbkNsaWNrPXtnb1RvSG9tZX1cclxuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdWRobG9nby5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICB3aWR0aD1cIjE3NVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7aXNNb2JpbGUgPyA8U2lkZUJhckNvbXAgLz4gOiA8TmF2YmFyQ29tcCAvPn1cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiQXBwQmFyIiwiQm94IiwiZHluYW1pYyIsIkltYWdlIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInBvc2l0aW9uIiwid2lkdGgiLCJwYWRkaW5nIiwibGciLCJtZCIsInNtIiwieHMiLCJwYWRkaW5nVG9wIiwiYm94U2hhZG93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjdXJzb3IiLCJBcHBiYXJDb21wIiwiU2lkZUJhckNvbXAiLCJzc3IiLCJOYXZiYXJDb21wIiwicm91dGVyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidG9wIiwic2V0VG9wIiwiX3VzZVN0YXRlMyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJfdXNlU3RhdGU0Iiwic2V0V2lkdGgiLCJnb1RvSG9tZSIsInB1c2giLCJoYW5kbGVUb3AiLCJzY3JvbGxZIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc01vYmlsZSIsImNyZWF0ZUVsZW1lbnQiLCJzeCIsImNsYXNzTmFtZSIsInN0eWxlIiwiX2RlZmluZVByb3BlcnR5IiwibXQiLCJiYWNrZ3JvdW5kIiwiY29uY2F0IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImluY2x1ZGVzIiwib25DbGljayIsInNyYyIsImFsdCIsImhlaWdodCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AppbarComp.js\n");

/***/ }),

/***/ "./components/Carouselcomp1.js":
/*!*************************************!*\
  !*** ./components/Carouselcomp1.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CarouselComp1)\n/* harmony export */ });\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-elastic-carousel */ \"react-elastic-carousel\");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nfunction CarouselComp1() {\n  var carousel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var handleEnd = function handleEnd(_ref) {\n    var index = _ref.index;\n    if (index == 6) {\n      setTimeout(function () {\n        var _carousel$current;\n        (_carousel$current = carousel.current) === null || _carousel$current === void 0 || _carousel$current.goTo(0);\n      }, 1000);\n    }\n  };\n  var urls = [\"/images/indimg3.jpeg\", \"/images/indimg1.jpeg\", \"/images/indimg2.jpeg\", \"/images/indimg4.jpeg\", \"/images/indimg5.jpeg\", \"/images/indimg6.jpeg\", \"/images/indimg7.jpeg\", \"/images/indimg8.jpeg\", \"/images/indimg9.jpeg\"];\n  var styles = {\n    position: \"relative\",\n    width: \"100vw\",\n    aspectRatio: {\n      lg: \"2/1\",\n      md: \"1/1\",\n      sm: \"4/5\",\n      xs: \"4/5\",\n      Bottommagin: '20px'\n    },\n    maxWidth: \"800px\",\n    maxHeight: \"90vh\"\n  };\n  var styles2 = {\n    width: \"100vw\",\n    mt: \"120px\"\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    sx: styles2,\n    className: \"center1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {\n    ref: carousel,\n    showArrows: false,\n    enableAutoPlay: true,\n    onNextEnd: handleEnd,\n    autoPlaySpeed: 3000,\n    enableMouseSwipe: false,\n    pagination: false\n  }, urls.map(function (url) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_0__.Box, {\n      key: url,\n      sx: styles\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: url,\n      alt: \"abacus\",\n      layout: \"fill\",\n      objectFit: \"cover\",\n      key: url\n    }));\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsY29tcDEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0g7QUFDTDtBQUVvQjtBQUNmO0FBQ1k7QUFFNUIsU0FBU00sYUFBYUEsQ0FBQSxFQUFHO0VBQ3RDLElBQU1DLFFBQVEsR0FBR0gsNkNBQU0sQ0FBQyxJQUFJLENBQUM7RUFFN0IsSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUFDLElBQUEsRUFBa0I7SUFBQSxJQUFaQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztJQUN4QixJQUFJQSxLQUFLLElBQUksQ0FBQyxFQUFFO01BQ2RDLFVBQVUsQ0FBQyxZQUFNO1FBQUEsSUFBQUMsaUJBQUE7UUFDZixDQUFBQSxpQkFBQSxHQUFBTCxRQUFRLENBQUNNLE9BQU8sY0FBQUQsaUJBQUEsZUFBaEJBLGlCQUFBLENBQWtCRSxJQUFJLENBQUMsQ0FBQyxDQUFDO01BQzNCLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDVjtFQUNGLENBQUM7RUFFRCxJQUFNQyxJQUFJLEdBQUcsQ0FDWCxzQkFBc0IsRUFDdEIsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIsc0JBQXNCLEVBQ3RCLHNCQUFzQixDQUN2QjtFQUVELElBQU1DLE1BQU0sR0FBRztJQUNiQyxRQUFRLEVBQUUsVUFBVTtJQUNwQkMsS0FBSyxFQUFFLE9BQU87SUFDZEMsV0FBVyxFQUFFO01BQ1hDLEVBQUUsRUFBRSxLQUFLO01BQ1RDLEVBQUUsRUFBRSxLQUFLO01BQ1RDLEVBQUUsRUFBRSxLQUFLO01BQ1RDLEVBQUUsRUFBRSxLQUFLO01BQ1RDLFdBQVcsRUFBRTtJQUNmLENBQUM7SUFDREMsUUFBUSxFQUFFLE9BQU87SUFDakJDLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFFRCxJQUFNQyxPQUFPLEdBQUc7SUFDZFQsS0FBSyxFQUFFLE9BQU87SUFDZFUsRUFBRSxFQUFFO0VBQ04sQ0FBQztFQUVELG9CQUNFMUIsMERBQUEsQ0FBQ0YsNENBQUc7SUFBQzhCLEVBQUUsRUFBRUgsT0FBUTtJQUFDSSxTQUFTLEVBQUM7RUFBUyxnQkFDbkM3QiwwREFBQSxDQUFDQywrREFBUTtJQUNQNkIsR0FBRyxFQUFFekIsUUFBUztJQUNkMEIsVUFBVSxFQUFFLEtBQU07SUFDbEJDLGNBQWMsRUFBRSxJQUFLO0lBQ3JCQyxTQUFTLEVBQUUzQixTQUFVO0lBQ3JCNEIsYUFBYSxFQUFFLElBQUs7SUFDcEJDLGdCQUFnQixFQUFFLEtBQU07SUFDeEJDLFVBQVUsRUFBRTtFQUFNLEdBRWpCdkIsSUFBSSxDQUFDd0IsR0FBRyxDQUFDLFVBQUNDLEdBQUc7SUFBQSxvQkFDWnRDLDBEQUFBLENBQUNGLDRDQUFHO01BQUN5QyxHQUFHLEVBQUVELEdBQUk7TUFBQ1YsRUFBRSxFQUFFZDtJQUFPLGdCQUN4QmQsMERBQUEsQ0FBQ0QsbURBQUs7TUFDSnlDLEdBQUcsRUFBRUYsR0FBSTtNQUNURyxHQUFHLEVBQUMsUUFBUTtNQUNaQyxNQUFNLEVBQUMsTUFBTTtNQUNiQyxTQUFTLEVBQUMsT0FBTztNQUNqQkosR0FBRyxFQUFFRDtJQUFJLENBQ1YsQ0FDRSxDQUFDO0VBQUEsQ0FDUCxDQUNPLENBQ1AsQ0FBQztBQUVWIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGNoYW5kXFxPbmVEcml2ZVxcRGVza3RvcFxcVWRiaGFiYW5pX3NpdGVcXHVkYmhhYmFuaV9zb2NjZVxcY29tcG9uZW50c1xcQ2Fyb3VzZWxjb21wMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIjtcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWxDb21wMSgpIHtcclxuICBjb25zdCBjYXJvdXNlbCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRW5kID0gKHsgaW5kZXggfSkgPT4ge1xyXG4gICAgaWYgKGluZGV4ID09IDYpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2Fyb3VzZWwuY3VycmVudD8uZ29UbygwKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXJscyA9IFtcclxuICAgIFwiL2ltYWdlcy9pbmRpbWczLmpwZWdcIixcclxuICAgIFwiL2ltYWdlcy9pbmRpbWcxLmpwZWdcIixcclxuICAgIFwiL2ltYWdlcy9pbmRpbWcyLmpwZWdcIixcclxuICAgIFwiL2ltYWdlcy9pbmRpbWc0LmpwZWdcIixcclxuICAgIFwiL2ltYWdlcy9pbmRpbWc1LmpwZWdcIixcclxuICAgIFwiL2ltYWdlcy9pbmRpbWc2LmpwZWdcIixcclxuICAgIFwiL2ltYWdlcy9pbmRpbWc3LmpwZWdcIixcclxuICAgIFwiL2ltYWdlcy9pbmRpbWc4LmpwZWdcIixcclxuICAgIFwiL2ltYWdlcy9pbmRpbWc5LmpwZWdcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgIGFzcGVjdFJhdGlvOiB7XHJcbiAgICAgIGxnOiBcIjIvMVwiLFxyXG4gICAgICBtZDogXCIxLzFcIixcclxuICAgICAgc206IFwiNC81XCIsXHJcbiAgICAgIHhzOiBcIjQvNVwiLFxyXG4gICAgICBCb3R0b21tYWdpbjogJzIwcHgnLFxyXG4gICAgfSxcclxuICAgIG1heFdpZHRoOiBcIjgwMHB4XCIsXHJcbiAgICBtYXhIZWlnaHQ6IFwiOTB2aFwiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0eWxlczIgPSB7XHJcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgbXQ6IFwiMTIwcHhcIixcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzMn0gY2xhc3NOYW1lPVwiY2VudGVyMVwiPlxyXG4gICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICByZWY9e2Nhcm91c2VsfVxyXG4gICAgICAgIHNob3dBcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgIGVuYWJsZUF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICAgIG9uTmV4dEVuZD17aGFuZGxlRW5kfVxyXG4gICAgICAgIGF1dG9QbGF5U3BlZWQ9ezMwMDB9XHJcbiAgICAgICAgZW5hYmxlTW91c2VTd2lwZT17ZmFsc2V9XHJcbiAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgID5cclxuICAgICAgICB7dXJscy5tYXAoKHVybCkgPT4gKFxyXG4gICAgICAgICAgPEJveCBrZXk9e3VybH0gc3g9e3N0eWxlc30+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17dXJsfVxyXG4gICAgICAgICAgICAgIGFsdD1cImFiYWN1c1wiXHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgIGtleT17dXJsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJJbWFnZSIsIlJlYWN0IiwiQ2Fyb3VzZWwiLCJ1c2VSZWYiLCJUeXBvZ3JhcGh5IiwiQ2Fyb3VzZWxDb21wMSIsImNhcm91c2VsIiwiaGFuZGxlRW5kIiwiX3JlZiIsImluZGV4Iiwic2V0VGltZW91dCIsIl9jYXJvdXNlbCRjdXJyZW50IiwiY3VycmVudCIsImdvVG8iLCJ1cmxzIiwic3R5bGVzIiwicG9zaXRpb24iLCJ3aWR0aCIsImFzcGVjdFJhdGlvIiwibGciLCJtZCIsInNtIiwieHMiLCJCb3R0b21tYWdpbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0Iiwic3R5bGVzMiIsIm10IiwiY3JlYXRlRWxlbWVudCIsInN4IiwiY2xhc3NOYW1lIiwicmVmIiwic2hvd0Fycm93cyIsImVuYWJsZUF1dG9QbGF5Iiwib25OZXh0RW5kIiwiYXV0b1BsYXlTcGVlZCIsImVuYWJsZU1vdXNlU3dpcGUiLCJwYWdpbmF0aW9uIiwibWFwIiwidXJsIiwia2V5Iiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carouselcomp1.js\n");

/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\n/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Facebook */ \"./node_modules/@mui/icons-material/Facebook.js\");\n/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Instagram */ \"./node_modules/@mui/icons-material/Instagram.js\");\n/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/LinkedIn */ \"./node_modules/@mui/icons-material/LinkedIn.js\");\n/* harmony import */ var _mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/YouTube */ \"./node_modules/@mui/icons-material/YouTube.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/node/IconButton/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\n\n\n\n\nvar styles = {\n  width: \"90vw\",\n  maxWidth: \"1200px\",\n  \".nav\": {\n    display: \"grid\",\n    gridTemplateColumns: {\n      lg: \"repeat(8,1fr)\",\n      sm: \"repeat(4,1fr)\",\n      xs: \"repeat(2,1fr)\"\n    },\n    flexDirection: \"row\",\n    gap: \"0 40px\",\n    a: {\n      fontSize: \"20px\",\n      textDecoration: \"none\",\n      color: \"white\",\n      fontWeight: \"400\",\n      margin: \"10px\",\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"left\"\n    },\n    pl: \"20px\"\n  },\n  \".icons\": {\n    fontSize: \"100px\",\n    height: \"100px\",\n    overflowY: \"hidden\",\n    \"button svg\": _defineProperty(_defineProperty(_defineProperty({\n      filter: \"opacity(0.6)\",\n      margin: \"15px\"\n    }, \"margin\", {\n      xs: \"5px\"\n    }), \":hover\", {\n      filter: \"opacity(1)\"\n    }), \"fontSize\", \"30px\")\n  },\n  \".terms p\": {\n    mt: \"5px\",\n    mb: \"40px\"\n  }\n};\nvar CStyle = {\n  display: \"block\",\n  width: \"100%\",\n  margin: \"0 auto\",\n  fontSize: \"16px\",\n  color: \"#ccc\",\n  textAlign: \"center\"\n};\nfunction Contact() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    className: \"center1\",\n    sx: {\n      background: \"linear-gradient(transparent,#ffffff1a)\",\n      width: \"100%\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"hr\", {\n    style: {\n      width: \"70%\",\n      height: \"1px\",\n      borderTop: \"solid 1px #555\",\n      margin: \"40px 0\"\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    sx: styles,\n    className: \"center1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    sx: {\n      textAlign: \"center\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n    variant: \"h3\",\n    sx: {\n      marginBottom: \"25px\"\n    }\n  }, \"Indian Institute of Engineering Science and Technology, Shibpur\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n    variant: \"p\",\n    sx: {\n      display: \"block\",\n      width: {\n        lg: \"60%\",\n        sm: \"70%\",\n        xs: \"80%\"\n      },\n      margin: \"0 auto\",\n      fontSize: \"16px\",\n      color: \"#ccc\"\n    }\n  }, \"Welcome to Udhabhabani, the pinnacle of innovation and excellence in the field of Civil Engineering! Organized by the esteemed Civil Engineering Department.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    sx: {\n      display: \"flex\",\n      width: \"90%\",\n      justifyContent: \"space-between\",\n      marginTop: \"30px\",\n      flexDirection: {\n        sm: \"row\",\n        xs: \"column\"\n      },\n      marginBottom: {\n        lg: \"0\",\n        sm: \"20px\",\n        xs: \"0\"\n      },\n      gap: \"10px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_0__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n    variant: \"p\",\n    sx: CStyle\n  }, \"abc (Coordiantor)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n    variant: \"p\",\n    sx: CStyle\n  }, \"+91 78088413\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n    variant: \"p\",\n    sx: CStyle\n  }, \"abc (Coordiantor)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n    variant: \"p\",\n    sx: CStyle\n  }, \"+91 93694664\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    className: \" center2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    onClick: function onClick(event) {\n      return window.location.href = \"https://www.facebook.com/smeiiests/\";\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: \"transform transition duration-100 hover:scale-110 ease-in-out\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    onClick: function onClick(event) {\n      return window.location.href = \"https://www.linkedin.com/in/society-of-mechanical-engineers-iiest-shibpur-89244a193\";\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: \"transform transition duration-100 hover:scale-110 ease-in-out\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    onClick: function onClick(event) {\n      return window.location.href = \"https://www.instagram.com/sme.iiests/?hl=en\";\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: \"transform transition duration-100 hover:scale-110 ease-in-out\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    onClick: function onClick(event) {\n      return window.location.href = \"https://www.youtube.com/@smeiiests7235\";\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: \"transform transition duration-100 hover:scale-110 ease-in-out\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    className: \"terms center1 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n    href: \"/team\",\n    className: \"border-b border-gray-500 cursor-pointer \",\n    style: {\n      color: \"white\",\n      textDecoration: \"none\"\n    }\n  }, \"Meet the team\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"em\", {\n    style: {\n      margin: \"10px 0 20px 0\",\n      textAlign: \"center\"\n    }\n  }, \"Copyright \\xA9 2024 - All rights reserved by Udhabhabani\"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEVBQUUsZUFBZTtNQUFFVyxTQUFTLEVBQUU7SUFBUztFQUFFLEdBQUMsMERBRXpELENBQ0QsQ0FDRixDQUNGLENBQUM7QUFFViIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxjaGFuZFxcT25lRHJpdmVcXERlc2t0b3BcXFVkYmhhYmFuaV9zaXRlXFx1ZGJoYWJhbmlfc29jY2VcXGNvbXBvbmVudHNcXENvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9GYWNlYm9va1wiO1xyXG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9JbnN0YWdyYW1cIjtcclxuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9MaW5rZWRJblwiO1xyXG5pbXBvcnQgWW91VHViZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvWW91VHViZVwiO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB3aWR0aDogXCI5MHZ3XCIsXHJcbiAgbWF4V2lkdGg6IFwiMTIwMHB4XCIsXHJcbiAgXCIubmF2XCI6IHtcclxuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczoge1xyXG4gICAgICBsZzogXCJyZXBlYXQoOCwxZnIpXCIsXHJcbiAgICAgIHNtOiBcInJlcGVhdCg0LDFmcilcIixcclxuICAgICAgeHM6IFwicmVwZWF0KDIsMWZyKVwiLFxyXG4gICAgfSxcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICBnYXA6IFwiMCA0MHB4XCIsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgICBtYXJnaW46IFwiMTBweFwiLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwibGVmdFwiLFxyXG4gICAgfSxcclxuICAgIHBsOiBcIjIwcHhcIixcclxuICB9LFxyXG4gIFwiLmljb25zXCI6IHtcclxuICAgIGZvbnRTaXplOiBcIjEwMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwcHhcIixcclxuICAgIG92ZXJmbG93WTogXCJoaWRkZW5cIixcclxuICAgIFwiYnV0dG9uIHN2Z1wiOiB7XHJcbiAgICAgIGZpbHRlcjogXCJvcGFjaXR5KDAuNilcIixcclxuICAgICAgbWFyZ2luOiBcIjE1cHhcIixcclxuICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgeHM6IFwiNXB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiOmhvdmVyXCI6IHtcclxuICAgICAgICBmaWx0ZXI6IFwib3BhY2l0eSgxKVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBmb250U2l6ZTogXCIzMHB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgXCIudGVybXMgcFwiOiB7XHJcbiAgICBtdDogXCI1cHhcIixcclxuICAgIG1iOiBcIjQwcHhcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgQ1N0eWxlID0ge1xyXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICBjb2xvcjogXCIjY2NjXCIsXHJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBjbGFzc05hbWU9XCJjZW50ZXIxXCJcclxuICAgICAgc3g9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwjZmZmZmZmMWEpXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aHJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6IFwiNzAlXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMXB4XCIsXHJcbiAgICAgICAgICBib3JkZXJUb3A6IFwic29saWQgMXB4ICM1NTVcIixcclxuICAgICAgICAgIG1hcmdpbjogXCI0MHB4IDBcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+PC9ocj5cclxuICAgICAgPEJveCBzeD17c3R5bGVzfSBjbGFzc05hbWU9XCJjZW50ZXIxXCI+XHJcbiAgICAgICAgPEJveCBzeD17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBzeD17eyBtYXJnaW5Cb3R0b206IFwiMjVweFwiIH19PlxyXG4gICAgICAgICAgICBJbmRpYW4gSW5zdGl0dXRlIG9mIEVuZ2luZWVyaW5nIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3ksIFNoaWJwdXJcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwXCJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IHsgbGc6IFwiNjAlXCIsIHNtOiBcIjcwJVwiLCB4czogXCI4MCVcIiB9LFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2NjY1wiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBXZWxjb21lIHRvIFVkaGFiaGFiYW5pLCB0aGUgcGlubmFjbGUgb2YgaW5ub3ZhdGlvbiBhbmQgZXhjZWxsZW5jZSBpbiB0aGUgZmllbGQgb2YgQ2l2aWwgRW5naW5lZXJpbmchIE9yZ2FuaXplZCBieSB0aGUgZXN0ZWVtZWQgQ2l2aWwgRW5naW5lZXJpbmcgRGVwYXJ0bWVudC5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjkwJVwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHsgc206IFwicm93XCIsIHhzOiBcImNvbHVtblwiIH0sXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogeyBsZzogXCIwXCIsIHNtOiBcIjIwcHhcIiwgeHM6IFwiMFwiIH0sXHJcbiAgICAgICAgICAgIGdhcDpcIjEwcHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInBcIiBzeD17Q1N0eWxlfT5cclxuICAgICAgICAgICAgICBhYmMgKENvb3JkaWFudG9yKVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJwXCIgc3g9e0NTdHlsZX0+XHJcbiAgICAgICAgICAgICAgKzkxIDc4MDg4NDEzXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInBcIiBzeD17Q1N0eWxlfT5cclxuICAgICAgICAgICAgICBhYmMgKENvb3JkaWFudG9yKVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJwXCIgc3g9e0NTdHlsZX0+XHJcbiAgICAgICAgICAgICAgKzkxIDkzNjk0NjY0XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9XCIgY2VudGVyMlwiPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NtZWlpZXN0cy9cIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIGNsYXNzTmFtZT1cInRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCBob3ZlcjpzY2FsZS0xMTAgZWFzZS1pbi1vdXRcIiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgKHdpbmRvdy5sb2NhdGlvbi5ocmVmID1cclxuICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc29jaWV0eS1vZi1tZWNoYW5pY2FsLWVuZ2luZWVycy1paWVzdC1zaGlicHVyLTg5MjQ0YTE5M1wiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rZWRJbkljb24gY2xhc3NOYW1lPVwidHJhbnNmb3JtIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIGhvdmVyOnNjYWxlLTExMCBlYXNlLWluLW91dFwiIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAod2luZG93LmxvY2F0aW9uLmhyZWYgPVxyXG4gICAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc21lLmlpZXN0cy8/aGw9ZW5cIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5zdGFncmFtSWNvbiBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgaG92ZXI6c2NhbGUtMTEwIGVhc2UtaW4tb3V0XCIgLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICh3aW5kb3cubG9jYXRpb24uaHJlZiA9XHJcbiAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vQHNtZWlpZXN0czcyMzVcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8WW91VHViZUljb24gY2xhc3NOYW1lPVwidHJhbnNmb3JtIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIGhvdmVyOnNjYWxlLTExMCBlYXNlLWluLW91dFwiIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInRlcm1zIGNlbnRlcjEgXCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL3RlYW1cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS01MDAgY3Vyc29yLXBvaW50ZXIgXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTWVldCB0aGUgdGVhbVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgIDxlbSBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDIwcHggMFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIENvcHlyaWdodCDCqSAyMDI0IC0gQWxsIHJpZ2h0cyByZXNlcnZlZCBieSBVZGhhYmhhYmFuaVxyXG4gICAgICAgICAgPC9lbT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGYWNlYm9va0ljb24iLCJJbnN0YWdyYW1JY29uIiwiTGlua2VkSW5JY29uIiwiWW91VHViZUljb24iLCJUeXBvZ3JhcGh5IiwiSWNvbkJ1dHRvbiIsIkJveCIsIkxpbmsiLCJSZWFjdCIsInN0eWxlcyIsIndpZHRoIiwibWF4V2lkdGgiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImxnIiwic20iLCJ4cyIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJhIiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiZm9udFdlaWdodCIsIm1hcmdpbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBsIiwiaGVpZ2h0Iiwib3ZlcmZsb3dZIiwiX2RlZmluZVByb3BlcnR5IiwiZmlsdGVyIiwibXQiLCJtYiIsIkNTdHlsZSIsInRleHRBbGlnbiIsIkNvbnRhY3QiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3giLCJiYWNrZ3JvdW5kIiwic3R5bGUiLCJib3JkZXJUb3AiLCJ2YXJpYW50IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwib25DbGljayIsImV2ZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Contact.js\n");

/***/ }),

/***/ "./components/ContactCard.js":
/*!***********************************!*\
  !*** ./components/ContactCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Instagram */ \"./node_modules/@mui/icons-material/Instagram.js\");\n/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/LinkedIn */ \"./node_modules/@mui/icons-material/LinkedIn.js\");\n/* harmony import */ var _mui_icons_material_LocalPhone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/LocalPhone */ \"./node_modules/@mui/icons-material/LocalPhone.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar styles = {\n  height: \"300px\",\n  width: \"400px\",\n  img: {\n    margin: \"8px\"\n  },\n  \"div h4\": {\n    margin: \"10px\"\n  },\n  \".title\": {\n    display: \"flex !important\",\n    flexDirection: \"column\"\n  },\n  display: \"flex !important\",\n  flexDirection: \"column\",\n  justifyContent: \"center\",\n  alignItems: \"center\",\n  textAlign: \"center\"\n};\nvar ContactCard = function ContactCard(_ref) {\n  var person = _ref.person;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    hover = _useState2[0],\n    setHover = _useState2[1];\n  var onHover = function onHover() {\n    return setHover(true);\n  };\n  var offHover = function offHover() {\n    return setHover(false);\n  };\n  var toggleHover = function toggleHover() {\n    return setHover(!hover);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    sx: styles,\n    className: \"pcard shadow border bg-gray-800 border-gray-700 text-white \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n    className: \"profile \".concat(hover ? \"profileHover\" : \"\"),\n    onMouseEnter: onHover,\n    onClick: toggleHover,\n    onMouseLeave: offHover,\n    src: \"/images/\".concat(person.imgname),\n    style: {\n      borderRadius: \"50%\"\n    },\n    alt: \"guy\",\n    height: \"200\",\n    width: \"200\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    className: \"title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    className: \" text-xl py-1 font-medium text-gray-50 \"\n  }, person.name, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"text-[14px] pb-1 text-gray-300\"\n  }, person.post), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    className: \" text-[16px]  font-medium text-gray-400 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_LocalPhone__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: \"h-4\"\n  }), \" \", person.phone, \" \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    onMouseEnter: onHover,\n    onClick: toggleHover,\n    onMouseLeave: offHover,\n    className: \"text \".concat(hover ? \"textHover\" : \"\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: person.insta\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: person.link\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksRUFBRXhCLE1BQU0sQ0FBQ3lCO0VBQU0sZ0JBQ3BCekMsMERBQUEsQ0FBQ0MscUVBQWEsTUFBRSxDQUNmLENBQUMsZUFDSkQsMERBQUE7SUFBR3dDLElBQUksRUFBRXhCLE1BQU0sQ0FBQzBCO0VBQUssZ0JBQ25CMUMsMERBQUEsQ0FBQ0Usb0VBQVksTUFBRSxDQUNkLENBQ0EsQ0FDRixDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlWSxXQUFXIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGNoYW5kXFxPbmVEcml2ZVxcRGVza3RvcFxcVWRiaGFiYW5pX3NpdGVcXHVkYmhhYmFuaV9zb2NjZVxcY29tcG9uZW50c1xcQ29udGFjdENhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0luc3RhZ3JhbVwiO1xyXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xpbmtlZEluXCI7XHJcbmltcG9ydCBMb2NhbFBob25lSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NhbFBob25lXCI7XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoZWlnaHQ6IFwiMzAwcHhcIixcclxuICB3aWR0aDogXCI0MDBweFwiLFxyXG4gIGltZzoge1xyXG4gICAgbWFyZ2luOiBcIjhweFwiLFxyXG4gIH0sXHJcbiAgXCJkaXYgaDRcIjoge1xyXG4gICAgbWFyZ2luOiBcIjEwcHhcIixcclxuICB9LFxyXG4gIFwiLnRpdGxlXCI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleCAhaW1wb3J0YW50XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gIH0sXHJcblxyXG4gIGRpc3BsYXk6IFwiZmxleCAhaW1wb3J0YW50XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxufTtcclxuXHJcbmNvbnN0IENvbnRhY3RDYXJkID0gKHsgcGVyc29uIH0pID0+IHtcclxuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25Ib3ZlciA9ICgpID0+IHNldEhvdmVyKHRydWUpO1xyXG4gIGNvbnN0IG9mZkhvdmVyID0gKCkgPT4gc2V0SG92ZXIoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZUhvdmVyID0gKCkgPT4gc2V0SG92ZXIoIWhvdmVyKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgc3g9e3N0eWxlc31cclxuICAgICAgY2xhc3NOYW1lPVwicGNhcmQgc2hhZG93IGJvcmRlciBiZy1ncmF5LTgwMCBib3JkZXItZ3JheS03MDAgdGV4dC13aGl0ZSBcIlxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlICR7aG92ZXIgPyBcInByb2ZpbGVIb3ZlclwiIDogXCJcIn1gfVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25Ib3Zlcn1cclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVIb3Zlcn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e29mZkhvdmVyfVxyXG4gICAgICAgIHNyYz17YC9pbWFnZXMvJHtwZXJzb24uaW1nbmFtZX1gfVxyXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1MCVcIiB9fVxyXG4gICAgICAgIGFsdD1cImd1eVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjAwXCJcclxuICAgICAgICB3aWR0aD1cIjIwMFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiIHRleHQteGwgcHktMSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAgXCI+XHJcbiAgICAgICAgICB7cGVyc29uLm5hbWV9e1wiIFwifVxyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTRweF0gcGItMSB0ZXh0LWdyYXktMzAwXCI+e3BlcnNvbi5wb3N0fTwvc3Bhbj5cclxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiIHRleHQtWzE2cHhdICBmb250LW1lZGl1bSB0ZXh0LWdyYXktNDAwIFwiPlxyXG4gICAgICAgICAgPExvY2FsUGhvbmVJY29uIGNsYXNzTmFtZT1cImgtNFwiIC8+IHtwZXJzb24ucGhvbmV9e1wiIFwifVxyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPEJveFxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25Ib3Zlcn1cclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVIb3Zlcn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e29mZkhvdmVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YHRleHQgJHtob3ZlciA/IFwidGV4dEhvdmVyXCIgOiBcIlwifWB9XHJcbiAgICAgID5cclxuICAgICAgICA8YSBocmVmPXtwZXJzb24uaW5zdGF9PlxyXG4gICAgICAgICAgPEluc3RhZ3JhbUljb24gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj17cGVyc29uLmxpbmt9PlxyXG4gICAgICAgICAgPExpbmtlZEluSWNvbiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIkltYWdlIiwiUmVhY3QiLCJJbnN0YWdyYW1JY29uIiwiTGlua2VkSW5JY29uIiwiTG9jYWxQaG9uZUljb24iLCJzdHlsZXMiLCJoZWlnaHQiLCJ3aWR0aCIsImltZyIsIm1hcmdpbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidGV4dEFsaWduIiwiQ29udGFjdENhcmQiLCJfcmVmIiwicGVyc29uIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaG92ZXIiLCJzZXRIb3ZlciIsIm9uSG92ZXIiLCJvZmZIb3ZlciIsInRvZ2dsZUhvdmVyIiwiY3JlYXRlRWxlbWVudCIsInN4IiwiY2xhc3NOYW1lIiwiY29uY2F0Iiwib25Nb3VzZUVudGVyIiwib25DbGljayIsIm9uTW91c2VMZWF2ZSIsInNyYyIsImltZ25hbWUiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsImFsdCIsIm5hbWUiLCJwb3N0IiwicGhvbmUiLCJocmVmIiwiaW5zdGEiLCJsaW5rIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContactCard.js\n");

/***/ }),

/***/ "./components/Divider2.js":
/*!********************************!*\
  !*** ./components/Divider2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar Divider2 = function Divider2() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('calc(145% + 1.3px)'),\n    _useState2 = _slicedToArray(_useState, 2),\n    svgWidth = _useState2[0],\n    setSvgWidth = _useState2[1];\n  var boxStyle = {\n    position: 'absolute',\n    bottom: \"0vh\",\n    left: 0,\n    width: '100%',\n    overflow: 'hidden',\n    lineHeight: 0,\n    zIndex: \"1\"\n  };\n  var svgStyle = {\n    position: 'relative',\n    display: 'block',\n    width: '100%',\n    height: '177px'\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    sx: boxStyle,\n    className: \"custom-shape-divider-bottom-1703510648\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    \"data-name\": \"Layer 1\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 1200 120\",\n    preserveAspectRatio: \"none\",\n    style: svgStyle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"defs\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"linearGradient\", {\n    id: \"shapeGradient\",\n    x1: \"0%\",\n    y1: \"0%\",\n    x2: \"100%\",\n    y2: \"0%\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", {\n    offset: \"0%\",\n    stopColor: \"black\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", {\n    offset: \"50%\",\n    stopColor: \"rgb(39, 47, 63)\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", {\n    offset: \"100%\",\n    stopColor: \"black\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z\",\n    fill: \"url(#shapeGradient)\"\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RpdmlkZXIyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ087QUFDQztBQUVsQyxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBQ3JCLElBQUFDLFNBQUEsR0FBZ0NILCtDQUFRLENBQUMsb0JBQW9CLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdkRHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFFNUIsSUFBTUksUUFBUSxHQUFHO0lBQ2ZDLFFBQVEsRUFBRSxVQUFVO0lBQ3BCQyxNQUFNLEVBQUUsS0FBSztJQUNiQyxJQUFJLEVBQUUsQ0FBQztJQUNQQyxLQUFLLEVBQUUsTUFBTTtJQUNiQyxRQUFRLEVBQUUsUUFBUTtJQUNsQkMsVUFBVSxFQUFFLENBQUM7SUFDYkMsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUVELElBQU1DLFFBQVEsR0FBRztJQUNmUCxRQUFRLEVBQUUsVUFBVTtJQUNwQlEsT0FBTyxFQUFFLE9BQU87SUFDaEJMLEtBQUssRUFBRSxNQUFNO0lBQ2JNLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFFRCxvQkFDRW5CLDBEQUFBLENBQUNFLDRDQUFHO0lBQUNtQixFQUFFLEVBQUVaLFFBQVM7SUFBQ2EsU0FBUyxFQUFDO0VBQXdDLGdCQUNuRXRCLDBEQUFBO0lBQ0UsYUFBVSxTQUFTO0lBQ25CdUIsS0FBSyxFQUFDLDRCQUE0QjtJQUNsQ0MsT0FBTyxFQUFDLGNBQWM7SUFDdEJDLG1CQUFtQixFQUFDLE1BQU07SUFDMUJDLEtBQUssRUFBRVQ7RUFBUyxnQkFFaEJqQiwwREFBQSw0QkFDRUEsMERBQUE7SUFBZ0IyQixFQUFFLEVBQUMsZUFBZTtJQUFDQyxFQUFFLEVBQUMsSUFBSTtJQUFDQyxFQUFFLEVBQUMsSUFBSTtJQUFDQyxFQUFFLEVBQUMsTUFBTTtJQUFDQyxFQUFFLEVBQUM7RUFBSSxnQkFDbEUvQiwwREFBQTtJQUFNZ0MsTUFBTSxFQUFDLElBQUk7SUFBQ0MsU0FBUyxFQUFDO0VBQU8sQ0FBRSxDQUFDLGVBQ3RDakMsMERBQUE7SUFBTWdDLE1BQU0sRUFBQyxLQUFLO0lBQUNDLFNBQVMsRUFBQztFQUFpQixDQUFFLENBQUMsZUFDakRqQywwREFBQTtJQUFNZ0MsTUFBTSxFQUFDLE1BQU07SUFBQ0MsU0FBUyxFQUFDO0VBQU8sQ0FBRSxDQUN6QixDQUNaLENBQUMsZUFDUGpDLDBEQUFBO0lBQ0VrQyxDQUFDLEVBQUMsNkZBQTZGO0lBQy9GQyxJQUFJLEVBQUM7RUFBcUIsQ0FDckIsQ0FDSixDQUNGLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVoQyxRQUFRIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGNoYW5kXFxPbmVEcml2ZVxcRGVza3RvcFxcVWRiaGFiYW5pX3NpdGVcXHVkYmhhYmFuaV9zb2NjZVxcY29tcG9uZW50c1xcRGl2aWRlcjIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL3N5c3RlbVwiO1xyXG5cclxuY29uc3QgRGl2aWRlcjIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N2Z1dpZHRoLCBzZXRTdmdXaWR0aF0gPSB1c2VTdGF0ZSgnY2FsYygxNDUlICsgMS4zcHgpJyk7XHJcbiAgXHJcbiAgY29uc3QgYm94U3R5bGUgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogXCIwdmhcIixcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgbGluZUhlaWdodDogMCxcclxuICAgIHpJbmRleDogXCIxXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3ZnU3R5bGUgPSB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTc3cHgnLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtib3hTdHlsZX0gY2xhc3NOYW1lPVwiY3VzdG9tLXNoYXBlLWRpdmlkZXItYm90dG9tLTE3MDM1MTA2NDhcIj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIGRhdGEtbmFtZT1cIkxheWVyIDFcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMTIwMCAxMjBcIlxyXG4gICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcclxuICAgICAgICBzdHlsZT17c3ZnU3R5bGV9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cInNoYXBlR3JhZGllbnRcIiB4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMTAwJVwiIHkyPVwiMCVcIj5cclxuICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCJibGFja1wiIC8+XHJcbiAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjUwJVwiIHN0b3BDb2xvcj1cInJnYigzOSwgNDcsIDYzKVwiIC8+XHJcbiAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCJibGFja1wiIC8+XHJcbiAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDwvZGVmcz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk02MDAsMTEyLjc3QzI2OC42MywxMTIuNzcsMCw2NS41MiwwLDcuMjNWMTIwSDEyMDBWNy4yM0MxMjAwLDY1LjUyLDkzMS4zNywxMTIuNzcsNjAwLDExMi43N1pcIlxyXG4gICAgICAgICAgZmlsbD1cInVybCgjc2hhcGVHcmFkaWVudClcIlxyXG4gICAgICAgID48L3BhdGg+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpdmlkZXIyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkRpdmlkZXIyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic3ZnV2lkdGgiLCJzZXRTdmdXaWR0aCIsImJveFN0eWxlIiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJvdmVyZmxvdyIsImxpbmVIZWlnaHQiLCJ6SW5kZXgiLCJzdmdTdHlsZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJjcmVhdGVFbGVtZW50Iiwic3giLCJjbGFzc05hbWUiLCJ4bWxucyIsInZpZXdCb3giLCJwcmVzZXJ2ZUFzcGVjdFJhdGlvIiwic3R5bGUiLCJpZCIsIngxIiwieTEiLCJ4MiIsInkyIiwib2Zmc2V0Iiwic3RvcENvbG9yIiwiZCIsImZpbGwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Divider2.js\n");

/***/ }),

/***/ "./components/ImageListComp.js":
/*!*************************************!*\
  !*** ./components/ImageListComp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageListComp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_ImageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/ImageList */ \"./node_modules/@mui/material/node/ImageList/index.js\");\n/* harmony import */ var _mui_material_ImageList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ImageList__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_ImageListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/ImageListItem */ \"./node_modules/@mui/material/node/ImageListItem/index.js\");\n/* harmony import */ var _mui_material_ImageListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ImageListItem__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_ImageListItemBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ImageListItemBar */ \"./node_modules/@mui/material/node/ImageListItemBar/index.js\");\n/* harmony import */ var _mui_material_ImageListItemBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ImageListItemBar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/node/IconButton/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nfunction srcset(image, width, height) {\n  var rows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n  var cols = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;\n  return {\n    src: \"\".concat(image, \"?w=\").concat(width * cols, \"&h=\").concat(height * rows, \"&fit=crop&auto=format\"),\n    srcSet: \"\".concat(image, \"?w=\").concat(width * cols, \"&h=\").concat(height * rows, \"&fit=crop&auto=format&dpr=2 2x\")\n  };\n}\nvar styles = {\n  // overflow:\"hidden\",\n  width: \"1000px\",\n  height: \"450px\",\n  maxHeight: \"90vh\",\n  maxWidth: \"90vw\",\n  transform: \"translateZ(0)\",\n  margin: \"10px auto\",\n  gridTemplateColumns: {\n    lg: \"repeat(12,1fr) !important\",\n    md: \"repeat(12,1fr) !important\",\n    sm: \"repeat(6,1fr) !important\",\n    xs: \"repeat(6,1fr) !important\"\n  }\n};\nfunction ImageListComp() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_ImageList__WEBPACK_IMPORTED_MODULE_1___default()), {\n    sx: styles,\n    rowHeight: 200,\n    gap: 1\n  }, itemData.map(function (item, idx) {\n    var cols = item.cols;\n    var rows = item.rows;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_ImageListItem__WEBPACK_IMPORTED_MODULE_2___default()), {\n      key: idx,\n      cols: cols,\n      rows: rows\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", _extends({}, srcset(item.img, 250, 200, rows, cols), {\n      alt: item.title,\n      loading: \"lazy\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_ImageListItemBar__WEBPACK_IMPORTED_MODULE_3___default()), {\n      sx: {\n        background: \"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, \" + \"rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)\"\n      },\n      title: item.title,\n      position: \"top\",\n      actionIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default())\n      // sx={{ color: \"white\" }}\n      // aria-label={`star ${item.title}`}\n      , null),\n      actionPosition: \"left\"\n    }));\n  }));\n}\nvar itemData = [{\n  img: \"/images/imag1.jpg\",\n  // title: \"imag1\",\n  cols: 6,\n  rows: 4\n}, {\n  img: \"/images/imagex3.jpg\",\n  // title: \"Burger\",\n  cols: 3,\n  rows: 2\n}, {\n  img: \"/images/imag3.jpg\",\n  // title: \"Camera\",\n  cols: 3,\n  rows: 2\n}, {\n  img: \"/images/imag4.jpg\",\n  // title: \"Coffee\",\n  cols: 3,\n  rows: 2\n}, {\n  img: \"/images/imagex2.jpg\",\n  // title: \"Mushrooms\",\n  cols: 3,\n  rows: 2\n}, {\n  img: \"/images/imagex3.jpg\",\n  // title: \"Breakfast\",\n  cols: 9,\n  rows: 3\n},\n// {\n//   img: \"/images/imag7.jpg\",\n//   // title: \"Burger\",\n//   cols: 3,\n//   rows: 3,\n// },\n{\n  img: \"/images/imag8.jpg\",\n  // title: \"Camera\",\n  cols: 3,\n  rows: 2\n}, {\n  img: \"/images/imag10.jpg\",\n  // title: \"Mushrooms\",\n  cols: 3,\n  rows: 1\n}, {\n  img: \"/images/imag9.jpg\",\n  // title: \"Coffee\",\n  cols: 12,\n  rows: 2\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNQSixJQUFJLEVBQUU7QUFDUixDQUFDLEVBQ0Q7RUFDRTZCLEdBQUcsRUFBRSxtQkFBbUI7RUFDeEI7RUFDQXpCLElBQUksRUFBRSxDQUFDO0VBQ1BKLElBQUksRUFBRTtBQUNSLENBQUMsRUFDRDtFQUNFNkIsR0FBRyxFQUFFLG1CQUFtQjtFQUN4QjtFQUNBekIsSUFBSSxFQUFFLENBQUM7RUFDUEosSUFBSSxFQUFFO0FBQ1IsQ0FBQyxFQUNEO0VBQ0U2QixHQUFHLEVBQUUscUJBQXFCO0VBQzFCO0VBQ0F6QixJQUFJLEVBQUUsQ0FBQztFQUNQSixJQUFJLEVBQUU7QUFDUixDQUFDLEVBQ0Q7RUFDRTZCLEdBQUcsRUFBRSxxQkFBcUI7RUFDMUI7RUFDQXpCLElBQUksRUFBRSxDQUFDO0VBQ1BKLElBQUksRUFBRTtBQUNSLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFNkIsR0FBRyxFQUFFLG1CQUFtQjtFQUN4QjtFQUNBekIsSUFBSSxFQUFFLENBQUM7RUFDUEosSUFBSSxFQUFFO0FBQ1IsQ0FBQyxFQUNEO0VBQ0U2QixHQUFHLEVBQUUsb0JBQW9CO0VBQ3pCO0VBQ0F6QixJQUFJLEVBQUUsQ0FBQztFQUNQSixJQUFJLEVBQUU7QUFDUixDQUFDLEVBQ0Q7RUFDRTZCLEdBQUcsRUFBRSxtQkFBbUI7RUFDeEI7RUFDQXpCLElBQUksRUFBRSxFQUFFO0VBQ1JKLElBQUksRUFBRTtBQUNSLENBQUMsQ0FDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxjaGFuZFxcT25lRHJpdmVcXERlc2t0b3BcXFVkYmhhYmFuaV9zaXRlXFx1ZGJoYWJhbmlfc29jY2VcXGNvbXBvbmVudHNcXEltYWdlTGlzdENvbXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZUxpc3QgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSW1hZ2VMaXN0XCI7XHJcbmltcG9ydCBJbWFnZUxpc3RJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL0ltYWdlTGlzdEl0ZW1cIjtcclxuaW1wb3J0IEltYWdlTGlzdEl0ZW1CYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSW1hZ2VMaXN0SXRlbUJhclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBzcmNzZXQoaW1hZ2UsIHdpZHRoLCBoZWlnaHQsIHJvd3MgPSAxLCBjb2xzID0gMSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBzcmM6IGAke2ltYWdlfT93PSR7d2lkdGggKiBjb2xzfSZoPSR7aGVpZ2h0ICogcm93c30mZml0PWNyb3AmYXV0bz1mb3JtYXRgLFxyXG4gICAgc3JjU2V0OiBgJHtpbWFnZX0/dz0ke3dpZHRoICogY29sc30maD0ke1xyXG4gICAgICBoZWlnaHQgKiByb3dzXHJcbiAgICB9JmZpdD1jcm9wJmF1dG89Zm9ybWF0JmRwcj0yIDJ4YCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgLy8gb3ZlcmZsb3c6XCJoaWRkZW5cIixcclxuICB3aWR0aDogXCIxMDAwcHhcIixcclxuICBoZWlnaHQ6IFwiNDUwcHhcIixcclxuICBtYXhIZWlnaHQ6IFwiOTB2aFwiLFxyXG4gIG1heFdpZHRoOiBcIjkwdndcIixcclxuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWigwKVwiLFxyXG4gIG1hcmdpbjogXCIxMHB4IGF1dG9cIixcclxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiB7XHJcbiAgICBsZzogXCJyZXBlYXQoMTIsMWZyKSAhaW1wb3J0YW50XCIsXHJcbiAgICBtZDogXCJyZXBlYXQoMTIsMWZyKSAhaW1wb3J0YW50XCIsXHJcbiAgICBzbTogXCJyZXBlYXQoNiwxZnIpICFpbXBvcnRhbnRcIixcclxuICAgIHhzOiBcInJlcGVhdCg2LDFmcikgIWltcG9ydGFudFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUxpc3RDb21wKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2VMaXN0IHN4PXtzdHlsZXN9IHJvd0hlaWdodD17MjAwfSBnYXA9ezF9PlxyXG4gICAgICB7aXRlbURhdGEubWFwKChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgICBjb25zdCBjb2xzID0gaXRlbS5jb2xzO1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBpdGVtLnJvd3M7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8SW1hZ2VMaXN0SXRlbSBrZXk9e2lkeH0gY29scz17Y29sc30gcm93cz17cm93c30+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICB7Li4uc3Jjc2V0KGl0ZW0uaW1nLCAyNTAsIDIwMCwgcm93cywgY29scyl9XHJcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEltYWdlTGlzdEl0ZW1CYXJcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDAuNykgMCUsIFwiICtcclxuICAgICAgICAgICAgICAgICAgXCJyZ2JhKDAsMCwwLDAuMykgNzAlLCByZ2JhKDAsMCwwLDApIDEwMCUpXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICBwb3NpdGlvbj1cInRvcFwiXHJcbiAgICAgICAgICAgICAgYWN0aW9uSWNvbj17XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgLy8gc3g9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLy8gYXJpYS1sYWJlbD17YHN0YXIgJHtpdGVtLnRpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8U3RhckJvcmRlckljb24gLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGFjdGlvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0ltYWdlTGlzdEl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0ltYWdlTGlzdD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBpdGVtRGF0YSA9IFtcclxuICB7XHJcbiAgICBpbWc6IFwiL2ltYWdlcy9pbWFnMS5qcGdcIixcclxuICAgIC8vIHRpdGxlOiBcImltYWcxXCIsXHJcbiAgICBjb2xzOiA2LFxyXG4gICAgcm93czogNCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogXCIvaW1hZ2VzL2ltYWdleDMuanBnXCIsXHJcbiAgICAvLyB0aXRsZTogXCJCdXJnZXJcIixcclxuICAgIGNvbHM6IDMsXHJcbiAgICByb3dzOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiBcIi9pbWFnZXMvaW1hZzMuanBnXCIsXHJcbiAgICAvLyB0aXRsZTogXCJDYW1lcmFcIixcclxuICAgIGNvbHM6IDMsXHJcbiAgICByb3dzOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiBcIi9pbWFnZXMvaW1hZzQuanBnXCIsXHJcbiAgICAvLyB0aXRsZTogXCJDb2ZmZWVcIixcclxuICAgIGNvbHM6IDMsXHJcbiAgICByb3dzOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiBcIi9pbWFnZXMvaW1hZ2V4Mi5qcGdcIixcclxuICAgIC8vIHRpdGxlOiBcIk11c2hyb29tc1wiLFxyXG4gICAgY29sczogMyxcclxuICAgIHJvd3M6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6IFwiL2ltYWdlcy9pbWFnZXgzLmpwZ1wiLFxyXG4gICAgLy8gdGl0bGU6IFwiQnJlYWtmYXN0XCIsXHJcbiAgICBjb2xzOiA5LFxyXG4gICAgcm93czogMyxcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGltZzogXCIvaW1hZ2VzL2ltYWc3LmpwZ1wiLFxyXG4gIC8vICAgLy8gdGl0bGU6IFwiQnVyZ2VyXCIsXHJcbiAgLy8gICBjb2xzOiAzLFxyXG4gIC8vICAgcm93czogMyxcclxuICAvLyB9LFxyXG4gIHtcclxuICAgIGltZzogXCIvaW1hZ2VzL2ltYWc4LmpwZ1wiLFxyXG4gICAgLy8gdGl0bGU6IFwiQ2FtZXJhXCIsXHJcbiAgICBjb2xzOiAzLFxyXG4gICAgcm93czogMixcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogXCIvaW1hZ2VzL2ltYWcxMC5qcGdcIixcclxuICAgIC8vIHRpdGxlOiBcIk11c2hyb29tc1wiLFxyXG4gICAgY29sczogMyxcclxuICAgIHJvd3M6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6IFwiL2ltYWdlcy9pbWFnOS5qcGdcIixcclxuICAgIC8vIHRpdGxlOiBcIkNvZmZlZVwiLFxyXG4gICAgY29sczogMTIsXHJcbiAgICByb3dzOiAyLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlTGlzdCIsIkltYWdlTGlzdEl0ZW0iLCJJbWFnZUxpc3RJdGVtQmFyIiwiSWNvbkJ1dHRvbiIsInNyY3NldCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJyb3dzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29scyIsInNyYyIsImNvbmNhdCIsInNyY1NldCIsInN0eWxlcyIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwidHJhbnNmb3JtIiwibWFyZ2luIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImxnIiwibWQiLCJzbSIsInhzIiwiSW1hZ2VMaXN0Q29tcCIsImNyZWF0ZUVsZW1lbnQiLCJzeCIsInJvd0hlaWdodCIsImdhcCIsIml0ZW1EYXRhIiwibWFwIiwiaXRlbSIsImlkeCIsImtleSIsIl9leHRlbmRzIiwiaW1nIiwiYWx0IiwidGl0bGUiLCJsb2FkaW5nIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwiYWN0aW9uSWNvbiIsImFjdGlvblBvc2l0aW9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ImageListComp.js\n");

/***/ }),

/***/ "./components/LoadingComp.js":
/*!***********************************!*\
  !*** ./components/LoadingComp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoadingComp)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction LoadingComp() {\n  var styles = {\n    background: \"black\",\n    height: \"100vh\",\n    width: \"100vw\",\n    \".loadingText\": {\n      display: \"flex\",\n      flexDirection: \"row\"\n    }\n  };\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n    _useState2 = _slicedToArray(_useState, 2),\n    dots = _useState2[0],\n    setDots = _useState2[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setTimeout(function () {\n      setDots((dots + 1) % 3);\n    }, 500);\n  }, [dots]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    sx: styles,\n    className: \"center1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n    src: \"/images/load.gif\",\n    alt: \"loading...\",\n    height: 300,\n    width: 500\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    className: \"loadingText\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n    variant: \"p\"\n  }, \"Loading\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"p\", null, \"\\xA0.\"), dots >= 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"p\", null, \"\\xA0.\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"p\", null, \"\\xA0\\xA0\"), dots >= 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"p\", null, \"\\xA0.\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"p\", null, \"\\xA0\\xA0\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRpbmdDb21wLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Q7QUFDSDtBQUNhO0FBQ2xCO0FBR1gsU0FBU00sV0FBV0EsQ0FBQSxFQUFHO0VBQ3BDLElBQU1DLE1BQU0sR0FBRztJQUNiQyxVQUFVLEVBQUMsT0FBTztJQUNsQkMsTUFBTSxFQUFFLE9BQU87SUFDZkMsS0FBSyxFQUFFLE9BQU87SUFDZCxjQUFjLEVBQUU7TUFDZEMsT0FBTyxFQUFFLE1BQU07TUFDZkMsYUFBYSxFQUFFO0lBQ2pCO0VBQ0YsQ0FBQztFQUVELElBQUFDLFNBQUEsR0FBd0JULCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFVLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVCRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBRXBCWCxnREFBUyxDQUFDLFlBQU07SUFDZGUsVUFBVSxDQUFDLFlBQU07TUFDZkQsT0FBTyxDQUFDLENBQUNELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDVCxDQUFDLEVBQUUsQ0FBQ0EsSUFBSSxDQUFDLENBQUM7RUFFVixvQkFDRVgsMERBQUEsQ0FBQ0osNENBQUc7SUFBQ21CLEVBQUUsRUFBRWIsTUFBTztJQUFDYyxTQUFTLEVBQUM7RUFBUyxnQkFDbENoQiwwREFBQSxDQUFDSCxtREFBSztJQUNKb0IsR0FBRyxFQUFDLGtCQUFrQjtJQUN0QkMsR0FBRyxFQUFDLFlBQVk7SUFDaEJkLE1BQU0sRUFBRSxHQUFJO0lBQ1pDLEtBQUssRUFBRTtFQUFJLENBQ1osQ0FBQyxlQUNGTCwwREFBQSxDQUFDSiw0Q0FBRztJQUFDb0IsU0FBUyxFQUFDO0VBQWEsZ0JBQzFCaEIsMERBQUEsQ0FBQ0wscURBQVU7SUFBQ3dCLE9BQU8sRUFBQztFQUFHLEdBQUMsU0FBbUIsQ0FBQyxlQUM1Q25CLDBEQUFBLFlBQUcsT0FBVSxDQUFDLEVBQ2JXLElBQUksSUFBSSxDQUFDLGdCQUFHWCwwREFBQSxZQUFHLE9BQVUsQ0FBQyxnQkFBR0EsMERBQUEsWUFBRyxVQUFlLENBQUMsRUFDaERXLElBQUksSUFBSSxDQUFDLGdCQUFHWCwwREFBQSxZQUFHLE9BQVUsQ0FBQyxnQkFBR0EsMERBQUEsWUFBRyxVQUFlLENBQzdDLENBQ0YsQ0FBQztBQUVWIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGNoYW5kXFxPbmVEcml2ZVxcRGVza3RvcFxcVWRiaGFiYW5pX3NpdGVcXHVkYmhhYmFuaV9zb2NjZVxcY29tcG9uZW50c1xcTG9hZGluZ0NvbXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL3N5c3RlbVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmdDb21wKCkge1xyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGJhY2tncm91bmQ6XCJibGFja1wiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgXCIubG9hZGluZ1RleHRcIjoge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2RvdHMsIHNldERvdHNdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RG90cygoZG90cyArIDEpICUgMyk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH0sIFtkb3RzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXN9IGNsYXNzTmFtZT1cImNlbnRlcjFcIj5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2FkLmdpZlwiXHJcbiAgICAgICAgYWx0PVwibG9hZGluZy4uLlwiXHJcbiAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgLz5cclxuICAgICAgPEJveCBjbGFzc05hbWU9XCJsb2FkaW5nVGV4dFwiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJwXCI+TG9hZGluZzwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8cD4mbmJzcDsuPC9wPlxyXG4gICAgICAgIHtkb3RzID49IDEgPyA8cD4mbmJzcDsuPC9wPiA6IDxwPiZuYnNwOyZuYnNwOzwvcD59XHJcbiAgICAgICAge2RvdHMgPj0gMiA/IDxwPiZuYnNwOy48L3A+IDogPHA+Jm5ic3A7Jm5ic3A7PC9wPn1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJUeXBvZ3JhcGh5IiwiQm94IiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiTG9hZGluZ0NvbXAiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImRvdHMiLCJzZXREb3RzIiwic2V0VGltZW91dCIsImNyZWF0ZUVsZW1lbnQiLCJzeCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInZhcmlhbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoadingComp.js\n");

/***/ }),

/***/ "./components/LoadingContext.js":
/*!**************************************!*\
  !*** ./components/LoadingContext.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoadingStateProvider: () => (/* binding */ LoadingStateProvider),\n/* harmony export */   useLoading: () => (/* binding */ useLoading)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nvar LocalStateProvider = LocalStateContext.Provider;\nfunction LoadingStateProvider(_ref) {\n  var children = _ref.children;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    loading = _useState2[0],\n    setLoading = _useState2[1];\n  var startLoading = function startLoading() {\n    return setLoading(true);\n  };\n  var stopLoading = function stopLoading() {\n    return setLoading(false);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LocalStateProvider, {\n    value: {\n      loading: loading,\n      startLoading: startLoading,\n      stopLoading: stopLoading\n    }\n  }, children);\n}\nfunction useLoading() {\n  var all = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocalStateContext);\n  return all;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRpbmdDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDRjtBQUNLO0FBQ1o7QUFHMUIsSUFBTUksaUJBQWlCLGdCQUFHRixvREFBYSxDQUFDLENBQUM7QUFFekMsSUFBTUcsa0JBQWtCLEdBQUdELGlCQUFpQixDQUFDRSxRQUFRO0FBRXJELFNBQVNDLG9CQUFvQkEsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBWkMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFDdEMsSUFBQUMsU0FBQSxHQUE4QlQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdENHLE9BQU8sR0FBQUYsVUFBQTtJQUFFRyxVQUFVLEdBQUFILFVBQUE7RUFFMUIsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUE7SUFBQSxPQUFTRCxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQUE7RUFDM0MsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUE7SUFBQSxPQUFTRixVQUFVLENBQUMsS0FBSyxDQUFDO0VBQUE7RUFFM0Msb0JBQ0VYLDBEQUFBLENBQUNFLGtCQUFrQjtJQUFDYSxLQUFLLEVBQUU7TUFBRUwsT0FBTyxFQUFQQSxPQUFPO01BQUVFLFlBQVksRUFBWkEsWUFBWTtNQUFFQyxXQUFXLEVBQVhBO0lBQVk7RUFBRSxHQUMvRFAsUUFDaUIsQ0FBQztBQUV6QjtBQUVBLFNBQVNVLFVBQVVBLENBQUEsRUFBRztFQUNwQixJQUFNQyxHQUFHLEdBQUdwQixpREFBVSxDQUFDSSxpQkFBaUIsQ0FBQztFQUN6QyxPQUFPZ0IsR0FBRztBQUNaIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGNoYW5kXFxPbmVEcml2ZVxcRGVza3RvcFxcVWRiaGFiYW5pX3NpdGVcXHVkYmhhYmFuaV9zb2NjZVxcY29tcG9uZW50c1xcTG9hZGluZ0NvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgTG9jYWxTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBMb2NhbFN0YXRlUHJvdmlkZXIgPSBMb2NhbFN0YXRlQ29udGV4dC5Qcm92aWRlcjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdTdGF0ZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRMb2FkaW5nID0gKCkgPT4gc2V0TG9hZGluZyh0cnVlKTtcclxuICBjb25zdCBzdG9wTG9hZGluZyA9ICgpID0+IHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvY2FsU3RhdGVQcm92aWRlciB2YWx1ZT17eyBsb2FkaW5nLCBzdGFydExvYWRpbmcsIHN0b3BMb2FkaW5nIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0xvY2FsU3RhdGVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VMb2FkaW5nKCkge1xyXG4gIGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpO1xyXG4gIHJldHVybiBhbGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7IExvYWRpbmdTdGF0ZVByb3ZpZGVyLCB1c2VMb2FkaW5nIH07XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiUmVhY3QiLCJMb2NhbFN0YXRlQ29udGV4dCIsIkxvY2FsU3RhdGVQcm92aWRlciIsIlByb3ZpZGVyIiwiTG9hZGluZ1N0YXRlUHJvdmlkZXIiLCJfcmVmIiwiY2hpbGRyZW4iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0YXJ0TG9hZGluZyIsInN0b3BMb2FkaW5nIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwidXNlTG9hZGluZyIsImFsbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LoadingContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_AppbarComp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AppbarComp */ \"./components/AppbarComp.js\");\n/* harmony import */ var _components_LoadingComp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LoadingComp */ \"./components/LoadingComp.js\");\n/* harmony import */ var _components_LoadingContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LoadingContext */ \"./components/LoadingContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_theme_darkTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/theme/darkTheme */ \"./styles/theme/darkTheme.js\");\n/* harmony import */ var _utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utility/createEmotionCache */ \"./utility/createEmotionCache.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_0__, _utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_12__]);\n([_emotion_react__WEBPACK_IMPORTED_MODULE_0__, _utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar clientSideEmotionCache = (0,_utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\nvar MyApp = function MyApp(props) {\n  var Component = props.Component,\n    _props$emotionCache = props.emotionCache,\n    emotionCache = _props$emotionCache === void 0 ? clientSideEmotionCache : _props$emotionCache,\n    pageProps = props.pageProps;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    loading = _useState2[0],\n    setLoading = _useState2[1];\n  var startLoading = function startLoading() {\n    return setLoading(true);\n  };\n  var stopLoading = function stopLoading() {\n    return setLoading(false);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    aos__WEBPACK_IMPORTED_MODULE_1___default().init({\n      duration: 800,\n      once: false\n    });\n    window.addEventListener(\"loadstart\", startLoading);\n    window.addEventListener(\"load\", stopLoading);\n    next_router__WEBPACK_IMPORTED_MODULE_4__.Router.events.on(\"routeChangeStart\", startLoading);\n    next_router__WEBPACK_IMPORTED_MODULE_4__.Router.events.on(\"routeChangeComplete\", stopLoading);\n    return function () {\n      window.removeEventListener(\"loadstart\", startLoading);\n      window.removeEventListener(\"load\", stopLoading);\n      next_router__WEBPACK_IMPORTED_MODULE_4__.Router.events.off(\"routeChangeStart\", startLoading);\n      next_router__WEBPACK_IMPORTED_MODULE_4__.Router.events.off(\"routeChangeComplete\", stopLoading);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.CacheProvider, {\n    value: emotionCache\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__.ThemeProvider, {\n    theme: _styles_theme_darkTheme__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__.CssBaseline, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LoadingContext__WEBPACK_IMPORTED_MODULE_9__.LoadingStateProvider, null, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_LoadingComp__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_AppbarComp__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Component, pageProps))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\nMyApp.propTypes = {\n  Component: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().elementType).isRequired,\n  emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),\n  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object).isRequired\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlCLENBQUMsQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxjaGFuZFxcT25lRHJpdmVcXERlc2t0b3BcXFVkYmhhYmFuaV9zaXRlXFx1ZGJoYWJhbmlfc29jY2VcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IHsgQ3NzQmFzZWxpbmUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcclxuaW1wb3J0IFwiYW9zL2Rpc3QvYW9zLmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBiYXJDb21wIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcGJhckNvbXBcIjtcclxuaW1wb3J0IExvYWRpbmdDb21wIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdDb21wXCI7XHJcbmltcG9ydCB7IExvYWRpbmdTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ0NvbnRleHRcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBkYXJrVGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZS9kYXJrVGhlbWVcIjtcclxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tIFwiLi4vdXRpbGl0eS9jcmVhdGVFbW90aW9uQ2FjaGVcIjtcclxuY29uc3QgY2xpZW50U2lkZUVtb3Rpb25DYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xyXG5jb25zdCBNeUFwcCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIGNvbnN0IHN0b3BMb2FkaW5nID0gKCkgPT4gc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEFPUy5pbml0KHtcclxuICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgb25jZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZHN0YXJ0XCIsIHN0YXJ0TG9hZGluZyk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgc3RvcExvYWRpbmcpO1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgc3RhcnRMb2FkaW5nKTtcclxuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIHN0b3BMb2FkaW5nKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZHN0YXJ0XCIsIHN0YXJ0TG9hZGluZyk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBzdG9wTG9hZGluZyk7XHJcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBzdGFydExvYWRpbmcpO1xyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgc3RvcExvYWRpbmcpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2RhcmtUaGVtZX0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPExvYWRpbmdTdGF0ZVByb3ZpZGVyPlxyXG4gICAgICAgICAge2xvYWRpbmcgJiYgPExvYWRpbmdDb21wIC8+fVxyXG4gICAgICAgICAgeyFsb2FkaW5nICYmIDxBcHBiYXJDb21wIC8+fVxyXG4gICAgICAgICAgeyFsb2FkaW5nICYmIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XHJcbiAgICAgICAgPC9Mb2FkaW5nU3RhdGVQcm92aWRlcj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9DYWNoZVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuXHJcbk15QXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG4gIGVtb3Rpb25DYWNoZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuIl0sIm5hbWVzIjpbIkNhY2hlUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIlRoZW1lUHJvdmlkZXIiLCJBT1MiLCJIZWFkIiwiUm91dGVyIiwiUHJvcFR5cGVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwcGJhckNvbXAiLCJMb2FkaW5nQ29tcCIsIkxvYWRpbmdTdGF0ZVByb3ZpZGVyIiwiZGFya1RoZW1lIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwiY2xpZW50U2lkZUVtb3Rpb25DYWNoZSIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJfcHJvcHMkZW1vdGlvbkNhY2hlIiwiZW1vdGlvbkNhY2hlIiwicGFnZVByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdGFydExvYWRpbmciLCJzdG9wTG9hZGluZyIsImluaXQiLCJkdXJhdGlvbiIsIm9uY2UiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRzIiwib24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2ZmIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwidGhlbWUiLCJwcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AboutPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ContactCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactCard */ \"./components/ContactCard.js\");\n/* harmony import */ var _components_Carouselcomp1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Carouselcomp1.js */ \"./components/Carouselcomp1.js\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contact */ \"./components/Contact.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ImageListComp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ImageListComp */ \"./components/ImageListComp.js\");\n/* harmony import */ var _components_Divider2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Divider2 */ \"./components/Divider2.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nfunction AboutPage() {\n  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState2 = _slicedToArray(_useState, 2),\n    muted = _useState2[0],\n    setMuted = _useState2[1];\n  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__.useTheme)();\n  var videoId = \"H5w5-VRoaSo\";\n  var styles = {\n    width: \"100vw\",\n    \".videos\": {\n      width: \"100vw\",\n      \".overlay\": {\n        position: \"absolute\",\n        backgroundColor: \"black\",\n        opacity: \"0.5\",\n        zIndex: \"1\",\n        width: \"100vw\",\n        height: \"100vh\"\n      },\n      \"#trailer\": _defineProperty({\n        width: \"100%\",\n        height: \"auto\",\n        objectFit: \"contain\"\n      }, theme.breakpoints.down(\"md\"), {\n        height: \"40vh\"\n      }),\n      filter: \"brightness(80%)\"\n    },\n    \".videoContainer\": _defineProperty({\n      display: \"flex\",\n      flexDirection: \"column\",\n      alignItems: \"center\",\n      gap: \"20px\"\n    }, theme.breakpoints.down(\"md\"), {\n      padding: \"20px\"\n    }),\n    h1: {\n      m: \"50px 0\",\n      fontSize: \"60px\",\n      textAlign: \"center\"\n    },\n    \".content\": {\n      maxWidth: \"1000px\",\n      padding: \"20px\",\n      p: {\n        margin: \"30px\"\n      },\n      \".date\": _defineProperty({\n        textAlign: \"center\",\n        margin: \"30px 0\",\n        fontSize: \"32px\"\n      }, theme.breakpoints.down(\"xs\"), {\n        fontSize: \"24px\",\n        margin: \"5px auto\"\n      })\n    },\n    \".contact\": {\n      width: \"100%\",\n      maxWidth: \"1000px\",\n      display: \"flex\",\n      flexWrap: \"wrap\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      mb: \"50px\"\n    },\n    \".aboutUdbhabani, .aboutDept\": _defineProperty({\n      margin: \"50px 0\"\n    }, theme.breakpoints.down(\"md\"), {\n      marginTop: \"20px\"\n    })\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleResize = function handleResize() {\n      if (window.innerWidth <= 900) {\n        var _videoRef$current;\n        (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 || _videoRef$current.pause();\n      } else {\n        var _videoRef$current2;\n        (_videoRef$current2 = videoRef.current) === null || _videoRef$current2 === void 0 || _videoRef$current2.play()[\"catch\"](function (e) {\n          return console.log(e);\n        });\n      }\n    };\n    window.addEventListener(\"resize\", handleResize);\n    handleResize();\n    return function () {\n      return window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    sx: styles,\n    className: \"center1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    className: \"videoContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    className: \"videos\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"video\", {\n    ref: videoRef,\n    muted: true,\n    playsInline: true,\n    id: \"trailer\",\n    autoPlay: true,\n    loop: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"source\", {\n    src: \"images/teaser2.mp4\",\n    type: \"video/mp4\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    style: {\n      width: \"100%\",\n      maxWidth: \"800px\",\n      aspectRatio: \"16/9\",\n      margin: \"0 auto\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"iframe\", {\n    src: \"https://www.youtube.com/embed/\".concat(videoId),\n    style: {\n      width: \"100%\",\n      height: \"100%\",\n      borderRadius: \"10px\"\n    },\n    frameBorder: \"0\",\n    allowFullScreen: true,\n    title: \"My YouTube Video\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Carouselcomp1_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    className: \"aboutUdbhabani center1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n    src: \"/images/udhlogo.png\",\n    height: \"1750\",\n    width: \"750\",\n    alt: \"Socce\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    className: \"content\",\n    style: {\n      textAlign: \"justify\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n    variant: \"p\"\n  }, \"Welcome to Udhabhabani, the pinnacle of innovation and excellence in the field of Civil Engineering! Organized by the esteemed Civil Engineering Department, this technical fest is a celebration of creativity, ingenuity, and cutting-edge advancements in the realm of civil infrastructure. Udhabhabani, derived from the Sanskrit words \\\"Udhabha\\\" meaning construction and \\\"Bani\\\" meaning creation, encapsulates the essence of our event - a platform where budding engineers come together to showcase their prowess in building the future. With a rich tapestry of competitions, workshops, seminars, and exhibitions, Udhabhabani promises to be an immersive experience for participants and attendees alike.\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), \"So, no matter where you come from, we will make sure you add a feather to your cap on the way back.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n    src: \"/images/iiestlogon.png\",\n    height: \"300\",\n    width: \"400\",\n    alt: \"SOCCE\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    className: \"content\",\n    style: {\n      textAlign: \"justify\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n    variant: \"p\"\n  }, \"IIEST Shibpur (erstwhile BE college) was established in the year 1856. The Institute located at the bank of the Ganges, bestowed upon with a lush green and cheerful aura, is ranked 35th in NIRF rankings. An institute as old as time holds a rich and diverse history and was one of the pioneer institutes for engineering in India. Apart from diversities in its history, the institute has a versatile academic curriculum spanning from undergraduate to postgraduate courses equipped with academia determined to become engineers, scientists, entrepreneurs, and above all assets to society, supported by esteemed faculties in turning all the aspirations into realities, thus making a diverse network of alumni throughout the eras. This vast academic curriculum is rejuvenated by a bundle of co-curricular and extra-curricular activities provided by the various societies of the institute spanning from action-packed sports societies to strings of words airing in the literary societies and the fresh moves of reflexobeta, bounded together by the melodies of euphony. The spirit of science, tech, and culture is charged up by events and fests organized by the departments of the institute, and neither the department of civil engineering nor its academia fall short in boosting the same. The Department of Civil Engineering, the first step of this institute in this journey of immemorial steps, puts deliberate steps to make the journey filled with fun and learning and so is complemented by the Udbhabani, a Technical fest organized by the Society of Civil Engineers.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n    src: \"/images/soccelogo1.png\",\n    height: \"350\",\n    width: \"590\",\n    alt: \"SOCCE\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    className: \"content\",\n    style: {\n      textAlign: \"justify\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n    variant: \"p\"\n  }, \"Within the historic walls of IIEST Shibpur, the Department of Civil Engineering, founded in May 1856 alongside the institute, stands as a beacon of innovation. As the oldest branch within the institution, it boasts a rich legacy rooted in societal impact and academic excellence. From pioneering research in sustainable infrastructure to resilient urban planning, students and faculty push boundaries to address contemporary challenges. Fueling this drive is the Society of Civil Engineers (SOCCE), orchestrating the annual UDBAHBANI event\\u2014a testament to student camaraderie and talent. Being the oldest division of IIEST Shibpur, offering both undergraduate and graduate degrees, it conducts research in various fields including transportation, water resources, environmental, geotechnical, and structural engineering. The department has a reputation for academic brilliance and societal significance.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MERBQUEsQ0FBQ0csNENBQUc7SUFBQzhELFNBQVMsRUFBQyxTQUFTO0lBQUNRLEtBQUssRUFBRTtNQUFFL0IsU0FBUyxFQUFFO0lBQVU7RUFBRSxnQkFDdkQxQywwREFBQSxDQUFDQyxxREFBVTtJQUFDZ0YsT0FBTyxFQUFDO0VBQUcsR0FBQywyaERBRVosQ0FDVCxDQUFDLGVBQ05qRiwwREFBQSxDQUFDVSxtREFBSztJQUFDNkQsR0FBRyxFQUFDLHdCQUF3QjtJQUFDM0MsTUFBTSxFQUFDLEtBQUs7SUFBQ0wsS0FBSyxFQUFDLEtBQUs7SUFBQ3lELEdBQUcsRUFBQztFQUFPLENBQUUsQ0FBQyxlQUMzRWhGLDBEQUFBLENBQUNHLDRDQUFHO0lBQUM4RCxTQUFTLEVBQUMsU0FBUztJQUFDUSxLQUFLLEVBQUU7TUFBRS9CLFNBQVMsRUFBRTtJQUFVO0VBQUUsZ0JBQ3ZEMUMsMERBQUEsQ0FBQ0MscURBQVU7SUFBQ2dGLE9BQU8sRUFBQztFQUFHLEdBQUMsNjRCQUVaLENBQ1QsQ0FDRixDQUFDLGVBR05qRiwwREFBQSxDQUFDTSwyREFBTyxNQUFFLENBQ1AsQ0FBQztBQUVWIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGNoYW5kXFxPbmVEcml2ZVxcRGVza3RvcFxcVWRiaGFiYW5pX3NpdGVcXHVkYmhhYmFuaV9zb2NjZVxccGFnZXNcXGFib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XHJcbmltcG9ydCBDb250YWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWN0Q2FyZFwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWxDb21wMSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJvdXNlbGNvbXAxLmpzXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgSW1hZ2VMaXN0Q29tcCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbWFnZUxpc3RDb21wXCI7XHJcbmltcG9ydCBEaXZpZGVyMiBmcm9tIFwiLi4vY29tcG9uZW50cy9EaXZpZGVyMlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRQYWdlKCkge1xyXG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFttdXRlZCwgc2V0TXV0ZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IHZpZGVvSWQgPSBcIkg1dzUtVlJvYVNvXCI7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICBcIi52aWRlb3NcIjoge1xyXG4gICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICBcIi5vdmVybGF5XCI6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIG9wYWNpdHk6IFwiMC41XCIsXHJcbiAgICAgICAgekluZGV4OiBcIjFcIixcclxuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiN0cmFpbGVyXCI6IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IFwiNDB2aFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGZpbHRlcjogXCJicmlnaHRuZXNzKDgwJSlcIixcclxuICAgIH0sXHJcbiAgICBcIi52aWRlb0NvbnRhaW5lclwiOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBnYXA6IFwiMjBweFwiLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGgxOiB7XHJcbiAgICAgIG06IFwiNTBweCAwXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjYwcHhcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIFwiLmNvbnRlbnRcIjoge1xyXG4gICAgICBtYXhXaWR0aDogXCIxMDAwcHhcIixcclxuICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgIHA6IHtcclxuICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIi5kYXRlXCI6IHtcclxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjMwcHggMFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjMycHhcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICAgICAgZm9udFNpemU6IFwiMjRweFwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjVweCBhdXRvXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIi5jb250YWN0XCI6IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBtYXhXaWR0aDogXCIxMDAwcHhcIixcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIG1iOiBcIjUwcHhcIixcclxuICAgIH0sXHJcbiAgICBcIi5hYm91dFVkYmhhYmFuaSwgLmFib3V0RGVwdFwiOiB7XHJcbiAgICAgIG1hcmdpbjogXCI1MHB4IDBcIixcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gOTAwKSB7XHJcbiAgICAgICAgdmlkZW9SZWYuY3VycmVudD8ucGF1c2UoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2aWRlb1JlZi5jdXJyZW50Py5wbGF5KCkuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgaGFuZGxlUmVzaXplKCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzfSBjbGFzc05hbWU9XCJjZW50ZXIxXCI+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwidmlkZW9Db250YWluZXJcIj5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInZpZGVvc1wiPlxyXG4gICAgICAgICAgPHZpZGVvIHJlZj17dmlkZW9SZWZ9IG11dGVkPXt0cnVlfSBwbGF5c0lubGluZSBpZD1cInRyYWlsZXJcIiBhdXRvUGxheSBsb29wPlxyXG4gICAgICAgICAgICA8c291cmNlIHNyYz1cImltYWdlcy90ZWFzZXIyLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWF4V2lkdGg6IFwiODAwcHhcIiwgYXNwZWN0UmF0aW86IFwiMTYvOVwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfX0+XHJcbiAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4gICAgICAgICAgICB0aXRsZT1cIk15IFlvdVR1YmUgVmlkZW9cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgey8qPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgc3R5bGU9e3sgZm9udEZhbWlseTogXCJSb3dkaWVzXCIsIG1hcmdpbjogXCIzMHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIFNPTUUgTU9NRU5UUyBPRiBQUkVWSU9VUyBFRElUSU9OUyBPRiBVZGhiaGFiYW5pXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PiovfVxyXG4gICAgICAgIDxDYXJvdXNlbENvbXAxIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT1cImFib3V0VWRiaGFiYW5pIGNlbnRlcjFcIj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy91ZGhsb2dvLnBuZ1wiIGhlaWdodD1cIjE3NTBcIiB3aWR0aD1cIjc1MFwiIGFsdD1cIlNvY2NlXCIgLz5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwianVzdGlmeVwiIH19PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInBcIj5cclxuICAgICAgICAgICAgV2VsY29tZSB0byBVZGhhYmhhYmFuaSwgdGhlIHBpbm5hY2xlIG9mIGlubm92YXRpb24gYW5kIGV4Y2VsbGVuY2UgaW4gdGhlIGZpZWxkIG9mIENpdmlsIEVuZ2luZWVyaW5nISBPcmdhbml6ZWQgYnkgdGhlIGVzdGVlbWVkIENpdmlsIEVuZ2luZWVyaW5nIERlcGFydG1lbnQsIHRoaXMgdGVjaG5pY2FsIGZlc3QgaXMgYSBjZWxlYnJhdGlvbiBvZiBjcmVhdGl2aXR5LCBpbmdlbnVpdHksIGFuZCBjdXR0aW5nLWVkZ2UgYWR2YW5jZW1lbnRzIGluIHRoZSByZWFsbSBvZiBjaXZpbCBpbmZyYXN0cnVjdHVyZS4gVWRoYWJoYWJhbmksIGRlcml2ZWQgZnJvbSB0aGUgU2Fuc2tyaXQgd29yZHMgJnF1b3Q7VWRoYWJoYSZxdW90OyBtZWFuaW5nIGNvbnN0cnVjdGlvbiBhbmQgJnF1b3Q7QmFuaSZxdW90OyBtZWFuaW5nIGNyZWF0aW9uLCBlbmNhcHN1bGF0ZXMgdGhlIGVzc2VuY2Ugb2Ygb3VyIGV2ZW50IC0gYSBwbGF0Zm9ybSB3aGVyZSBidWRkaW5nIGVuZ2luZWVycyBjb21lIHRvZ2V0aGVyIHRvIHNob3djYXNlIHRoZWlyIHByb3dlc3MgaW4gYnVpbGRpbmcgdGhlIGZ1dHVyZS4gV2l0aCBhIHJpY2ggdGFwZXN0cnkgb2YgY29tcGV0aXRpb25zLCB3b3Jrc2hvcHMsIHNlbWluYXJzLCBhbmQgZXhoaWJpdGlvbnMsIFVkaGFiaGFiYW5pIHByb21pc2VzIHRvIGJlIGFuIGltbWVyc2l2ZSBleHBlcmllbmNlIGZvciBwYXJ0aWNpcGFudHMgYW5kIGF0dGVuZGVlcyBhbGlrZS5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIFNvLCBubyBtYXR0ZXIgd2hlcmUgeW91IGNvbWUgZnJvbSwgd2Ugd2lsbCBtYWtlIHN1cmUgeW91IGFkZCBhIGZlYXRoZXIgdG8geW91ciBjYXAgb24gdGhlIHdheSBiYWNrLlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2lpZXN0bG9nb24ucG5nXCIgaGVpZ2h0PVwiMzAwXCIgd2lkdGg9XCI0MDBcIiBhbHQ9XCJTT0NDRVwiIC8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJjb250ZW50XCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImp1c3RpZnlcIiB9fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgIElJRVNUIFNoaWJwdXIgKGVyc3R3aGlsZSBCRSBjb2xsZWdlKSB3YXMgZXN0YWJsaXNoZWQgaW4gdGhlIHllYXIgMTg1Ni4gVGhlIEluc3RpdHV0ZSBsb2NhdGVkIGF0IHRoZSBiYW5rIG9mIHRoZSBHYW5nZXMsIGJlc3Rvd2VkIHVwb24gd2l0aCBhIGx1c2ggZ3JlZW4gYW5kIGNoZWVyZnVsIGF1cmEsIGlzIHJhbmtlZCAzNXRoIGluIE5JUkYgcmFua2luZ3MuIEFuIGluc3RpdHV0ZSBhcyBvbGQgYXMgdGltZSBob2xkcyBhIHJpY2ggYW5kIGRpdmVyc2UgaGlzdG9yeSBhbmQgd2FzIG9uZSBvZiB0aGUgcGlvbmVlciBpbnN0aXR1dGVzIGZvciBlbmdpbmVlcmluZyBpbiBJbmRpYS4gQXBhcnQgZnJvbSBkaXZlcnNpdGllcyBpbiBpdHMgaGlzdG9yeSwgdGhlIGluc3RpdHV0ZSBoYXMgYSB2ZXJzYXRpbGUgYWNhZGVtaWMgY3VycmljdWx1bSBzcGFubmluZyBmcm9tIHVuZGVyZ3JhZHVhdGUgdG8gcG9zdGdyYWR1YXRlIGNvdXJzZXMgZXF1aXBwZWQgd2l0aCBhY2FkZW1pYSBkZXRlcm1pbmVkIHRvIGJlY29tZSBlbmdpbmVlcnMsIHNjaWVudGlzdHMsIGVudHJlcHJlbmV1cnMsIGFuZCBhYm92ZSBhbGwgYXNzZXRzIHRvIHNvY2lldHksIHN1cHBvcnRlZCBieSBlc3RlZW1lZCBmYWN1bHRpZXMgaW4gdHVybmluZyBhbGwgdGhlIGFzcGlyYXRpb25zIGludG8gcmVhbGl0aWVzLCB0aHVzIG1ha2luZyBhIGRpdmVyc2UgbmV0d29yayBvZiBhbHVtbmkgdGhyb3VnaG91dCB0aGUgZXJhcy4gVGhpcyB2YXN0IGFjYWRlbWljIGN1cnJpY3VsdW0gaXMgcmVqdXZlbmF0ZWQgYnkgYSBidW5kbGUgb2YgY28tY3VycmljdWxhciBhbmQgZXh0cmEtY3VycmljdWxhciBhY3Rpdml0aWVzIHByb3ZpZGVkIGJ5IHRoZSB2YXJpb3VzIHNvY2lldGllcyBvZiB0aGUgaW5zdGl0dXRlIHNwYW5uaW5nIGZyb20gYWN0aW9uLXBhY2tlZCBzcG9ydHMgc29jaWV0aWVzIHRvIHN0cmluZ3Mgb2Ygd29yZHMgYWlyaW5nIGluIHRoZSBsaXRlcmFyeSBzb2NpZXRpZXMgYW5kIHRoZSBmcmVzaCBtb3ZlcyBvZiByZWZsZXhvYmV0YSwgYm91bmRlZCB0b2dldGhlciBieSB0aGUgbWVsb2RpZXMgb2YgZXVwaG9ueS4gVGhlIHNwaXJpdCBvZiBzY2llbmNlLCB0ZWNoLCBhbmQgY3VsdHVyZSBpcyBjaGFyZ2VkIHVwIGJ5IGV2ZW50cyBhbmQgZmVzdHMgb3JnYW5pemVkIGJ5IHRoZSBkZXBhcnRtZW50cyBvZiB0aGUgaW5zdGl0dXRlLCBhbmQgbmVpdGhlciB0aGUgZGVwYXJ0bWVudCBvZiBjaXZpbCBlbmdpbmVlcmluZyBub3IgaXRzIGFjYWRlbWlhIGZhbGwgc2hvcnQgaW4gYm9vc3RpbmcgdGhlIHNhbWUuIFRoZSBEZXBhcnRtZW50IG9mIENpdmlsIEVuZ2luZWVyaW5nLCB0aGUgZmlyc3Qgc3RlcCBvZiB0aGlzIGluc3RpdHV0ZSBpbiB0aGlzIGpvdXJuZXkgb2YgaW1tZW1vcmlhbCBzdGVwcywgcHV0cyBkZWxpYmVyYXRlIHN0ZXBzIHRvIG1ha2UgdGhlIGpvdXJuZXkgZmlsbGVkIHdpdGggZnVuIGFuZCBsZWFybmluZyBhbmQgc28gaXMgY29tcGxlbWVudGVkIGJ5IHRoZSBVZGJoYWJhbmksIGEgVGVjaG5pY2FsIGZlc3Qgb3JnYW5pemVkIGJ5IHRoZSBTb2NpZXR5IG9mIENpdmlsIEVuZ2luZWVycy5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9zb2NjZWxvZ28xLnBuZ1wiIGhlaWdodD1cIjM1MFwiIHdpZHRoPVwiNTkwXCIgYWx0PVwiU09DQ0VcIiAvPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiY29udGVudFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJqdXN0aWZ5XCIgfX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwicFwiPlxyXG4gICAgICAgICAgICBXaXRoaW4gdGhlIGhpc3RvcmljIHdhbGxzIG9mIElJRVNUIFNoaWJwdXIsIHRoZSBEZXBhcnRtZW50IG9mIENpdmlsIEVuZ2luZWVyaW5nLCBmb3VuZGVkIGluIE1heSAxODU2IGFsb25nc2lkZSB0aGUgaW5zdGl0dXRlLCBzdGFuZHMgYXMgYSBiZWFjb24gb2YgaW5ub3ZhdGlvbi4gQXMgdGhlIG9sZGVzdCBicmFuY2ggd2l0aGluIHRoZSBpbnN0aXR1dGlvbiwgaXQgYm9hc3RzIGEgcmljaCBsZWdhY3kgcm9vdGVkIGluIHNvY2lldGFsIGltcGFjdCBhbmQgYWNhZGVtaWMgZXhjZWxsZW5jZS4gRnJvbSBwaW9uZWVyaW5nIHJlc2VhcmNoIGluIHN1c3RhaW5hYmxlIGluZnJhc3RydWN0dXJlIHRvIHJlc2lsaWVudCB1cmJhbiBwbGFubmluZywgc3R1ZGVudHMgYW5kIGZhY3VsdHkgcHVzaCBib3VuZGFyaWVzIHRvIGFkZHJlc3MgY29udGVtcG9yYXJ5IGNoYWxsZW5nZXMuIEZ1ZWxpbmcgdGhpcyBkcml2ZSBpcyB0aGUgU29jaWV0eSBvZiBDaXZpbCBFbmdpbmVlcnMgKFNPQ0NFKSwgb3JjaGVzdHJhdGluZyB0aGUgYW5udWFsIFVEQkFIQkFOSSBldmVudOKAlGEgdGVzdGFtZW50IHRvIHN0dWRlbnQgY2FtYXJhZGVyaWUgYW5kIHRhbGVudC4gQmVpbmcgdGhlIG9sZGVzdCBkaXZpc2lvbiBvZiBJSUVTVCBTaGlicHVyLCBvZmZlcmluZyBib3RoIHVuZGVyZ3JhZHVhdGUgYW5kIGdyYWR1YXRlIGRlZ3JlZXMsIGl0IGNvbmR1Y3RzIHJlc2VhcmNoIGluIHZhcmlvdXMgZmllbGRzIGluY2x1ZGluZyB0cmFuc3BvcnRhdGlvbiwgd2F0ZXIgcmVzb3VyY2VzLCBlbnZpcm9ubWVudGFsLCBnZW90ZWNobmljYWwsIGFuZCBzdHJ1Y3R1cmFsIGVuZ2luZWVyaW5nLiBUaGUgZGVwYXJ0bWVudCBoYXMgYSByZXB1dGF0aW9uIGZvciBhY2FkZW1pYyBicmlsbGlhbmNlIGFuZCBzb2NpZXRhbCBzaWduaWZpY2FuY2UuXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgXHJcbiAgICAgIDxDb250YWN0IC8+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlR5cG9ncmFwaHkiLCJ1c2VUaGVtZSIsIkJveCIsIkNvbnRhY3RDYXJkIiwiQ2Fyb3VzZWxDb21wMSIsIkNvbnRhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiSW1hZ2VMaXN0Q29tcCIsIkRpdmlkZXIyIiwiQWJvdXRQYWdlIiwidmlkZW9SZWYiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJtdXRlZCIsInNldE11dGVkIiwidGhlbWUiLCJ2aWRlb0lkIiwic3R5bGVzIiwid2lkdGgiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJoZWlnaHQiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmplY3RGaXQiLCJicmVha3BvaW50cyIsImRvd24iLCJmaWx0ZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJnYXAiLCJwYWRkaW5nIiwiaDEiLCJtIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJtYXhXaWR0aCIsInAiLCJtYXJnaW4iLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwibWIiLCJtYXJnaW5Ub3AiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiX3ZpZGVvUmVmJGN1cnJlbnQiLCJjdXJyZW50IiwicGF1c2UiLCJfdmlkZW9SZWYkY3VycmVudDIiLCJwbGF5IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUVsZW1lbnQiLCJzeCIsImNsYXNzTmFtZSIsInJlZiIsInBsYXlzSW5saW5lIiwiaWQiLCJhdXRvUGxheSIsImxvb3AiLCJzcmMiLCJ0eXBlIiwic3R5bGUiLCJhc3BlY3RSYXRpbyIsImNvbmNhdCIsImJvcmRlclJhZGl1cyIsImZyYW1lQm9yZGVyIiwiYWxsb3dGdWxsU2NyZWVuIiwidGl0bGUiLCJhbHQiLCJ2YXJpYW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "./styles/theme/darkTheme.js":
/*!***********************************!*\
  !*** ./styles/theme/darkTheme.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/node/styles/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar darkTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)();\ndarkTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n  palette: {\n    mode: \"dark\"\n  },\n  typography: {\n    h1: {\n      fontFamily: \"Rowdies\",\n      fontSize: \"36px\",\n      letterSpacing: \"0.2px\",\n      fontWeight: \"900\"\n    },\n    h2: _defineProperty(_defineProperty(_defineProperty(_defineProperty({\n      fontFamily: \"Jost\",\n      fontSize: \"40px\"\n    }, darkTheme.breakpoints.down(\"md\"), {\n      fontSize: \"35px\"\n    }), darkTheme.breakpoints.down(\"md\"), {\n      fontSize: \"30px\"\n    }), \"letterSpacing\", \"1.5px\"), \"fontWeight\", \"700\"),\n    h3: {\n      fontFamily: \"Jost\",\n      fontSize: \"25px\"\n    },\n    h4: {\n      fontFamily: \"Jost\",\n      fontSize: \"22px\"\n    },\n    p: {\n      // fontFamily: \"Jost\",\n      // fontFamily: 'Roboto',\n      // fontFamily: 'Helvetica',\n      fontFamily: '\"Roboto\" , sans-serif',\n      // fontFamily: 'sans-serif',\n      fontSize: \"18px\"\n    },\n    a: _defineProperty(_defineProperty({\n      fontFamily: \"Jost\"\n    }, \"fontFamily\", '\"Roboto\" , sans-serif'), \"fontSize\", \"16px\")\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (darkTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUvZGFya1RoZW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFFbkQsSUFBSUMsU0FBUyxHQUFHRCxpRUFBVyxDQUFDLENBQUM7QUFFN0JDLFNBQVMsR0FBR0QsaUVBQVcsQ0FBQztFQUN0QkUsT0FBTyxFQUFFO0lBQ1BDLElBQUksRUFBRTtFQUNSLENBQUM7RUFDREMsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRTtNQUNGQyxVQUFVLEVBQUUsU0FBUztNQUNyQkMsUUFBUSxFQUFFLE1BQU07TUFDaEJDLGFBQWEsRUFBRSxPQUFPO01BQ3RCQyxVQUFVLEVBQUU7SUFDZCxDQUFDO0lBQ0RDLEVBQUUsRUFBQUMsZUFBQSxDQUFBQSxlQUFBLENBQUFBLGVBQUEsQ0FBQUEsZUFBQTtNQUNBTCxVQUFVLEVBQUUsTUFBTTtNQUNsQkMsUUFBUSxFQUFFO0lBQU0sR0FDZk4sU0FBUyxDQUFDVyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRztNQUNsQ04sUUFBUSxFQUFFO0lBQ1osQ0FBQyxHQUNBTixTQUFTLENBQUNXLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFHO01BQ2xDTixRQUFRLEVBQUU7SUFDWixDQUFDLG9CQUNjLE9BQU8saUJBQ1YsS0FBSyxDQUNsQjtJQUNETyxFQUFFLEVBQUU7TUFDRlIsVUFBVSxFQUFFLE1BQU07TUFDbEJDLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDRFEsRUFBRSxFQUFFO01BQ0ZULFVBQVUsRUFBRSxNQUFNO01BQ2xCQyxRQUFRLEVBQUU7SUFDWixDQUFDO0lBQ0RTLENBQUMsRUFBRTtNQUNEO01BQ0E7TUFDQTtNQUNBVixVQUFVLEVBQUUsdUJBQXVCO01BQ25DO01BQ0FDLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDRFUsQ0FBQyxFQUFBTixlQUFBLENBQUFBLGVBQUE7TUFDQ0wsVUFBVSxFQUFFO0lBQU0saUJBQ04sdUJBQXVCLGVBQ3pCLE1BQU07RUFFcEI7QUFDRixDQUFDLENBQUM7QUFFRixpRUFBZUwsU0FBUyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxjaGFuZFxcT25lRHJpdmVcXERlc2t0b3BcXFVkYmhhYmFuaV9zaXRlXFx1ZGJoYWJhbmlfc29jY2VcXHN0eWxlc1xcdGhlbWVcXGRhcmtUaGVtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xyXG5cclxubGV0IGRhcmtUaGVtZSA9IGNyZWF0ZVRoZW1lKCk7XHJcblxyXG5kYXJrVGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgbW9kZTogXCJkYXJrXCIsXHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBoMToge1xyXG4gICAgICBmb250RmFtaWx5OiBcIlJvd2RpZXNcIixcclxuICAgICAgZm9udFNpemU6IFwiMzZweFwiLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMnB4XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiOTAwXCIsXHJcbiAgICB9LFxyXG4gICAgaDI6IHtcclxuICAgICAgZm9udEZhbWlseTogXCJKb3N0XCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjQwcHhcIixcclxuICAgICAgW2RhcmtUaGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMzVweFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBbZGFya1RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFwiMS41cHhcIixcclxuICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250RmFtaWx5OiBcIkpvc3RcIixcclxuICAgICAgZm9udFNpemU6IFwiMjVweFwiLFxyXG4gICAgfSxcclxuICAgIGg0OiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6IFwiSm9zdFwiLFxyXG4gICAgICBmb250U2l6ZTogXCIyMnB4XCIsXHJcbiAgICB9LFxyXG4gICAgcDoge1xyXG4gICAgICAvLyBmb250RmFtaWx5OiBcIkpvc3RcIixcclxuICAgICAgLy8gZm9udEZhbWlseTogJ1JvYm90bycsXHJcbiAgICAgIC8vIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxyXG4gICAgICBmb250RmFtaWx5OiAnXCJSb2JvdG9cIiAsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAvLyBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXHJcbiAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6IFwiSm9zdFwiLFxyXG4gICAgICBmb250RmFtaWx5OiAnXCJSb2JvdG9cIiAsIHNhbnMtc2VyaWYnLFxyXG4gICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFya1RoZW1lO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJkYXJrVGhlbWUiLCJwYWxldHRlIiwibW9kZSIsInR5cG9ncmFwaHkiLCJoMSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJmb250V2VpZ2h0IiwiaDIiLCJfZGVmaW5lUHJvcGVydHkiLCJicmVha3BvaW50cyIsImRvd24iLCJoMyIsImg0IiwicCIsImEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/theme/darkTheme.js\n");

/***/ }),

/***/ "./utility/createEmotionCache.js":
/*!***************************************!*\
  !*** ./utility/createEmotionCache.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar createEmotionCache = function createEmotionCache() {\n  return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: \"css\",\n    prepend: true\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEmotionCache);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsaXR5L2NyZWF0ZUVtb3Rpb25DYWNoZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUV6QyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7RUFDL0IsT0FBT0QsMERBQVcsQ0FBQztJQUFFRSxHQUFHLEVBQUUsS0FBSztJQUFFQyxPQUFPLEVBQUU7RUFBSyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUVELGlFQUFlRixrQkFBa0IsRSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxjaGFuZFxcT25lRHJpdmVcXERlc2t0b3BcXFVkYmhhYmFuaV9zaXRlXFx1ZGJoYWJhbmlfc29jY2VcXHV0aWxpdHlcXGNyZWF0ZUVtb3Rpb25DYWNoZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSBcIkBlbW90aW9uL2NhY2hlXCI7XHJcblxyXG5jb25zdCBjcmVhdGVFbW90aW9uQ2FjaGUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiBcImNzc1wiLCBwcmVwZW5kOiB0cnVlIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRW1vdGlvbkNhY2hlO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiLCJwcmVwZW5kIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utility/createEmotionCache.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fabout&preferredRegion=&absolutePagePath=.%2Fpages%5Cabout.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fabout&preferredRegion=&absolutePagePath=.%2Fpages%5Cabout.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\about.js */ \"./pages/about.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__]);\nprivate_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/about\",\n        pathname: \"/about\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_about_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGYWJvdXQmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2Fib3V0LmpzJmFic29sdXRlQXBwUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfYXBwJmFic29sdXRlRG9jdW1lbnRQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9kb2N1bWVudCZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Y7QUFDaEM7QUFDRTtBQUMxRDtBQUN5RDtBQUNWO0FBQy9DO0FBQzhDO0FBQzlDO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyw0Q0FBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyx1QkFBdUIsd0VBQUssQ0FBQyw0Q0FBUTtBQUNyQyx1QkFBdUIsd0VBQUssQ0FBQyw0Q0FBUTtBQUNyQywyQkFBMkIsd0VBQUssQ0FBQyw0Q0FBUTtBQUN6QyxlQUFlLHdFQUFLLENBQUMsNENBQVE7QUFDN0Isd0JBQXdCLHdFQUFLLENBQUMsNENBQVE7QUFDN0M7QUFDTyxnQ0FBZ0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUM5QyxnQ0FBZ0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUM5QyxpQ0FBaUMsd0VBQUssQ0FBQyw0Q0FBUTtBQUMvQyxnQ0FBZ0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUM5QyxvQ0FBb0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUN6RDtBQUNPLHdCQUF3QixrR0FBZ0I7QUFDL0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsOERBQVc7QUFDeEIsa0JBQWtCLG9FQUFnQjtBQUNsQyxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUMiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc1JvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSBhcHAgYW5kIGRvY3VtZW50IG1vZHVsZXMuXG5pbXBvcnQgKiBhcyBkb2N1bWVudCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19kb2N1bWVudFwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYWJvdXQuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgY29tcG9uZW50IChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCAnZGVmYXVsdCcpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFN0YXRpY1Byb3BzJyk7XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFN0YXRpY1BhdGhzJyk7XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTZXJ2ZXJTaWRlUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IGhvaXN0KHVzZXJsYW5kLCAncmVwb3J0V2ViVml0YWxzJyk7XG4vLyBSZS1leHBvcnQgbGVnYWN5IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1Byb3BzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhdGhzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcycpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVMsXG4gICAgICAgIHBhZ2U6IFwiL2Fib3V0XCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hYm91dFwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgLy8gZGVmYXVsdCBleHBvcnQgbWlnaHQgbm90IGV4aXN0IHdoZW4gb3B0aW1pemVkIGZvciBkYXRhIG9ubHlcbiAgICAgICAgQXBwOiBhcHAuZGVmYXVsdCxcbiAgICAgICAgRG9jdW1lbnQ6IGRvY3VtZW50LmRlZmF1bHRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fabout&preferredRegion=&absolutePagePath=.%2Fpages%5Cabout.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/InitColorSchemeScript");

/***/ }),

/***/ "@mui/system/RtlProvider":
/*!******************************************!*\
  !*** external "@mui/system/RtlProvider" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/RtlProvider");

/***/ }),

/***/ "@mui/system/Unstable_Grid":
/*!********************************************!*\
  !*** external "@mui/system/Unstable_Grid" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/Unstable_Grid");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useMediaQuery":
/*!********************************************!*\
  !*** external "@mui/system/useMediaQuery" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/useMediaQuery");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/system/useThemeWithoutDefault":
/*!*****************************************************!*\
  !*** external "@mui/system/useThemeWithoutDefault" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/useThemeWithoutDefault");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/HTMLElementType":
/*!*********************************************!*\
  !*** external "@mui/utils/HTMLElementType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/HTMLElementType");

/***/ }),

/***/ "@mui/utils/appendOwnerState":
/*!**********************************************!*\
  !*** external "@mui/utils/appendOwnerState" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/appendOwnerState");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/chainPropTypes");

/***/ }),

/***/ "@mui/utils/clamp":
/*!***********************************!*\
  !*** external "@mui/utils/clamp" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/clamp");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/createChainedFunction");

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/debounce");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deprecatedPropType");

/***/ }),

/***/ "@mui/utils/elementAcceptingRef":
/*!*************************************************!*\
  !*** external "@mui/utils/elementAcceptingRef" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/elementAcceptingRef");

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/elementTypeAcceptingRef");

/***/ }),

/***/ "@mui/utils/exactProp":
/*!***************************************!*\
  !*** external "@mui/utils/exactProp" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/exactProp");

/***/ }),

/***/ "@mui/utils/extractEventHandlers":
/*!**************************************************!*\
  !*** external "@mui/utils/extractEventHandlers" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/extractEventHandlers");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/getDisplayName":
/*!********************************************!*\
  !*** external "@mui/utils/getDisplayName" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/getDisplayName");

/***/ }),

/***/ "@mui/utils/getReactElementRef":
/*!************************************************!*\
  !*** external "@mui/utils/getReactElementRef" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/getReactElementRef");

/***/ }),

/***/ "@mui/utils/getScrollbarSize":
/*!**********************************************!*\
  !*** external "@mui/utils/getScrollbarSize" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/getScrollbarSize");

/***/ }),

/***/ "@mui/utils/getValidReactChildren":
/*!***************************************************!*\
  !*** external "@mui/utils/getValidReactChildren" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/getValidReactChildren");

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/integerPropType");

/***/ }),

/***/ "@mui/utils/isHostComponent":
/*!*********************************************!*\
  !*** external "@mui/utils/isHostComponent" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isHostComponent");

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isMuiElement");

/***/ }),

/***/ "@mui/utils/mergeSlotProps":
/*!********************************************!*\
  !*** external "@mui/utils/mergeSlotProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/mergeSlotProps");

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerDocument");

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerWindow");

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/refType");

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/requirePropFactory");

/***/ }),

/***/ "@mui/utils/resolveComponentProps":
/*!***************************************************!*\
  !*** external "@mui/utils/resolveComponentProps" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/resolveComponentProps");

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/resolveProps");

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/setRef");

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/unsupportedProp");

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useControlled");

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEnhancedEffect");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useId");

/***/ }),

/***/ "@mui/utils/useIsFocusVisible":
/*!***********************************************!*\
  !*** external "@mui/utils/useIsFocusVisible" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useIsFocusVisible");

/***/ }),

/***/ "@mui/utils/usePreviousProps":
/*!**********************************************!*\
  !*** external "@mui/utils/usePreviousProps" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/usePreviousProps");

/***/ }),

/***/ "@mui/utils/useSlotProps":
/*!******************************************!*\
  !*** external "@mui/utils/useSlotProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useSlotProps");

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useTimeout");

/***/ }),

/***/ "@mui/utils/visuallyHidden":
/*!********************************************!*\
  !*** external "@mui/utils/visuallyHidden" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/visuallyHidden");

/***/ }),

/***/ "@popperjs/core":
/*!*********************************!*\
  !*** external "@popperjs/core" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@popperjs/core");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-elastic-carousel":
/*!*****************************************!*\
  !*** external "react-elastic-carousel" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-elastic-carousel");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@mui","vendor-chunks/@swc","vendor-chunks/@babel","vendor-chunks/aos"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fabout&preferredRegion=&absolutePagePath=.%2Fpages%5Cabout.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();
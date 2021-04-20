/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.js */ "./src/test.js");
 //test 代码【let sum = (a,b) => {
//     return a + b + 'sum'
// }
// let sub = (a, b => {
//     return a - b + 'sub'
// })
// export default{
//     sum,sub
// }】

console.log(_test_js__WEBPACK_IMPORTED_MODULE_0__.default.sum(2, 6)); // import React from 'react'
// import { render } from 'react-dom' 
// render(<h1>react ceshi</h1>,window.root)
//表示通过 @babel/prest-react 插件解析react语法  将 render中h1 内容 渲染到 页面 id为root的dom中去
//默认 import 一个包的话，webpack打包的时候回去解析这个包，并且打包到目标文件中去
//可以在module属性中配置 noParse属性：noParse:'/jquery/'
//这样打包的时候就不会去解析jquery然后打包了
// import jquery from 'jquery'
//  import moment from 'moment'
//  import 'moment/locale/zh-cn'
//  let time = moment().endOf('day').fromNow() //表示离一天结束还有多少小时 
// console.log(time)
//  class A{
//      constructor(){
//          console.log('aaaaabbb')
//      }
//  }
//  let a = new A()
// let xhr = new XMLHttpRequest()
// //xhr.open('GET', '/api/test', true) //开启异步
// xhr.open('GET', '/test', true)//访问webpack内置的express 第二个参数 与 webpack.config.js devServer中一致
// // 请求express  监听的3000 端口下的 /api/test,而webpack-dev-server默认是8080端口
// //请求3000端口就会产生跨域，默认请求不到
// //我们可以先去请求webpack-dev-server,让webpack充当中转，转而去请求3000就实现了跨域
// xhr.onload = function () {
//     console.log(xhr.response);
// }
// xhr.send() //发送ajax请求
//console.log(test)
// console.log(test2)

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var sum = function sum(a, b) {
  return a + b + 'sum';
};

var sub = (a, function (b) {
  return a - b + 'sub';
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  sum: sum,
  sub: sub
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=home.js.map
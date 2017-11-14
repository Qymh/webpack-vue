webpackJsonp([1],{

/***/ "3Di9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = one;
/* unused harmony export two */
function one(){
  console.log('one')
}

function two(){
  console.log('two')
}

/***/ }),

/***/ "lVK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__print__ = __webpack_require__("3Di9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("WMkX");



let $div=document.createElement('div')

$div.innerHTML='123'

$div.onclick=__WEBPACK_IMPORTED_MODULE_0__print__["a" /* one */]

document.body.appendChild($div)

/***/ })

},["lVK7"]);
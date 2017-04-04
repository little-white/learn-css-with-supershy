/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = "/**\n    测试下background学得咋样了吧\n    1.让右侧的区域背景变成红色(rgb(255, 0, 0))\n*/\n\n.container-1 {\n\n}\n\n/**\n    2.使这个背景图片位置距容器的上面10px，距容器左边15px\n*/\n\n.container-2 {\n\n}\n\n/**\n    3.只显示梅花2\n    width: 51px;\n    height: 68px;\n    background-position:? ?;\n*/\n\n.container-3 {\n\n}\n\n/**\n    4.使图片铺满这个容器\n*/\n\n.container-4 {\n\n}\n\n/**\n    5.使图片完整地显示在这个容器里\n*/\n\n.container-5 {\n\n}\n\n\n"

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var cssText = __webpack_require__(1);

var myCodeMirror = CodeMirror(document.body, {
    value: cssText,
    mode: "css",
    theme: "supershy"
});

function getColor(selector){
    return window.getComputedStyle(selector, null).getPropertyValue("background-color");
}

function getBgPosition(selector){
    return window.getComputedStyle(selector, null).getPropertyValue("background-position");
}

function getProps(selector, property){
    return window.getComputedStyle(selector, null).getPropertyValue(property);
}

function clearTestLog(){
    document.querySelector('#mocha').innerHTML = '';
}

function insertCss(elem, css) {
    if (elem.styleSheet) {
        elem.styleSheet.cssText = css;
    } else {
        elem.textContent = css;
    }
}

mocha.setup('bdd');
var assert = chai.assert;

describe('background练习', function() {
    it('第一个区域背景变成红色', function() {
        assert.equal(getColor(document.querySelector(".container-1")), 'rgb(255, 0, 0)')
    });
    it('距容器的上面10px，距容器左边15px', function() {
        assert.equal(getBgPosition(document.querySelector(".container-2")), '15px 10px')
    });
    it('只显示梅花2', function() {
        assert.equal(getBgPosition(document.querySelector(".container-3")), '-48px -65px')
    });
    it('使图片铺满这个容器', function() {
        assert.equal(getProps(document.querySelector(".container-4"), "background-size"), 'cover')
    });
    it('使图片完整地显示在这个容器里', function() {
        assert.equal(getProps(document.querySelector(".container-5"), "background-size"), 'contain')
    });
    // it('使图片只显示在padding区域中并且不被裁剪', function() {
    //     assert.equal(getProps(document.querySelector(".container-6"), "background-origin"), 'padding-box')
    // });
    // it('使图片只显示在content区域中并且被裁剪', function() {
    //     assert.equal(getProps(document.querySelector(".container-7"), "background-clip"), 'content-box')
    // });
});

var editable = document.querySelector('.CodeMirror');
var styleElement = document.querySelector('#style');
editable.addEventListener('input', function() {
    insertCss(styleElement, myCodeMirror.getValue());
});

editable.addEventListener('paste', function() {
    insertCss(styleElement, myCodeMirror.getValue());
});

document.querySelector('#test-btn').addEventListener('click', function(){
    clearTestLog();

    mocha.run();
});


/***/ })

/******/ });
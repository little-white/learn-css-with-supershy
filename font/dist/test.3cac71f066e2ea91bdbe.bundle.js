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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var cssText = __webpack_require__(5);

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

describe('font练习', function() {
    it('字体应该是77px的大小', function() {
        assert.equal(getProps(document.querySelector(".container"), "font-size"), '77px')
    });
    it('字体是斜体', function() {
        assert.equal(getProps(document.querySelector(".container"), "font-style"), 'italic')
    });
    it('字体是粗体', function() {
        assert.equal(getProps(document.querySelector(".container"), "font-weight"), 'bold')
    });
    it('字体是微软雅黑的', function() {
        assert.equal(getProps(document.querySelector(".container"), "font-family"), '"Microsoft YaHei"')
    });
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


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = "/**\n    给hello world添加以下样式：\n    大小77px\n    斜体（italic）\n    粗体（bold）\n    使用微软雅黑字体（Microsoft YaHei）\n*/\n\n.container {\n\n}\n\n\n"

/***/ })

/******/ });
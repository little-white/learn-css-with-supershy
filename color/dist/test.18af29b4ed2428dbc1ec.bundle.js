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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports) {

module.exports = "/**\n\t需要提醒的是不要粘贴哦\n\t当然你如果硬要粘贴也不能算你错（我加了 paste event ^_^）\n\t不过手动输入进去更会加深记忆\n*/\n\n/**\n\t1.使用keyword将它变为绿色\n*/\n\n#color-test-one {\n\n}\n\n/**\n\t2.使用Hex Code将它变为绿色\n\t提示：color: #XXXXXX\n*/\n\n#color-test-two {\n\n}\n\n/**\n\t3.使用RGB将它变为绿色\n\t提示：color: RGB(x, x, x)\n*/\n\n#color-test-three {\n\n}\n\n/**\n\t4.使用RGBA将它变为绿色\n\t提示：color: RGBA(x, x, x, x)\n*/\n\n#color-test-four {\n\n}\n\n/**\n\t5.使用HSL将它变为绿色\n\t提示：color: HSL(x, x, x)\n*/\n\n#color-test-five {\n\n}\n\n/**\n\t6.使用RGBA将它变为绿色\n\t提示：color: HSLA(x, x, x, x)\n*/\n\n#color-test-six {\n\t\n}\n"

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var cssText = __webpack_require__(3);

var myCodeMirror = CodeMirror(document.body, {
    value: cssText,
    mode: "css",
    theme: "supershy"
});

function getColor(selector){
    return window.getComputedStyle(selector, null).getPropertyValue("color");
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

describe('color练习', function() {
    it('使用keyword将它变为绿色', function() {
        assert.equal(getColor(document.querySelector("#color-test-one")), 'rgb(0, 128, 0)')
    });
    it('使用Hex Code将它变为绿色', function() {
        assert.equal(getColor(document.querySelector("#color-test-two")), 'rgb(0, 128, 0)')
    });
    it('使用RGB将它变为绿色', function() {
        assert.equal(getColor(document.querySelector("#color-test-three")), 'rgb(0, 128, 0)')
    });
    it('使用RGBA将它变为绿色', function() {
        assert.equal(getColor(document.querySelector("#color-test-four")), 'rgb(0, 128, 0)')
    });
    it('使用HSL将它变为绿色', function() {
        assert.equal(getColor(document.querySelector("#color-test-five")), 'rgb(0, 128, 0)')
    });
    it('使用RGBA将它变为绿色', function() {
        assert.equal(getColor(document.querySelector("#color-test-six")), 'rgb(0, 128, 0)')
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


/***/ })

/******/ });
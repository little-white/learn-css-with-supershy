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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "/**\n  累了一天了\n  放松一下\n  我们来写个css样式\n  先来个容器吧\n*/\n\n.container {\n    width: 1000px;\n    margin: 0 auto;\n    padding: 20px;\n}\n\n\n/**\n  给头部加个粉色背景\n*/\n\n.container .container-header {\n    background-color: pink;\n}\n\n\n/**\n  给底部加个黑色背景\n*/\n\n.container .container-footer {\n    background-color: black;\n}\n\n\n/**\n  给...等等\n  这代码的样子好丑 :)\n  我们先有优化下吧\n  改变下\n  字的大小\n  行间距\n  字体\n  字间距\n  背景色\n  字的颜色\n*/\n\n.cm-s-supershy {\n    font-size: 1em;\n    line-height: 1.5em;\n    font-family: inconsolata, monospace;\n    letter-spacing: 0.3px;\n    word-spacing: 1px;\n    background: #151515;\n    color: #B2B2B2;\n}\n\n\n/**\n  给注释也变美一下\n*/\n\n.cm-s-supershy .cm-comment {\n    font-style: italic;\n    color: #00A6FF;\n}\n\n\n/**\n  key的颜色\n*/\n\n.cm-s-supershy .cm-property {\n    color: #7272ff;\n}\n\n\n/**\n  value的颜色\n*/\n\n.cm-s-supershy .cm-atom {\n    color: #c737ab;\n}\n\n\n/**\n  选择器增加个亮眼的颜色吧\n*/\n\n.cm-s-supershy .cm-qualifier {\n    color: #55fd55;\n}\n\n.cm-s-supershy div.CodeMirror-cursor {\n    border-left: 3px solid #B2B2B2;\n}\n\n\n/**\n  数字变个色儿\n*/\n\n.cm-s-supershy .cm-number {\n    color: #bf91ff;\n}\n\n.cm-s-supershy .CodeMirror-activeline-background {\n    background: #000C16;\n}\n\n\n/**\n  调整下编辑器的宽度吧\n*/\n\n.cm-s-supershy {\n    width: 700px;\n}\n\n\n/**\n  最后咱们把这个编辑居中吧\n*/\n\n.cm-s-supershy {\n    position: absolute;\n    left: 50%;\n    margin-left: -350px;\n}\n\n\n/**\n  就到这吧\n  手机端样式还有问题 下次继续优化\n  睡了~8\n*/\n"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function isFunction(fn) {
    return fn && typeof fn === 'function';
}

function isEnd(index, arr) {
    return index > (arr.length - 1);
}

function typingAnimation(options) {
    var strIndex = 0;
    var lineIndex = 0;
    var str = '';
    var contentArr = options.content.split('\n');
    if (options.selector) {
        var preSelector = options.selector.appendChild(document.createElement('pre'));
    }


    if (!options.lineTimer) {
        options.lineTimer = 500;
    }

    var promisesLine = [];
    var promisesWord = [];

    function makePromiseLine(elem, index) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                if (isFunction(options.lineEndCallback)) {
                    options.lineEndCallback();
                }
                word(elem + '\n');
                resolve(elem);
            }, (options.lineTimer + 50) * index)
        })
    }

    contentArr.forEach(function(elem, index) {
        promisesLine.push(makePromiseLine(elem, index));
    })

    Promise.all(promisesLine).then(function() {
        if (isFunction(options.contentEndCallback)) {
            options.contentEndCallback();
        }
    });

    function word(line) {
        function makePromiseWord(elem, index) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    if (isFunction(options.strEndCallback)) {
                        options.strEndCallback(elem);
                    }
                    if (isFunction(options.wordCallback)) {
                        options.wordCallback(elem);
                    }
                    if (preSelector) {
                        preSelector.append(elem);
                    }

                    resolve(elem);
                }, index * parseInt(options.lineTimer / line.length))
            })
        }

        for (var i = 0; i < line.length; i++) {
            promisesWord.push(makePromiseWord(line[i], i));
        }

        Promise.all(promisesWord);
    }
}

module.exports = typingAnimation;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function load() {
    var cssText = __webpack_require__(0);
    var typing = __webpack_require__(1);
    var wordIndex = 0;

    var myCodeMirror = CodeMirror(document.body, {
        value: '',
        mode: "css",
        theme: "supershy"
    });

    var sheet = (function() {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(""));

        // Add the <style> element to the page
        document.head.appendChild(style);

        return style.sheet;
    })();

    typing({
        content: cssText,
        wordCallback: function(elem) {
            myCodeMirror.replaceSelection(elem);
        },
        strEndCallback: function(word) {
            if (word === '}') {
                sheet.insertRule(cssText.split('}')[wordIndex] + '}', 0);
                wordIndex++;
            }
        },
        lineTimer: 500
    });
}

window.onload = load;


/***/ })
/******/ ]);
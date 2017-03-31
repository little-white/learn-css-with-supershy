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

module.exports = "/**\n  今天是css教程的第一节\n  希望你最好知道什么是css\n  不过不知道也无妨，我带领大家来认识一下它\n  \n  记得看过一个人这么描述过：\n  如果html是人的骨架\n  那css就相当于人的衣服\n  而js是可以让这个人动起来\n\n  很形象吧。。。\n  （当然你说css3也可以让人动起来，js也可以控制美观，这个就是后话了）\n  大家准备好了么，开始上课\n  第一讲：color\n  我们已经看到右边静静地出现了“hello world”\n  来改变下它的颜色吧\n*/\n\n.container {\n  color: red;\n}\n\n/**\n  well done，看起来很简单\n  有些人刚开始学可能会问上面是什么鬼？\n  啥意思嘛。。。\n  是第一节，就啰嗦一些\n\n  其实我的需求就是\n  喂，那个“hello world”，我要改变你的颜色，变成红的\n  但这个hello world在哪里呢，.container里\n  改变颜色对应的属性是color\n  因为是红色对应的值就是red\n\n  也就是说css只是把我们需要的人类描述的语言，通过标准化来规范了一下而已\n  大家都按照这个标准，就不会有错了~~~\n*/"

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
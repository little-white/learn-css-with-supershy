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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

function load() {
    
    var cssText = __webpack_require__(6);
    var typing = __webpack_require__(0);
    var cssRuleIndex = 0;

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
                sheet.insertRule(cssText.split('}')[cssRuleIndex] + '}', cssRuleIndex);
                cssRuleIndex++;
            }
        },
        lineTimer: 1400
    });
}

window.onload = load;


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = "/**\n    今天是css教程的第三节\n    如果上一节background如果都学懂了的话\n    相信这节会更容易的\n    希望大家都渐入佳境~\n    开始今天的主题：font\n    希望大家先能联想下office word的功能呢\n    这次的顺序我们按照\n    常用程度\n    难易程度\n\n    先看看如何改变一个字体的大小\n*/\n\n.container {\n    font-size: 40px;\n}\n\n/**\n    和color类似，它也有很多keyword的值\n    比如\n    small、large、smaller、larger等等\n    但还是建议使用明确的数值\n    因为这样更清晰\n\n    经常看到一些网页中标题或者其它着重的问字就变粗了\n    那这种效果是如何实现的呢？\n*/\n\n.container {\n    font-weight: bold;\n}\n\n/**\n    可能有朋友就问\n    为啥加粗你就要keyword，而大小用数值呢\n    因为习惯吧\n    我觉得数值表示大小时更明确\n    用keyword表示字体粗细更形象\n    毕竟很少有人会设置一个字到底多粗、到底多细。。。\n\n    在office word中我们经常会设置文字的字体格式\n    比如宋体、隶体、正圆体等等\n    那css种的font也有这个功能\n*/\n\n.container {\n    font-family: georgia;\n}\n\n/**\n    我也不知道这是啥体，但可以看到确实和之前的字体不同了\n    我们来看下新浪的字体它是咋用的\n*/\n\n.container {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/**\n    这里简单解释下\n    如果有Arial字体就显示\n    否则就显示Helvetica\n    如果Helvetica也没有\n    就显示sans-serif字体\n    当然如果都没有，那就只要显示默认字体了\n    （我也不清楚默认字体是个啥 有兴趣的可以搜搜）\n    举个例子吧\n    马上要期末考试了\n    小明的爸爸说\n    \"你这次最好考个100分\"\n    \"考不到90也行\"\n    \"实在没发挥好80也凑合了\"\n    结果小明当天拉肚子\n    考了个刚及格，小明明爸爸此时醒悟了\n    对孩子不能要求太高\n    他只要尽力了 就行。。。\n    好像扯得有点远了\n\n    回归正题，有好奇的朋友可能就问\n    如果我想用个拉风的字体，但默认没这字体咋办呢\n    此时font-face就派上用场了\n    它可以自定义字体\n*/\n\n@font-face {\n    /*这里可以写你自定义字体的名称 之后会用到*/\n    font-family: 'Xoxoxa';\n    /*这里是自定义字体的文件，当然也可以存下来，使用本地路径*/\n    src: url('src/font/Xoxoxa.ttf');\n}\n\n/**\n    我们已经定义好了\"supershy\"字体\n    看看效果吧\n*/\n\n.container {\n    font-family: Xoxoxa;\n}\n\n/**\n    现在我们的hello world看起来非常有型\n    大家可以下载各种字体来练习练习\n    可以推荐个链接：http://www.webpagepublicity.com/free-fonts-x.html\n    接下来我们再说下office word中的斜体\n    对应到css中的是font-style\n*/\n\n.container {\n    font-style: italic;\n}\n\n/**\n    字体的学习就到这了\n    当然还有些属性\n    浏览器的兼容性还不好很好\n    就不说了，有兴趣的可以去看看\n    font-size-adjust\n    font-stretch\n*/\n\n\n\n\n\n"

/***/ })

/******/ });
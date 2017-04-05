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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = "/**\n    今天是css教程的第二节\n    我们就直奔主题了：background\n    为了形象一些，我们来举几个生活中的例子吧\n    上学时候的黑板，它的背景是黑色的\n    家里的壁纸，它的背景是一个个小图案组成，并且上下左右都是重复的\n    过年玻璃上各种贴画，它的背景是透明色+贴画组成\n    。。。等等\n    注意的是\"小明家很有背景\"，和我们要学得背景可不是一个意思哦\n    其实代码就是生活中的实例\n    能将生活中有很多例子和代码关联起来，记忆会更深刻\n*/\n\n.container {\n    background-color: #000;\n}\n\n/**\n    字面意思就是：背景颜色\n    这里颜色可以用到我们上节学的color了\n    nice，\"黑板\"做好了\n    那如何做个\"壁纸\"呢？\n*/\n\n.container {\n    background-image: url(\"http://icons.iconarchive.com/icons/ampeross/qetto-2/24/search-icon.png\");\n    background-repeat: repeat;\n}\n\n/**\n    我们先看background-image，因为是背景图，肯定得有张图片吧\n    看到长长的一一串了吧，这里我们使用了网络地址\n    当然我们也可以使用本地的\n*/\n\n.container {\n    background-image: url(\"src/image/search-icon.png\");\n}\n\n/**\n    而background-repeat后面的repeat\n    表示了这个图片需要左右重复、上下重复\n    可能聪明的朋友已经想到\n    肯定有专门左右重复、专门上下重复的属性\n*/\n\n.container {\n    /*左右重复*/\n    background-repeat: repeat-x;\n    /*上下重复*/\n    /*background-repeat: repeat-y;*/\n}\n\n/**\n    下面我们来看一看background-position\n    为了更清晰，我们把重复去掉\n*/\n\n.container {\n    background-position: 100px 30px;\n    background-repeat: no-repeat;\n}\n\n/**\n    原点是左上角的那个点点\n    100px表示图片离左边的距离\n    30px表示图片离上边的距离\n\n    实际上通过background-position来控制单个图片位置的场景不多\n    一般都是通过外层的div来控制位置\n    它的强大之处主要在于css sprite（雪碧图）\n    我们想象一个场景：\n    一个页面有N多个小图标，加载这个页面时候这些图标都要显示出来\n    但如果一个个去加载图片，使得client端发送多个请求，并增加了服务器的压力\n    css sprite可以将图片整合成一张大图\n    如果显示其中的某个小图片，background-position的作用就发挥出来了\n\n    就好比图书馆中书架（大图），我们可以通过编号的方式就可以找到某一本书（小图）\n    下面来个例子吧\n*/\n\n.container {\n    background-position: 0 0;\n    background-image: url(\"src/image/sprite.jpeg\");\n    background-repeat: no-repeat;\n}\n\n/**\n    可以看到上面是一个整合好的大图\n    我们来试试把梅花2显示出来\n*/\n\n.container {\n    background-position: -48px -65px;\n    width: 51px;\n    height: 68px;\n}\n\n/**\n    good，梅花2已经出来了^_^\n    是不是很神奇。。。\n\n    下面我们学学background-attachment属性\n    平时可能用到的地方不多\n    主要是在一些官网首页，背景图不跟着滚动时候需要用到它\n    同样来实践下吧\n    先把主容器隐藏\n\n*/\n\n.container {\n    display: none;\n}\n\n/**\n    下面我们给body加个背景\n    看看如何通过background-attachment属性来让设置背景图不跟着动\n*/\n\nbody {\n    background-image: url(\"src/image/sprite.jpeg\");\n    /*为了加滚动效果，我们让高度大一些。这块不理解没事 之后会详细讲*/\n    height: 2000px;\n    background-attachment: fixed;\n}\n\n/**\n    往下滚动时候背景图不动了\n    这一节的东西挺多的，没记住没关系\n    主要是练习、练习、练习\n    我们继续。。。\n\n    下面我们讲一个在首页铺满全屏时经常用到的一个属性\n    background-size\n    里面有两个很重要的属性：cover和contain\n*/\n\nbody {\n    background: none;\n    height: auto;\n}\n\n/**\n    为了方便展示，我们改成上下布局\n*/\n\n.container {\n    position: relative;\n    display: block;\n    width: 300px;\n    height: 300px;\n    background-image: none;\n}\n\n.cm-s-supershy {\n    height: 300px;\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n}\n\n/**\n    使用cover看看什么效果\n*/\n\n.container {\n    background-image: url(\"src/image/bg-img.jpg\");\n    background-size: cover;\n    background-color: transparent;\n    background-position: 0 0;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: auto;\n}\n\n/**\n    很多代码都是为了覆盖之前的样式，可以忽略\n    我们着重看讲的就好了\n    当我设置了cover，发现页面啥都没显示。。。\n    因为是背景图片，我们要设置具体的大小才可以显示出来\n*/\n\n.container {\n    height: 400px;\n    background-size: cover;\n}\n\n/**\n    图片铺满了整个屏幕，很是完美\n*/\n\n.container {\n    height: 800px;\n}\n\n/**\n    此时我们会发现，为了能铺满整个屏幕\n    背景图片会等比例的放大或缩小\n\n    简单来说就是给定一个容器的宽高\n    我们使用cover将图丢进去\n    图片会占满整个容器\n    但容器的比例不一定和图片一致\n    所以图片可能会被裁剪\n*/\n\n.container {\n    background-size: contain;\n}\n\n/**\n    而contain能保证我们的图片能显示全\n    所以可能会有左右或者上下留白\n\n    我们来举个生活的例子加深印象吧\n    经常出去旅游的人会带相机or手机拍照留念\n    想象你在一个寺庙前面\n    如果希望能把寺庙拍全（contain）\n    你需要离得稍微远一些\n    这样是拍全了，但周围有很多留白对吧\n    如果你希望相机里只有寺庙（cover）\n    你得离得很近，让寺庙铺满了相机的视角\n    但这样寺庙的某些部分就拍不到了，也就是说被裁剪了\n*/\n\n.container {\n    padding: 50px;\n    background-origin: content-box;\n}\n\n/**\n    我们会看到使用了content-box\n    背景图只在content区域显示\n*/\n\n.container {\n    background-origin: padding-box;\n}\n\n/**\n    这样就可以在padding区域显示了\n    我想如果设置为border-box\n    大家应该能猜到\n    在border也可以显示了~\n\n    background-clip和background-origin\n    其实挺类似的，有稍许的区别\n    我们通过一个页面来看吧\n    点击 https://little-white.github.io/learn-css-with-supershy/background/demo.html\n\n    这次的东西有点多，抓紧时间联系吧！\n*/"

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

function load() {
    
    var cssText = __webpack_require__(2);
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


/***/ })

/******/ });
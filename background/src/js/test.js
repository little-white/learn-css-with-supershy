var cssText = require('../css/test.css');

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

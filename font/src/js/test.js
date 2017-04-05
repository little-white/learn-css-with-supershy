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

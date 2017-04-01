var cssText = require('../css/test.css');

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

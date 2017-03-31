function load() {
    var cssText = require('./style.css');
    var typing = require('typing-animation');
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
        lineTimer: 500
    });
}

window.onload = load;

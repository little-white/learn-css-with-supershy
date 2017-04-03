(function(window) {
    window.addEventListener('render', function(e) {
    	loadHome();
    }, false);
    window.dispatchEvent(renderEvent);
})(window);

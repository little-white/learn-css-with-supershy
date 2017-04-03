(function(window){
	var db = new PouchDB('test');

	window.db = db;
})(window);
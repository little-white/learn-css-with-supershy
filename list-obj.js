(function () {
  var listArr = [{
    "link": "color",
    "name": "Color"
  }, {
    "link": "background",
    "name": "Background"
  }, {
    "link": "font",
    "name": "Font"
  }];
  listArr.map(function (elem, index) {
    elem.index = index+1;
    return elem;
  });
  var listObj = {
    "tutorials": listArr,
    "list-item": function () {
      console.log(this);
      return "<li><a href="+this.link+"/index.html><span>Chapter  "+this.index+".</span> "+this.name+"</a></li>";
    }
  };

  window.listObj = listObj;
})(window);

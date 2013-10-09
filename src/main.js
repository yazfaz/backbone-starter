(function (){

  var product = new Product({
    name: "computer"
  });

  var productView = new ProductView({
    model:product,
    el: '#store'
  });

  productView.render();
  console.log("Render productView el: " , productView.el);







})();

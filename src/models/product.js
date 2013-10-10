(function () {

  window.Product = Backbone.Model.extend({
    
  });

  window.Inventory = Backbone.Collection.extend({
    model: Product
  });
  
})();

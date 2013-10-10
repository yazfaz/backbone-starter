(function(){

  window.StoreView = Backbone.View.extend({
    initialize: function(){
      this.listenTo(this.collection, 'add', this.onProductAdd);
     
    },
    onProductAdd: function(newProduct){
      newProduct.view = new ProductView({model:newProduct});
      newProduct.view.render();
      $(this.el).append(newProduct.view.el);
    },
    render: function(){
      $(this.el).empty();
      this.collection.each(this.onProductAdd, this);
    }





  });



})();
(function(){

  window.ShoppingCartView = Backbone.View.extend({
    className: 'shopping',
    initialize: function(){
      this.listenTo(this.collection, 'add', this.onAddToCart);
       this.listenTo(userEvents, 'add-to-cart',this.onAddToCart)
    },
    onAddToCart: function(product){
      product.view = new ProductView({
        model:product});
      product.view.render();
      $(this.el).append(product.view.el);
    },
    render: function(){
      $(this.el).empty();
      this.collection.each(this.onAddToCart, this);
    }


  });


})();
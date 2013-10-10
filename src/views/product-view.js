(function () {

  window.ProductView = Backbone.View.extend({
    // className: 'product',
    template: _.getTemplate('product'),
    events: {
      'click button': 'addToCart'
    },
    initialize: function (options) {
    
    },
    render: function () {
      var newHtml = this.template(this.model.toJSON());
      $(this.el).html(newHtml);
      
    },
    // addToCart: function(){
    //   // this.model.clone();
    //   this.trigger('add-to-cart'), this.model.clone();
    // }
     addToCart: function(){
      // this.model.clone();
      userEvents.trigger('add-to-cart',this.model.clone());
    }
  });

})();

(function () {

  window.ProductView = Backbone.View.extend({
    // className: 'product',
    template: _.getTemplate('product'),
    initialize: function (options) {
    
    },
    render: function () {
      var newHtml = this.template(this.model.toJSON());
      $(this.el).html(newHtml);
      
    }
  });

})();

(function (){

  var firstInventory = new Inventory();
 

  var firstStoreView = new StoreView({
    collection: firstInventory,
    el: '#store'
  });

  firstInventory.add([
    {name: 'computer'},
    {name: 'phone'},
    {name: 'water'}
    ]);

 var cart = new Inventory();
 var shoppingCart = new ShoppingCartView({
  collection: cart,
  el: '#shopping-cart'
 });

})();

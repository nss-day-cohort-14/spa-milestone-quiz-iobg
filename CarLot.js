var CarLot = (function (carlot) {
  var inventory = [];

  
    carlot.getInventory=function () {
      return inventory;

    }
    carlot.loadInventory=function (callback) {
      //retrieves inventory from json
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
      inventory=JSON.parse(event.target.responseText).cars;
      callback(inventory);

      });
    }

    
    return carlot;


})(CarLot || {});


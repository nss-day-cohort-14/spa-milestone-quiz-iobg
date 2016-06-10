(function(){
var populatePage=function(inventory){
	var toDOM="";
	var container=document.getElementById('container');
	inventory.forEach(function(car,i){
		if(i%3===0){
			//dynamically creates a row for every 3 cards
			toDOM+=`<div class="row">`
		}
		toDOM+=`<div id="car${i}" class="car col-sm-3 col-sm-offset-1">`
		for(key in car){
			//adds key to card and ensures the first character is upper case
			toDOM+=`<div id="${car[key]}">`+key.charAt(0).toUpperCase()+ key.slice(1)+":"+car[key]+`</div>`;
		}
		toDOM += '</div>';
		if(i%3===2){
			//closes the row for every 3 cards
			toDOM+=`</div>`;
		}
	});
	container.innerHTML=toDOM;
	var carsOnPage= document.getElementsByClassName("car");

	for(let w=0; w<carsOnPage.length;w++){
		
		CarLot.addCSS(carsOnPage[w],CarLot.getColor(carsOnPage[w]));

		CarLot.addHandlers(carsOnPage[w],carsOnPage);
	}
	
}
CarLot.loadInventory(populatePage);
})();

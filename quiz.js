
var populatePage=function(inventory){
	console.log(inventory);
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
			toDOM+=`<div id="${key+i}">`+key.charAt(0).toUpperCase()+ key.slice(1)+":"+car[key]+`</div>`;
		}
		toDOM += '</div>';
		if(i%3===2){
			//closes the row for every 3 cards
			toDOM+=`</div>`;
		}
	});
	container.innerHTML=toDOM;

}
CarLot.loadInventory(populatePage);

var populatePage=function(inventory){
	console.log(inventory);
	var toDOM="";
	var container=document.getElementById('container');
	inventory.forEach(function(car,i){
		toDOM+=`<div id="car${i}" class="car">`
		for(key in car){
			toDOM+=`<div class="${key}">`+car[key]+`</div>`;
		}
		toDOM += '</div>';
	});
	container.innerHTML=toDOM;

}
CarLot.loadInventory(populatePage);
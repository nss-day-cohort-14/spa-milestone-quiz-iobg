
var populatePage=function(inventory){
	console.log(inventory);
	var toDOM="";
	var container=document.getElementById('container');
	inventory.forEach(function(car,i){
		if(i%3===0){
			toDOM+=`<div class="row">`
		}
		toDOM+=`<div id="car${i}" class="car col-sm-3">`
		for(key in car){
			toDOM+=`<div id="${key+i}">`+key.charAt(0).toUpperCase()+ key.slice(1)+":"+car[key]+`</div>`;
		}
		toDOM += '</div>';
		if(i%3===2){
			toDOM+=`</div>`;
		}
	});
	container.innerHTML=toDOM;

}
CarLot.loadInventory(populatePage);
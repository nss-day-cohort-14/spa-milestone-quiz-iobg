var CarLot = (function(eventHandlers){
	cars = document.getElementsByClassName("car");
	input = document.getElementById("input");
	eventHandlers.addHandlers = function(){
		for(i=0; i< cars.length;i++){
		cars[i].addEventListener("click",CarLot.clickEffect);
	}
	
		input.addEventListener("keyup", CarLot.typeEffect);
	
	
}
return eventHandlers;
})(CarLot);
CarLot.loadInventory(CarLot.addHandlers);

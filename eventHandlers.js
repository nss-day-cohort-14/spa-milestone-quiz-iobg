var CarLot = (function(eventHandlers){
	cars = document.getElementsByClassName("car");
	input = document.getElementById("input");
	eventHandlers.addHandlers = function(){
		for(i=0; i< cars.length;i++){
			//triggers the click effect of each specific card
		cars[i].addEventListener("click",CarLot.clickEffect);
	};
		//gives the input a listener that replaces description text
		input.addEventListener("keyup", CarLot.typeEffect);
	
	
}
return eventHandlers;
})(CarLot || {});
CarLot.loadInventory(CarLot.addHandlers);

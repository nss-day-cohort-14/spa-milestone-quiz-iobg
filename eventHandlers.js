var CarLot = (function(eventHandlers){
	input = document.getElementById("input");
	eventHandlers.addHandlers = function(car,cars){
		
			//triggers the click effect of each specific card
		car.addEventListener("click",function(){
				CarLot.clickEffect(event.currentTarget,cars,input);
		});
		
		//gives the input a listener that replaces description text
		input.addEventListener("keyup", function(){
			CarLot.typeEffect(event.currentTarget,input);
		});
	
	
}
return eventHandlers;
})(CarLot || {});


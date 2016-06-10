var CarLot=(function(carCSS){
	
	carCSS.addCSS=function(car, color){
	//sets border color to car color
		car.style.borderColor= color;
};
	carCSS.clickEffect = function(car,cars,input){
			for(i=0;i<cars.length;i++){
			cars[i].classList.remove("clicked");
		}
			//makes border thicker, changes background color
			car.classList.add("clicked");
			input.focus();
			//clears input field
			input.value="";		
		
		}
	
	carCSS.typeEffect= function(selectedCard,input){
		//sets car description to input value
		selectedCard.childNodes[6].innerHTML=input.value;
	}

		return carCSS;
	})(CarLot|| {});

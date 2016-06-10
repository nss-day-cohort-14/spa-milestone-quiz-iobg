var CarLot=(function(carCSS){
	var cars = document.getElementsByClassName("car");
	var input = document.getElementById("input");
	var selectedCard;
	carCSS.addCSS=function(){
	for(i=0;i<cars.length;i++){
		//sets border color to car color
		cars[i].style.borderColor= CarLot.getInventory()[i].color;

			

	};

	};
	carCSS.clickEffect = function(){
		for(w=0;w<cars.length;w++){
			selectedCard=event.currentTarget;
			cars[w].classList.remove("clicked");
			//makes border thicker, changes background color
			selectedCard.classList.add("clicked");
			input.focus();
			//clears input field
			input.value="";		

		}
	}
	carCSS.typeEffect= function(){
		//sets car description to input value
		selectedCard.childNodes[6].innerHTML=input.value;
	}

		
		return carCSS;
	})(CarLot);
CarLot.loadInventory(CarLot.addCSS);
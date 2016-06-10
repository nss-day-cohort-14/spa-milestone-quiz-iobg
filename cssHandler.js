var CarLot=(function(carCSS){
	carCSS.addCSS=function(){
	var cars = document.getElementsByClassName("car");

	for(i=0;i<cars.length;i++){
		cars[i].style.borderColor= CarLot.getInventory()[i].color;
		cars[i].addEventListener("click",function(){
			for(w=0;w<cars.length;w++){
			cars[w].classList.remove("clicked");
			event.currentTarget.classList.add("clicked");

		}
		});

	};

	};
		return carCSS;
	})(CarLot);
CarLot.loadInventory(CarLot.addCSS);
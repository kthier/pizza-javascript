//Reciept
function getReceipt() {
	var text1 = "Your Pizza Has Been Ordered:"+"<br>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log(text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); 
};	

//Meat
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+""+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log(text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h2>Total: <strong>$"+runningTotal+".00"+"</strong></h2>";
	getCheese(runningTotal,text1);
};

//Cheese
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
			text1 = text1+""+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Regular Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "No Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} 
	runningTotal = (runningTotal + cheeseTotal);
	console.log(selectedCheese+" = $"+cheeseTotal+".00");
	console.log(text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h2>Total: <strong>$"+runningTotal+".00"+"</strong></h2>";
	getCrust(runningTotal,text1);
};

//Crust
function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text1 = text1+""+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Plain Crust") {
		cheeseTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
		cheeseTotal = 0;
	} else if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else if (selectedCrust === "Spicy Crust") {
		cheeseTotal = 0;
	} else if (selectedCrust === "House Special Crust") {
		cheeseTotal = 0;		
	} 
	runningTotal = (runningTotal + crustTotal);
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log(text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h2>Total: <strong>$"+runningTotal+".00"+"</strong></h2>";
	getSauce(runningTotal,text1);
};

//Sauce
function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
			text1 = text1+""+selectedSauce+"<br>";
		}
	}
	if (selectedSauce === "Marinara Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "White Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "Barbeque Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "No Sauce") {
		sauceTotal = 0;
	} 
	runningTotal = (runningTotal + sauceTotal);
	console.log(selectedSauce+" = $"+sauceTotal+".00");
	console.log(text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h2>Total: <strong>$"+runningTotal+".00"+"</strong></h2>";
	getVeggies(runningTotal,text1);
};

//Veggies
function getVeggies(runningTotal,text1) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var v = 0; v < veggiesArray.length; v++) {
		if (veggiesArray[v].checked) {
			selectedVeggies.push(veggiesArray[v].value);
			console.log("selected veggies item: ("+veggiesArray[v].value+")");
			text1 = text1+""+veggiesArray[v].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount > 1) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	runningTotal = (runningTotal + veggiesTotal);
	console.log("total selected veggie items: "+veggiesCount);
	console.log(veggiesCount+" veggie - 1 free veggie = "+"$"+veggiesTotal+".00");
	console.log(text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h2>Total: <strong>$"+runningTotal+".00"+"</strong></h2>";
};
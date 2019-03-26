/*
	A script fájlban olyan metódusok találhatóak amelyek segítségével
	menedzselni tudjuk a cookie-jainkat.
	Lehetőség van hozzáadni egy bizonyos receptet a kedvencekhez.
	Illetve a listázásért és a megtekintésért felelős metódusok is itt találhatóak.
*/
function addToFav(name){
	var x = document.cookie;
	var array = [];

	//Ha nem engedélyeztük a cookikat -engedélyezzük
	if(x == ""){
		document.cookie = "accept=true";
	}

	//Szedjük le az eddigi recepteket ha van.
	if(getCookie("recipe") !== undefined){
		array = JSON.parse(getCookie("recipe"));
	}

	//Ellenőrizzük, hogy hozzá adtuk -e már a receptet a kedvencekhez.
	var i;
	for(i=0; i < array.length; i++){
		if(array[i] == name){
			console.log("megvan");
			return;
		}
	}

	//Ha minden rendben akkor adjuk hozzá az új receptet és dobjuk fel a cookie -t
	array.push(name);
	document.cookie = "recipe=" + JSON.stringify(array);
}

function listRecipes(){
	
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

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
		document.cookie = "recipe=" + JSON.stringify(array);
	}

	//Szedjük le az eddigi recepteket ha van.
	if(JSON.parse(getCookie("recipe")).length != 0){
		array = JSON.parse(getCookie("recipe"));
	}

	//Ellenőrizzük, hogy hozzá adtuk -e már a receptet a kedvencekhez.
	var i;
	for(i=0; i < array.length; i++){
		if(array[i] == name){
			message("A recept már a kedvencek között szerepel!");
			return;
		}
	}

	//Ha minden rendben akkor adjuk hozzá az új receptet és dobjuk fel a cookie -t
	array.push(name);
	document.cookie = "recipe=" + JSON.stringify(array);
	message("Az recept hozzá lett adva a kedvencekhez!");
}

function message(string){
  	var message = document.getElementById("message");

	message.innerHTML = string;
  	message.className = "show";

  	setTimeout( function() {
		message.className = message.className.replace("show", "");
	}, 3000);
}

function removeRecipe(recipe){
	var array = JSON.parse(getCookie("recipe"));
	var i;
	var retarray = [];

	for(i=0; i<array.length; i++){
		if(array[i] != recipe){
			retarray.push(array[i]);
		}
	}

	document.cookie = "recipe=" + JSON.stringify(retarray);
	message("Az recept el lett távolítva!<br><span>Az oldal hamarosan újratölt.</span>");
	setTimeout( function() {
		location.reload();
	}, 3000);
}

function getRecipeId(recipe, array){
	var i;
	for(i=0; i<array.length; i++){
		if(array[i] == recipe){
			return i;
		}
	}
}

function listRecipes(){
	var panel = document.getElementById("recipes");
	var x = document.cookie;
	if(document.cookie == "" || JSON.parse(getCookie("recipe")).length == 0){
		//Tájékoztatunk ha nincs még semmi benne.
		panel.innerHTML = "<h3>Jelenleg még semmit nem adtál hozzá a kedvencekhez!</h3>";
	}else{
		//Egyébként kezdjük el szépen listázni.
		var array = JSON.parse(getCookie("recipe"));
		panel.innerHTML = makeTables(array);
	}
}

function makeTables(array){
	var string = "";
	var i;

		//Levesek
		string += listSoups(array);

		//Sültek
		string += listBacked(array);

		//Sütemények
		string += listBagels(array);

		//Torták
		string += listCakes(array);

	return string;
}

function listSoups(array){
	var i, string;
	string = "<table><th>Levesek</th>";
	for(i=0; i<array.length; i++){
		switch(array[i]){
			case 'Husleves':
				string += "<tr><td>Expressz Húsleves</td><td class='button-td'><button onclick='showFav(" + '"soups"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"Husleves"' + ")'>Eltávolít</button></td></tr>";
				break;
			case 'Gyumolcsleves':
				string += "<tr><td>Puddingos gyümölcsleves</td><td class='button-td'><button onclick='showFav(" + '"soups"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"Gyumolcsleves"' + ")'>Eltávolít</button></td></tr>";
				break;
			case 'Legenyfogo':
				string += "<tr><td>Legényfogóleves</td><td class='button-td'><button onclick='showFav(" + '"soups"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"Legenyfogo"' + ")'>Eltávolít</button></td></tr>";
				break;
			case 'Sajtosfokhagyma':
				string += "<tr><td>Sajtos fokhagymakrémleves</td><td class='button-td'><button onclick='showFav(" + '"soups"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"Sajtosfokhagyma"' + ")'>Eltávolít</button></td></tr>";
				break;
			case 'Gulyas':
				string += "<tr><td>Babgulyás gazdagon</td><td class='button-td'><button onclick='showFav(" + '"soups"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"Gulyas"' + ")'>Eltávolít</button></td></tr>";
				break;
		}
	}

	if(string == "<table><th>Levesek</th>"){
		return string + "<tr><td>Nincs még kedvenc leves</td></tr></table>";
	}
	return string + "</table>";
}

function listBacked(array){
	var i, string;
	string = "<table><th>Sültek</th>";
	for(i=0; i<array.length; i++){
		switch(array[i]){
			case 'Rantotthus':
				string += "<tr><td>Sütőben sült rántott hús</td><td class='button-td'><button onclick='showFav(" + '"backed"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"Rantotthus"' + ")'>Eltávolít</button></td></tr>";
				break;
			case 'kfc':
				string += "<tr><td>KFC sült csirke</td><td class='button-td'><button onclick='showFav(" + '"backed"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"kfc"' + ")'>Eltávolít</button></td></tr>";
				break;
			case 'MezesSonka':
				string += "<tr><td>Mézes mustáros sült sonka</td><td class='button-td'><button onclick='showFav(" + '"backed"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"MezesSonka"' + ")'>Eltávolít</button></td></tr>";
				break;
			case 'bacon':
				string += "<tr><td>Fokhagymás baconös sült sertéscomb</td><td class='button-td'><button onclick='showFav(" + '"backed"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"bacon"' + ")'>Eltávolít</button></td></tr>";
				break;
			case 'szelet':
				string += "<tr><td>Natúr szelet brokkolis hajdinával</td><td class='button-td'><button onclick='showFav(" + '"backed"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"szelet"' + ")'>Eltávolít</button></td></tr>";
				break;
		}
	}
	if(string == "<table><th>Sültek</th>"){
		return string + "<tr><td>Nincs még kedvenc sült</td></tr></table>";
	}
	return string + "</table>";
}

function listBagels(array){
	var i, string;
	string = "<table><th>Sütemények</th>";

	for(i=0; i<array.length; i++){
		switch(array[i]){
			case 'vanella':
				string += "<tr><td>Vanella szelet</td><td class='button-td'><button onclick='showFav(" + '"bagels"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"vanella"' + ")'>Eltávolít</button></td></tr>";
				break;
			case 'pilota':
				string += "<tr><td>Pilóta szelet</td><td class='button-td'><button onclick='showFav(" + '"bagels"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"pilota"' + ")'>Eltávolít</button></td></tr>";
				break;
			case 'kolibri':
				string += "<tr><td>Kolibri szelet</td><td class='button-td'><button onclick='showFav(" + '"bagels"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"kolibri"' + ")'>Eltávolít</button></td></tr>";
				break;
		}
	}
	if(string == "<table><th>Sütemények</th>"){
		return string + "<tr><td>Nincs még kedvenc sütemény</td></tr></table>";
	}
	return string + "</table>";
}

function listCakes(array){
	var i, string;
	string = "<table><th>Torták</th>";
	for(i=0; i<array.length; i++){
		switch(array[i]){
			case 'gyors':
				string += "<tr><td>A leggyorsabb csokitorta</td><td class='button-td'><button onclick='showFav(" + '"cakes"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"gyors"' + ")'>Eltávolít</button></td></tr>";
				break;
			case 'csoki':
				string += "<tr><td>Csupa csoki torta (sütés nélkül)</td><td class='button-td'><button onclick='showFav(" + '"cakes"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"csoki"' + ")'>Eltávolít</button></td></tr>";
				break;
			case 'szivarvany':
				string += "<tr><td>Szivárvány torta</td><td class='button-td'><button onclick='showFav(" + '"cakes"' + ")'>Megtekint</button><button onclick='removeRecipe(" + '"szivarvany"' + ")'>Eltávolít</button></td></tr>";
				break;
		}
	}
	if( string == "<table><th>Torták</th>"){
		return string + "<tr><td>Nincs még kedvenc torta</td></tr></table>";
	}
	return string + "</table>";
}



function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

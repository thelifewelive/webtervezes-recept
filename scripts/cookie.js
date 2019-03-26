/*
	Ez a script megjelenít egy ablakot a kedvencek menüpont alatt,
	ha nincs elfogadva az oldalon a cookie-k engedélyezése.
	Ha el van fogadva akkor tovább enged.
	Ha nincs elfogadva akkor a megjelenő ablakon el lehet fogadni. (Tovább enged).
	Illetve el is lehet utasítani. (Visszadob az index-re)
*/
function checkTheCookies(){

	var temp = document.cookie;
	//Elemek beszerzése
	var box = document.getElementById('cookie');
	var span = document.getElementsByClassName("close")[0];

	//Nézzük, hogy van e már cookie -nk.
	temp = document.cookie;

	if(temp != ""){
		box.style.display = "none";
	}else{
		//Beszerezzük a gombokat
		var accept = document.getElementById("accept-cookie");
		var reject = document.getElementById("reject-cookie");

		//Megnyitjuk a boxot
		box.style.display = "block";

		//Ha elutasítja
		reject.onclick = function (){
			//Akkor irány vissza az index
			window.location.href = "../index.html";
		};

		//Ha elfogadja
		accept.onclick = function (){
			//Egyébként adjunk egy cookie-t, hogy tudjuk később nem kell ellenőrizni
			document.cookie = "accept=true";
			box.style.display = "none";
		};
	}
}

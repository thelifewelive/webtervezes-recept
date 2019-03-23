function openContent(evt, cityName) {
	// Létrehozzuk a változókat
  	var i, tabcontent, tablinks;

  	// Beszerezzük az összes olyan elemet aminek a classa tabcontent és hide-oljiuk őket
  	tabcontent = document.getElementsByClassName("tabcontent");
  	for (i = 0; i < tabcontent.length; i++) {
    	tabcontent[i].style.display = "none";
  	}

  	// Leszedjük az aktív gombokat
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
  		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Megjelenítjük az aktuális tab -et és hozzáadjuk az active class -t
  	document.getElementById(cityName).style.display = "block";
  	evt.currentTarget.className += " active";
}

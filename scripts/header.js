function setHeaderImage(){
	var random = Math.floor(Math.random() * 7);
	switch(random){
		case 0:
			document.getElementById('header').style.backgroundImage = "url('images/back1.jpg')";
			break;
		case 1:
			document.getElementById('header').style.backgroundImage = "url('images/back2.jpg')";
			break;
		case 2:
			document.getElementById('header').style.backgroundImage = "url('images/back3.jpg')";
			break;
		case 3:
			document.getElementById('header').style.backgroundImage = "url('images/back4.jpg')";
			break;
		case 4:
			document.getElementById('header').style.backgroundImage = "url('images/back5.jpg')";
			break;
		case 5:
			document.getElementById('header').style.backgroundImage = "url('images/back6.jpg')";
			break;
		case 6:
			document.getElementById('header').style.backgroundImage = "url('images/back7.jpg')";
			break;
	}
}

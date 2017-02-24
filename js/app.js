//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var restaurantNames = document.getElementsByClassName("name");

for (var i = 0; i < restaurantNames.length; i++){
	restaurantNames[i].addEventListener("click", showMenu);
}

function showMenu() {
	var secretMenu = this.querySelector(".menu");
	if (secretMenu.style.display === "none"){
		secretMenu.style.display = "block";
	} else {
		secretMenu.style.display = "none";
	}
}

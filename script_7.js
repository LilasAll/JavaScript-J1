//bot adolescent

let reponse = prompt("Vas-y wesh dit moi qqc :")

if (reponse.endsWith("?")) {
	console.log("Ouais Ouais...");
}	else if (reponse == "") {
	console.log("t'es en PLS");
}	else if (reponse.toUpperCase() == reponse) {
	console.log("Pwa, calme toi...");
} else if (reponse.indexOf('fortnite') >= 0){
	console.log("on s'fait une partie soum-soum?");
} else {
	console.log("balek");
}


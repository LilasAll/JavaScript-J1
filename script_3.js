let etage = prompt("Salut, bienvenue sur la pyramide ! Combien d'étages veux-tu?")
let hastag = "#"
let i = 1

while (i<=etage) {
	let line = "";
	for (let l = 0; l < (etage-i); l++) {
		line += " "
	}
	for (let k = 0; k < i; k++) {
		line = line + hastag
	}
	i++;
	console.log(line);
}


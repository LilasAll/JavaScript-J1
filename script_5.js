const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Livres empruntés une fois ? 
console.log('Livres empruntés au moins 1 fois ?')
for(let index in books) {
    (books[index]['rented']>1) ? console.log('Tous les livres ont été empruntés une fois ou plus'):console.log('Au moins 1 livre n a jamais été emprunté');
}

//livre le plus emprunté 
let moreReadBook = "";
let rentedscore = 0
console.log("Le livre le plus emprunté est : ");
books.forEach(book => {
  if (book.renter > rentedscore) {
    rentedscore = book.rented; 
    moreReadBook = book.title;
  }
});
console.log(moreReadBook);
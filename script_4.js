var entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//entrepreneurs.year(1970, 1971, )

//filtre entrepreneurs nés en 70's : 
console.log(`Entrepreneurs nés dans les années 70s : `)
let entrepreneurs70 = entrepreneurs.filter(entrepreneur => (entrepreneur.year > 1969 && entrepreneur.year < 1980));
console.log(entrepreneurs70)

//nom et prénoms des entrepreneurs : 
console.log(`Liste noms et prénoms entrepreneurs : `)
let entrepreneursnames = []
for (let index in entrepreneurs) {
  let k = entrepreneurs[index].first + " " + entrepreneurs[index].last;
  entrepreneursnames.push(k);
  console.log(entrepreneursnames[index])
}

//age des inventeurs aujourd'hui : 
console.log(`Age des entrepreneurs aujourd'hui :`)
for (let index in entrepreneurs) {
    console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last + " aurait :" + (2019 - entrepreneurs[index].year) + " ans");
}

//trie par ordre alphabétique du nom de famille :
console.log(`Trie par ordre alphabétique :`)
let entrepreneursnom = [];
for (let index in entrepreneurs) {
  let k = entrepreneurs[index].last + " " + entrepreneurs[index].first;
  entrepreneursnom.push(k);
}
entrepreneursnom.sort();
let entrepreneursalphabetic = [];
for (let index in entrepreneursnom) {
  entrepreneursalphabetic= entrepreneursnom[index].split(' ');
  console.log(entrepreneursalphabetic[1] + " " + entrepreneursalphabetic[0])
}


const marvel_heroes=['thor','ironman','spiderman']
const dc_heroes=['superman','flash','batman']
//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes)//array inside array hence proof ,array can take any data
const allheroes=marvel_heroes.concat(dc_heroes)
console.log(allheroes) 
// another method called spread
const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)
const anarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarr=anarr.flat(Infinity) //flat defined number of depth
console.log(realarr)
console.log(Array.isArray("Kunal"))
console.log(Array.from("Kunal"))//convert into array
console.log(Array.from({name:"kunal"}))//interesting
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));




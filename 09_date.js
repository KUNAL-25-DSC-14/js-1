let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
let myCreateDate=new Date(2023,0,23)

console.log(myCreateDate.toDateString());

let newdate=new Date("2023-01-14")
console.log(newdate.toLocaleString());

let myTimeStamp=Date.now()//time in milliseconds

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000))

let nayadate=new Date()
console.log(nayadate.getMonth());

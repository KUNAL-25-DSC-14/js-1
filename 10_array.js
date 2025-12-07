// array
//resizable
//can be mix datatypes
//create shallow point (same references)
//deep point(not share references)
const myarr=[0,1,2,3,4,'array']

const myheroes=['me',"father"]
const myarr2=new Array(1,2,3,4)
//Array methods
myarr.push(6);
myarr.push(7);
myarr.pop()
myarr.unshift(9)// will be inserted in starting  and everyother willshify
myarr.shift()// works like pop 
console.log(myarr) 
console.log(myarr.includes(9));
const newarr=myarr.join()//add array element to a string
console.log(myarr);
console.log(typeof newarr)

//slice ,splice
// differnce is that splice include last array and slice does not include
//but main difference is that splice manipulate the original array

console.log("A",myarr);
const myn1=myarr.slice(1,3)
console.log(myn1)
console.log("B",myarr);
const myn2=myarr.splice(1,3)
console.log(myn2)
console.log("C",myarr);







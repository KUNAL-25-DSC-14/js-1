//#primitive data types(call by value)
// 7 types:string,number ,boolean,null,undefined,Symbol,bigint

const score=100
const scoreValue=100.3
const isLoggedIn=false
const oustsidetemp=null;
let useEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const bigNumber=9849082480239409230;
//Reference(Non primtive)

//Array,objects,Functions
const heroes=["shaktiman","naagraj","doga"]
letmyobj={
name:"kunal",
age:25,

}
const myFunction=function(){
    console.log("hello world");
}
console.log(typeof bigNumber);
//interview fav questions type of data types all primitive ,and refernces like of null is object
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

const mysym=Symbol("key1")
const JsUser = {
    name:"Kunal",
    "full name":"Kunal Singh",
    [mysym]:"mykey1",
    age:25,
    location:"pune",
    email:"jkfjkd@gmail.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]
}

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

// ✅ NOW freeze AFTER adding methods
Object.freeze(JsUser);

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
 
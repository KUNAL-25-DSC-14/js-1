// stack,heap(types of memory)
// stack=> primitive
//heap=>references
let myfootballname="kunal10"
let anothername=myfootballname //op-kunal10;
anothername="raj10" //now the real concept arrive
//myfootballname is still kunal10
console.log(myfootballname);
console.log(anothername);
let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne;
userTwo.email='jfijier@jggj.com'
console.log(userOne.email);
console.log(userTwo.email);

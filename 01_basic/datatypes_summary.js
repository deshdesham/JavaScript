// primitive
// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scorevalue=100.3
const isloggedIn=false
const outsideTEMP=null
let userEmail;
const id =Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId);

// refence type or non premitive
// Array,Object,function

const arr=["des","nites","hts"];
let myobj={
    name:"hits",
    age:22
}
const myfun=function(name){
    console.log(name +" "+"singh");
}
myfun("nits")

console.log(typeof myfun);
console.log(typeof arr);
console.log(typeof myobj);
console.log(typeof scorevalue);

// -------------------------------------------------------
// stack(premitive) ,heap(non-premitive)
let myYoutubename="deshyt"
let anothername=myYoutubename
anothername="chaicode"

console.log(myYoutubename);
console.log(anothername);
let user = {
    email: "email.com",
    upi: "user@yabl"
};

let userOne = user; // Same reference as 'user'
userOne.email = "@deshemail.com"; // Modifies the same object

console.log(user.email);     // Output: @deshemail.com
console.log(userOne.email);  // Output: @deshemail.com

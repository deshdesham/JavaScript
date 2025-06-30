function myFunction(a, b) {
  //   return a * b;
  console.log(a + b); //14 but this is not retun value only console value
  console.log("retun"); //not execute afeter retun in funtion
}
const result = myFunction(5, 9);
console.log("result: ", result); //rersult: undefined

function addNumber(a, b) {
  // let result=a+b
  return a + b;
}
const restlt = addNumber(4, 7);
console.log("result: ", restlt); //result:  11

function ToCelsius(Fahrenheit) {
  return (5 / 9) * (Fahrenheit - 32);
}
console.log("celsius", ToCelsius(77)); //25

let name = "rohan";
let name1 = "desh";
function about(Name, name1) {
  console.log(`happy birthday ${Name}
wish you happy birthday by ${name1}`);
  return 1;
}
let val = about(name, "desh");
console.log("val", val);

const obj = {
  name: "harsit",
  game: function () {
    return "GTA";
  },
};
console.log(obj.game()); //GTA

const arr = ["fruit", "vegetable", "furniture"];
arr.forEach(function (element, index, array) {
  console.log(element, index, array); //fruit 0 [ 'fruit', 'vegetable', 'furniture' ]
});
const num = 9;
function Ui(name) {
  return `ui name is ${name}`;
}
console.log(Ui("react"), num);

// //input:string & output:first charcter----

function FindTag(Array, Target) {
  for (let i = 0; i <= Array.length; i++) {
    if (Array[i] === Target) {
      return i;
    }
  }
  return -1; //not found than return -1
}
console.log(FindTag([9, 8, 3, 7], 2)); //-1
console.log(FindTag([9, 8, 3, 7], 3)); //2

// //function expression----
const FindTags = function (Array, Target) {
  for (let i = 0; i <= Array.length; i++) {
    if (Array[i] === Target) {
      return i;
    }
  }
  return -1; //not found than return -1
};
console.log(FindTags([12, 25, 45, 55, 20], 20)); //4

// ////arrow function----------------------------

const promise = (num) => {
  return new Promise(function (resolve, rejected) {
    if (num % 2 === 0) return resolve("even");
    else return rejected("odd");
  });
};
//console.log(promise(77)); //Promise { <rejected> 'odd' }

//********hoisting */-----------------------------

hello(); //happy b day
function hello() {
  console.log("happy b day");
}
hello(); //happy b day

// -------
console.log(sum(8, 8)); //16
// console.log(sum(first));
// console.log(address);
// console.log(info);

function sum(x, y) {
  return x + y;

  const first = "desham";
  let info = {
    ///refrenced error
    last: "desha",
    age: 20,
  };
  var address = "narayan"; //undefined
}
console.log(sum(8, 8)); //16

//not work with arrow or expression funtion---
console.log(typeof hello); //funtion
var hello = "happy b day";
//let hello="happy birth day"; //not allowd
console.log(typeof hello); //string
//const hello="happy b day";  ///const and let doesn't work

//*****funtions inside functions---------------------
///lexical function----------------------------------
const myapp = () => {
  const myfunction = () => {
    console.log("this is my funtion");
  };
  const add = (a, b) => {
    return a + b;
  };
  const mul = (a, b) => {
    return a * b;
  };
  console.log("inside app");
  myfunction();
  console.log(add(5, 9)); //14
  console.log(mul(9, 9)); //81
};
myapp();

const myvar = "value1";
function myapp1() {
  // const myvar="value2"
  function func() {
    const func1 = () => {
      console.log("inside my value", myvar); //if not value present in myapp1 outside picup value // value1
    };
    // const myvar="value59";
    func1();
  }
  console.log("inside all");
  func();
}
myapp1();

//*********block scope vs function scope */--------------

//let and const are block scope-----
//var is function scope---------
// var value is globelly acess.
// let and const are block acess
{
  const first = "harsit";
  // var first="desh"
  // console.log(first);
}
{
  // console.log(first); //not access
}

///fucntion scope-------------------------

function myapp2() {
  if (true) {
    var firstname = "desh";
    console.log(firstname); //desh -2
  }
  if (true) {
    console.log(firstname); //desh -3
  }
  console.log(firstname); //desh -1
}
myapp2();

//************default parameter */--------------------

function add(a) {
  if (typeof b === "undefined") {
    b = 6;
  }
  return a + b;
}
const z = add(5, 6);
console.log(z); //11

function adds(a, b = 6) {
  return a + b;
}
console.log(adds(5)); //11

// ///***** rest parameter */-----------------------------

const add4 = (x, y, z) => {
  console.log(`a is ${x}`);
  console.log(`b is ${y}`);
  console.log(`c is ${z}`);
};
console.log(add4(5, 9, 8, 7, 3, 4, 1)); //a is 5 b is 9 c is 8 undefined

const funs = (a, b, ...c) => {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
  console.log(Array.isArray(a)); //false
  console.log(Array.isArray(c)); //true
};
console.log(funs(5, 9, 7, 6, 3, 14, 12, 1)); //a is 5 b is 9 c is 9,12,5,6

function addall(...num) {
  console.log(num);
  console.log(Array.isArray(num));
}
addall(1, 2, 3, 4, 5, 6, 7); //true

function addall1(...num) {
  let total = 0;
  for (number of num) {
    total = total + number;
  }
  console.log(total);
  console.log("isarray?", Array.isArray(num)); //true
}
addall1(1, 2, 3, 4, 5, 6, 7); //28

///***************parameter destructuring */-----------
//object
//react

const person = {
  name: "harsit",
  userName: "hitesh_1254",
  user_id: "235",
  age: 23,
  city: "delhi",
};
const userDetails = (obj) => {
  console.log(`userName is ${obj.userName}`); //userName is hitesh_1254
  console.log(`userAge is ${obj.age}`); //userAge is 23
};
userDetails(person);

const UserDetails = ({ userName, age, city, name }) => {
  console.log(`UserName is ${name}`); //UserName is harsit
  console.log(`UserCity is ${city}`);
  console.log(`UserAge is ${age}`);
};
UserDetails(person);

///callback function---------------------------------

const Function = (name, call) => {
  console.log(`hi i am greeting ${name}`);
  call();
};
const callFunction = () => {
  console.log("i am form callback function");
};
Function("devloper", callFunction); //Use an anonymous function (or arrow function) to pass a function reference instead of the return value:

const Function1 = (name, call) => {
  console.log(`hi i am greeting ${name}`);
  call();
};
const callFunction1 = (name) => {
  console.log("i am form callback function");
  console.log(`i am form callback function ${name}`); //i am form callback function hitesh
};
Function1("devloper", () => callFunction1("hitesh"));

const functionAdd = (x, y) => {
  return x + y;
};
const func = (value) => {
  // value(5,9) // is the same as functionAdd(5, 9)
  console.log(value(5, 9));
};
func(functionAdd); //pass functionAdd as the argument:

function fun(name) {
  console.log("inside app");
  console.log(`your name is ${name}`);
}
function fun2(call) {
  console.log(`hello ${"har"}`); //default vlaue
  // call("harsit"); //your name is harsit
  fun("harsit"); //your name is harsit
}
fun2(fun);

function fun3(a) {
  console.log(`i am show you function ${a}`); //i am show you function 202
}
function fun4(a, callback) {
  // var a=101; //i am show you function 101
  callback(a);
}
fun4(202, fun3);

//funtion returning function--------------------------

function myfunc() {
  function dark() {
    console.log("hello world");
  }
  return dark;
}
myfunc() //not return 
myfunc()() //hello world
// const ans=myfunc()
// ans() //hello world

//******************forEach array method  */-----------

const numbers = [2, 4, 6, 3, 9];
const mulby2=(num,index)=>{
  console.log(`index is ${index}`);
  console.log(`${num}*2=${num*2}`);
}
mulby2(numbers[0],0) //0 index is 2
mulby2(numbers[1],1) //1 index is 4
mulby2(numbers[2],2);//2 index is 6
mulby2(numbers[3],3); //3 index is 3
mulby2(numbers[4],4); //4 index is 9
mulby2(numbers[5],5); //undefined*2=NaN

const mulby3= (num, index) => {
  console.log(`mulby3 index is ${index}`);
  console.log(`mulby3 ${num}*2=${num * 2}`);
};
for(let i=0;i<=numbers.length;i++){
  console.log(i);
  console.log(numbers[i]); //2,4,6
  mulby3(numbers[i],i)
}

numbers.forEach(mulby3)

const numbers1 = [2, 4, 6, 3, 9];
numbers1.forEach(function(num){
  console.log(`num is ${num}`);
})

const users=[
  {firstname:"harsit",age:20},
  {firstname:"aman",age:18},
  {firstname:"hars",age:14},
  {firstname:"ankit",age:10},
  {firstname:"aazadi",age:8},
];
users.forEach(function(user){
  console.log(user.firstname);
  console.log(user.age);
});
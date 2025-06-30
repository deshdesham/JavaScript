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



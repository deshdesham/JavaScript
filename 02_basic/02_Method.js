// //////////map() method//////------------------------------
///tranform an array---------------------------------

const myarr = [8, 6, 3, 5];
function multiarr(x) {
  return x * 2;
}
console.log("multi array", myarr.map(multiarr)); //multi array [ 16, 12, 6, 10 ]

const ans = myarr.map(function (x) {
  return x.toString(4); // convert each number to base-4
});
console.log(ans); //[ '20', '12', '3', '11' ] base-4 value

const users = [
  { firstname: "harsit", age: 20 },
  { firstname: "ronak", age: 23 },
  { firstname: "rohit", age: 28 },
  { firstname: "mohit", age: 90 },
];
const ans1 = users.map((user) => {
  return user.firstname;
});
console.log(ans1); //[ 'harsit', 'ronak', 'rohit', 'mohit' ]

// //////////////filter() method//-------------------------

const myarr1 = [2, 3, 5, 8, 10, 14];
function isOdd(x) {
  return x % 2;
}
function isEven(x) {
  return x % 2 === 0;
}
const myarr1ans = myarr1.filter(isOdd);
const myarr2ans = myarr1.filter(isEven);
console.log(myarr1ans); //[ 3, 5 ]
console.log(myarr2ans); //[ 2, 8, 10, 14 ]

// ////////////reduce() method///---------------------------

const myarr3 = [5, 9, 10, 36, 12];
const myarr3ans = myarr3.reduce((accumulator, current_value) => {
  return accumulator + current_value;
}, 0); //0 is intial value
console.log(myarr3ans); //72

const usersItem = [
  { product_id: 1, product_name: "mobile", price: 20000 },
  { product_id: 2, product_name: "tablet", price: 3000 },
  { product_id: 3, product_name: "laptop", price: 25000 },
  { product_id: 4, product_name: "ipad", price: 1260000 },
  { product_id: 5, product_name: "computer", price: 80000 },
];
usersItem.push({ product_id: 9, product_name: "smartwatch", price: 9000 });
console.log(usersItem.map((user) => user.product_name)); //[ 'mobile', 'tablet', 'laptop', 'ipad', 'computer', 'smartwatch' ]
const newarr = [];
usersItem.forEach((item) => newarr.push(item.price));
const totalprice = newarr.reduce((acc, curr) => acc + curr);
console.log(totalprice); //1397000

//oneline code

const toalPrice = usersItem
  .map((item) => item.price)
  .reduce((acc, curr) => acc + curr, 0);
console.log(toalPrice); //1397000

const totalprices = usersItem.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalprices); //1397000

// //////////////////sort() method///-----------------------

const myarr4 = [5, 9, 10, 15, 35, 48];
myarr4.sort(); //Lexical (alphabetical) sort
console.log(myarr4); //Lexical (alphabetical) sort value [ 10, 15, 35, 48, 5, 9 ]
console.log(myarr4.sort((a, b) => a - b)); //[ 5, 9, 10, 15, 35, 48 ] corret way to sort in number \\//a=5,b=9;  a-b=-4 is negative so a first;
console.log(myarr4.sort((a, b) => b - a)); // [ 48, 35, 15, 10, 9, 5 ] //a=5,b=9;  a-b=-4 is negative so b first;
const user = ["harsit", "aman", "mohit", "bac"];
console.log(user.sort());
["aman", "bac", "harsit", "mohit"];

const product = [
  { product_id: 1, product_name: "p1", price: 200 },
  { product_id: 2, product_name: "p2", price: 100 },
  { product_id: 3, product_name: "p3", price: 300 },
  { product_id: 4, product_name: "p4", price: 2000 },
];

const priceSort = product.map((price) => price.price).sort((a, b) => a - b);
console.log(priceSort); //[ 100, 200, 300, 2000 ]
console.log(product.sort((a, b) => a.price - b.price)); //rearrange array object according price

// ////////////////find() method////--------------------------

const myprice = [200, 100, 600, 800, 900, 1200, 300, 500, 700, 600];
const duplicates = new Set(myprice); //object returns
const duplicates1 = [...new Set(myprice)]; //
console.log(duplicates); //Set(9) { 200, 100, 600, 800, 900, 1200, 300, 500, 700 }
console.log(duplicates1.filter((price) => price >= 300 && price <= 700)); //[ 600, 300, 500, 700 ]

console.log(myprice.every((x) => x % 2 === 0)); //true value return if all conditon true in array if one false then retun false value
console.log(myprice.every((x) => x <= 0)); //false

const usercart = [
  { product_id: 1, product_name: "mobile", price: 12000 },
  { product_id: 2, product_name: "tablet", price: 13000 },
  { product_id: 3, product_name: "printer", price: 14000 },
  { product_id: 4, product_name: "tv", price: 15000 },
];

console.log(usercart.every((price) => price.price > 8888888)); //false

/ /; ////////////////some() method///-----------------------

const numbers = [3, 5, 8, 9];
console.log(numbers.some((x) => x % 2 === 0)); ///true value retun if any one match condition in array

// ////////////fill() method////-------------------------------
// //value,start,end

const myarr5 = new Array(3).fill(-1);
console.log(myarr5); //[ -1, -1, -1 ]
const myarr6 = [6, 9, , 5, 7, 4, 6, 3, 1, 10];
console.log(myarr6.fill(0, 2, 7)); //value,startindex,endindex [6, 9, 0, 0,  0, 0, 0, 3, 1, 10]

//insert
const mearray = ["item1", "item2", "item3", "item4", "item5"];
mearray.splice(1, 3, "inseted");
console.log(mearray); //[ 'item1', 'inseted', 'item5' ]

//// ///////////////////iterables---------------------------
const firstname = "harsit";
for (char of firstname) {
  console.log(char);
}
console.log([...firstname].map((char) => char.toUpperCase())); //[ 'H', 'A', 'R', 'S', 'I', 'T' ]
const harsitname = ["H", "A", "R", "S", "I", "T"];
console.log(harsitname.join("").toLocaleLowerCase()); //harsit

// ////////////array like object////-----------------
// it has own lenth and property and it access with index
// example:String

// /////////////sets() it is iterable//------------
//store data
//sets also have its own methods
//no index-bassed acess
//order is not guranted
//unique item only(no dubplicate allowed)

console.log(new Set([1.3, 6, 8, 5, 5])); //not allowed duplicate Set(4) { 1.3, 6, 8, 5 }
const newsarr = new Set([1.3, 6, 8, 5, 5]);
console.log(newsarr[3]); //undefined
const numbs = new Set();
numbs.add(2);
numbs.add(5);
numbs.add(8);
console.log(numbs); //Set(3) { 2, 5, 8 }
console.log(numbs.has(5)); //true

const letArr = [1.3, 6, 8, 5, 5];
let length = 0;
for (let element of letArr) {
  length++;
}
console.log(length); //5

////////////map data structure////------------------
//breffing//-----
//     //object literal
//     //key------>string
//     //value------->symbole

const person = {
  name: "harsit",
  age: 20,
  1: "one",
};
for (let key in person) {
  // console.log(key);
  console.log(`${key}: ${person[key]}`); //name:harsit age:20 1:one
  console.log(key, typeof key); //string
}
const Person1 = new Map();
Person1.set("age", 20);
Person1.set("firstName", "harsit");
Person1.set("1", "one");
Person1.set(1, "1");
Person1.set({ lastName: "kumar" }, "lastname");
Person1.set([12, 10, 30], "Array");
console.log(Person1);
console.log(Person1.keys()); //MapIterator {'firstname', 'age', 'college', 1, Array(3), …}
// for(let keys of Person1){
//     console.log(keys);
// }
for (let keys of Person1.keys()) {
  console.log(keys, typeof keys);
  console.log(Array.isArray(keys)); //true
}
// firstName string 1 string 1 number { lastName: 'kumar' } object [ 12, 10, 30 ] object

for (let [key, value] of Person1) {
  console.log(key, value);
}

const person4 = new Map([["firstname", "harsit", ["age", 20]]]);
console.log(person4); //Map(1) {'firstname' => 'harsit'}

const person5 = {
  id: 1,
  firstname: "harsit",
};
const userinfo = new Map();
userinfo.set(person5, { age: 8, gender: "male" });
console.log(person5.id); //1
console.log(userinfo.get(person5).age); //8
console.log(userinfo.get(person5).gender); //male

//////////clone using object.assign/////-----------

const obj = {
  key1: "value1",
  key2: "value2",
};
// const obj1=obj
const obj1 = { ...obj };
console.log(obj1); //{ key1: 'value1', key2: 'value2' }
console.log(Object.assign({}, obj)); //{ key1: 'value1', key2: 'value2' }
obj.key3 = "value3";
console.log(obj); //{ key1: 'value1', key2: 'value2', key3: 'value3' }
console.log(obj1); //{ key1: 'value1', key2: 'value2' }

///optional chaning///---------------------------
const user1 = {
  firstname: "harsit",
  address: { houseNo: "112233" },
};
console.log(user1.address); //{ houseNo: '112233' }
console.log(user1.address.houseNo); //112233
const user2 = {
  firstname: "harsit",
  // address:{houseNo:"112233"}
};
console.log(user2.address); //key type undefine
//console.log(user2.address.houseNo); //error
console.log(user2?.address); //undefine
console.log(user2?.firstname); //harsit

///////create own method////---------------------
//function inside object

const person3 = {
  firstname: "harsit",
  age: 20,
  about: function () {
    console.log(`person name is ${this.firstname} and age is ${this.age}`);
    console.log(this); //{firstname: 'harsit', age: 20, about: ƒ}
  },
};
console.log(person3.about); //[Function: about]
person3.about(); //person name is harsit and age is 20

///this keyword/////------------------------

console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// console.log(window);
function myfucn() {
  "use strict";
  console.log(this); //undefined
}
myfucn();
// -==================== //call,applay,bind

function hello() {
  console.log("hello world");
}
hello();
//This is the normal way to call a function.
// It runs the function as-is, using the default this context (usually window in browsers).
hello.call();
//This uses JavaScript’s .call() method, which allows you to explicitly set the this context when calling a function.
hello.call(undefined); //hello world
function showName() {
  console.log(this.name);
}

const users3 = { name: "Desh" };
showName.call(users3); // Output: "Desh"

const usera = {
  name: "harsit",
  age: 25,
  userId: "25489",
  about: function () {
    console.log(`UserA name is ${this.name} and age is ${this.age}`);
  },
};
const userb = {
  name: "desh",
  age: 20,
  userId: "32154",
};
usera.about();

const userc = {
  name: "harsit",
  age: 25,
  userId: "25489",
  about: function (device, language) {
    console.log(
      `UserA name is ${this.name} and age is ${this.age} ,like to learn ${language} on ${device}`
    ); //UserA name is desh and age is 20 ,like to learn Javascript on laptop
  },
};
const userd = {
  name: "desh",
  age: 20,
  userId: "32154",
  device: "laptop",
  language: "Javascript",
};
userc.about.call(userd, userd.device, userd.language);
userc.about.call(userd, "laptop", "Java"); //also like this code execute
userc.about("laptop", "Java"); //also like this code execute

//////////////////applay///////////////--------------------------
function about(device, language) {
  console.log(
    `UserA name is ${this.name} and age is ${this.age} ,like to learn ${language} on ${device}`
  ); //UserA name is desh and age is 20 ,like to learn Javascript on laptop
}

const usere = {
  name: "desh",
  age: 20,
  userId: "32154",
  device: "laptop",
  language: "Javascript",
};
about.apply(usere, [usere.device, usere.language]);

function introduce(name, age, city) {
  console.log(`UserA name is ${name} and age is ${age},${city}`); //UserA name is harsita and age is 25,delhi
}
const details = ["harsita", 25, "delhi"];
introduce.apply(null, details);

const a = [5, 6, 9];
const b = [4, 8, 9, 1];
Array.prototype.push.apply(a, b);
console.log(a); //[5, 6, 9, 6,8, 9, 1]
console.log(typeof a); //object
const add = (a, b, c) => {
  return console.log(`total value is: ${a + b + c}`);
};
const value = [5, 6, 8];
console.log(add.apply(null, value)); //undefined ,apply has no effect on arrow function
console.log(add(...value)); //total value is: 19

//////////////////////////////bind----------------------///-------------------------------
function about(device, language) {
  console.log(
    "userf",
    `UserA name is ${this.name} and age is ${this.age} ,like to learn ${language} on ${device}`
  ); //UserA name is desh and age is 20 ,like to learn Javascript on laptop
}
const userf = {
  name: "desh",
  age: 20,
  userId: "32154",
  device: "laptop",
  language: "Javascript",
};
about.bind(userf, userf.device, userf.language)();

////////////////////////////////warning//////////--------------------------

const usersg = {
  firstname: "desham",
  age: 56,
  about: function () {
    console.log(this.firstname, this.age);
  },
};
// usersg.about();
const myans = usersg.about; //////what happen show undefined undefind
const myans1 = function () {
  console.log(this.firstname, this.age);
};
myans1();

const myfan = usersg.about.bind(users);
myfan();
myans1.bind(usersg)();

//////arrow function----------------------------

const users2 = {
  firstname: "desh",
  age: 25,
  about: function () {
    console.log("user2", this); ////one level up this in arrow function
    console.log(this.firstname, this.age);
    //console.log("user2", JSON.parse(JSON.stringify(this)));
  },
};
users2.about(user2);

const users4 = {
  firstname: "desh",
  age: 25,
  about: function () {
    console.log(this); ////one level up this in arrow function
    console.log(this.firstname, this.age);
  },
};
users4.about();

////////////////////////short syntax///------------------------
//create functions to create multiple objject//-------

const users5 = {
  firstname: "DESH",
  lastname: "hitesh",
  age: 20,
  email: "hitesh@gmail.com",
  adress: "house number,colony,pincode,state",
  about: function () {
    return `${this.firstname} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
console.log(users5.about());
console.log(users5.is18());

/////////////////////////////to make 100milion user create
/////////////////////////////function (that function create object)
/////////////////////////////add key value pair
/////////////////////////////object ko return karega

function CreateUsers(firstName, lastName, email, age, address) {
  const users = {};
  users.firstName = firstName;
  users.lastname = lastName;
  users.email = email;
  users.age = age;
  users.address = address;
  users.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
  };
  users.is18 = () => {
    return this.age >= 18;
  };
  return users;
}
const Users6 = CreateUsers("harsit", "desh", "abc@gmail.com", "3", "myadress1");
const Users7 = CreateUsers("hars", "des", "ccc@gmail.com", "8", "myadress2");
const Users8 = CreateUsers(
  "hadesh",
  "desham",
  "tiky@gmail.com",
  "9",
  "myadress3"
);
console.log(Users6);
console.log(Users6.is18());
console.log(Users6.about());

///store method in diffrent object---------------------
const UserMethod = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: () => {
    return this.age >= 18;
  },
};

function CreateUsers1(firstName, lastName, email, age, address) {
  const users = {};
  users.firstName = firstName;
  users.lastname = lastName;
  users.email = email;
  users.age = age;
  users.address = address;
  users.UserMethod.about;
  users.UserMethod.is18;
  return users;
}
const Users9 = CreateUsers("harsit", "desh", "abc@gmail.com", "3", "myadress1");
const Users10 = CreateUsers("hars", "des", "ccc@gmail.com", "8", "myadress2");
const Users11 = CreateUsers(
  "hadesh",
  "desham",
  "tiky@gmail.com",
  "9",
  "myadress3"
);
// console.log(Users9);
console.log(Users9.is18());
console.log(Users10.about());

/////////////////////solution using object.create////---------------
const obj3 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = Object.create(obj3);
console.log(obj2); //{}
const obj4 = {
  __proto__: obj3,
  key3: "value3",
};
console.log(obj4);
console.log(obj4.key3);
console.log(obj4.key1); //value1

//how its work
//obj2 me key nahi hai to upper dekega
//for exaple:--
console.log(obj4); ////show remaing value in protype
//what is _proto_ or [[prototype]] ek hai////////////--
//prototype alag hai
console.log(obj4.__proto__); //double (shift+-key)proto same

//what is prototype//----------------------------

function hello() {
  console.log("hello world");
}
hello();

//javascript function=====>function+Object deta hai
//to also know function name------------------------
console.log(hello.name); //function name 'hello'
console.log(hello.__proto__); //[Function (anonymous)] Object

//you can add your name own properties---------------

hello.myownProperties = "very unique value";
console.log(hello.myownProperties);

//name property ======>tells function names------------
//function properties more usefull properites
//jab function banate hai to free space deta hai jaise {},
//like "__proto__"//

console.log(hello.__proto__); //return constructor
//only function provided prototype property

//const hello={key1:"value1"} //prototype is not preset or
// const hello=["value1","value2"]; //prototype is not present or
function hello2() {
  console.log("hello world"); //present prototype
}
if (hello2.prototype) {
  console.log("prototype present");
} else {
  console.log("prototype not presetnt");
}
//////////////////////////add ,remove,----->properties--------------------

function hello() {
  console.log("hello");
}
hello.prototype.abc = "abc";
hello.prototype.ztc = "ztc";
hello.prototype.sing = function () {
  return "lalall laa lalal ";
};
console.log(hello.prototype);
console.log(hello.prototype.sing());

///////////////////////////use prototype-----------------------------------

function CreateUser(firstName, lastName, email, age, address) {
  const user = Object.create(CreateUser.prototype); //{} also user ={}  inherit methods
  // const user = {}; //this not work with node it work will browser
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  return user;
}
//console.log(CreateUser.prototype); //prototype and add methods.
// Attach method to prototype (use correct name)
CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
}
  CreateUser.prototype.is18 = function () {
    return this.age >= 18;
  }
  CreateUser.prototype.sing = function () {
    return "toon na ana na";
  }

  // Create user

const user11 = CreateUser("harsit", "desh", "abc@gmail.com", "3", "myadress1");
const user12 = CreateUser("hars", "des", "ccc@gmail.com", "8", "myadress2");
const user13 = CreateUser("hadesh","desham","tiky@gmail.com","9","myadress3");

console.log(user11.about());
console.log(user13);
console.log(user12.is18());

///new keywords///////////////////------------------

function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
const user9 = new createUser("harsit", 56);
console.log(user9); //CreateUser {firstName: 'harsit', age: 56}

//1) empty object this={}
//2) return this
//blew code is function thait is also called constrator fucntion

function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}

createUser.prototype.about = function () {
  console.log(this.firstName, this.age);
}

const user7 = new createUser("desham", 52);
console.log(user7); // prints user2 object

const emptyUser = Object.create(createUser.prototype);
console.log(emptyUser); // {} with prototype of createUser
emptyUser.firstName = "empty";
emptyUser.age = 0;
emptyUser.about(); // works!

//manually ho raha tha ab automatically hoga.ab prototype likne ki jarurat nahi hai

function CreateUser10(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;

  (CreateUser10.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
  }),
    (CreateUser10.prototype.is18 = function () {
      return this.age >= 18;
    }),
    (CreateUser10.prototype.sing = function () {
      return "toon na ana na";
    });
}
const user22 = new CreateUser("harsit","desh","abc@gmail.com","3","myadress1");
// const user4 = new CreateUser("hars", "des", "ccc@gmail.com", "8", "myadress2");
// const user5 = new CreateUser("hadesh","desham","tiky@gmail.com","9","myadress3");

// //USE CAPITAL C FOR CreateUser in feture call with new
console.log(user22);
console.log(user22.is18());

///hasown property-----------------------------
//print all key

for (let key in user22){
    console.log(key);
}
// //print function key------

for(let  key in user22){
    if(user22.hasOwnProperty(key)){
        console.log("user22",key);
    }
}
///more about prototype//---------------------
let number=[1,2,3,4];
//prototype
//prototype-------->function
////also type
let Numbers= new Array(1,2,3,4);
console.log(Array.prototype); //Object(0) []
console.log([1,2,3,4]);

let numbers1=[1,2,3];
console.log(Object.getPrototypeOf(numbers1));
console.log(numbers1);

//////////////class keyword////---------------------------
//2015//es6
//class are fake in javascript

class CreateUser11 {
  constructor(firstName, lastName, email, age, address) {
    console.log("constructor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "toon na ana na";
  }
  func(value) {
    console.log(value);
  }
}
const user14 = new CreateUser11("harsit","desh","abc@gmail.com","3","myadress1");
console.log(user14.about());
user14.func("desh") 

//show prototype //----------------------------
console.log(Object.getPrototypeOf(user14));

//class practice and extends keyword-----------------

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eat`;
  }
  issupercute() {
    return this.age <= 1;
  }
  iscute() {
    return true;
  }
}
const Animal1 = new Animal("tom", 2);
console.log(Animal1);
console.log(Animal1.eat());
console.log(Animal1.iscute());

class Animal_1{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eat`;
  }
  issupercute() {
    return this.age <= 1;
  }
  iscute() {
    return true;
  }
}
class dog extends Animal_1 {
  constructor(name, age, speed) {
    //animal class ko super class bhi bolte hai
    super(name, age);
    this.speed = speed;
  }
  run() {
    return `${this.name} is running at ${this.speed} kmph`;
  }
}
///object /instance
const tommy = new dog("tommy", 3, 45);
console.log(tommy);
console.log(tommy.run());

///same methods in base class///////---------------------

class Animal_2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `modified Eat:${this.name} is eat`;
  }
  issupercute() {
    return this.age <= 1;
  }
  iscute() {
    return true;
  }
}
class dogs extends Animal_2 {
  constructor(name, age, speed) {
    //animal class ko super class bhi bolte hai
    super(name, age);
    this.speed = speed;
  }
  run() {
    return `${this.name} is running at ${this.speed} kmph`;
  }
}
const tommys = new dogs("tommy", 3, 45);
console.log(tommys.run());
console.log(tommys.eat());

//getter and setter//////////////////-----------------
///////////////////////////////getter--------------------------------
class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
}
const person1=new Person("harsit","sharma",5);
console.log(person1);
console.log(person1.firstname);
console.log(person1.lastname);

class person_1{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    fullname(){
        return `${this.firstname} ${this.lastname}`
    }
}
const person2 = new person_1("harsit", "sharma", 5);
console.log(person2);
console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.fullname()); //harsit sharma

//////////////////////////////setter////------------------------------------------
class Person_3{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }
    setname(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
}
const person12=new Person_3("harsit","sharma",5);
person12.setname("mohit","desham");
console.log(person12);
//////////or antoher type set///////////////
person12.firstname="rohit";
person12.lastname="hitesh"
console.log(person12);

//create functionallity jo -person12.fullname:-mohit hitesh hojaye------------------------------------------
class Person_4{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }
    set fullname(fullname){
        fullname.split(" "); //is line se jaha bhi space dekega splite kar dega aur arrange karke add kar lega jaise [mohit ,desham]
        const[firstname,lastname]=fullname.split(" ");
        this.firstname=firstname;
        this.lastname=lastname;
    }
}
const person15 = new Person_4("harsit", "sharma", 5);
console.log(person15);
person15.fullname="mohit desham";
console.log(person15.fullname);

///static mathods and properties///---------------------

class Person_5 {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
  set fullname(fullname) {
    const [firstname, lastname] = fullname.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
  eat() {
    return `${this.firstname} is eat`;
  }
  issupercute() {
    return this.age <= 1;
  }
  iscute() {
    return true;
  }
}
const Person5=new Person_5("harsit","sharma",8);
console.log(Person5.eat());

///static meathod=/////////////////////////////--------------

class Persons {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  //static mathod class se related hote hai isko person1.classinfo(); se call nahi kar sake hai isko =log(person.classinfo());
  static classinfo() {
    return `this is person class`;
  }
  //     ///isko directory call kar sake hai class ke name lik ke
  static desc = "static property";
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
  set fullname(fullname) {
    const [firstname, lastname] = fullname.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
  eat() {
    return `${this.firstname} is eat`;
  }
  issupercute() {
    return this.age <= 1;
  }
  iscute() {
    return true;
  }
}
const person18 = new Persons("harsit", "sharma", 8);
console.log(person18.eat());
console.log(Persons.classinfo());
console.log(Persons.desc);
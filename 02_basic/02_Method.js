// //////////map() method//////------------------------------
///tranform an array---------------------------------

const myarr=[8,6,3,5]
function multiarr(x){
    return x*2
}
console.log("multi array",myarr.map(multiarr)); //multi array [ 16, 12, 6, 10 ]

const ans=myarr.map(function (x){
    return x.toString(4) // convert each number to base-4
})
console.log(ans); //[ '20', '12', '3', '11' ] base-4 value

const users=[
    {firstname:"harsit",age:20},
    {firstname:"ronak",age:23},
    {firstname:"rohit",age:28},
    {firstname:"mohit",age:90},
];
const ans1=users.map((user)=>{
    return user.firstname
})
console.log(ans1); //[ 'harsit', 'ronak', 'rohit', 'mohit' ]

// //////////////filter() method//-------------------------

const myarr1=[2,3,5,8,10,14];
function isOdd(x){
    return x%2
}
function isEven(x){
    return x%2===0
}
const myarr1ans=myarr1.filter(isOdd)
const myarr2ans=myarr1.filter(isEven)
console.log(myarr1ans); //[ 3, 5 ]
console.log(myarr2ans); //[ 2, 8, 10, 14 ]

// ////////////reduce() method///---------------------------

const myarr3= [5, 9, 10, 36, 12];
const myarr3ans=myarr3.reduce((accumulator,current_value)=>{
    return accumulator+current_value

},0) //0 is intial value
console.log(myarr3ans); //72

const usersItem=[
    {product_id:1,product_name:"mobile",price:20000},
    {product_id:2,product_name:"tablet",price:3000},
    {product_id:3,product_name:"laptop",price:25000},
    {product_id:4,product_name:"ipad",price:1260000},
    {product_id:5,product_name:"computer",price:80000},
];
usersItem.push({product_id:9,product_name:"smartwatch",price:9000})
console.log(usersItem.map(user=>user.product_name)); //[ 'mobile', 'tablet', 'laptop', 'ipad', 'computer', 'smartwatch' ]
const newarr=[]
usersItem.forEach((item)=>newarr.push(item.price))
const totalprice=newarr.reduce((acc,curr)=>acc+curr)
console.log(totalprice); //1397000

//oneline code

const toalPrice=usersItem.map(item=>item.price)
.reduce((acc,curr)=>acc+curr,0)
console.log(toalPrice); //1397000

const totalprices=usersItem.reduce((acc,curr)=>acc+curr.price,0)
console.log(totalprices);//1397000

// //////////////////sort() method///-----------------------

const myarr4=[5,9,10,15,35,48]
myarr4.sort() //Lexical (alphabetical) sort
console.log(myarr4); //Lexical (alphabetical) sort value [ 10, 15, 35, 48, 5, 9 ]
console.log(myarr4.sort((a,b)=>a-b)); //[ 5, 9, 10, 15, 35, 48 ] corret way to sort in number \\//a=5,b=9;  a-b=-4 is negative so a first;
console.log(myarr4.sort((a,b)=>b-a));// [ 48, 35, 15, 10, 9, 5 ] //a=5,b=9;  a-b=-4 is negative so b first;
const user=["harsit","aman","mohit","bac"];
console.log(user.sort()); [ 'aman', 'bac', 'harsit', 'mohit' ]

const product=[
    {product_id:1,product_name:"p1",price:200},
    {product_id:2,product_name:"p2",price:100},
    {product_id:3,product_name:"p3",price:300},
    {product_id:4,product_name:"p4",price:2000},
];

const priceSort=product.map((price)=>price.price).sort((a,b)=>a-b)
console.log(priceSort); //[ 100, 200, 300, 2000 ]
console.log(product.sort((a,b)=>a.price-b.price)); //rearrange array object according price

// ////////////////find() method////--------------------------

const myprice = [200, 100, 600, 800, 900, 1200, 300, 500, 700, 600];
const duplicates=new Set(myprice) //object returns
const duplicates1=[...new Set(myprice)] //
console.log(duplicates); //Set(9) { 200, 100, 600, 800, 900, 1200, 300, 500, 700 }
console.log(duplicates1.filter((price)=>price >=300 && price<=700)); //[ 600, 300, 500, 700 ]

console.log(myprice.every((x)=>x%2===0)); //true value return if all conditon true in array if one false then retun false value
console.log(myprice.every((x)=>x<=0)); //false

const usercart=[
    {product_id:1,product_name:"mobile",price:12000},
    {product_id:2,product_name:"tablet",price:13000},
    {product_id:3,product_name:"printer",price:14000},
    {product_id:4,product_name:"tv",price:15000},
];

console.log(usercart.every((price)=>price.price>8888888)); //false

/ /////////////////some() method///-----------------------

const numbers=[3,5,8,9];
console.log(numbers.some(x=>x%2===0));  ///true value retun if any one match condition in array

// ////////////fill() method////-------------------------------
// //value,start,end

const myarr5=new Array(3).fill(-1)
console.log(myarr5); //[ -1, -1, -1 ]
const myarr6=[6,9,,5,7,4,6,3,1,10]
console.log(myarr6.fill(0,2,7)); //value,startindex,endindex [6, 9, 0, 0,  0, 0, 0, 3, 1, 10]

//insert
const mearray=["item1","item2","item3","item4","item5"];
mearray.splice(1,3,"inseted");
console.log(mearray); //[ 'item1', 'inseted', 'item5' ]

//// ///////////////////iterables---------------------------
const firstname="harsit";
for(char of firstname){
    console.log(char);
}
console.log([...firstname].map((char)=>char.toUpperCase())); //[ 'H', 'A', 'R', 'S', 'I', 'T' ]
const harsitname=[ 'H', 'A', 'R', 'S', 'I', 'T' ]
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

console.log(new Set([1.3,6,8,5,5])); //not allowed duplicate Set(4) { 1.3, 6, 8, 5 }
const newsarr=new Set([1.3,6,8,5,5])
console.log(newsarr[3]); //undefined 
const numbs=new Set()
numbs.add(2)
numbs.add(5)
numbs.add(8)
console.log(numbs); //Set(3) { 2, 5, 8 }
console.log(numbs.has(5)); //true

const letArr=[1.3,6,8,5,5];
let length=0;
for(let element of letArr){
    length++
}
console.log(length); //5

////////////map data structure////------------------
//breffing//-----
//     //object literal
//     //key------>string
//     //value------->symbole

 const person={
        name:"harsit",
        age:20,
        1:"one",
    }
    for(let key in person){
        // console.log(key);
        console.log(`${key}: ${person[key]}`); //name:harsit age:20 1:one
        console.log(key,typeof key); //string
    }
    const Person1=new Map()
    Person1.set("age",20)
    Person1.set("firstName","harsit")
    Person1.set("1","one")
    Person1.set(1,"1")
    Person1.set({"lastName":"kumar"},"lastname")
    Person1.set([12,10,30],"Array")
    console.log(Person1);
    console.log(Person1.keys()); //MapIterator {'firstname', 'age', 'college', 1, Array(3), …}
    // for(let keys of Person1){
    //     console.log(keys);
    // }
    for(let keys of Person1.keys()){
        console.log(keys,typeof keys); 
        console.log(Array.isArray(keys)); //true
    }
        // firstName string 1 string 1 number { lastName: 'kumar' } object [ 12, 10, 30 ] object

    for (let [key,value] of Person1){
        console.log(key,value);
    }

    const person4=new Map([["firstname","harsit",["age",20]]]);
    console.log(person4); //Map(1) {'firstname' => 'harsit'}

    const person5={
        id:1,
        firstname:"harsit"
    }
    const userinfo=new Map()
    userinfo.set(person5,{age:8,gender:"male"})
    console.log(person5.id); //1
    console.log(userinfo.get(person5).age); //8
    console.log(userinfo.get(person5).gender); //male

    //////////clone using object.assign/////-----------

    const obj={
        key1:"value1",
        key2:"value2"
    }
    // const obj1=obj
    const obj1={...obj}
    console.log(obj1); //{ key1: 'value1', key2: 'value2' }
    console.log(Object.assign({},obj)); //{ key1: 'value1', key2: 'value2' }
    obj.key3="value3"
    console.log(obj); //{ key1: 'value1', key2: 'value2', key3: 'value3' }
    console.log(obj1); //{ key1: 'value1', key2: 'value2' }

    ///optional chaning///---------------------------
    const user1={
        firstname:"harsit",
        address:{houseNo:"112233"}
    }
    console.log(user1.address); //{ houseNo: '112233' }
    console.log(user1.address.houseNo); //112233
    const user2={
        firstname:"harsit",
        // address:{houseNo:"112233"}
    }
    console.log(user2.address); //key type undefine
    //console.log(user2.address.houseNo); //error
    console.log(user2?.address); //undefine
    console.log(user2?.firstname); //harsit

    ///////create own method////---------------------
    //function inside object

    const person3={
        firstname:"harsit",
        age:20,
        about:function(){
            console.log(`person name is ${this.firstname} and age is ${this.age}`);
            console.log(this); //{firstname: 'harsit', age: 20, about: ƒ}
        }
    }
    console.log(person3.about);//[Function: about]
    person3.about() //person name is harsit and age is 20

    ///this keyword/////------------------------

    console.log(this);//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
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
    hello.call(undefined) //hello world
    function showName() {
        console.log(this.name);
      }
      
      const users3 = { name: "Desh" };
      showName.call(users3); // Output: "Desh"
      
      const usera={
        name:"harsit",
        age:25,
        userId:"25489",
        about:function(){
            console.log(`UserA name is ${this.name} and age is ${this.age}`);
        }
      }
      const userb={
        name:"desh",
        age:20,
        userId:"32154"
      }
      usera.about()

      const userc = {
        name: "harsit",
        age: 25,
        userId: "25489",
        about: function (device,language) {
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
      userc.about.call(userd,userd.device,userd.language);
      userc.about.call(userd,"laptop","Java"); //also like this code execute
      userc.about("laptop","Java"); //also like this code execute

      //////////////////applay///////////////--------------------------
          function about(device,language){
            
            console.log(
              `UserA name is ${this.name} and age is ${this.age} ,like to learn ${language} on ${device}`
            ); //UserA name is desh and age is 20 ,like to learn Javascript on laptop
          }

          const usere= {
            name: "desh",
            age: 20,
            userId: "32154",
            device: "laptop",
            language: "Javascript",
          };
          about.apply(usere,[usere.device,usere.language])

          function introduce(name,age,city){
            console.log(`UserA name is ${name} and age is ${age},${city}`); //UserA name is harsita and age is 25,delhi
          }
          const details=["harsita",25,'delhi']
          introduce.apply(null,details)

          const a=[5,6,9]
          const b=[4,8,9,1]
          Array.prototype.push.apply(a,b)
          console.log(a); //[5, 6, 9, 6,8, 9, 1]
          console.log(typeof a); //object
          const add=(a,b,c)=>{
            return console.log(`total value is: ${a+b+c}`)            
          }
          const value=[5,6,8]
          console.log(add.apply(null, value)); //undefined ,apply has no effect on arrow function
          console.log(add(...value)); //total value is: 19

          //////////////////////////////bind----------------------///-------------------------------
          function about(device, language) {
            console.log("userf",
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
          about.bind(userf,userf.device,userf.language)()

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


const marks=[34,32,22,120];
const arr=new Array(20,21,22,23,24,'orange');
console.log(arr.length);

console.log(Array.isArray(arr));
console.log(typeof(arr));
console.log(arr[2]);
let value=marks.indexOf(22);
console.log(value)
marks.push(122);
console.log(marks);   //add value in last array
marks.unshift(12)    //add value in first array
console.log(marks);
marks.pop()          //remove vale from last array
console.log(marks);
marks.shift();       //remove value first array
console.log(marks);
marks.splice(2 , 3)   //remove valuse where indexof strt and end 
console.log(marks);

//concat array start
let marks1=[34,32,22,120];
let marks2=[1,2,3,4,5,6];
marks1=marks1.concat(marks2);
console.log("spreed oprerater" ,[marks1,...marks2]);
console.log(marks1.join()); //34,32,22,120,1,2,3,4,5,6 its return or change into string
// console.log(marks1);
// //end concat array

let myObj={
    'first name':"hai", 
    isactive:true,
    marks:"[1,2,3,4,5]", //string
    mark:[25,36,56,89] //array
}
console.log(myObj.marks[-9]); //undefined
console.log(myObj.marks[9]); //5
console.log(typeof myObj.marks); //string
console.log(typeof myObj.mark); //object as array

const letarr= [1,2,3,4,5]
console.log("A",letarr);

//slice and splice
console.log("B",letarr.slice(1 ,3));
console.log("orignal value not changed when use slice",letarr);

console.log("C", letarr.splice(1,4));
console.log("orignal value are changed when use splice",letarr);

const another_arry=[4,4,5,6,[6,8,9,7],9,[36,52,54,98]]
console.log(another_arry.flat(Infinity));
console.log(Array.from("pankaj")); //[ 'p', 'a', 'n', 'k', 'a', 'j' ]
console.log(Array.from({name:"pankaj"})); //[]

const scor1=23
const scor2=85
const scor3=99
console.log(Array.of(scor1,scor2,scor3)); //[ 23, 85, 99 ]

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
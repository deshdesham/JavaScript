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

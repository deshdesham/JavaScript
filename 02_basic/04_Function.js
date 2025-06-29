function myFunction(a, b) {
//   return a * b;
console.log(a+b); //14 but this is not retun value only console value
  console.log("retun"); //not execute afeter retun in funtion
}
const result=myFunction(5,9);
console.log("result: ",result); //rersult: undefined

function addNumber(a,b){
    // let result=a+b
    return a+b;
}
const restlt=addNumber(4,7)
console.log("result: ",restlt); //result:  11


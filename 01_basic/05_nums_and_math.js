const score=400
const blance=new Number(100)
console.log(blance);
console.log(blance.toString().length);
console.log(blance.toFixed(2)); //100.00
// const newvalue=122.8964
const newvalue=122.8964
console.log(newvalue.toPrecision(3)); //123
console.log(newvalue.toPrecision(2)); //1.2e+2

const value=10000000
console.log(value.toLocaleString("en-IN")); 

// ====================================================
console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.2)); //4
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4,3,6,8)); //3
console.log(Math.max(4,3,8,6)); //8

console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min) + 1)+min) //output 10-20

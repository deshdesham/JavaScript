const date=new Date()
console.log(date);
console.log(date.toString()); //Sat Jun 28 2025 12:22:39 GMT+0530 (India Standard Time)
console.log(date.toLocaleDateString()); //28/6/2025
console.log(date.toDateString()); //Sat Jun 28 2025
console.log(date.getDate()); //28
console.log(date.toLocaleTimeString()); //12:25:01 pm
console.log(typeof date); //object
const newdate=new Date(2024,0,5)
const newdate1=new Date(2024,0,5 ,5,3,25)
console.log(newdate.toDateString()); //Fri Jan 05 2024
console.log(newdate1.toLocaleString()); //5/1/2024, 5:03:25 am

const newdate2=new Date("2025","06","25")
console.log(newdate2.toLocaleString()); //25/7/2025, 12:00:00 am

let timstamp=Date.now();
console.log(timstamp);
console.table(newdate2.getTime());
console.log(Math.floor(Date.now()/1000)); //convert to second 1751094574

console.log(date.toLocaleString("default",{weekday:'long'})) //Saturday
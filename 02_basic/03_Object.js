//singleton
// Object.create()
const person={
    about(){
        console.log(`person name is ${this.name} and age is ${this.age}`);
    }
}
const student=Object.create(person)
student.name="harsit"
student.age=23
student.about() //person name is harsit and age is 23
console.log(Object.getPrototypeOf(student) === person); // true

const student1=Object.create(person)
student1.name="desh"
student1.age=25
student1.about() //person name is desh and age is 25

//////////object literal-------------------------------
const symbole=Symbol("lastname")
const person2={
    name: "desh",
    symbole:"lastname" , ///type of string not act like symbol so u can use [symbole]
    [symbole]:"lastname",
    age:20,
    "person hobbies":["sleeping","music","playing game"],
}
console.log(person2["person hobbies"]); //[ 'sleeping', 'music', 'playing game' ]
console.log(typeof person2.symbole);// string
console.log(person2[symbole]);
console.log(typeof person2[symbole]);// string
person2.email="harsit@google.com"
// Object.freeze(person2)
person2.email="desh@chatgpt.com"
console.log(person2);
person2.greeting = function () {
    console.log(`this person name is ${this.name} and age is ${this.age}`);
}
person2.greeting();

// const tinderUser=new Object()=========================
const tinderUser={}
tinderUser.id="12543ac"
console.log(tinderUser);

//for in loop---
//Object.keys--
//for in----

for (let key in person2){
    console.log(key); //name,symbole,age,person hobbies,email
    //console.log(person2.key); //undefined
    console.log(person2[key]); //desh,lastname,20,[ 'sleeping', 'music', 'playing game'],desh@chatgpt.com

      // Object.keys----

    console.log(Object.keys(person2));//[ 'name', 'symbole', 'age', 'person hobbies', 'email', 'greeting' ]
    console.log(typeof Object.keys(person2)); //object
    console.log(Array.isArray(Object.keys(person2))); //true

}

////////////////////////key of--------------------------------------

for(let key of Object.keys(person2)){
    console.log(person2[key]); //retun key pair value
}
////////////computed properties---

const key1="mykey1"
const key2="mykey2"
const val1="myval1"
const val2="myval2"
////output like {mykey1:"myval1",mykey2:"myval2"}
const objs={
    [key1]:val1,
    [key2]:val2
}
console.log(objs); //{ mykey1: 'myval1', mykey2: 'myval2' }
const obj1={}
obj1[key1]=val1
obj1[key2]=val2
console.log(obj1); //{ mykey1: 'myval1', mykey2: 'myval2' }
const obj2={1:"a",2:"b"}
const obj3={3:"c",4:"d"}
const obj4={3:"e",4:"f"}
console.log(Object.assign({},obj2,obj3)); //it's used to create a new object so you don't accidentally modify the original objects.
console.log("not",obj2);

//spered operator in array and object---

const arr=[..."2354789"]
//console.log(arr); //['2', '3', '5','4', '7', '8','9']
console.log(arr.length); //7

const newobj={...["item1","item2"]};
console.log(newobj); //{ '0': 'item1', '1': 'item2' }

//spred operator in object---

//console.log(Object.assign({},obj3,obj4)); //last value if same key in object
const news={...obj2,...obj4}
console.log(news); //{ '1': 'a', '2': 'b', '3': 'e', '4': 'f' }

//****object destructuring */

const Student={
    name:"harsit",
    age:23,
    school:"dya"
}
const {name,age,school}=Student
console.log(Student.name); //harsit

const Band={
    bandName:"nato",
    famous_songs:"spring songs",
    year:1969,
    another_fam_songs:"kasmir"
};
// const {bandName,famous_songs,year,another_fam_songs}=Band
const {bandName:VAL1,famous_songs:VAL2,year:VAL3,another_fam_songs:VAL4}=Band
// Band.persnName="harsit"
console.log("VAL_VALUE",VAL3);//1969
if(Band.personName? "" : Band.persnName="harsit"){
   console.log(Band);
}
const {bandName,famous_songs,...respond}=Band;
console.log(respond); //{ year: 1969, another_fam_songs: 'kasmir', persnName: 'harsit' }

//object in array--
//very useful in real world application---

const Users=[
    {user_id:1,first_name:"desh",gender:"male"},
    {user_id:2,first_name:"raj",gender:"male"},
    {user_id:3,first_name:"rashmi",gender:"female"}
];

for(let user of Users){
    // console.log(user);
    console.log(user.user_id);{1,2,3}
    console.log(user.first_name);
    // console.log(user.gender);
}

//nested destureturing---
const Users1=[
    {user_id:1,first_name:"desh",gender:"male"},
    {user_id:2,first_name:"raj",gender:"male"},
    {user_id:3,first_name:"rashmi",gender:"female"}
];
const [user1,user2,user3]=Users1;
console.log(user2); //{ user_id: 2, first_name: 'raj', gender: 'male' }

const [{first_name},{gender}]=Users;
console.log(first_name); //desh
const [{first_name:user1firstname,gender:user1gender},{first_name:user2firstname,gender:user2gender},{gender:user3gender}]=Users

console.log(user1firstname); //desh
console.log(user2firstname);//raj;

const [{first_name:User1firstname,Gender,user_id}, , {gender:User3gender}]=Users; /// , this skip second user
console.log(gender);
let name="desh"
let repoCount=50
console.log(`my name is ${name} and my repocount is ${repoCount}`);
let gameName=new String("jackfruit")
console.log(gameName);

//at
console.log(gameName.at(2));
const funAt=function(str){
    return str.at(-1)
}
let charterOne="this is glass1"
charterTwo=charterOne
charterTwo="this is glass2"
console.log(funAt(charterOne));
console.log(funAt(charterTwo));

//charAt
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(`charter at index of ${4} is ${sentence.charAt(5)}`);

// concat
let hello="hello"
console.log(hello.concat(" my name is desh"));
const greetList = ["Hello", " ", "Venkat", "!" , "4","5"];
let greetLists="".concat(...greetList); // "Hello Venkat!"
console.log(greetLists);

// includes
let Sentence = "The quick brown fox jumps over the lazy dog."
let fox="jumps"
console.log(`the fox is include ${Sentence.includes(fox)?"is":"isnot"} in sentence`);

//raw
let Filepath=String.raw`c:\Desktop\Devlopment\javascript.js`;
console.log(`file was uploaded from ${Filepath}`);

let raw = String.raw({ raw: ["Hello", ", your score is ", "."," desh"] }, "Raj", 95,"hi");
console.log(raw);
// Feature	                    Behavior
// String.raw	                Returns a raw (unprocessed) string
// Tagged template	            Automatically passes string parts and values
// Escapes like \n, \t	        Are not interpreted; shown as-is

// indexof

const paragraph = "I think Ruth's dog is cuter than your dog!";
let anime=paragraph.indexOf("dog")
console.log(paragraph.indexOf("dog"))
console.log(`second dog index is ${paragraph.indexOf("dog",anime+ 1)}`) //38

const paragraph1 = "I think Ruth's dog is cuter than your!";
let anime1=paragraph.indexOf("dog")
console.log(`second dog index is ${paragraph1.indexOf("dog",anime1+ 1)}`) //-1

console.log(paragraph1.lastIndexOf("dog" +1))

//localcompare

console.log("a".localeCompare("a")); //0 (equal)
console.log("A".localeCompare("a")); //1 (A > a)
console.log("a".localeCompare("b")); //1 (a < b)

// caswsensitive check or localeCompare
console.log("A".localeCompare("a","en",{sensitivity:"base"})); //0

console.log('2'.localeCompare('10')); // 1 (2 > 10, because it's string comparison)
console.log('2'.localeCompare('10', 'en', { numeric: true })); // -1 (2 < 10 numerically)

const items = ['éclair', 'apple', 'Éclair', 'banana'];
items.sort((a,b)=>
    a.localeCompare(b,"en",{sensitivity:"base"}))
    console.log(items);
// Sorting Names Alphabetically (Locale-Sensitive)
const names = ["Émile", "André", "Zoe", "Álvaro"];
console.log(names.sort((a,b)=>a.localeCompare(b,"fr"))); //french order

// Case-Insensitive Search or Match

const userInput="apple"
const productItems="Apple"
if(userInput.localeCompare(productItems,undefined,{sensitivity:"base"})===0){
    console.log("match found");
}

// Sorting Mixed Strings with Numbers

const mixstring=["string3","string6","string4","string1","string2"]
console.log(mixstring.sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})));

//match
const letter="The quick brown fox jumps over the lazy dog. It barked."
console.log(letter.match(/[A-Z]/g));
console.log(letter.match());

const match= "The quick brown fox jumps over the lazy dog. It barked.";
const regx=/(?<animal>fox|cat) jumps over/;
console.log(match.match(regx));
console.log(match.match(regx).groups.animal);

console.log("123".match("1.3"));     //["123"]
console.log("123".match("1\\.3"));  //null

const strs = "Hmm, this is interesting.";
const yes=strs.match({
  [Symbol.match](strs) {
    return ["Yes, it's interesting."];
  },
});
console.log(yes);
const replacer={
  [Symbol.replace](str,replacement){
    // return str.toUpperCase() +"[custom replace: "+replacement+"]"
    return ` ${str.toUpperCase()}[custom replace: ${replacement}]`
  }
}
const result="hello world".replace(replacer, "DONE");
console.log(result);

const strss={
  [Symbol.split](str){
    return str.split("")
  }
}
const results='abc'.split(strss)
console.log(results.reverse());

// matchall
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";
const arr=[...str.matchAll(regexp)]
console.log(arr);
console.log(arr[1]); //["test2", "e", "st2", "2"]

// Extract All Emails from a Text

const text = "Contact us: alice@example.com, bob123@mail.org";
const emailRegex = /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/gi;
const matches = [...text.matchAll(emailRegex)];
for (const match of matches) {
  console.log(match[0]); // each full email
}

// Extract Tags or Mentions (@user, #topic)

const msg = "Hello @Raj, please check #JavaScript and #WebDev!";
const tagRegex = /[@#](\w+)/g;
for (const match of msg.matchAll(tagRegex)) {
  console.log(`Found: ${match[0]} | Tag: ${match[1]}`);
}

// Parse Dates or Numbers in Logs

const log = "Started at 12:00, stopped at 14:30";
const timeRegex = /(\d{2}):(\d{2})/g;
for (const [full, hour, minute] of log.matchAll(timeRegex)) {
  console.log(`Hour: ${hour}, Minute: ${minute}`);
}

// Find Key-Value Pairs in Config or Query Strings

const query = "user=raj&id=42&mode=edit";
const paramRegex = /(\w+)=([^&]+)/g;

for (const [, key, value] of query.matchAll(paramRegex)) {
  console.log(`${key} => ${value}`);
}

// Validate and Parse Structured Inputs

const codes = "Product codes: A123, B456, C789";
const codeRegex = /([A-Z])(\d{3})/g;

for (const [full, letter, number] of codes.matchAll(codeRegex)) {
  console.log(`Code: ${full}, Category: ${letter}, ID: ${number}`);
}

// padEnd

const str1 = "Breaded Mushrooms";
console.log(str1.padEnd("25",".")); //Breaded Mushrooms........
const foo="abc"
console.log(foo.padEnd("10","foo")); //abcfoofoof

const num="5"
console.log(num.padStart("2","0"));
const nums="9564782383" //output ********83
const slicenum=nums.slice(-2)
console.log(slicenum.padStart(nums.length,"*")); //********83

//repeat
const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`); // Expected output: "I feel Happy! Happy! Happy! "

// replace
const paragraphs = "I think Ruth's dog is cuter than your dog!";

console.log(paragraphs.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

const pars="I think Ruth's dog is cuter than your dog!";
console.log(pars.replaceAll("dog","cat"));
//slice
const stra = "The quick brown fox jumps over the lazy dog.";
console.log(stra.slice(31)); //the lazy dog.
console.log(stra.slice(9,19)); //brown fox
console.log(stra.slice(-4)); //dog
console.log(stra.slice(-9,-5)); //lazy

//split

console.log(stra.split(" ")[3]); //fox
console.log(stra.split()); //[ 'The quick brown fox jumps over the lazy dog.' ]

//substring
console.log(stra.substring(10,15)); //brown
console.log(stra.substring(10)); //brown fox jumps over the lazy dog.

function replaceString(olds,newS,fulls){
  return fulls.split(olds).join(newS);
}
const resl=replaceString("dog","cat","The dog barks. The dog runs.")
console.log(resl);

//toLowerCase
console.log("ABCDE".toLowerCase())
//tpUpperCase
console.log("abce".toUpperCase());

//trim()
const ynames=" desh kumar "
console.log(ynames.trim()); //desh kumar

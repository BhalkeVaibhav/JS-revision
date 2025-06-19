//1 Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method.
//2 Strings can be created as primitives, from string literals, or as objects, using the String() constructor:


let name="vaibhav";
let number=45;

// Concatination
console.log(name + number +"number");// we are doing string concatination but this is olddated do not use it

// String interpolution
console.log(`My name is ${name} and my luckyn number is ${number}`); //it is string interpolution this is easy to read an that give you more functionality

// String 
const gameName= new String("BGMI");
console.log(gameName.length)
console.log(gameName);
console.log(gameName[0]);

// String method

console.log(gameName.toUpperCase());// toUppercase() provide you all string in Uppwecase
console.log(gameName.toLowerCase()); //toLowercase() provide you all string in lowercase format
console.log(gameName.charAt(2));//charAt() at provide you you provided indewx number characters
console.log(gameName.indexOf("I"))// indexOf() provide you characters index number

const newStrings= gameName.substring(0,3);//substring( , ) provide that string thst you provide range
console.log(newStrings);

const anotherString= gameName.slice(0,4);//slice( , ) slice the string between the range you provided 
console.log(anotherString);

const newStringOne= "   Vaibhav  "

console.log(newStringOne.trim()); //The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const url ="http//vaibhav bhalke.com";//broeser convert white saoce int %20 ex- "http//vaibhav%20bhalke"
const replaceUrl="vaibhav%20bhalke.com";
console.log(replaceUrl.replace("%20","-"));//The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

console.log(replaceUrl.includes("vaibhav"));//includes() check you given sring is present into the main string and give you output in boolean format

const name2= "Vaibhav-Mahadev-Bhalke";
console.log(name2.split("-",1));// spilt(" ") saperate the string in array format from you given value and give you limits, limits is optional






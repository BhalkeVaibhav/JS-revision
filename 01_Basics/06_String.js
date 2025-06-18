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

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("I"))
console.log(gameName.indexOf("i"))
console.log(gameName.indexOf("b"))

const newStrings= gameName.substring(0,1);
console.log(newStrings);

const anotherString= gameName.slice(0,4);
console.log(anotherString);


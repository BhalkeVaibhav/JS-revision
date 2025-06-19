const num=100;
console.log(num);//that is no id defined by automaticaly by javascript

const newNum=new Number(400); //that is also number but we are define as a number forcefully
console.log(newNum);

console.log(newNum.toString().length); // convert it into string by using toString() and count the length by using .length method
console.log(typeof(newNum)); // check heare type of that string that sting type is object becsuse we use thear new keyword create the object there

const number =100;
console.log(number.toFixed(2));// toFixed() is use for dasimal values after point the give automatic dacimal no

const otherNumber=154.88;
console.log(otherNumber.toPrecision(4));//toPrecision() is give you number  valu in you given range 

const randomNumber=1000000;
console.log(randomNumber.toLocaleString()); //toLocalString() give you  coma sepretev value in us format
console.log(randomNumber.toLocaleString('en-IN')) ;//toLOcaleString('en-IN')give you  coma sepretev value in indian  format

// //////////////////////////////////////////// Math functuion  /////////////////////////////////////////
// stack and heap
// there are two thype of data type one is premitive and 2nd in non premitive 
// in premetev daya type memory save in stack memory
// in non premitive datatype memory save in heap memory

// prmitive datatype
// 1 String
// 2 Number
// 3 bigint
// 4 boolean
// 5 null
// 6 undefined
// 7 Symbole

// non primitive
// 1 Array
// 2 Object
// 3 function

// javascript is a dynamicly type language because in javascript we dose not define datatype javascript browser will give them at the time of requestAnimationFrame
// when memory store in stack memory and the stack give you copy file of variable 
//  when memory store in heap memory then heap memory give you refrence of orignal value

let strinG="Vaibhav";
let num=1231;
let bigINT=323535355n;
let bool=true;
let nu="null";
let undef;

// non premitive
// array
let arr=["Shaktiman","Superman","Iranman"]
console.log(arr);

// object
let objectName={
    name:"vaibhav",
    id:2,
    stydy:"MCA",

}
console.log(objectName);

// function
let myFunction=function(){
    console.log(arr);
}

console.log(typeof (arr));
console.log(typeof(objectName) );
console.log(typeof(myFunction) );


// stack example
let email="vaibhavbhalke123@gmail.com";

let newEmail=email;

console.log(newEmail);
console.log(typeof(email));
newEmail="bhalkevaibhav2025@gmail.com";
console.log(newEmail);

// heap example
let userOne={
    name:"Vaibhav",
    id:12,
    email:"Vaibhav123@gmail.com"   

}
console.log(userOne);
let user2=userOne
console.log(user2)

user2.email="bhalkevaibhav2025@gmail.com"
console.log(user2)
console.log(userOne)






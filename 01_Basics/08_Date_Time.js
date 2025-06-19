const myDate=new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON())
console.log(myDate.toISOString());
console.log(myDate.getTimezoneOffset());
console.log(typeof(myDate));

let newDatee= new Date(2025,0,11);
console.log(newDatee .toDateString());

let newDate1=new Date(2025,5,19,5,29);
console.log(myDate.toLocaleString());

let myCreateDate=new Date("12-1-2025");
console.log(myCreateDate.toLocaleDateString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(myCreateDate.getTime());

// we want to convert into mili Second
console.log(Date.now()/1000); //but this give you value in dacimal then you wrap in map floor() function

console.log(Math.floor(Date.now()/1000)); //by using floor function use lower value
const myArray=[1,2,3,4,5,6,7,8,9]
console.log(myArray.length)

const myarray2=["Vaibhav","Akash","Karan","Pavan","Krushna",true]
console.log(myarray2.indexOf("Vaibhav"));

const array3=new Array(1,2,3,4,5)
console.log(array3.length)

const a=[1,"Vaibhav",2,"Karan",3,"Pavan"];
console.log(a);
console.log(a[3]);
console.log(a.indexOf("Vaibhav"));
console.log()

const newArray=[1,2,3,4,5,6];
newArray.push(6);//insert element in last
console.log(newArray);

newArray.pop();//remove last element in array
console.log(newArray);

newArray.unshift(0);//insert element from start(index 0 next all element shift one by one)
console.log(newArray);

newArray.shift();// remove 1st element of the array
console.log(newArray);

console.log(newArray.includes(9)); // this is check their 9 value present in that array
console.log(newArray.indexOf(9)); // when provided value dose not exist in that array then they show -1 

const Arrayj=newArray.join(); // Convert the array into comma sepreted String
console.log(Arrayj);
console.log(typeof(Arrayj)); //check type of Array


// Slice or Splice

const mainArray=newArray;
console.log(mainArray);

const sliceArray=mainArray.slice(1,4);
console.log(sliceArray);

const spliceArray=mainArray.slice(1,4);
console.log(spliceArray);



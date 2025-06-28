const hero1=["Shaktiman","Ironman","Batman","Superman"];
const hero2=["Thor","Dr Strange","Loki","Caption America"]
console.log(hero1);//print hero1 array
console.log(hero2);//print hero2 array

// hero1.push(hero2);//push hero2 array in hero1
// console.log(hero1);//print hero1 array 

// console.log(hero1[4][1]); //print arry element 4th index 1st element
console.log(hero1.includes("Batman"));//check "Batman" element present or absent in hero1 array
console.log(hero1.indexOf("Ironman"));//check "Ironman" index number

const heroConcat = hero1.concat(hero2);
console.log(heroConcat);
console.log(heroConcat.includes("Loki"));
console.log(heroConcat.indexOf("Loki"));

const all_new_heros = [...heroConcat];
console.log(all_new_heros);

const another_Array=[1,2,3,4[5,6,7],8,9[10,11],12];



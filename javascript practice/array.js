//creating arry

let cars=["saab","volvo","bmw"];

//alternative way to create array

let cars1=new Array("lbgini",'marcities','Tata');

console.log(cars);

console.log(cars1[0]);

cars[0]="toyota";

console.log(cars[0]);

let x=cars.length;
let y=cars.sort();

console.log(x);

console.log(y);

console.log(cars[cars.length-1]);
//forEach loop
cars.forEach(element=>console.log(element));

//adding array element

let fruits=["Banana","Orange","Apple","Mango"];

fruits.push("lemon");

console.log(fruits);

console.log(typeof(fruits));
console.log(Array.isArray(fruits));





/*The JavaScript method toString() converts an array 
    to a string of (comma separated) array values
 */

 let fruits=["mango","banana","Apple","Pine-Apple"];

console.log(fruits.toString());

/*The join() method also joins all array elements into a string */

console.log(fruits.join(" "));//separate by space;

//Popping items out of an array, or pushing items into an array.

//pop removes last element

fruits.pop();
console.log(fruits);

//push add a new element at the end

fruits.push("Kiwi");
console.log(fruits);

//shifing and unshift

//removes first element of the array

fruits.shift();
console.log(fruits);
//unshift add a new element front of the array

fruits.unshift("Oranage");
console.log(fruits);

//The splice() method can be used to add new items to an array:

fruits.splice(2, 0, "Lemon", "tometo");
console.log(fruits);
/**The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added. */
/**With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array: */

fruits.splice(0,1);

console.log(fruits);

let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];
//concat arr1 with arr2 and arr3
let myChildren=arr1.concat(arr2,arr3);

console.log(myChildren);

/*The slice() method slices out a piece of an array into a new array.* */

let citrus=fruits.slice(1);
console.log(citrus);
console.log(fruits);

let next= fruits.slice(1, 3);

console.log(next);


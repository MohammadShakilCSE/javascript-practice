let answer ="its alrigth";

//find the length of a string
let len=answer.length;
console.log(len);

//indexOf
//The indexOf() method returns the index of 
//(the position of) the first occurrence of a specified text
// in a string:

let hello="this is shakil talukder";

console.log(hello.indexOf("shakil"));
console.log(hello.lastIndexOf("shakil"));

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos);

//Extracting String Parts
//slice(start,end);
//substring(start,end);
//substr(start,length);

let hi="say hi";

console.log(hi.substr(0,5));
console.log(hi.substring(0,3));
console.log(hi.slice(0,6));

//replace

let rep="please visit microsoft";
let n=rep.replace("microsoft","Google");

console.log(n);
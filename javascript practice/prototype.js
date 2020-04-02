let Mobile=function(model){
    //instance member
    this.model=model;
    this.prize=3000;
}

let samsung=new Mobile("Greand-neo");

console.log(samsung);
//prototype member
Mobile.prototype.color="white";

console.log(samsung.color);
console.log(samsung);

let nokia=new Mobile("3310");

console.log(nokia);

//itarate prototype member with
//for in loop

console.log(Object.keys(samsung));

for(var keys in samsung){
    console.log(keys);
}
/* in javascript one object associated with another object */
/* prototype Object of array prototype is Object.prtotype
and Object.prototype of prototype is null
*/

let b={}

console.log(Object.getPrototypeOf(b));
console.log(Object.getPrototypeOf(Object.prototype));

let c=  Object.create(b);
console.log(c);

//prototype inhritance
//prototype chain
function inharit(child,parent){
    child.prototype=Object.create(parent.prototype);
    child.prototype.constructor=child;
}
function Mobile(){
    this.a=10;
}

Mobile.prototype.color="white";
function Samsung(){
    Mobile.call(this);
    this.b=20;
}
//Samsung.prototype=Object.create(Mobile.prototype);
//Samsung.prototype.constructor=Samsung;
inharit(Samsung,Mobile);
let hi=new Samsung();

console.log(hi.a);
console.log(hi.color)
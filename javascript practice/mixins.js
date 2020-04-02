function human(){
    this.eat=()=>console.log("Human can it");
    this.speak=()=>console.log("human can speak");
    this.walk=()=>console.log("human can walk");
}

function extend(child,parent){
    child.prototype=Object.create(parent.prototype);
    child.prototype.constructor=child;
}

function animel(){
    human.call(this);
}
extend(animel,human);
 let ant=new animel();

 function robot(){
     human.call(this);
 }

 //mixnis

 let eating={
     eat:()=>{
        return "i can eat";
     }
 }
 let walking={
    walk:()=>{
       return "i can walk";
    }
}
let speaking={
    speak:()=>{
        return "i can speak";
    }
}
let shakil=Object.assign({},eating,walking,speaking);

console.log(shakil.eat());

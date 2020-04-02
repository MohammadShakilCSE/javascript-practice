"strict mode"
class car{
    constructor(brand){
        this.carname=brand;
    }

    print(){
        return "hello guys i brought a "+this.carname;
    }
    static hello(x){
        return "hello "+ x.carname;
    }
}
myCar =new car("i brougth Lambergini");

//console.log(myCar.carname);
//console.log(myCar.print());
console.log(car.hello(myCar));

//inheritance

class carM{
    constructor(brnad){
        this.name=brnad;
    }

    present(){
        return "i have a "+this.name;
    }
}

class model extends carM{
    constructor(brand,model){
       super(brand);
        this.model=model;
    }

    show(){
        return this.present()+" model is "+this.model
    }
}

let myCar2=new model("Tata","2090ff");

console.log(myCar2.show());


//get set

class person{
    constructor(name){
        this.name=name;
    }

    get cname(){
        return this.name;
    }
    set cname(n){
        this.name=n;
    }
}
let shakil=new person("shakil");

console.log(shakil.cname);
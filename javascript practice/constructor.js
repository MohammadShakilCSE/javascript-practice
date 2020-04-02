function Mobile(name,brand){
    this.name=name;//this point new instance
    this.brand=brand;
  this.price=()=>console.log(this.name +"mobile price 40000tk");
}

const samsung=new Mobile('samsung','korean');
samsung.price();

function user(first,last){
    this.first=first;
    this.last=last;
    this.fullName=()=>console.log(this.first+" "+this.last);
}

const imran=new user('imran','talukder');

console.log(imran);
imran.fullName();
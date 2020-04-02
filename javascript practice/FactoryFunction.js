const userName='echo';
const avater='hello world';

const user={
    userName,
    avater,

    setUserName(userName){
        this.userName=userName;
        return this;
    }
};
//console.log(user);
//console.log(user.setUserName('Shakil talukder').userName);

const noop = () => { foo: 'bar' };
//console.log(noop()); // undefined
const createFoo = () => ({ foo: 'bar' });
//console.log(createFoo().foo);

const personFactory=(name,age)=>{
    const sayHello=()=> 'hello ';
    return {name,age,sayHello};
}
const jeff=personFactory('jeff',34);
console.log(jeff.sayHello()+jeff.name);
//same constructor pattren

const person1=function(name,age){
    this.sayHello=()=>'hello';

    this.name=name;
    this.age=age;
}

const jeff1=new person1('jeky',22);

console.log(jeff1.name);

console.log(jeff1.age);

console.log(jeff1.sayHello()+' My name is '+ jeff1.name + 'age '+jeff1.age);

//game exaple

const player=(name,level)=>{
    let health=level*2;

    const getLevel=()=>level;
    const getNmae=()=>name;
    const die=()=>die;

const damage=x=>{
    health=x;
    if(health<=0){
        die();
    }
}

const attack =enemy=>{
    if(level<enemy.getLevel()){
        damage(1);
        console.log(`${enemy.getNmae()} has damaged ${name}`);
    }
    if(level>=enemy.getLevel()){
        enemy.damage(1);
        console.log(`${name} has damadge ${enemy.getNmae()}`);
    }

    };
    return {attack,damage,getLevel,getNmae};
}

const shakil=player('jim',10);
const badguy=player('jeff',5);

//console.log(shakil.attack(badguy));

const person=(name)=>{
    const Sayname=()=>console.log(`my name is ${name}`);
    return{Sayname};
}

const nerd=(name)=>{
    const{Sayname}=person(name);
    const doSomething=()=>console.log('nerd stuff');
    return{Sayname,doSomething};
}
const imran=nerd('imran');

imran.Sayname();
imran.doSomething();


const proto={
    drive(){console.log('voom');}
}
const factoryCar=()=>Object.create(proto);

const car3=factoryCar();

console.log(car3.drive());


const mobile=(model)=>{
    return{
        model,
        price(){
            return "price is 3000tk"
        }
    }
}

const samsung=mobile('grand neo');

console.log(samsung.model+" "+samsung.price());

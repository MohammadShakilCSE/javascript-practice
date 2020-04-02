let person={
    firstName:"shakil ",
    lastName:"talukder",
    age:22,
    fullname(){
        return this.firstName+this.lastName;
    }
}
console.log(person.fullname());
let man=Object.create(person);
let men=Object.keys(person);
console.log(men[0]);

men.forEach(key =>{
    let value=person[key];
    console.log(`${key}:${value}`);
})

const session={
    id:1,
    time:`26-july-2019`,
    device:'mobile',
    browser:'chrome'
}

const values=Object.values(session);
console.log(values);

const nme={
    firstName:'philpe',
    lastName:'try'
}
const details={
    job:'softwer engineer',
    employer:'Tiger IT'
}

const Ch=Object.assign(nme,details);
console.log(Ch);
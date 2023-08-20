// Object
let person = {
    name: 'John',
    age: 21
}

person.greet = function (){
    console.log("Hello!");
}

person.greet();

// Object Method

let Person = {
    Firstname:'Prerna',
    lastName:'Dwivedy',
    age:21,
    greet: function (){
        console.log("good morning Prerna");
    },

getFullName: function (){
          console.log(this.Firstname + " " + this.lastName) 
        }

    }

    Person.getFullName()
;


// constructor function

function Person1 (firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName= function (){
        return this.firstName + " " + this.lastName;
    }
}

let person1 = new Person1('John','Doe');
let person2 = new Person1('Faizan','Wani');

console.log(person2.getFullName());


// Prototype
function Person2(name){
    this.name = name;
}

Person2.prototype.greet  = function (){
    return "Hii this is " +" " +this.name;

}

let p1 = new Person2('Prerna');
console.log(p1);
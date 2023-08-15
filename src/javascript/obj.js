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

console.log("Hello World");

function say(message) {
    console.log(message);
    return message;
}

let Result = say("Hello");

console.log("Result:" + Result);

function add(){
    let sum =0 ;
    for(let i =0;i <arguments.length;i++){
        sum+=arguments[i];
      

    }
    return sum;
   
}
let jor = add(1,2,3,4,5)

console.log("sum:" +jor);

let aa=showMe(4);

function showMe(a){
    let sum =7; 
    sum+=a;
    console.log("example of hoisting");
    console.log(sum);
    return sum;

}
console.log(aa);

// Passing a function to the another function

function addition(a,b){
    return a+b;
}
let sum = addition;

function average(a,b,fn){
    return fn(a,b)/2;
}

console.log(average(10,20,sum));


// compare function


function compareBy(propertyName){
    return function (a,b){
        let x = a[propertyName];
        let y = b[propertyName];

        if(x > y) {
            return -1;
        }
        else if(x < y){
            return 1;
        }
    return 0;
    }
}

let products = [
    {name:"samsumg",price:"200"},
    {name: "vivo" , price: "400"},
    {name: "iphone" , price: "400000"}
]

console.log('Products sorted by Name');

products.sort(compareBy('name'));

console.log(products);

console.log('Products sorted by Price');

products.sort(compareBy('price'));
console.table(products);

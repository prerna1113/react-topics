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


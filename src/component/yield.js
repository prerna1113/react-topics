

function* countupto(n){
  for(let i =0 ;i<=n;i++){
    yield i;
  }
}
const count = countupto(5);
console.log(count.next());
console.log(count.next());
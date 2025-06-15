let a=10;
function b() {
   let a=4
    console.log(a);
    function q(){
        console.log(a);
        return a;
    }
 return q;
}
let res=b();
console.log(a);
console.log(res());
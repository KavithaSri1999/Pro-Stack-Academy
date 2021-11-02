/* function wish(){
    console.log("Good Morning");
}
wish();
function wish(){
    console.log("Good Night");
}
wish();
//Function override occurs


var wish=()=>{console.log("Good Morning");}
wish()
var wish=()=>{console.log("Good Night");}
wish()
//Function override can be overcome by using fatarrow function */

let add=(a,b)=>{return a+b;}
let result=add(5,6);
console.log(result);
let add1=(a,b)=>a+b;
console.log(add(5,6));
console.log(add(10,20));

//forEach
let size=[1,2,3];
size.forEach(()=>{
    console.log("Hello GoodMorning");
})
console.log("---------********---------");

size.forEach((Sri)=>{
    console.log(Sri);
})
console.log("---------********---------");

//map
let new_size=size.map((s)=>{
    return s+1;
});
console.log(new_size);
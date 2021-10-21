//Print greatest number in 3 given numbers

var x=80;
var y=200;
var z=30;
var greatest;
if(x>=y && x>=z)
{
    greatest=x;
}
else if(y>=x && y>=z)
{
    greatest=y;
}
else
{
    greatest=z;
}
console.log("The greatest number is " + greatest);

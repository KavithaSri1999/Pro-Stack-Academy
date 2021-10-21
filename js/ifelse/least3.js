//Print least number in 3 given numbers

var x=8;
var y=20;
var z=30;
var least;
if(x<=y && x<=z)
{
    least=x;
}
else if(y<=x && y<=z)
{
    least=y;
}
else
{
    least=z;
}
console.log(least);

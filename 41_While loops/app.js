/*In other ways, a while loop is organized along the same lines as a for loop.
Parentheses enclose the loop limiter.
Curly brackets enclose the code that executes.
The code that executes is indented 2 spaces.*/


/*Definition : The while loop is meant to repeatedly execute a piece of code an unknown number of times.
 */

var i=0;
while(i<=3){
    console.log(i);
    i++;
}


var x=1;
while(x<=10){
    console.log(2 + " x  " + x + " = " + 2*x);
    x++;
}


var x=10;
while(x>0){
    console.log(x);
    x--;
}


var y=1;
while(y<=10){
    console.log(y + " hello world ");
    y++;
}


var sum=0;
var input=+prompt("Enter a number , -1 to exit ");
while(input !==  -1){
    sum += Number(input);
    input=+prompt("Enter a number , -1 to exit ");
}
alert("The sum is  " + sum);


var arr=[2,24,56];
while(arr.length !== 0){
    console.log(arr.pop());
}

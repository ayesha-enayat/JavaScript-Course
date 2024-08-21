/*Instead of while, the keyword do leads off the statement.
The while clause, including the loop-limiting code inside the parentheses, moves to the
bottom—after the closing curly bracket.
Note that the while clause ends with a semicolon.
 */
var i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);


var i = 0;
do {
    console.log(i);
    i++;
} while (i < 0); //it always executes that code at least once, no matter what the looplimiter says.


do {
    var input = prompt('Enter a number');
 }
 while (isNaN(Number(input)));
 
 alert(`You entered the number ${input}`);
var popularNumber = 4;
var popularNumber = 2 + 2;
alert(2 + 2);
var popularNumber = 12 - 24;
var popularNumber = 3 * 12;
 var num = 10;
 var popularNumber = num + 200;
 var whatsLeftOver = 10 % 3;


 var num = 10;
var anotherNum = 1;
 var popularNumber = num + anotherNum;

 var whatsLeftOver = 9 % 3;

 num = num++;  //It increments the variable by 1.
 num = num--;  //It decrements the variable by 1.


var mynum = 1;
var newNum = mynum++; // newNum gets the original value of num, 1.
alert(newNum);
alert(newNum);

var mynum2 = 1;
var newNum2 = ++mynum2;
alert(mynum2);
alert(newNum2); //both num and newNum wind up with a value of 2


var num3 = 1;
var newNum3 = num3--;
alert(num3);  //num is decremented to 0, and newNum gets the original value of num, 1
alert(newNum3)


var num4 = 1;
var newNum4 = --num4;
alert(num4);  //num is decremented to 0, and newNum gets the value of num, 0
alert(newNum4)

/*Eliminating ambiguity */
var totalCost = 1 + 3 * 4;
alert(`The total cost is ${totalCost}`); // The total cost is 13
totalCost = 1 + (3 * 4); //the total cost is 13

totalCost = (1 + 3) * 4; //the total cost is 16
alert(`total cost is ${totalCost}`);

var resultOfComputation = (2 * 4) * 4 + 2; //the result of computation is 34
alert(`the result of computaion is ${resultOfComputation}`)

resultOfComputation = (2 * 4) * (4 + 2);//the result is 48
alert(`the result of computaion is ${resultOfComputation}`)

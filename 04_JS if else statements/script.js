var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
    alert("Correct!");
}
else {
    alert("Wrong answer");
}



//else if is used if all tests above have failed and you want to test another condition.
var correctAnswer = "Vatican";
if (x === correctAnswer) {

    alert("Correct!");
}
else if (x === "Rome") {
    alert("Incorrect but close");
}
else {
    alert("Incorrect");
}

/*Testing sets of conditions */
if (weight > 300 && time < 6) {  //and operator
    alert("Come to our tryout!");
}
else {
    alert("Come to our cookout!");
}


if (weight > 300 && time < 6 && age > 17 && gender === "male") {
    alert("Come to our tryout!");
}
else {
    alert("Come to our cookout!");
}

if (SAT > avg || GPA > 2.5 || sport === "football") {  //OR operator
    alert("Welcome to Bubba State!");
}
else {
    alert("Have you looked into appliance repair?");
}


if (age > 65 || age < 21 && res === "U.S.") {

}
if ((age > 65 || age < 21) && res === "U.S.") {
}

if (age > 65 || (age < 21 && res === "U.S.")) {
}

//nested if statements

if (c === d) {
    if (x === y) {
        g = h;
    }
    else if (a === b) {
        g = h;
    }
    else {
        e = f;
    }
}
else {
    e = f;
}
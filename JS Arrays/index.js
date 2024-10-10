// var pets=["dog","cats","flies","pig","hen","fly"];
// pets.splice(2,2,"parrot","goat","fish");
// console.log(pets);

// pets.splice(2,0,"parraot","goat","fish");
// console.log(pets);

// pets.splice(2,2);
// console.log(pets);


// var pets=["dog","cats","flies","bug","ox"];
// var noPets=pets.slice(2,4);
// console.log(noPets);
// console.log(pets);


var fruits=['apple','mango','banana','orange','grapes'];
// fruits.splice(2);
// fruits.splice(2,1,'berry');
 fruits.splice(2,1,'berry','blueberry','pineapple');
// fruits.splice(2,2);
console.log(fruits);

var fruits=['apple','mango','banana','cat','dog','orange','grapes'];
var noFruits=fruits.slice(3,5);
console.log(noFruits);
console.log(fruits);  //slice donot change original array it makes copy of array
 


//push and pop both changes original array
fruits.push('blueberry','strawberry');
console.log(fruits);

fruits.pop();
console.log(fruits);

//shift and unshift both changes original array

fruits.unshift('pineapple');
console.log(fruits);

fruits.shift();
console.log(fruits);


var f1=fruits[0];
console.log(f1);



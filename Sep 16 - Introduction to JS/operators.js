// arithmetic operators
console.log(10 + 2); // addition
console.log(10 - 2); // subtraction
console.log(10 * 2); // multiplication
console.log(5 / 2); // division
console.log(10 % 2); // remainder

// Note if we want to have floor divisions
// 1 way -> parseInt(5/2)
// 2 way -> Math.floor(5/2)
 let temp = 55.42;
 console.log(temp);
 console.log(parseInt(temp));
 console.log(Math.floor(temp));

// assignment operators
let x = 10; // assigning the value 10 to the variable x
x += 2; // x = x + 2 
x -= 2; // x = x-2;
x *= 2; // x = x*2;
x /= 2; // x = x / 2
x %= 2; // x = x % 2 

// logical operators
console.log((10 > 5) && (7 < 6));
console.log((10 > 5) || (7 < 6));
console.log(4 && 0); // 0
console.log(4 || 0); // 4
console.log(0 && 4); // 0
console.log(0 || 4); // 4
console.log(-4 || 5); //- 4
console.log(3 && 4); // 4
console.log(3 || 4); // 3
console.log(-0 && 9);

// my experiments :-
// && :- This always keeps checking until the true values are there and returns the 
//         last true value or the first false value.
// || :-
console.log(4 && 5 && 6); // 6
console.log(4 || 5 || 6); // 4
console.log(4 && 5 || 6); // 5
console.log(4 && 5 && -6 && 7); // 7
console.log(0 && -0); // 0
console.log(-0 && 0); // -0
console.log(-0 && 1 && 2); //-0
console.log(-0 || 1); // 1
console.log(-5 && 6); // 6
// console.log()
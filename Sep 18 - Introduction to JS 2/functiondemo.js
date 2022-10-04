function fun(x) {
    console.log(x + 10);
    return x*10;
}

// let x = fun(10);
console.log(fun(10));
let a = 5;
if(a) {
    console.log("true"); // Gives true.
}
if(a == true) {
    console.log("inside"); // execution doesn't reach here.
}

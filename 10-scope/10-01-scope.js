let x = "global";

function foo() {
    let x = "function scope";
    console.log(x);
}

foo();
console.log(x);

var y = 0;
{
    var y = 1;
    console.log(y); // 1
}
console.log(y); // 1

let z = 0;
{
    let z = 1;
    console.log(z); // 1
}
console.log(z); // 0
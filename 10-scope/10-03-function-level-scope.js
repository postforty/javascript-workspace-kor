// * 예제1
let x1 = "global";

function foo() {
    let x1 = "local";
    console.log(x1);

    function bar() {
        console.log(x1);
    }

    bar();
}
foo();

// * 예제2
let x2 = 10;

function foo() {
    x2 = 100;
    console.log(x2);

    function bar() {
        console.log(x2);
    }

    bar();
}
foo();
console.log(x2);

// * 예제3
let x3 = 10;

function foo() {
    x3 = 100;
    console.log(x3);

    function bar() {
        let x3 = 1000;
        console.log(x3);
    }

    bar();
}
foo();
console.log(x3);

//* 예제4
let foo = function () {
    let a = 3, b = 5;

    let bar = function () {
        let b = 7, c = 11;

        a += b + c;
        console.log(a);
    }
    bar();
}
foo();

//* 예제5
// Lexcical scope
let x4 = 1;

function foo() {
    let x4 = 10;
    bar();
}

function bar() {
    console.log(x4);
}

foo();

// 내부 함수의 경우
let x5 = 1;

function foo() {
    // let x5 = 10;

    function bar() {
        console.log(x5);
    }

    bar();
}
foo();



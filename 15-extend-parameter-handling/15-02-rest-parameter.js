// 나머지 매개 변수
function func1(...rest) {
    console.log(rest)
}

// func1(1, 2, 3, 4, 5);

function func2(param1, param2, ...rest) {
    console.log(param1);
    console.log(param2);
    console.log(rest); // [ 3, 4, 5 ]
}

// func2(1, 2, 3, 4, 5);

function func3(...rest) {
    return rest.reduce((acc, curr) => acc + curr)
}

console.log(func3(1, 2, 3, 4, 5));

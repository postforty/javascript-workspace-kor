// 레이블 블록문
let count = 0;
console.log(1);

foo: {
    console.log(2);
    count = 1;
    if (count === 1) {
        break foo;
    }
    console.log(3);
    console.log(4);
    console.log(5);
}


/**
 * 1. ES5에서 추가
 * 2. 자바스크립트 문법을 보다 엄격히 적용
 * 3. 문제를 일으킬 수 있는 코드에 명시적 에러 발생
 */

// "use strict";
x = 10;
console.log(x);

function foo() {
    x = 20;
    // "use strict";
    return x;
}

console.log(foo());
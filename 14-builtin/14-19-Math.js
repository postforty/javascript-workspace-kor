/**
 * 수학적 계산을 간편하게 처리하는 메서드, 상수 제공
 * Math 객체는 생성자 함수가 아님
 * 정적 프로퍼티와 메서드만 제공
 */

console.log(Math.PI);

// 절댓값
console.log(Math.abs(-1));
console.log(Math.abs("-1"));
console.log(Math.abs(""));
console.log(Math.abs([]));
console.log(Math.abs(null));
console.log(Math.abs(undefined)); // NaN
console.log(Math.abs({})); // NaN
console.log(Math.abs("string")); // NaN
console.log(Math.abs()); // NaN

// 반올림
console.log(Math.round(1.4));
console.log(Math.round(1.6));
console.log(Math.round(-1.4)); // -1
console.log(Math.round(-1.6)); // -2
console.log(Math.round()); // NaN

// 올림
console.log(Math.ceil(1.4));
console.log(Math.ceil(1.6));
console.log(Math.ceil(-1.4)); // -1
console.log(Math.ceil(-1.6)); // -1
console.log(Math.ceil()); // NaN

// 내림
console.log(Math.floor(1.4));
console.log(Math.floor(1.6));
console.log(Math.floor(-1.4)); // -2
console.log(Math.floor(-1.6)); // -2
console.log(Math.floor()); // NaN

// 버림
console.log(Math.trunc(1.4));
console.log(Math.trunc(1.6));
console.log(Math.trunc(-1.4)); // -1
console.log(Math.trunc(-1.6)); // -1
console.log(Math.trunc()); // NaN

// 제곱
console.log(Math.pow(2, 8)); // 256
console.log(2 ** 8); // 256

// 제곱근
console.log(Math.sqrt(64)); // 8

// 최댓값
console.log(Math.max(1, 2, 3))
console.log(Math.max(1, 2, 3, 4, 5))

// 최솟값
console.log(Math.min(1, 2, 3))
console.log(Math.min(1, 2, 3, 4, 5))

const arr = [10, 20, 30, 40, 50];
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); // 50

console.log(Math.min(...arr)); // 50

// 난수 생성
console.log(Math.random()); // 0이상 1미만 실수

// 0~9까지 정수 형태
console.log(Math.floor(Math.random() * 10));

// 1~10까지 정수 형태
console.log(Math.floor(Math.random() * 10 + 1));

// x~y까지 정수 형태
function getRandomInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomInterger(11, 13));

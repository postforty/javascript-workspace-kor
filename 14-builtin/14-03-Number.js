/**
 * 숫자를 다루는 wrapper 객체(원시 타입의 값을 감싸서 객체로 만드는 것)
 * 자바스크립트의 모든 수는 실수(IEEE 754 국제 표준에서 정의한 64비트 부동 소수점 수로 저장)
 * number 타입
 */

// ! toString()
let num = 123;
console.log(typeof num); // number
console.log(typeof num.toString()); // string
console.log((123).toString()); // !

let now = new Date();
// console.log(now);
let year = now.getFullYear();
let month = now.getMonth() + 1; // 0~11
let day = now.getDate();

let newDateFormat = `${year}-${month}-${day}`;
console.log(newDateFormat) // 2024-9-12
newDateFormat = `${year}-${month.toString().padStart(2, 0)}-${day.toString().padStart(2, 0)}`;
console.log(newDateFormat) // 2024-09-12

// ! toFixed()
// - 반올림 적용
num = 123.456789;
console.log(num.toFixed(2)); // 123.46
console.log(num.toFixed(4));
console.log(num.toFixed(0)); // 123
console.log(num.toFixed()); // 123

num = 123;
console.log(num.toFixed(2)); // 123.00

// ! toPrecision()
// - 정수, 소수를 포함한 전체 자릿수 결정
// - 반올림 적용함
num = 123.456789;
console.log(num.toPrecision()) // 123.456789
console.log(num.toPrecision(3)) // 123
console.log(num.toPrecision(5)) // 123.46
console.log(num.toPrecision(7)) // 123.4568

num = 123;
console.log(num.toPrecision(7)) // 123.0000

// ! parseInt()
let str = "123";
let numParseInt = parseInt(str);
console.log(typeof numParseInt, numParseInt)

str = "     456";
numParseInt = parseInt(str);
console.log(typeof numParseInt, numParseInt)

str = "ABC456";
numParseInt = parseInt(str);
console.log(typeof numParseInt, numParseInt) // number NaN

str = "1010";
numParseInt = parseInt(str, 2); // str 값은 2진수로 적용, 반환값 10진수
console.log(numParseInt) // 10

str = "123";
numParseInt = parseInt(str, 8); // str 값은 8진수로 적용, 반환값 10진수
console.log(numParseInt) // 83

str = "1F";
numParseInt = parseInt(str, 16); // str 값은 16진수로 적용, 반환값 10진수
console.log(numParseInt) // 31

// ! parseFloat()
str = "123.456789";
numParseInt = parseInt(str);
console.log(numParseInt); // 123

str = "123.456789";
numParseFloat = parseFloat(str);
console.log(typeof numParseFloat, numParseFloat);

str = "    123.456789";
numParseFloat = parseFloat(str);
console.log(typeof numParseFloat, numParseFloat);

str = "123.456789abc";
numParseFloat = parseFloat(str);
console.log(typeof numParseFloat, numParseFloat); // number 123.456789

str = "abc123.456789";
numParseFloat = parseFloat(str);
console.log(typeof numParseFloat, numParseFloat); // number NaN

str = "123.4567abc89";
numParseFloat = parseFloat(str);
console.log(typeof numParseFloat, numParseFloat); // number 123.4567

str = "abc";
numParseFloat = parseFloat(str);
console.log(typeof numParseFloat, numParseFloat); // number NaN

// ! 상수
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308(자바스크립트로 표현 가능한 가장 큰 수)
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NaN); // NaN
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991














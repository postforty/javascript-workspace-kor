/**
 * 1970년 1월 1일 00:00:00(UTC) 기준으로 현재 시간까지의 밀리초(1/1000초)
 * UTC(협정 세계시: Coordinated Universal Time)
 * KST(Korea Standard Time): UTC/GMT에 9시간을 더한 시간
 */

let date = new Date();
console.log(typeof date); // object
console.log(date); // 2024-09-13T12:08:21.406Z

date = new Date(0); // 0밀리초
console.log(date) // 1970-01-01T00:00:00.000Z

console.log(1000 * 60 * 60 * 24); // 86400000
date = new Date(86400000);
console.log(date) // 1970-01-02T00:00:00.000Z

date = new Date("May 16, 2024 09:00:00");
console.log(date) // 2024-05-16T00:00:00.000Z

date = new Date("2024/05/16/09:00:00");
console.log(date) // 2024-05-16T00:00:00.000Z

date = new Date("2024-05-16/09:00:00");
console.log(date) // 2024-05-16T00:00:00.000Z

date = new Date(2024, 4); // 0~11 : 월은 0부터 시작
console.log(date) // 2024-04-30T15:00:00.000Z

date = new Date(2024, 4, 16, 9, 0, 0);
console.log(date) // 2024-05-16T00:00:00.000Z

date = Date();
console.log(date); // Fri Sep 13 2024 21:19:02 GMT+0900 (대한민국 표준시)
console.log(typeof date); // ! string

date = new Date("Fri Sep 13 2024 21:19:34 GMT+0900");
console.log(date); // 2024-09-13T12:19:34.000Z

let now = Date.now(); // 1970-01-02T00:00:00.000Z를 기점으로 현재 시간까지 경과한 밀리초를 number로 반환
console.log(now); // 1726230066564

date = Date.parse("2024-05-16T00:00:00.000Z"); // 1970-01-02T00:00:00.000Z를 기점으로 인수의 경과 시간까지를 밀리초로 반환
console.log(date);

let today = new Date();
console.log(today); // 2024-09-13T12:25:54.790Z
console.log(today.getFullYear()); // 2024
today.setFullYear(2014);
console.log(today); // 2014-09-13T12:27:43.154Z

// getMonth()
// setMonth()
// getDate()
// setDate()
// getDay() // 요일 0~6(일~토)
// setDay()
// getHours()
// setHours()
// getMinutes()
// setMinutes()
// getSeconds()
// setSeconds()
// getMilliseconds()
// setMilliseconds()

// ! getTime()
today = new Date();
console.log(today); // 2024-09-13T12:31:19.283Z
console.log(today.getTime()); // 1726230710958

// ! setTime()
console.log(today.setTime(86400000));
console.log(today)

// ! getTimezoneOffset()
// UTC와 지정 Locale 시간과의 차이를 "분단위"로 반환
today = new Date();
console.log(today.getTimezoneOffset()); // -540분
console.log(today.getTimezoneOffset() / 60); // -9시간

// ! toString(), toDateString(), toTimeString()
today = new Date();
console.log(today.toString()); // Fri Sep 13 2024 21:36:51 GMT+0900 (대한민국 표준시)
console.log(typeof today.toString()); // string
console.log(today.toDateString()); // Fri Sep 13 2024
console.log(today.toTimeString()); // 21:38:00 GMT+0900 (대한민국 표준시)






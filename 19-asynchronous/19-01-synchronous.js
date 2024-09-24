// 동기적 실행
// V8 : 싱글스레드로 작동
// 지연 - blocking → 비동기적 실행 필요
console.log("코드1")

setTimeout(()=> console.log("코드2"), 0) // 비동기 함수 non-blocking

console.log("코드3")


/**
 * [Web APIs]
 * - setTimeout, fetch, DOM 등
 * - JavaScript V8 엔진과 별개로 동작
 * - 마치 멀티스레드 처럼 동작
 */





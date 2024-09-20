// 객체 리터럴 Rest/Spread Property
let n = {x: 1, y: 2}
let m = {a: 10, b: 20}
console.log(n)
console.log({...n, ...m}) //객체 병합

// 특정 프로퍼티 값 변경
n = {x: 1, y: 2}
m = {y: 10, z: 20}
console.log({...n, ...m, z: 200})

// 프로퍼티 추가
console.log({...n, ...m, z: 200, a: 2000})

// Rest Property
n = {x: 1, y: 2}
m = {y: 10, z: 20}
const result = {...n, ...m, z: 200, a: 2000}
console.log(result)
const {x, ...rest} = result;
console.log(x)
console.log(rest)
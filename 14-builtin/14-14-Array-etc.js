// ! find()
// 배열에서 주어진 조건을 만족하는 첫 번째 요소 반환
// 없으면 undefined
let arr = [1, 2, 3, 4, 5];
let result = arr.find(num => num > 2);
console.log(result);

// ! some()
// 배열 요소 중 하나라도 조건을 만족하면 true, 아니면 false
// false || false || true => true로 평가
arr = [1, 2, 3, 4, 5];
result = arr.some(num => num > 6);
console.log(result); // false
result = arr.some(num => num > 4);
console.log(result); // true

// ! every()
// 배열의 모든 요소가 조건을 만족하면 true, 아니면 false
// true && true && true && true... => true로 평가
arr = [1, 2, 3, 4, 5];
result = arr.every(num => num < 6);
console.log(result); // true
result = arr.every(num => num < 5);
console.log(result); // false

// ! includes()
// 배열이 특정한 요소를 포함하고 있으면 true, 아니면 false
arr = [1, 2, 3, 4, 5];
result = arr.includes(1);
console.log(result); // true
result = arr.includes(0);
console.log(result); // false

// ! indexOf()
// 배열에서 특정 요소의 첫 번째 요소 인덱스 반환
// 없으면 -1
arr = [1, 2, 3, 4, 5, 1, 2, 3];
result = arr.indexOf(3);
console.log(result); // 2
result = arr.indexOf(0);
console.log(result); // -1 : 요소가 없을 경우

// ! findIndex()
// 배열에서 주어진 조건을 만족하는 첫 번째 요소 인덱스 반환
// 없으면 -1
arr = [1, 2, 3, 4, 5, 1, 2, 3];
result = arr.findIndex(num => num > 2);
console.log(result); // 2 : 요소 3의 인덱스 반환

// ! flat()
// 다차원 배열을 평탄화하여 1차원 배열 반환
arr = [1, [2, 3, [4, 5]]];
result = arr.flat(2); // 인수는 평탄화할 depth
console.log(result);

// ! flatMap()
// 각 요소에 대해 주어진 함수를 실행 후 그 결과를 평탄화하여 새로운 배열을 반환
arr = [1, 2, 3];
// const newArr = arr.map(num => [num, num * 2]); // [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ] ]
// result = newArr.flat(2); // [ 1, 2, 2, 4, 3, 6 ]
result = arr.flatMap(num => [num, num * 2]); // [ 1, 2, 2, 4, 3, 6 ]
console.log(result)
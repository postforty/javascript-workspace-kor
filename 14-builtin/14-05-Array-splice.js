// 원본 배열 변경
let arr = [1, 2, 3, 4, 5];

arr.splice(1, 3); // 요소 삭제
console.log(arr); // [ 1, 5 ]

arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 1.5, 1.6, 1.7); // 요소 추가
console.log(arr);

arr = [1, 2, 3, 4, 5];
let replaced = arr.splice(1, 1, 1.5, 1.6, 1.7, "2.0"); // 요소 삭제 및 추가
console.log(replaced); // [2]
console.log(arr); // [1, 1.5, 1.6, 1.7, '2.0', 3, 4, 5]

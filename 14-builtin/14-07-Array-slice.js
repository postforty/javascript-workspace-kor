// splice와 다름
// 원본 배열을 변경하지 않음
let arr1 = [1, 2, 3, 4, 5];
let result = arr1.slice(0, 2);
console.log(result); // [ 1, 2 ]

arr1 = [1, 2, 3, 4, 5];
result = arr1.slice(3);
console.log(result); // [ 4, 5 ]

arr1 = [1, 2, 3, 4, 5];
result = arr1.slice(-3);
console.log(result); // [ 3, 4, 5 ]

arr1 = [1, 2, 3, 4, 5];
result = arr1.slice(-3, -1);
console.log(result); // [ 3, 4 ]

arr1 = [1, 2, 3, 4, 5];
result = arr1.slice(-3, 4);
console.log(result); // [ 3, 4 ]

arr1 = [1, 2, 3, 4, 5];
result = arr1.slice(3, 2);
console.log(result); // []



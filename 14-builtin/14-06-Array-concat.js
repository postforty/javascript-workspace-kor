// 원본 변경하지 않음
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

arr3 = arr1.concat(arr2, 7, 8, 9, [10, 11, 12]);
console.log(arr3);

// 다차원 배열
arr1 = [[1], [2, 3]]
arr2 = [[4], [5, 6]]
arr3 = arr1.concat(arr2);
console.log(arr3)

// 문자열과 결합
arr1 = ["hello"];
str1 = "world";
arr3 = arr1.concat(str1);
console.log(arr3); // [ 'hello', 'world' ]
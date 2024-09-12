let arr = ["banana", "apple", "cherry"];
let result = arr.sort(); // 원본 배열 변경 및 정렬된 배열 반환
console.log(arr);
console.log(result);

arr = [10, 1, 21, 3];
arr.sort();
console.log(arr); // [ 1, 10, 21, 3 ]

// let func = function (a, b) {
//     return a - b;
// }
// let func = (a, b) => a - b;
// arr.sort(func);

// a - b 양수이면 스왑
// 음수 또는 0이면 스왑 안함
arr.sort((a, b) => a - b) // 오름차순
console.log(arr);

arr.sort((a, b) => b - a) // 내림차순
console.log(arr);

arr = [
    {name: "오삼남", age: 97},
    {name: "오일남", age: 99},
    {name: "오이남", age: 98},
]

arr.sort((a, b) => b.age - a.age); // 객체 요소 내림차순 정렬
console.log(arr)


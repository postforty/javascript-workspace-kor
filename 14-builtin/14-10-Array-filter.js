// 조건에 맞는 요소만 선택해서 새로운 배열 반환
// 원본 배열 변경 안함

let arr = [1, 2, 3, 4, 5, 6];
let result = arr.filter(num => num % 2 === 0);
console.log(result) // [ 2, 4, 6 ]

result = arr.filter(num => num % 2 !== 0);
console.log(result) // [ 1, 3, 5 ]

arr = [
    {name: "오삼남", age: 97},
    {name: "오일남", age: 99},
    {name: "오이남", age: 98},
]
result = arr.filter(person => person.age >= 98);
console.log(result);

result = arr.filter(person => true);
console.log(result);


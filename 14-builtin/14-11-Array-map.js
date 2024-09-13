// 배열의 각 요소를 변환, 새로운 배열을 생성, 원본 배열에 영향 없음

let arr = [1, 2, 3, 4, 5];
console.log(arr.map(num => num + 2)); // [ 2, 4, 6, 8, 10 ]

arr = ["apple", "banana", "cherry"];
console.log(arr.map(str => str.toUpperCase())); // [ 'APPLE', 'BANANA', 'CHERRY' ]

let people = [
    {name: "오일남", age: 99},
    {name: "김일남", age: 98},
    {name: "이일남", age: 97},
]
console.log(people.map(person => person.name)); // [ '오일남', '김일남', '이일남' ]
console.log(people.map(person => person.age)); // [ 99, 98, 97 ]

// 매개변수 인덱스 사용(값, 인덱스)
arr = ["apple", "banana", "cherry"];
// const result = arr.map((value, index) => `${index + 1} : ${value}`);
const result = arr.map((v, i) => `${i + 1} : ${v}`);
console.log(result);

// 객체 속성값 변경
people = [
    {name: "오일남", age: 99},
    {name: "김일남", age: 98},
    {name: "이일남", age: 97},
]

result = people.map(obj => ({
...obj, age:  obj.age + 1
}));

console.log(result);

// 빈 배열에 적용
arr = [];
console.log(arr.map(item => item * 2)); // []
// 배열의 각 요소에 대해 주어진 리듀스 함수를 실행하여 하나의 값을 반환

let arr = [1, 2, 3, 4, 5];
// arr.reduce(함수, 초기값)

// let result = arr.reduce((accumulator, currentValue) => {
//     accumulator += currentValue;
//     return accumulator;
// }, 0)

// let result = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// result = arr.reduce((accumulator, currentValue) => accumulator * currentValue) // ! 초기값 생략 가능
result = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1) // ! 초기값 중요
console.log(result)

// 객체 속성 값 합산
let objArr = [
    {item: "apple", price: 2000},
    {item: "banana", price: 1000},
    {item: "cherry", price: 3000}
]

result = objArr.reduce((acc, curr) => acc + curr.price, 0);
console.log(result);

// 배열 문자열 요소 결합
let words = ["Hello", "world", "from", "reduce"];
result = words.reduce((acc, curr)=> acc + " " + curr)
console.log(result);

// 배열 요소 최솟값
arr = [1, 2, 3, 4, 5];
result = arr.reduce((acc, curr) => curr < acc ? curr : acc, arr[0]) // * 초기값 생략시 배열의 첫번째 요소가 초기값이 됨
console.log(result) // 1

// 배열 요소 최댓값
arr = [1, 2, 3, 4, 5];
result = arr.reduce((acc, curr) => curr > acc ? curr : acc, arr[0])
console.log(result) // 5

// 빈 배열, 초기값이 없을 경우 에러
arr = [];
result = arr.reduce((acc, curr) => acc) 
console.log(result) // TypeError: Reduce of empty array with no initial value

// 배열을 객체로 변환
const people = [
    {id: 1, name: "오일남", age: 99},
    {id: 2, name: "오이남", age: 98},
    {id: 3, name: "오삼남", age: 97},
];

// const resultObj = people.reduce((acc, curr) => {
//     acc[curr.id] = {name: curr.name, age: curr.age};
//     return acc;
// }, {})

const resultObj = people.reduce((acc, curr) => {
    const {id, name, age} = curr;
    acc[id] = {name, age};
    return acc;
}, {})

console.log(resultObj);
const o2 = resultObj['2'];
console.log(o2);
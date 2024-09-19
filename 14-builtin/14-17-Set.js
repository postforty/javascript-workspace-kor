/**
 * 중복된 값이 없는 고유한 값들을 저장하는 객체
 * 삽입 순서대로 값 저장(정렬이 필요한 경우 배열로 변환 후 정렬)
 * 원시 값, 객체 모두 저장 가능
 * 순회 가능
 */

let mySet = new Set();
console.log(mySet)

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet)

mySet = new Set([1, 2, 3, 1, 1, 1]);
console.log(mySet)
console.log(mySet.has(1)); // 값이 존재하는지 확인
console.log(mySet.has(4));

mySet.delete(1)
console.log(mySet)
console.log(mySet.size) // Set의 크기

// Set 순회
mySet.forEach(value => {
    console.log(value)
})

mySet.clear();
console.log(mySet);

console.log(NaN === NaN);

mySet.add(NaN);
mySet.add(NaN);
mySet.add(NaN);
console.log(mySet) // 중복된 NaN 무시

// ! 배열로 변환
mySet = new Set([4, 5, 6]);
console.log(mySet);
const arr = Array.from(mySet);
console.log(arr);
console.log(Array.isArray(arr));

const arr2 = [...mySet];
console.log(arr2);
console.log(Array.isArray(arr2));
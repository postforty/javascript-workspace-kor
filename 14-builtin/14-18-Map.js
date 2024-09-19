/**
 * 키-값 쌍을 저장하는 내장 객체
 * 중복된 키는 허용 안함
 * 객체와 달리 모든 유형의 값(원시 값 또는 객체)을 키로 사용할 수 있음
 * 삽입된 순서대로 키-값 쌍을 저장
 * 순서가 보장되기 때문에 순회를 하거나 데이터를 정렬할 때 유용
 */

let map = new Map();
console.log(map)

map.set("name", "오일남");
map.set("age", 99);
console.log(map)

map.set({key: "value"}, "객체를 키로 넣었음");
console.log(map)

console.log(map.get('name'));
console.log(map.get({key: "value"}));

const obj = {key2: "value2"};
map.set(obj, "객체를 키로 넣었음(식별자 사용)");
console.log(map)

console.log(map.get(obj));

// 키 존재 여부 확인
console.log(map.has("age")); // true
console.log(map.has("address")); // false

// 키-값 삭제
map.delete("age");
console.log(map)

console.log(map.size); // 크기 확인

// 순회
map.forEach((v, k) => {
    console.log(v, k)
})

console.log(map.entries()); // 키-값을 반복 가능한 Iterator 객체로 반환

const studentsMap = new Map();

studentsMap.set("오삼남", "97");
studentsMap.set("오일남", "99");
studentsMap.set("오이남", "98");

console.log(studentsMap)

console.log(studentsMap.entries())
console.log([...studentsMap.entries()].sort((a, b) => b[1] - a[1]))
console.log([...studentsMap.entries()].sort((a, b) => a[1] - b[1]))
console.log([...studentsMap.entries()].sort((a, b) => a[0] - b[0]))
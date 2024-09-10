var global = "global"; // 전역

function foo() {
    var local = "local"; // 지역
    console.log(global);
    console.log(local);
}
foo();

console.log(global);
// console.log(local); // ReferenceError

if (true) {
    var localTest1 = "localTest1"; // 전역
    const localTest2 = "localTest2"; // 지역
}
console.log(localTest1);
// console.log(localTest2); // ReferenceError
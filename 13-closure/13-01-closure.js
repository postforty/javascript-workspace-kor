// 폐쇄
function outerFunc() {
    let x = 10;
    const innerFunc = function () {
        return ++x;
    }

    return innerFunc;
}
// console.log(outerFunc()());
// console.log(outerFunc()());
// console.log(outerFunc()());

const closure1 = outerFunc();
const closure2 = outerFunc();
console.log(closure1())
console.log(closure1())
console.log(closure2())
console.log(closure1())
console.log(closure2())
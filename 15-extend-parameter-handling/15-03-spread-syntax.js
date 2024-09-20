// 전개 문법
console.log(...[1, 2, 3]) // 1 2 3

console.log(..."hello")

const [a, b, ...c] = [..."hello"]
console.log(a)
console.log(b)
console.log(c)

console.log(...new Map([["a", 1], ["b", 2]]))

console.log(...new Set([1, 2, 3]))

// console.log(...{a: 1, b: 2}) // 객체는 안됨
console.log({ ...{ a: 1, b: 2 } })

function func1(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}

// func1(...[1, 2, 3]);

const arr = [1, 2, 3]
func1(...arr);


function func2(param, ...rest) {
    console.log(param);
    console.log(rest);
}

func2(1, 2, 3, 4, 5)
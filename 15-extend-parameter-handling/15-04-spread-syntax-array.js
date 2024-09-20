// concat
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr.concat(arr2));
console.log([...arr, ...arr2])
console.log([...arr, ...arr2, 7])

// splice
const arr3 = [1, 2, 3, 6];
const arr4 = [4, 5];
arr3.splice(2, 0, ...arr4);
console.log(arr3)

// push
const arr5 = [1,2,3];
const arr6 = [4,5,6];
arr5.push(...arr6);
console.log(arr5)

// shallow copy
const arr7 = [1,2,3,[4]];
const arr8 = [...arr7];
arr7[3][0] = 5;
console.log(arr7)
console.log(arr8)


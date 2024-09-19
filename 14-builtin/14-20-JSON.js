/**
 * JSON(JavaScript Object Notation)
 * 서버와 클라이언트 간의 데이터 전송에서 많이 활용
 */

/**
 * JSON.stringify(value[, replacer[, space])
 */

let obj = {name:"오일남", age: 99, address: "부산"};

let json = JSON.stringify(obj);
console.log(typeof obj);
console.log(typeof json);

let jsonReplacer = JSON.stringify(obj, ["name", "age"]);
console.log(jsonReplacer);

let jsonReplacerSpace = JSON.stringify(obj, Object.keys(obj), 2);
console.log(jsonReplacerSpace);

/**
 * JSON.parse(text[, reviver]);
 */
console.log(jsonReplacer);
console.log(typeof jsonReplacer);
let objParser = JSON.parse(jsonReplacer);
console.log(objParser);
console.log(typeof objParser);

let objParserReviver = JSON.parse(jsonReplacer, (key, value) => {
    if (key === "age") return value + 1;
    return value;
});
console.log(objParserReviver);

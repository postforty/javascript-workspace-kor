function getDataName() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "오일남" };
            // const data = null;
            if (data) {
                console.log("이름 네트워크 요청 성공!");
                resolve(data);
            } else {
                reject(new Error("이름 네트워크 문제 발생!"))
            }
        }, 2000);
    })

    return promise;
}

function getDataAge() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { age: 99 };
            // const data = null;
            if (data) {
                console.log("나이 네트워크 요청 성공!");
                resolve(data);
            } else {
                reject(new Error("나이 네트워크 문제 발생!"))
            }
        }, 1000);
    })

    return promise;
}

const promise = getDataName();

const ageResult = promise.then((data) => {
    console.log(data)
    return getDataAge();
}).then((age) => {
    console.log(age);
    return "Hello!";
}).then((data) => {
    console.log(data);
})
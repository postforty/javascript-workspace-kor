// async가 붙으면 비동기 함수로 변신함
// promise 객체를 반환함

function networkRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("서버 응답 완료!");
            resolve("서버 1");
        }, 1000)
    })
}

async function getUser() {
    throw new Error("에러가 발생했습니다.");
    // const result = await networkRequest();
    // console.log(result)
    // return "오일남";
}

async function getTodo() {
    await networkRequest();
    return ["자바스크립트 공부", "리액트 공부"];
}

async function getData() {
    let user;
    try {
        user = await getUser();
    } catch (error) {
        console.log(error.message);
        user = "익명";
    } finally {
        console.log("에러 여부와 상관없이 실행되는 코드!")
    }

    const todo = await getTodo();
    console.log(`${user}님 ${todo}를 진행하세요!`)
}

getData();
if (false) {
    function getData() {
        setTimeout(
            () => console.log("서버 응답 완료!"), 2000
        )
    }
    getData();
    console.log("후처리 진행!")

    // 비동기 처리1
    function getData(callback) { // 비동기 콜백
        setTimeout(() => {
            console.log("서버 응답 완료!");
            callback();
        }, 2000)
    }
    getData(() => {
        console.log("후처리 진행!")
    });
}

// 비동기 처리2
function getData(callback) { // 비동기 콜백
    setTimeout(() => {
        console.log("서버 응답 완료!");
        const result = {name: "오일남"};
        callback(result);
    }, 2000)
}
getData((data) => {
    console.log(data)
});



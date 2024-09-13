(function printNow() {
    const today = new Date();

    // console.log(today) // 2024-09-13T12:40:07.718Z

    const dayNames = [
        "(일요일)",
        "(월요일)",
        "(화요일)",
        "(수요일)",
        "(목요일)",
        "(금요일)",
        "(토요일)",
    ];
    
    const day = dayNames[today.getDay()];

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    const ampm = hour >= 12 ? "PM" : "AM";

    const now = `${year}년 ${month}월 ${date}일 ${hour}:${minute}:${second} ${ampm}`

    console.log(now)

    setTimeout(printNow, 1000);
})();

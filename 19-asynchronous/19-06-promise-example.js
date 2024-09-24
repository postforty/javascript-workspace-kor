// 로그인 → 장바구니 노트북 담기 → 노트북 구매

function login(username) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(username) {
                resolve(username);
            } else {
                reject(new Error("아이디를 입력해주세요!"))
            }
        }, 3000)
    })

    return promise;
}

function addToCart(product) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(product) {
                resolve(product);
            } else {
                reject(new Error("장바구니에 넣을 상품이 없음!"))
            }
        }, 2000)
    })
}

function makePayment(money, product) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(money <= 0) {
                reject(new Error("음수 금액은 사용할 수 없습니다!"))
            }
            if(!product) {
                reject(new Error("결제할 상품을 담으시오!"))
            }
            resolve({money, product});
        }, 1000)
    })
}

login("").catch(()=>{
    return "익명";
}).then((username)=>{
    console.log(`${username}님 환영합니다.`);
    return addToCart("노트북");
}).then((product)=>{
    console.log(`${product}을 장바구니에 담기`)
    return makePayment(1000, product);
}).then(({money, product}) => {
    console.log(`${money}원으로 ${product} 결제 완료`)
}).finally(()=>{
    console.log("여기는 프라미스 랜드입니다~~~")
})
// DAY 16 비동기처리
console.log("index.js가 연결됐습니다!!!");

//비동기 : 기다리지 않고 실행되는 다음줄
console.log("이미지 로딩 시작");
setTimeout(() => console.log("이미지 로딩 완료"), 2000);
console.log("다른 작업 수행");

// clearTimeout(timerID) timer 취소
const setBtn = document.querySelector("#set-btn");
const cancelBtn = Document.querySelector("#cancel-btn");
const msgEl = docuemtn.querySelector("#msg");
let timeoutId = null;

setBtn.addEventListener("click", () => {
    msgEl.textContest = "3초 뒤에 알려 드립니다";
    timeoutId = setTomeout(()=> {
        msgEl.textContest = "3초가 지났습니다";
    }, 3000);
    });

    cancelBtn.addEventListner("click", ()) => {
        clearTimeout(timeoutId);
        msgEl.textContent = "알림을 취소했습니다";
    };

    //setInterval - 정해진 시간마다 되풀이
    let count = 0;
    const intervalId = setInterval(() = {
        count += 1;
        console.log('${count}초');
        if (count == 5) {
            clearinterval
        }
    })
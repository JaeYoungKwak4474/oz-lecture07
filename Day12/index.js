// DAY 12 JavaScript 반복문과 함수
console.log("index.js가 연결됐습니다!!!");

// for 반복문
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for 반복문 밖에 변수 선언
let total = 0;
for (let i = 1; i <= 10; i++) {
  total += i;
}
console.log(total);

// 구구단 3단 만들기
for (let i = 1; i <= 9; i++) {
  let dan = 3;
  let result = dan * i;
  let message = `${dan} x ${i} = ${result}`;
  console.log(message);
  //   console.log(`3 x ${i} = ${3 * i}`);
}

// 중첩 for 반복문
for (let i = 1; i < 2; i++) {
  // => i 초기화를 0으로 바꾸기
  console.log("i 블록 시작");
  console.log("i", i);
  for (let k = 1; k < 2; k++) {
    // => k 초기화를 0으로 바꾸기
    console.log("k 블록 시작");
    console.log("k", k);
    console.log("k 블록 끝");
  }
  console.log("i 블록 끝");
}

// 배열 반복
const fruits = ["사과", "바나나", "포도", "딸기"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
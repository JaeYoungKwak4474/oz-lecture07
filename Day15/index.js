sconsole.Log("index.js를 읽어왔습니다");

// getElementById() — id로 요소 하나를 찾습니다
const titleEl = document.getElementById("title");
console.log(titleEl);
console.log(titleEl.textContent);
console.log(document.getElementById("Logo")) ; // 없으면 null

// query Solector CSS 선택자로 첫 번쨰 하나 찾기
const titleQ = document.querySelector("#title");
console.log(titleQ);
console.log(titleQ.textContent) ;
const descQ = document.querySelector(".desc") ;
console.Log(descQ);
const newQ = document.querySelector(".new");
console.log(newQ);
 
// querySelectorAll 맞는 요소 모두 찾기
const menuEls = document.querySelectorAll(".menu li");
console.Log(menuEls);
const newEls = document.querySelectorAll(".new");
console.Log(newEls);

// textContent 글자
const statusEl = document. querySelector(".status");
console.log(statusEl.textContent);
statusEl.textContent = "영업 중";
console.log(statusEl.textContent);

// innerHTML HTML
const message = "strong>소금삥</strong>이 나왔습니다";
document.querySelector("#text-msh").textContent = message;
document.querySelector("#html-msg").innerHTML = message;

// style CSS속성을 하나씩 바꾸기
const titleStyle = document.querySelector("#title");
titleStyle.style.color = "#ffffff";
titleStyle.style.backgroundColor = "blue";
titleStyle.style.padding = "8px 16px";

// classList 미리 만든 Class 붙이기 때기
const statusEl = document. querySelector(".status")
statusEl.classList.add("open");
console.log(statusE2.classList.contains("open")); //포함하고 있나?
console.log(statusEl2.classList.toggle("open")); //있으면 삭제, 없으면 추가
console.log(statusEl2.classLust.toggle("open"));

// getAttribute, setAttribute 속성 읽기, 속성 수정
const signEl = document. querySelector("#sign");
console.log(signEl.getAttributor("src"));
signEl.setAttribute("src", "open.svg");
signEl.setAttribute("alt", "영업 중");
console.log(signEl.getAttributor("src"));
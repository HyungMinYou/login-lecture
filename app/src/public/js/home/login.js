"use strict";

// DOM은 일종의 인터페이스로
//자바스크립트에서 html에 존재하는 데이터들을 가져와서 제어할 수 있게 해줌

//id 텍스트에 존재하는 값은 자바스크립트에서 id라는 변수로 담음
const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);
//login버튼이 눌리면 click이라는 이벤트가 발생하면 로그인을 시켜줌

function login() {
  const req = {
    id: id.value, //login버튼이 클릭되면 id와 psword에 들어있는 값을 가져와야 한다
    psword: psword.value,
  };
  console.log(req);
}

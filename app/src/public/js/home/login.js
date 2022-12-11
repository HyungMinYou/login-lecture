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

  fetch("/login", {
    method: "POST", //body를 통해서 데이터를 전달할 때는 POST를 이용해서 데이터를 전달해야함
    headers: {
      "Content-Type": "application/json",
    }, //내가 전달하는 데이터가 json데이터라고 알려줘야하는데 그것을 headers로 표현
    body: JSON.stringify(req), //stringify는 object를 문자열로 바꿔줌
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    // fetch를 수행하다가 에러를 처리하는 방법
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    });
  //서버랑 프론트랑 해당 데이터를 어떤 경로에서 주고 받을지를 API설정
  //프론트에서 전달하는 과정(데이터가 서버로 전달이 되게 됨)
}

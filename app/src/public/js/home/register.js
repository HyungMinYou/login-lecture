"use strict";

// DOM은 일종의 인터페이스로
//자바스크립트에서 html에 존재하는 데이터들을 가져와서 제어할 수 있게 해줌

//id 텍스트에 존재하는 값은 자바스크립트에서 id라는 변수로 담음
const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);
//register버튼이 눌리면 click이라는 이벤트가 발생하면 로그인을 시켜줌

function register() {
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (psword.value !== confirmPsword.value)
    return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value, //register버튼이 클릭되면 id와 psword에 들어있는 값을 가져와야 한다
    name: name.value,
    psword: psword.value,
  };

  fetch("/register", {
    method: "POST", //body를 통해서 데이터를 전달할 때는 POST를 이용해서 데이터를 전달해야함
    headers: {
      "Content-Type": "application/json",
    }, //내가 전달하는 데이터가 json데이터라고 알려줘야하는데 그것을 headers로 표현
    body: JSON.stringify(req),
    //SIGN UP버튼이 눌리면 회원가입에 해당하는 데이터들을 body에 담아서 전달할거니까 POST로 요청
  })
    .then((res) => res.json())
    //서버로부터 응답이 오면 json메서드를 호출해서 서버에 응답이 다 받아지는 순간 프로미스객체를 반환
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    // fetch를 수행하다가 에러를 처리하는 방법
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
  //서버랑 프론트랑 해당 데이터를 어떤 경로에서 주고 받을지를 API설정
  //프론트에서 전달하는 과정(데이터가 서버로 전달이 되게 됨)
}

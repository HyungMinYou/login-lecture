"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index"); // 6. /루트 도메인에 왔을 때 이동하는 코드
  },

  login: (req, res) => {
    res.render("home/login"); // 6. /login.ejs가 login 도메인에 왔을 때 이동하는 코드
  },
};

//로그인이 가능할려면 프론트에서 전달한 id와 psword값을 서버에서 인증하는 과정이 필요한데
//인증을 할려면 해당 데이터를 서버가 가지고 있어야 함 - users 객체
const users = {
  id: ["Youhm", "나개발", "김팀장"],
  psword: ["1234", "1234", "123456"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    } //req는 프론트엔드에서 전달한 요청 데이터들을 담아두는 변수

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};

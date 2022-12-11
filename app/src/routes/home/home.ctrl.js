"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index"); // 6. /루트 도메인에 왔을 때 이동하는 코드
  },

  login: (req, res) => {
    res.render("home/login"); // 6. /login.ejs가 login 도메인에 왔을 때 이동하는 코드
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    const users = UserStorage.getUsers("id", "psword"); //UserStorage의 class안 user변수에 접근을 할 수 있음

    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        response.success = true;
        return res.json(response);
      }
    } //req는 프론트엔드에서 전달한 요청 데이터들을 담아두는 변수

    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};

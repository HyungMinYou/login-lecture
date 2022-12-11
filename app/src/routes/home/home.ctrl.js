"use strict";

const User = require("../../models/User");

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
    const user = new User(req.body); // 이 body가 User.js폴더에 있는 User클래스 생성자의 body로 들어감
    const response = user.login();
    return res.json(response); // json객체로 만들어서 클라이언트에 던져줌
  },
};

module.exports = {
  output,
  process,
};

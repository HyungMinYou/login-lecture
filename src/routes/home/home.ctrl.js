"use strict";

const home = (req, res) => {
  res.render("home/index"); // 6. /루트 도메인에 왔을 때 이동하는 코드
};

const login = (req, res) => {
  res.render("home/login"); // 6. /login.ejs가 login 도메인에 왔을 때 이동하는 코드
};

module.exports = {
  home,
  login,
};

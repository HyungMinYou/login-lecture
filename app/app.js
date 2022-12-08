"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

// 6. 앱 세팅
app.set("views", "./src/views"); // 6. 밑 html<DOCK> 부분 views 경로에 뷰단 처리 엔진
app.set("view engine", "ejs"); // 6. html코드들을 어떤 엔진으로 해석할지 정함

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드
// index.js안에서 외부로 보낸 라우터를 app.use를 이용해 받아옴

module.exports = app;

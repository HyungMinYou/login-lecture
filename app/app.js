"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-Parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

// 6. 앱 세팅
app.set("views", "./src/views"); // 6. 밑 html<DOCK> 부분 views 경로에 뷰단 처리 엔진
app.set("view engine", "ejs"); // 6. html코드들을 어떤 엔진으로 해석할지 정함

app.use(express.static(`${__dirname}/src/public`));
// ejs파일에서 js폴더로 접근할 수 있도록 미들웨어 등록
// js폴더를 public으로 옮김

app.use(bodyParser.json()); // body-parser를 사용할 때 미들웨어를 등록해줘야 함
app.use(bodyParser.urlencoded({ extended: true }));
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드
// index.js안에서 외부로 보낸 라우터를 app.use를 이용해 받아옴

module.exports = app;

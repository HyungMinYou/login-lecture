"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
// "/" 브라우저에서 루트경로로 요청이 들어오면 {} 안에 동작을 하겠다.
// 브라우저한테 요청과 응답을 받기 위해서 req,res

router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);
// 해당 API는 프론트엔드가 전달한 로그인데이터를 받아서 로그인 기능을 처리해주는 것
// process는 처리한다는 의미

module.exports = router; // 라우터와 app.js를 연결하기 위해 외부로 내보내는 코드

"use strict";

const app = require("../app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("서버 가동");
});
// () = {} 은 콜백함수 넘겨줌

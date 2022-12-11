"use strict";

const UserStorage = require("./UserStorage");

// home.ctrl.js안에 있는 process
class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    //이 user.login은 컨트롤러에서 호출을 했으니까 실행이 됨
    const { id, psword } = UserStorage.getUserInfo(body.id);

    if (id) {
      if (id === body.id && psword === body.psword) {
        return { success: true }; //아이디가 같으면 true를 리턴
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." }; //아이디는 있는데 비밀번호가 다를경우
    }
    return { success: false, msg: "존재하지 않는 아이디입니다." }; //존재하는 id도 없을경우
  }
}

module.exports = User;

"use strict";

//로그인이 가능할려면 프론트에서 전달한 id와 psword값을 서버에서 인증하는 과정이 필요한데
//인증을 할려면 해당 데이터를 서버가 가지고 있어야 함 - users 객체
class UserStorage {
  static #users = {
    id: ["Youhm", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["유형민", "나개발", "김팀장"],
    // 필드: [필드에 속하는 데이터들]
  };
  //데이터를 은닉화 시켜주고

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers; //class안에 은닉화된 private변수 #users를 반환해줌
  }
}
//메서드를 전달해주어야 함

module.exports = UserStorage;

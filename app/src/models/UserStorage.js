"use strict";

const db = require("../config/db");

//로그인이 가능할려면 프론트에서 전달한 id와 psword값을 서버에서 인증하는 과정이 필요한데
//인증을 할려면 해당 데이터를 서버가 가지고 있어야 함 - users 객체
class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        resolve(data[0]);
      });
    });
  }

  // 클라이언트에서 데이터를 전달하면 users객체안에 해당 데이터들이 저장
  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
}
//메서드를 전달해주어야 함

module.exports = UserStorage;

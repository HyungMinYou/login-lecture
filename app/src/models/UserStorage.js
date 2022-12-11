"use strict";

const fs = require("fs").promises; //.promises를 fs(파일시스템)는 promise를 반환하게됨

//로그인이 가능할려면 프론트에서 전달한 id와 psword값을 서버에서 인증하는 과정이 필요한데
//인증을 할려면 해당 데이터를 서버가 가지고 있어야 함 - users 객체
class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id); // 7.User.js에서 Youhm id의 인덱스를 구해서 인덱스에 넣음
    const usersKeys = Object.keys(users); // 2.=> [id, psword, name] // (users)의 키 값들만 userskeys라는 리스트로 만들거다
    // 3.위 배열을 userskeys 안에 넣어서 배열을 reduce(반복)로 돌려줌
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx]; // 5.키값[info]이 처음에는 id가 들어가고
      // 6.값으로는 users의 키값[info]의 [idx]다.
      return newUser;
    }, {}); // 4.초기값으로는 Object로 넣어줬고 newUser라는 Object에 키 값[info]이 순차적으로 들어감
    // 8.그 인덱스[idx]에 해당하는 값들을 newUser[info]에 다 넣어준 것
    // 9.그러면 "Youhm", "1234", "유형민" 이 다 들어감

    return userInfo; // 10.그렇게해서 userInfo라는게 만들어짐
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data); //버퍼로 되있는 데이터를 파싱해서 받을 수 있는 데이터로 바뀐것을 users로 넣어줌
    if (isAll) return users; // 모든 값을 다 가져오겠다 라는 의미
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers; //class안에 은닉화된 private변수 #users를 반환해줌
  }

  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error); //해당 로직이 실패했을 때 실행
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error); //해당 로직이 실패했을 때 실행
  }

  // 클라이언트에서 데이터를 전달하면 users객체안에 해당 데이터들이 저장
  static async save(userInfo) {
    const users = await this.getUsers(true); //데이터를 object형태로 반환해서 users가 가지고 있을거임
    if (users.id.includes(userInfo.id)) {
      //users안에 이미 id가 존재하면
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    fs.writeFile("./src/databases/users.json", JSON.stringify(users)); //추가한 users데이터를 users에 넣어줘야 함
    return { success: true };
  }
}
//메서드를 전달해주어야 함

module.exports = UserStorage;

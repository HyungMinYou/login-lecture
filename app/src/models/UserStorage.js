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

  static getUserInfo(id) {
    const users = this.#users; // 1.맨위 users 객체를 변수 users로 받아왔고
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
}
//메서드를 전달해주어야 함

module.exports = UserStorage;

// user와 관련된 정보는 여기서 다 담당한다.
// router 만들듯이 만들어주는 것이다.

const connection = require('./dbConnect');

const userDB = {
  // 중복 회원 찾기
  userCheck: (userId, cb) => {
    // 중복된 메시지가 있는지 체크
    connection.query(
      `SELECT * FROM mydb1.user WHERE USERID = '${userId}';`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
  // 회원 가입 하기
  registerUser: (newUser, cb) => {
    connection.query(
      `INSERT INTO mydb1.user (USERID, PASSWORD) values ('${newUser.id}', '${newUser.password}');`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
};

module.exports = userDB;

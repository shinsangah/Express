// user와 관련된 정보는 여기서 다 담당한다.
// router 만들듯이 만들어주는 것이다.

const connection = require('./dbConnect');

const userDB = {
  getUsers: (cb) => {
    connection.query('SELECT * FROM mydb1.user;', (err, data) => {
      if (err) throw err;
      console.log(data);
      cb(data);
      // 콜백 함수에 데이터로 만드는 구조
      // Mysql도 서버다. 여기에 보내는 행위는 통신. 당연히 동기적으로 처리해야 함.
      // 나중에 async await 바꾸는 작업도 할 것임. 콜백에 데이터를 담아서 전달을 해주어야 함.
    });
  },
};

module.exports = userDB;

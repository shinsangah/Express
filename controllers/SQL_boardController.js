const connection = require('./dbConnect');

const boardDB = {
  // 모든 게시글 가져오기
  getAllArticles: (cb) => {
    connection.query('SELECT * from mydb1.board', (err, data) => {
      if (err) throw err;
      console.log(data);
      cb(data);
    });
  },

  // 게시글 추가하기
  writeArticle: (newArticle, cb) => {
    connection.query(
      `INSERT INTO mydb1.board (USERID, TITLE, CONTENT) values ('${newArticle.userId}', '${newArticle.title}', '${newArticle.content}');`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
  // 백터에서 엔터 치면 개행문자라는게 들어가는거라 엔터치면 안됨
  // 특정 ID 값을 가지는 게시글 찾기
  getArticle: (id, cb) => {
    connection.query(
      `SELECT * FROM mydb1.board WHERE ID_PK = ${id};`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
  // 특정 ID를 가지는 게시글을 수정하는 컨트롤러
  modifyArticle: (id, modifyArticle, cb) => {
    connection.query(
      `UPDATE mydb1.board SET TITLE = '${modifyArticle.title}', CONTENT = '${modifyArticle.content}' WHERE ID_PK = ${id};`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
  // 특정 ID를 가지는 게시글을 삭제하는 컨트롤러
  deleteArticle: (id, cb) => {
    connection.query(
      `DELETE FROM mydb1.board WHERE ID_PK = '${id}';`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
};

module.exports = boardDB;

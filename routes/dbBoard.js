const express = require('express');
const boardDB = require('../controllers/boardController');

const router = express.Router();

// 로그인 확인용 미들웨어
function isLogin(req, res, next) {
  if (req.session.login) {
    next();
  } else {
    res.status(400);
    res.send(
      '로그인 필요한 서비스 입니다!<br><a href="/login">로그인 페이지로 이동<a>',
    );
  }
}

// 게시판 페이지 호출
router.get('/', isLogin, (req, res) => {
  boardDB.getAllArticles((data) => {
    console.log(data);
    const ARTICLE = data;
    const articleCounts = ARTICLE.length;
    const { userId } = req.session;
    // {} 구조분해 할당으로 씀
    res.render('db_board', { ARTICLE, articleCounts, userId });
  });
});

// 글쓰기 페이지 호출
router.get('/write', isLogin, (req, res) => {
  res.render('db_board_write');
});

// 데이터 베이스에 글쓰기
router.post('/write', isLogin, (req, res) => {
  if (req.body.title && req.body.content) {
    boardDB.writeArticle(req.body, (data) => {
      console.log(data);
      if (data.affectedRows >= 1) {
        res.redirect('/dbBoard');
      } else {
        const err = new Error('글 쓰기 실패');
        err.statusCode = 500;
        throw err;
      }
    });
  } else {
    const err = new Error('글 제목 또는 내용이 없습니다!');
    err.statusCode = 400;
    throw err;
    // 사용자가 입력을 안한거니까 클라이언트 쪽 잘못이라 400번대임
  }
});

// 글 수정 모드로 이동
router.get('/modify/:id', isLogin, (req, res) => {
  boardDB.getArticle(req.params.id, (data) => {
    // req.params.id = ID_PK 값임
    if (data.length > 0) {
      res.render('db_board_modify', { selectedArticle: data[0] });
    } else {
      const err = new Error('해당 ID 값을 가지는 게시글이 없습니다!');
      err.statusCode = 500;
      throw err;
    }
  });
});

// 글 수정하기
router.post('/modify/:id', isLogin, (req, res) => {
  if (req.body.title && req.body.content) {
    boardDB.modifyArticle(req.params.id, req.body, (data) => {
      if (data.affectedRows >= 1) {
        res.redirect('/dbBoard');
      } else {
        const err = new Error('글 수정 실패');
        err.statusCode = 500;
        throw err;
      }
    });
  } else {
    const err = new Error('글 제목 또는 내용이 없습니다.');
    err.statusCode = 400;
    throw err;
  }
});

// 글 삭제하기 (실습)
router.delete('/delete/:id', isLogin, (req, res) => {
  if (req.params.id) {
    boardDB.deleteArticle(req.params.id, (data) => {
      if (data.affectedRows >= 1) {
        res.status(200).send('삭제 성공');
        // 200번대 찍어주고 (성공했어) 그리고 send 메세지 보내줘도 됨
        // status code 확인하고 진짜 성공했구나 하고 확인할 수 있다. 이렇게 사이에 끼워넣어줄 수 있음.
        console.log('삭제 완료');
      } else {
        // 예외처리도 해주기
        const err = new Error('삭제 실패');
        err.statusCode = 500;
        // 서버 문제라 500번대인 것임
        throw err;
      }
    });
  } else {
    const err = new Error('삭제 실패');
    err.statusCode = 400;
    throw err;
  }
});

// 특정 게시글을 찾아주는 컨트롤러 만들어줘야 특정 글의 내용 전달 가능
router.get('/getAll', (req, res) => {
  boardDB.getAllArticles((data) => {
    // (function(data)) 익명함수 사용한 것임
    res.send(data);
  });
});

module.exports = router;

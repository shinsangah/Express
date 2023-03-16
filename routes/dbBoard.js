const express = require('express');
const boardDB = require('../controllers/boardController');

const router = express.Router();

// 게시판 페이지 호출
router.get('/', (req, res) => {
  boardDB.getAllArticles((data) => {
    console.log(data);
    const ARTICLE = data;
    const articleCounts = ARTICLE.length;
    res.render('db_board', { ARTICLE, articleCounts });
  });
});

// 글쓰기 페이지 호출
router.get('/write', (req, res) => {
  res.render('db_board_write');
});

// 데이터 베이스에 글쓰기
router.post('/write', (req, res) => {
  console.log(req.body);
});

router.get('/getAll', (req, res) => {
  boardDB.getAllArticles((data) => {
    // (function(data)) 익명함수 사용한 것임
    res.send(data);
  });
});

module.exports = router;

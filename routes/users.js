// 회원 관련 작업 요청 (http://localhost:4000/users) 을 처리하는 유저 라우터 작업

const express = require('express');

const router = express.Router();

// localhost:4000/users/
router.get('/', (req, res) => {
  res.render('users', { user: '신상아' });
  // users.ejs 파일을 서빙해준다.
});

module.exports = router;

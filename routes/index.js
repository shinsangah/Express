const express = require('express');

const router = express.Router();

// localhost:4000/
router.get('/', (req, res) => {
  // res.send('여기는 메인 라우터 입니다!');
  res.render('index', { msg: '이 데이터는 백엔드가 보냈어요!' });
  // index.ejs 파일을 서빙해준다.
});

module.exports = router;

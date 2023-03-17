const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('cookie');
  // 만든 ejs 뷰파일 cookie.ejs
});

router.get('/cook', (req, res) => {
  res.cookie('alert', true, {
    maxAge: 1000 * 5,
    // 쿠키 구운 과정
    httpOnly: false,
  });
  res.status(200).json('쿠키 굽기 성공!');
  // 통신 성공했으니 200을 적어줌
  // res.json('쿠키 굽기 성공!'); 따로 안쓰고 저렇게 이어쓸 수도 있음
});

// 백에서 쿠키를 구워서 보내는 코드 완성

module.exports = router;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;
// 리액트가 보통 3000번 써서 피하는게 좋다.
// 코드가 겹칠 수 있기 때문에 3000번 쓰는건 추천 안함.

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
// public 폴더 static 폴더로써 동작하게 됨
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// bodyParser는 구식이라 안써도 됨
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const mainRouter = require('./routes');
const userRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const dbRouter = require('./routes/db');

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/board', boardRouter);
app.use('/db', dbRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message);
});

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 실행 중입니다!`);
});

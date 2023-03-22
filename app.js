require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const { PORT } = process.env;
// 리액트가 보통 3000번 써서 피하는게 좋다.
// 코드가 겹칠 수 있기 때문에 3000번 쓰는건 추천 안함.

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
// public 폴더 static 폴더로써 동작하게 됨
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('bebe'));
app.use(
  session({
    secret: '1234',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60,
      // maxAge가 session 유지보다 선행하기 때문에
      // 서버의 쿠키 형태로 남아서 서버 입장에서 살아남아 있으니까
      // 다시 주워다가 브라우저가 sessionId 라는거 보여주고
      // 서버가 남아있네 하고 데이터 다시 가져오는 것임.
    },
  }),
);

// bodyParser는 구식이라 안써도 됨
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const mainRouter = require('./routes');
const userRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const dbRouter = require('./routes/db');
const dbBoardRouter = require('./routes/dbBoard');
const cookieRouter = require('./routes/cookie');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

// Router 걸려있는거 보면 얼마나 규모있는 서비스인지 알 수 있다.

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/board', boardRouter);
app.use('/db', dbRouter);
app.use('/dbBoard', dbBoardRouter);
app.use('/cookie', cookieRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

// 매개변수 무조건 4개 써주어야 작동이 됨
// 인자가 4개일 때만 에러를 받을 수 있기 때문
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message);
});

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 실행 중입니다!`);
});

// ex_mongo.js 실습 활용한 것으로 Async / Await 사용하기
// try catch 문으로 에러 잡아내기
const { MongoClient, ServerApiVersion } = require('mongodb');
const { clearConfigCache } = require('prettier');

const uri =
  'mongodb+srv://sangah:ghdtkadl!1@cluster0.zwzcput.mongodb.net/?retryWrites=true&w=majority';
// 비밀번호 꺽쇠 사용하면 안됨
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function main() {
  try {
    await client.connect();

    const member = client.db('kdt5').collection('member');

    await member.deleteMany({});
    await member.insertMany([
      { name: '신상아', age: 24 },
      { name: '이효석', age: 100 },
      { name: '김호준', age: 29 },
      { name: '구슬기', age: 30 },
    ]);
    await member.insertOne({ name: '이효석', age: 100 });
    await member.deleteOne({ name: '신상아' });
    await member.updateOne(
      { name: '이효석' },
      { $set: { name: '신상아', age: 24 } },
    );
    const findCursor = member.find({ age: { $gte: 25 } });
    const dataArr = await findCursor.toArray();
    console.log(dataArr);
  } catch (err) {
    console.error(err);
  }
}

main();

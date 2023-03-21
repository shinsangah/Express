const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
  'mongodb+srv://sangah:ghdtkadl!1@cluster0.zwzcput.mongodb.net/?retryWrites=true&w=majority';
// 비밀번호 꺽쇠 사용하면 안됨
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  const member = client.db('kdt5').collection('member');

  member.deleteMany({}, (deleteManyErr, deleteManyResult) => {
    if (deleteManyErr) throw deleteManyErr;
    member.insertMany(
      [
        { name: '홍성범', age: 31 },
        { name: '구슬기', age: 30 },
        { name: '김호준', age: 29 },
        { name: '구슬기', age: 30 },
      ],
      (insertManyErr, insertManyResult) => {
        if (insertManyErr) throw insertManyErr;
        member.insertOne(
          { name: '이효석', age: 39 },
          (insertOneErr, insertOneResult) => {
            if (insertOneErr) throw insertOneErr;
            member.deleteOne(
              { name: '김호준' },
              (deleteOneErr, deleteOneResult) => {
                if (deleteOneErr) throw deleteOneErr;

                member.updateOne(
                  { name: '이효석' },
                  { $set: { name: '김호준', age: 29 } },
                  (updateOneErr, updateOneResult) => {
                    if (updateOneErr) throw updateOneErr;
                    const oldCursor = member.find({ age: { $gte: 25 } });
                    oldCursor.toArray((toArrErr, toArrData) => {
                      if (toArrErr) throw toArrErr;
                      console.log(toArrData);
                    });
                  },
                );
              },
            );
          },
        );
      },
    );
  });
});

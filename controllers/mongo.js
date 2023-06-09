const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
  'mongodb+srv://sangah:ghdtkadl!1@cluster0.zwzcput.mongodb.net/?retryWrites=true&w=majority';
// 비밀번호 꺽쇠 사용하면 안됨
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function main() {
  await client.connect();
  const test = client.db('kdt5').collection('test');

  const deleteManyResult = await test.deleteMany({});
  if (!deleteManyResult.acknowledged) return '삭제 에러 발생';
  const insertManyResult = await test.insertMany([
    { name: 'pororo', age: 5 },
    { name: 'crong', age: 4 },
    { name: 'loopy', age: 6 },
  ]);
  if (!insertManyResult.acknowledged) return '데이터 삽입 에러 발생';

  const findCursor = test.find({ age: { $gte: 5 } });
  const dataArr = await findCursor.toArray();
  console.log(dataArr);
}
// try 구문 안에서 에러 어디선가 발생하면 거기서 구문 멈추게 되고,
// 발생한 에러를 자동으로 던져준다. catch 구문이 인자로써 받는 형태를 가지게 된다.

main();

// try catch 구분 - 이렇게 쓸 수 있다는 점만 알아뒤
// async function main() {
//   try {
//     await client.connect();
//     const test = client.db('kdt5').collection('test');

//     await test.deleteMany({});
//     await test.insertOne({ name: 'pororo', age: 5 });
//   } catch (err) {
//     console.error(err);
//   }
// try 구문 안에서 에러 어디선가 발생하면 거기서 구문 멈추게 되고,
// 발생한 에러를 자동으로 던져준다. catch 구문이 인자로써 받는 형태를 가지게 된다.
// }

// 에러 잡는 법 try catch 부분 추가. 중요한 부분.

// main();

// insertOne
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;

//     test.insertOne(
//       { name: '신상아', age: 31 },

//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       },
//     );
//   });
// });

// // insertMany
// // client.connect((err) => {
// //   const test = client.db('kdt5').collection('test');

// //   test.deleteMany({}, (deleteErr, deleteResult) => {
// //     if (deleteErr) throw deleteErr;

// //     test.insertMany(
// //       [
// //         { name: '신상아', age: 31 },
// //         { name: '어쩌구', age: 21 },
// //         { name: '저쩌구', age: 11 },
// //       ],
// //       (insertErr, insertResult) => {
// //         if (insertErr) throw insertErr;
// //         console.log(insertResult);
// //       },
// //     );
// //   });
// // });

// // deleteMany 쿼리
// // client.connect((err) => {
// //   const test = client.db('kdt5').collection('test');

// //   test.deleteMany({}, (deleteErr, deleteResult) => {
// //     if (deleteErr) throw deleteErr;

// //     test.insertMany(
// //       [
// //         { name: '신상아', age: 31 },
// //         { name: '어쩌구', age: 21 },
// //         { name: '저쩌구', age: 11 },
// //       ],
// //       (insertErr, insertResult) => {
// //         if (insertErr) throw insertErr;
// //         console.log(insertResult);

// //         test.deleteMany(
// //           { age: { $gte: 5 } },
// //           (deleteManyErr, deleteManyResult) => {
// //             if (deleteManyErr) throw deleteManyErr;
// //             console.log(deleteManyResult);
// //           },
// //         );

// //         // client.close();
// //       },
// //     );
// //   });
// // });

// // update 쿼리
// // client.connect((err) => {
// //   const test = client.db('kdt5').collection('test');

// //   test.deleteMany({}, (deleteErr, deleteResult) => {
// //     if (deleteErr) throw deleteErr;

// //     test.insertMany(
// //       [
// //         { name: '신상아', age: 31 },
// //         { name: '어쩌구', age: 21 },
// //         { name: '저쩌구', age: 11 },
// //       ],
// //       (insertErr, insertResult) => {
// //         if (insertErr) throw insertErr;
// //         console.log(insertResult);

// //         test.updateOne(
// //           { name: '어쩌구' },
// //           { $set: { name: '서강준' } },
// //           (updateErr, updateResult) => {
// //             if (updateErr) throw updateErr;
// //             console.log(updateResult);
// //           },
// //         );
// //         // client.close();
// //       },
// //     );
// //   });
// // });

// // update Many 쿼리
// // client.connect((err) => {
// //   const test = client.db('kdt5').collection('test');

// //   test.deleteMany({}, (deleteErr, deleteResult) => {
// //     if (deleteErr) throw deleteErr;

// //     test.insertMany(
// //       [
// //         { name: '신상아', age: 31 },
// //         { name: '어쩌구', age: 21 },
// //         { name: '저쩌구', age: 11 },
// //       ],
// //       (insertErr, insertResult) => {
// //         if (insertErr) throw insertErr;
// //         console.log(insertResult);

// //         test.updateMany(
// //           { age: { $gte: 11 } },
// //           { $set: { name: '11살 이상인 천재들' } },
// //           (updateErr, updateResult) => {
// //             if (updateErr) throw updateErr;
// //             console.log(updateResult);
// //           },
// //         );
// //         // client.close();
// //       },
// //     );
// //   });
// // });

// // find 쿼리
// // client.connect((err) => {
// // const test = client.db('kdt5').collection('test');

// // test.deleteMany({}, (deleteErr, deleteResult) => {
// //   if (deleteErr) throw deleteErr;

// //   test.insertMany(
// //     [
// //       { name: '신상아', age: 31 },
// //       { name: '어쩌구', age: 21 },
// //       { name: '저쩌구', age: 11 },
// //     ],
// //     (insertErr, insertResult) => {
// //       if (insertErr) throw insertErr;
// //       console.log(insertResult);

// //       test.findOne({ name: '저쩌구' }, (findErr, findData) => {
// //         if (findErr) throw findErr;
// //         console.log(findData);
// //       });
// // client.close();
// //       },
// //     );
// //   });
// // });

// // find many는 없고, find1 은 있다. 하나 찾을 때는 find1, 여러개는 find 임.

// // find Cursor
// // client.connect((err) => {
// //   const test = client.db('kdt5').collection('test');

// //   test.deleteMany({}, (deleteErr, deleteResult) => {
// //     if (deleteErr) throw deleteErr;

// //     test.insertMany(
// //       [
// //         { name: '신상아', age: 31 },
// //         { name: '어쩌구', age: 21 },
// //         { name: '저쩌구', age: 11 },
// //       ],
// //       (insertErr, insertResult) => {
// //         if (insertErr) throw insertErr;
// //         console.log(insertResult);

// //         // const findCursor = test.find({ name: '어쩌구' });
// //         const findCursor = test.find({}); // SELECT ALL

// //         console.log(findCursor);
// //         // 원하는 데이터를 찾아주는 것이 아니라, 해당 데이터가 있는 위치 정보를 가르키는 cursor를 리턴
// //         findCursor.toArray((toArrErr, toArrData) => {
// //           if (toArrErr) throw toArrErr;
// //           console.log(toArrData);
// //         });

// //         // client.close();
// //       },
// //     );
// //   });
// // });

// // 배열에 담긴 객체값으로 리턴함
// // [
// //   {
// //     _id: new ObjectId("64190d6b86cc20f7c2d02fcb"),
// //     name: '어쩌구',
// //     age: 21
// //   }
// // ]

// // $set: {}
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;

//     test.insertMany(
//       [
//         { name: '신상아', age: 31 },
//         { name: '어쩌구', age: 21 },
//         { name: '저쩌구', age: 11 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         // const findCursor = test.find({ name: '어쩌구' });
//         const findCursor = test.find({}); // SELECT ALL

//         console.log(findCursor);
//         // 원하는 데이터를 찾아주는 것이 아니라, 해당 데이터가 있는 위치 정보를 가르키는 cursor를 리턴
//         findCursor.toArray((toArrErr, toArrData) => {
//           if (toArrErr) throw toArrErr;
//           console.log(toArrData);
//         });

//         // client.close();
//       },
//     );
//   });
// });

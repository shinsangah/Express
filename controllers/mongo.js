// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri =
//   'mongodb+srv://sangah:ghdtkadl!1@cluster0.zwzcput.mongodb.net/?retryWrites=true&w=majority';
// // 비밀번호 꺽쇠 사용하면 안됨
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
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

// //insertOne
// // client.connect((err) => {
// //   const test = client.db('kdt5').collection('test');

// //   test.deleteMany({}, (deleteErr, deleteResult) => {
// //     if (deleteErr) throw deleteErr;

// //     test.insertOne(
// //       { name: '신상아',
// //        age: 31 },

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

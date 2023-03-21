const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(...arr); // 1 2 3 4 5 6 7

const obj = {
  name: '신상아',
  status: '감기',
};

console.log(obj); // { name: '신상아', status: '감기' }
console.log({ ...obj }); // { name: '신상아', status: '감기' }

const sangahData = {
  name: '신상아',
  age: 31,
};

const sangahInfo = {
  nickName: 'genius',
  status: '콧물',
};

// const sangah = {
//   sangahData,
//   sangahInfo,
// };
// {
//   sangahData: { name: '신상아', age: 31 },
//   sangahInfo: { nickName: 'genius', status: '콧물' }
// }

const sangah = {
  ...sangahData,
  ...sangahInfo,
};
// { name: '신상아', age: 31, nickName: 'genius', status: '콧물' }

console.log(sangah);

const arr1 = [1, 2, 3];
const arr2 = ['4', '5', '6'];

const merge = [...arr1, ...arr2];

console.log(merge);
// [ 1, 2, 3, '4', '5', '6' ]

const str = 'test';
console.log([...str]); // [ 't', 'e', 's', 't' ]

const sangah2 = {
  name: '신상아',
  gender: 'F',
  nickName: 'computer genius',
  email: 'kr.sangah@gmail.com',
};

// 전개연산자를 나머지연산자로 활용하는 방법

const { name, ...restInfo } = sangah2;
console.log(name, restInfo);
// 신상아 {
//   gender: 'F',
//   nickName: 'computer genius',
//   email: 'kr.sangah@gmail.com'
// }

const arr3 = [1, 2, 3, 4, 5, 6, 7];

const [first, ...rest] = arr3;
console.log(arr3);
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]

function spread(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}
// 1
// 2
// [ 3, 4, 5, 6, 7, 8 ]
spread(1, 2, 3, 4, 5, 6, 7, 8);
// 첫번째, 두번재만 하고 나머지는 그냥 출력
// 전개연산자 시간복잡도 높은 편이라 막 쓰면 안됨

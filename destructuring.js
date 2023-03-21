// 구조 분해 할당 문법

// 배열 구조 분해 전

// const arr = [1, 2, 3];
// const one = arr[0]; // 1번째
// const two = arr[1]; // 2번째
// const three = arr[2]; // 3번째

// console.log(one, two, three); // 1, 2, 3

// 배열 구조 분해 사용

// const [deOne, deTwo, deThree] = arr;

// console.log(deOne, deTwo, deThree); // 1, 2, 3

// 날짜

// const today = new Date();
// console.log(today);

// const formatDay = today.toISOString().substring(0, 10);
// 0번째부터 10번째까지 잘라주세요.
// console.log(formatDay);
// 2023-03-20

// const todayArr = formatDay.split('-');
// console.log(todayArr);
// [ '2023', '03', '20' ]

// const [year, month, day] = formatDay.split('-');

// console.log(year, month, day);
// 2023 03 20

// 객체 구조 분해 할당 전
const obj = { firstName: '상아', lastName: '신' };

// const firstName = obj.firstName;
// const lastName = obj.lastName;

// console.log(lastName, firstName); // 신 상아

const { firstName, lastName } = obj;

console.log(firstName, lastName); // 상아 신

const person = {
  name: 'Shin',
  address: {
    zipCode: '03068',
    city: 'Seoul',
  },
};

const {
  address: { city, zipCode },
} = person;
// address는 그냥 객체를 가리키기 위한 도구

console.log(zipCode);
console.log(city);

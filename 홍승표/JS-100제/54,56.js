//
//54
//todo 연속되는 수
// 은주는 놀이공원 아르바이트를 하고 있다. 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다. 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다.
// 그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.
//* 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

const input = prompt('정수를 공백으로 구분하여 입력').split(' ');
// const input = [5, 4, 1, 6, 2];

let count = 0;
const sortInput = input.sort((a, b) => a - b);
for (let i = 0; i < sortInput.length - 1; i++) {
  if (parseInt(sortInput[i]) + 1 !== parseInt(sortInput[i + 1])) {
    count++;
    break;
  }
}

if (count !== 0) {
  console.log('NO');
} else {
  console.log('YES');
}

// 입력1
// 1 2 3 4 5
// 출력1
// YES

// 입력2
// 1 4 2 6 3
// 출력2
// NO

//? 왜 Number.MAX_SAFE_INTEGER 를 배열에 넣으면 'Fatal JavaScript invalid size error' 에러가 뜨지?
//? 유효한 숫자까지만 넣은건데 배열의 최대 크기에는 한계가 있나?

//
//
//56
//todo 객체의 함수 응용
//*다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

// let min = Number.MAX_SAFE_INTEGER;
// let nation = '';
// let index = 0;
// let pivotNation = '';
// let pivotWidth = 0;

// let nationWidth = {
//   korea: 220877,
//   Rusia: 17098242,
//   China: 9596961,
//   France: 543965,
//   Japan: 377915,
//   England: 242900,
// };

// for (let [key, value] of Object.entries(nationWidth)) {
//   if (index === 0) {
//     pivotNation = key;
//     pivotWidth = value;
//     index += 1;
//     continue;
//   }
//   let diff = Math.abs(pivotWidth - value);
//   if (min > diff) {
//     min = diff;
//     nation = key;
//   }
// }

// console.log(nation + ' ' + min);

// 데이터
// nationWidth = {
//     'korea': 220877,
//      'Rusia': 17098242,
//      'China': 9596961,
//      'France': 543965,
//      'Japan': 377915,
//      'England' : 242900,
// }

// 출력
// England 22023

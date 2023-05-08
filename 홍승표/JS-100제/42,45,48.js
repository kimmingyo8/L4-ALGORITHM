//
//42
// todo 2020년
// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
//* 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.
// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// **제한 조건**
// 2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다.
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
//
// let inputA = prompt('월을 입력하세요');
// let inputB = prompt('일을 입력하세요');
// let date = new Date(`2020-${inputA}-${inputB}`);
// let day = {
//   0: 'SUN',
//   1: 'MON',
//   2: 'TUE',
//   3: 'WED',
//   4: 'THU',
//   5: 'FRI',
//   6: 'SAT',
// };
// console.log(day[date.getDay()]);

//
//45
// todo getTime()함수 사용하기
// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.
//* 이를 이용하여 현재 연도(2019)를 출력해보세요.

// let date = new Date();
// let now = date.getTime();
// now = Math.floor(now / (3600 * 24 * 365 * 1000)) + 1970;

// console.log(now);

//
//48
//todo # 대소문자 바꿔서 출력하기
//*문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

let input = prompt('문자열을 입력해주세요');
let arr = [];

for (let a of input) {
  if (a.charCodeAt() > 64 && a.charCodeAt() < 91) {
    arr.push(a.toLowerCase());
  } else if (a.charCodeAt() > 96 && a.charCodeAt() < 123) {
    arr.push(a.toUpperCase());
  }
}

console.log(arr.join(''));

// 입출력;
// 입력: AAABBBcccddd;
// 출력: aaabbbCCCDDD;

/* [ 자바스크립트 아스키코드 ]
- 대문자 A~Z : 65~90
- 소문자 a~z : 97~122
- 문자열.charCodeAt(index) : 문자열에서 index번째 문자의 아스키코드 값을 반환. 한 글자인 경우 index값 입력 안해도 됨
- String.fromCharCode(아스키코드값) : 아스키코드 값에 해당하는 문자를 반환함 */

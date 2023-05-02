// 26번

// let input = window.prompt('행성의 이름을 입력해 주세요');
// let planetObj = {
//   수성: 'Mercury',
//   금성: 'Venus',
//   지구: 'Earth',
//   화성: 'Mars',
//   목성: 'Jupiter',
//   토성: 'Saturn',
//   천왕성: 'Uranus',
//   해왕성: 'Neptune',
// };
// (function () {
//   if (!planetObj[`${input}`]) {
//     console.log('태양계의 행성이 아닙니다.');
//   } else {
//     console.log(planetObj[`${input}`]);
//   }
// })();

//
// 27번

// let nameArr = window
//   .prompt('학생들의 이름을 입력해주세요.(구분: 공백)')
//   .split(' ');
// let scoreArr = window
//   .prompt('학생들의 점수를 이름을 입력한 순서대로 입력해주세요(구분: 공백)')
//   .split(' ');
// let inputLength = nameArr.length;
// let scoreObj = {};
// for (let i = 0; i < inputLength; i++) {
//   scoreObj[`${nameArr[i]}`] = scoreArr[i];
// }
// console.log(scoreObj);

//
// 28번

// let inputArr = window.prompt('문자열을 입력해주세요').split('');
// for (let i = 0; i < inputArr.length - 1; i++) {
//   console.log(`${inputArr[i]} ${inputArr[i + 1]}`);
// }

//
// 29번

// let input = window.prompt('알파벳을 한 글자 입력하세요');
// if (input.charCodeAt() >= 65 && input.charCodeAt() <= 90) {
//   console.log('YES');
// } else if (input.charCodeAt() >= 97 && input.charCodeAt() <= 122) {
//   console.log('NO');
// } else {
//   console.log('입력된 값이 알파벳이 아닙니다.');
// }

// toUpperCase() 를 사용하는 방법도 있다.
// let input = window.prompt('알파벳을 한 글자 입력하세요');
// if (input === input.toUpperCase()) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

/* [ 자바스크립트 아스키코드 ]
- 대문자 A~Z : 65~90
- 소문자 a~z : 97~122
- 문자열.charCodeAt(index) : 문자열에서 index번째 문자의 아스키코드 값을 반환. 한 글자인 경우 index값 입력 안해도 됨
- String.fromCharCode(아스키코드값) : 아스키코드 값에 해당하는 문자를 반환함 */

//
//30번

//1) indexOf를 활용하는 방법
// let str = window.prompt('문자열을 입력해주세요.');
// let findStr = window.prompt('찾을 단어를 입력해주세요');
// console.log(str.indexOf(findStr));

//2) 2중 for문 사용하는 방법
// const str = window.prompt('문자열을 입력해주세요.');
// const findStr = window.prompt('찾을 단어를 입력해주세요');
// const leng = findStr.length;

// let checkStr = '';
//pineapple is yummy
//apple

//aaapap
//pap

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === findStr[0]) {
//     checkStr += str[i];
//     for (let j = 1; j < findStr.length; j++) {
//       checkStr += str[i + j];
//     }
//     if (checkStr === findStr) {
//       console.log(i);
//       checkStr = '';
//     }
//   }
// }

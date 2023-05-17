//
//44
//todo 각 자리수의 합

// *사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

// *예를들어
// 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.

// let input = prompt('양의 정수를 입력해주세요')
//   .split('')
//   .map((el) => parseInt(el))
//   .reduce((prev, curr) => {
//     return prev + curr;
//   }, 0);

// console.log(input);

//
//46
//todo 각 자리수의 합 2
//*1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

// let input = '1234567891011121314151617181920';
// let answer = input
//   .split('')
//   .map((el) => parseInt(el))
//   .reduce((prev, curr) => {
//     return prev + curr;
//   }, 0);

// console.log(answer);

// 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고
// 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

//? 답지 풀이
// let arr = [];
// let sum = 0;

// for (let i = 0; i < 20; i++) {
//   arr[i] = i + 1;
// }

// arr.forEach((n) => {
//   while (n !== 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
// });

// console.log(sum);

//
//49
//todo 최댓값 구하기
//* 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

// let input = prompt('순서가 없는 10개의 숫자를 공백으로 구분하여 입력하세요')
//   .split(' ')
//   .map((el) => parseInt(el));

// console.log(Math.max(...input));

// 입출력
// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

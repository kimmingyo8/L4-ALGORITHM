//
//52
//todo quick sort
//* 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     // if(/*빈칸을 채워주세요*/){
//     if (pivot > arr[i]) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(pivot, quickSort(right));
// }

// const array = prompt('배열을 입력하세요')
//   .split(' ')
//   .map((n) => parseInt(n, 10));

// console.log(quickSort(array));

//
//53
//todo 괄호 문자열
//? 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자.
// (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)
// **입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**

// let arr = [];
// let count = 0;

// function checkFunc(array) {
//   //괄호의 쌍이 맞는지 체크
//   for (let a of array) {
//     if (a === '(') {
//       count += 1;
//     } else count -= 1;
//   }

//   if (count !== 0) return false;

//   //괄호의 순서가 알맞는지 체크
//   for (let i in array) {
//     if (array[i] === '(') {
//       arr.push('(');
//     }

//     if (array[i] === ')') {
//       if (arr.length === 0) {
//         return false;
//       }
//       arr.pop();
//     }
//   }
//   return true;
// }

// let inputArr = prompt('괄호문자열을 입력해주세요').split('');

// if (checkFunc(inputArr)) {
//   console.log('YES');
// } else console.log('NO');

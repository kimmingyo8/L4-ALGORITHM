//31
// 자바스크립트 자료형의 복잡도
// 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

// 1)  arr[i]
// 2)  arr.push(5)
// 3)  arr.slice()
// 4)  arr.pop()
// 5)  arr.includes(5)

//3번, 5번 -> O(n)

//ref)
// Array.prototype.sort() : 일반적으로 O(n log n) 시간이 소요됩니다.
// Array.prototype.indexOf() : 배열의 크기에 비례하여 O(n) 시간이 소요됩니다.
// Array.prototype.push() : 상수 시간( O(1) )이 소요됩니다.
// Array.prototype.pop() : 상수 시간( O(1) )이 소요됩니다.
// Array.prototype.shift() : O(n) 시간이 소요됩니다.
// Array.prototype.unshift() : O(n) 시간이 소요됩니다.
// Array.prototype.splice() : O(n) 시간이 소요됩니다.
// String.prototype.indexOf() : 문자열의 길이에 비례하여 O(n) 시간이 소요됩니다.
// String.prototype.slice() : 문자열의 길이에 비례하여 O(n) 시간이 소요됩니다.
// String.prototype.replace() : 문자열의 길이에 비례하여 O(n) 시간이 소요됩니다.
// Array.prototype.includes() 함수는 배열에 특정 요소가 포함되어 있는지 여부를 확인하는 함수입니다. 이 함수의 시간 복잡도는 일반적으로 O(n)입니다.
// Array.prototype.forEach(): O(n) 시간이 소요됩니다. 배열의 모든 요소에 대해 한 번씩 함수를 호출하기 때문입니다.
// Array.prototype.map(): O(n) 시간이 소요됩니다. 배열의 모든 요소를 탐색하고 각 요소에 대해 새 값을 생성하기 때문입니다.
// Array.prototype.filter(): O(n) 시간이 소요됩니다. 배열의 모든 요소를 탐색하고 조건이 참인 요소를 찾기 때문입니다.
// Array.prototype.reduce(): O(n) 시간이 소요됩니다. 배열의 모든 요소를 탐색하고 축적값을 계산하기 때문입니다.
// Array.prototype.sort(): 일반적으로 O(n log n) 시간이 소요됩니다. 퀵 정렬 알고리즘이 사용되며, 최악의 경우 O(n^2) 시간이 소요될 수 있습니다.
// Object.keys(): 객체의 속성 수에 비례하여 O(n) 시간이 소요됩니다.
// Object.values(): 객체의 속성 수에 비례하여 O(n) 시간이 소요됩니다.
// Object.entries(): 객체의 속성 수에 비례하여 O(n) 시간이 소요됩니다.

//
//32
// 문자열 만들기
// 취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다.
// 혜림이를 위해 **문자열을 입력받으면 단어의 갯수를 출력하는 프로그램**을 작성해 주세요.

// let input = prompt("문자열을 입력하세요.")
// const answer = input.split(" ").length;
// console.log(answer);

//
//33
/* 거꾸로 출력하기
한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오. */

//reverse() 내장함수 사용
// let input = prompt("여러개의 숫자를 입력하시오( 구분: 공백 )");
// let inputArr = input.split(" ").reverse();
// const answer = inputArr.join(" ");
// console.log(answer);

// //for문 사용
// let input = prompt('여러개의 숫자를 입력하시오( 구분: 공백 )');
// let inputArr = input.split(' ');
// let str = '';
// for (const a of inputArr) {
//   str = a + ' ' + str;
// }
// const answer = str;
// console.log(answer);
//1 2 3 4 5 을 입력값으로 받았을 때
// inputArr = [1, 2, 3, 4, 5];
// str = '';
// for of 문에서
// a가 1일 때
// str = 1 + ' ' + '';
// str = 1;

// a가 2일 때
// str = 2 + ' ' + 1;
// str = 2 1;

// a가 3일 때
// str = 3 + ' ' + '2 1';

// 중략

// a가 5일 때
// str = 5 + ' ' + '4 3 2 1'
// str = '5 4 3 2 1';

//
//34
// sort 구현하기
// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.
// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// let input = prompt('반 친구들의 키를 입력하세요.( 구분: 공백 )');
// let inputArr = input.split(' ').map((el) => parseInt(el));
// let flag = 0;
// for (let i = 0; i < inputArr.length - 1; i++) {
//   if (inputArr[i] > inputArr[i + 1]) flag++;
//   if(flag===1) break;
// }
// if (!flag) {
//   console.log('YES');
// } else console.log('NO');

//
//35
// Factory 함수 사용하기
// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.
// <pass>에 코드를 작성하여 two함수를 완성하세요.

// function one(n) {
//   function two(m) {
//     return Math.pow(m, n);
//   }
//   return two;
// }

// const a = one(2);
// const b = one(3);
// const c = one(4);

// console.log(a(10)); 100
// console.log(b(10)); 1000
// console.log(c(10)); 10000

//
//36
// 구구단 출력하기
// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// let input = parseInt(prompt("1~9까지의 숫자 중 하나를 입력하세요"));
// let arr = [];
// for (let i = 1; i < 10; i++){
//     arr.push(input*i);
// }
// const answer = arr.join(" ");
// console.log(answer);

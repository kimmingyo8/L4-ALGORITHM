//
//50
// todo 버블정렬 구현하기
// 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
// [https://img.scoop.it/omRChIeVtQY1Nodjul8eODl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9](https://img.scoop.it/omRChIeVtQY1Nodjul8eODl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9)
// **아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다

// function bubble(arr) {
//   let result = arr.slice();

//   for (let i = 0; i < result.length - 1; i++) {
//     // for (/*빈칸을 채워주세요.*/) {
//     for (let j = 0; j < result.length - 1; j++) {
//       if (result[j] > result[j + 1]) {
//         /* 빈칸을 채워주세요. */
//         [result[j], result[j + 1]] = [result[j + 1], result[j]];
//       }
//     }
//   }
//   return result;
// }

// const items = prompt('입력해주세요.')
//   .split(' ')
//   .map((n) => {
//     return parseInt(n, 10);
//   });

// console.log(bubble(items));

//
//51
// todo merge sort를 만들어보자
// 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.
// 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
// 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
// 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
// 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
// 출처 : 위키피디아
//** */ 다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];

//   //   while (/*빈칸을 채워주세요*/ && /*빈칸을 채워주세요*/){
//   //       if (/*빈칸을 채워주세요*/) {
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   while (left.length) {
//     /*빈칸을 채워주세요*/
//     result.push(left.shift());
//   }
//   while (right.length) {
//     /*빈칸을 채워주세요*/
//     result.push(right.shift());
//   }

//   return result;
// }

// const array = prompt('배열을 입력하세요')
//   .split(' ')
//   .map((n) => parseInt(n, 10));

// console.log(mergeSort(array));

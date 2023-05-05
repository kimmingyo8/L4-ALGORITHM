//
//41
//todo 소수판별
//* 숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

// let input = parseInt(prompt('숫자를 입력해주세요'));
// let flag = 0;
// for (let i = 2; i <= Math.sqrt(input); i++) {
//   if (input % i === 0) {
//     flag++;
//     break;
//   }
// }
// flag === 0 ? console.log('YES') : console.log('NO');

//
//43
// todo 10진수를 2진수로
// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?
// **사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.**

// let input = parseInt(prompt('숫자를 입력해주세요'));
// let arr = [];
// while (parseInt(input / 2) > 0) {
//   let mod = input % 2;
//   arr.unshift(mod);
//   input = parseInt(input / 2);
// }
// arr.unshift(parseInt(input));
// console.log(arr.join(''));

//
//47
// todo set 자료형의 응용
// 바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다.
// **중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.**
// *아래 주어진 데이터들로부터 중복을 제거하여 **실제 접수 인원을 출력**해 주세요.

// const people = {
//   이호준: '01050442903',
//   이호상: '01051442904',
//   이준호: '01050342904',
//   이호준: '01050442903',
//   이준: '01050412904',
//   이호: '01050443904',
//   이호준: '01050442903',
// };
// const objKeyArr = Object.keys(people);
// const peopleSet = new Set(objKeyArr);
// console.log(peopleSet.size);

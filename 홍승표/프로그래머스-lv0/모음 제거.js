//영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
//문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

//정규식을 사용한 풀이
function solution(my_string) {
  var answer = '';
  answer = my_string.replaceAll(/[a,e,i,o,u]/g, '');
  return answer;
}

//정규식을 쓰지 않은 풀이
function solution(my_string) {
  var answer = '';
  let arr = ['a', 'e', 'i', 'o', 'u'];
  let test = my_string.split('').filter((el) => {
    return arr.indexOf(el) === -1;
  });
  answer = test.join('');
  return answer;
}

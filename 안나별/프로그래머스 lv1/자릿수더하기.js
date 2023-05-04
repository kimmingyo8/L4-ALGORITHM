// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n)
{
    const str = n.toString(); // 문자열로 변환
    const sum = str.split(''); // 배열로 변환
    return sum.reduce((a,c) => a + parseInt(c),0) // 인덱스값 더해 나가기 (value값이 문자열이기 때문에 parseInt사용해 정수변환)

}
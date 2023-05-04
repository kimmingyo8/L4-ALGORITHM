function solution(babbling) {
  let isAlpha;
  let answer = 0;
  for (let str of babbling) {
    const arr = ['aya', 'ye', 'woo', 'ma'];
    for (let ele of arr) {
      if (str.includes(ele)) {
        str = str.split(ele).join(' ');
      }
    }
    isAlpha = str
      .split('')
      .some((v) => v.charCodeAt() >= 97 && v.charCodeAt() <= 122);
    if (!isAlpha) answer++;
  }
  return answer;
}

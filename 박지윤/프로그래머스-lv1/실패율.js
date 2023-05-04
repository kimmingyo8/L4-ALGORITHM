function solution(N, stages) {
  const answer = [];
  let prev = 0;
  let denom = stages.length;
  for (let i = 1; i <= N; i++) {
    let cnt = 0;
    stages.map((v) => {
      if (v === i) {
        cnt++;
      }
    });
    if (cnt === 0) {
      answer.push(0);
      continue;
    }
    answer.push(cnt / denom);
    prev = cnt;
    denom = denom - prev;
  }
  console.log(answer);
  let sortedArr = [...answer];
  sortedArr.sort((a, b) => b - a);
  sortedArr = sortedArr.map((v, i) => {
    const num = answer.indexOf(v);
    answer[num] = '*';
    return num + 1;
  });
  return sortedArr;
}

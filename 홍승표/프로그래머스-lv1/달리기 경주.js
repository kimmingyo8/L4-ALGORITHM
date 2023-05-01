function solution(players, callings) {
  var answer = [];

  let _players = players;
  let _callings = callings;
  let playerLength = _players.length;

  let findIdx = new Map();
  for (let i = 0; i < playerLength; i++) {
    findIdx.set(_players[i], i);
  }

  _callings.forEach((el) => {
    let idx = findIdx.get(el);
    findIdx.set(el, idx - 1);
    findIdx.set(_players[idx - 1], idx);
    [_players[idx], _players[idx - 1]] = [_players[idx - 1], _players[idx]];
  });

  answer = _players;
  return answer;
}

//프로그래머스 Lv1

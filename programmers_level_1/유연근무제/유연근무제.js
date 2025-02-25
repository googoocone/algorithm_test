function solution(schedules, timelogs, startday) {
  var answer = 0;

  // 주말을 빼버리고, 시간에 60을 곱한뒤 분과 더해서 10차이가 나는지 안나는지 확인하자
  for (let a = 0; a < schedules.length; a++) {
    let d = 0;
    for (let i = 0; i < 7; i++) {
      let day = ((startday + i - 1) % 7) + 1;
      if (day === 6 || day === 7) continue;

      let time = Math.floor(timelogs[a][i] / 100);
      let minute = timelogs[a][i] % 100;

      let s_time = Math.floor(schedules[a] / 100);
      let s_minute = schedules[a] % 100;

      if (time * 60 + minute - (s_time * 60 + s_minute) <= 10) {
        d++;
      }
    }
    if (d == 5) {
      answer++;
    }
  }

  return answer;
}

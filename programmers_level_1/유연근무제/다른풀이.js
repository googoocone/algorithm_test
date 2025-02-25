function solution(schedules, timelogs, startday) {
  return timelogs.reduce((acc, cur, index) => {
    return cur.every(
      (t, i) =>
        ((startday + i - 1) % 7) + 1 > 5 ||
        schedules[index] + (schedules[index] % 100 < 50 ? 10 : 50) >= t
    )
      ? acc + 1
      : acc;
  }, 0);
}

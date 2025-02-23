function solution(n, w, num) {
  var answer = 0;
  var res = 1;
  //이번에는 문제를 구성하면서 풀지말고 단순히 논리적으로 풀어보자.
  //변수는 공이 쌓이는 방향이다 짝수 행일 때는 왼 -> 오, 홀수는 반대
  //마지막 층에서 공이 겹치냐 안겹치냐에 따라 꺼내야하는 박스의 갯수가 달라진다.

  //최상위층을 구한다
  const n_floor = Math.ceil(n / w);
  //목표한 박스가 어느 층에 속하는지 구한다.
  const target_floor = Math.ceil(num / w);

  //최상위층에 몇개의 박스가 남았는지 구한다. 0이라면 꽉차있다고 생각한다.
  let n_floor_remain_box = n % w || n;
  //타겟층에 몇개의 박스가 남았는지 구한다. 0이라면 꽉차있다고 생각한다.
  let target_floor_remain_box = num % w || num;

  if (
    //홀짝 층에 따라서 박스의 방향이 다르기 때문에 같은 방향이라면 타겟층의 남은 박스양이 최상위 층 박스의 남은 갯수보다 많다면
    //박스를 하나 덜 빼도 되기 땜에 res 에 1을 빼준다.
    n_floor % 2 === target_floor % 2 &&
    n_floor_remain_box < target_floor_remain_box
  ) {
    res -= 1;
  }
  if (
    //방향이 서로 다르면 두개의 층에 남은 박스가 한 줄에 놓을 수 있는 박스의 양보다 적거나 같다면 박스를 하나 덜 빼도 되기 때문에...
    n_floor % 2 !== target_floor % 2 &&
    n_floor_remain_box + target_floor_remain_box <= w
  ) {
    res -= 1;
  }

  return n_floor - target_floor + res;
}

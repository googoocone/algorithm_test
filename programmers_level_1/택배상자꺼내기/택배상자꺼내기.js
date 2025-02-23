function solution(n, w, num) {
  var answer = 0;
  var number = 0;

  var max_x = Math.ceil(n / w + 1);
  var location_x = 0;
  var location_y = 0;

  //w와 n값의 범위가 정해졌기 때문에 일단 그에 맞춰서 2차원 행렬을 만든다.
  //상자가 들어가면 1 아니면 0 그리고 num의 위치는 숫자 3으로 표시할 것이다.
  let Matrix = Array.from({ length: max_x }, () => Array(w).fill(0));

  for (let x = 0; x < max_x; x++) {
    // 홀수면 왼 -> 오로 상자를 놓아야 하기 때문에
    if (x % 2 == 0) {
      for (let y = 0; y < w; y++) {
        //주어진 상자의 갯수를 모두 다 놓으면 for문을 끝내야 하기 때문
        if (number == n) {
          break;
        }
        number++;

        //상자를 놓으면서 행렬의 값을 1로 바꾼다.
        Matrix[x][y] = 1;

        //상자를 놓으면서 꺼내려는 상자의 번호와 일치하게 되면, 행과 열의 정보를 담느다.
        if (number == num) {
          location_x = x;
          location_y = y;
        }
      }
    } else {
      for (let y = w - 1; y >= 0; y--) {
        if (number == n) {
          break;
        }

        number++;

        Matrix[x][y] = 1;
        if (number == num) {
          location_x = x;
          location_y = y;
        }
      }
    }

    if (number == n) {
      break;
    }
  }

  //상자의 위치에서 한칸씩 올라가면서 꺼내야하는 상자의 갯수를 카운트한다.
  console.log(location_x, location_y);
  for (let a = location_x; a < max_x; a++) {
    if (Matrix[a][location_y] == 1) {
      answer++;
    } else {
      break;
    }
  }

  return answer;
}

function solution(n, w, num) {
  var answer = 0;
  var number = 0;

  var max_x = Math.ceil(n / w + 1);
  var location_x = 0;
  var location_y = 0;

  let Matrix = Array.from({ length: max_x }, () => Array(w).fill(0));

  for (let x = 0; x < max_x; x++) {
    if (x % 2 == 0) {
      for (let y = 0; y < w; y++) {
        if (number == n) {
          break;
        }

        number++;
        Matrix[x][y] = 1;
        if (number == num) {
          Matrix[x][y] = 3;
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
          Matrix[x][y] = 3;
          location_x = x;
          location_y = y;
        }
      }
    }

    if (number == n) {
      break;
    }
  }

  for (let a = location_x + 1; a < max_x; a++) {
    if (Matrix[a][location_y] == 1) {
      answer++;
    } else {
      break;
    }
  }

  return answer + 1;
}

let a = solution(22, 6, 8);
let b = solution(13, 3, 6);
console.log(a, b);

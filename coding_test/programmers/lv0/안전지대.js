// Lim, Jaedo a.k.a. OAO
// 30NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 제대로 풀 지는 못했으나, 우선 기록용으로 작성
function solution(board) {
  let answer = [...board];
  board.forEach((rowElement, row) => {
    rowElement.forEach((columnElement, column) => {
      const tmp = checkPlace(board, row, column);
      switch (tmp) {
        case 'vertex':
          answer = figureVertex(board, row, column);
          break;
        case 'side':
          answer = figureSide(board, row, column);
          break;
        case 'inner':
          answer = figureInner(board, row, column);
          break;
        case 'none':
          break;
        default:
          break;
      }
    });
  });

  console.log(answer);

  return answer.reduce((acc, cur) => {
    let tmp = acc;
    cur.forEach(e => {
      if (e === 0) tmp += 1;
    });
    return tmp;
  }, 0);
}

function checkPlace(board, row, column) {
  const finalIndex = board.length - 1;

  if (row === 0 && column === 0 && board[0][0] === 1) return 'vertex';
  if (row === 0 && column === finalIndex && board[0][finalIndex] === 1)
    return 'vertex';
  if (row === finalIndex && column === 0 && board[finalIndex][0] === 1)
    return 'vertex';
  if (
    row === finalIndex &&
    column === finalIndex &&
    board[finalIndex][finalIndex] === 1
  )
    return 'vertex';
  if (row === 0 && board[row][column] === 1) return 'side';
  if (row === finalIndex && board[row][column] === 1) return 'side';
  if (column === 0 && board[row][column] === 1) return 'side';
  if (column === finalIndex && board[row][column] === 1) return 'side';
  if (board[row][column] === 1) return 'inner';
  return 'none';
}

function figureInner(board, row, column) {
  const target = [...board];
  console.log(`Inner : ${row}, ${column}`);
  console.log(target);

  target[row - 1][column - 1] = 1;
  target[row - 1][column] = 1;
  target[row - 1][column + 1] = 1;
  target[row][column - 1] = 1;
  target[row][column + 1] = 1;
  target[row + 1][column - 1] = 1;
  target[row + 1][column] = 1;
  target[row + 1][column + 1] = 1;

  console.log(target);

  return target;
}

function figureSide(board, row, column) {
  const target = [...board];
  console.log(`side : ${row}, ${column}`);
  const finIndex = board.length - 1;

  if (row === 0) {
    target[row][column - 1] = 1;
    target[row][column + 1] = 1;
    target[row + 1][column - 1] = 1;
    target[row + 1][column] = 1;
    target[row + 1][column + 1] = 1;
  } else if (row === finIndex) {
    target[row - 1][column - 1] = 1;
    target[row - 1][column] = 1;
    target[row - 1][column + 1] = 1;
    target[row][column - 1] = 1;
    target[row][column + 1] = 1;
  } else if (column === 0) {
    target[row + 1][column] = 1;
    target[row + 1][column + 1] = 1;
    target[row][column + 1] = 1;
    target[row - 1][column] = 1;
    target[row - 1][column + 1] = 1;
  } else if (column === finIndex) {
    target[row - 1][column - 1] = 1;
    target[row - 1][column] = 1;
    target[row][column - 1] = 1;
    target[row + 1][column - 1] = 1;
    target[row + 1][column] = 1;
  }

  return target;
}

function figureVertex(board, row, column) {
  const target = [...board];
  console.log(`Vertex : ${row}, ${column}`);
  if (row === 0) {
    if (column === 0) {
      target[row][column + 1] = 1;
      target[row + 1][column] = 1;
      target[row + 1][column + 1] = 1;
    } else {
      target[row][column - 1] = 1;
      target[row + 1][column - 1] = 1;
      target[row + 1][column] = 1;
    }
  } else if (column === 0) {
    target[row][column + 1] = 1;
    target[row - 1][column] = 1;
    target[row - 1][column + 1] = 1;
  } else {
    target[row][column - 1] = 1;
    target[row - 1][column] = 1;
    target[row - 1][column - 1] = 1;
  }

  return target;
}

// Lim, Jaedo a.k.a. OAO
// 30NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 발상의 전환. 핵심이 되는 로직을 하드코딩 하기 보다는 좀 더 쉽게 처리할 수 있는 방법은 없는지 고민하였다.
function solution(board) {
    const targetArray = board.map((v) => [...v]);
    const finalIndex = board.length - 1;

    board.forEach((rowData, row) => {
        rowData.forEach((columnData, column) => {
            if (columnData === 1) {
                let index = decidePortion(row, column, finalIndex);
                index.forEach((e) => {
                    targetArray[e[0]][e[1]] = 1;
                });
            }
        });
    });

    return calResult(targetArray);
}

function decidePortion(row, column, finalIndex) {
    const portion = [
        [row - 1, column - 1],
        [row - 1, column],
        [row - 1, column + 1],
        [row, column - 1],
        [row, column + 1],
        [row + 1, column - 1],
        [row + 1, column],
        [row + 1, column + 1]
    ];
    const result = [];

    portion.forEach((e, i) => {
        if (e[0] >= 0 && e[0] <= finalIndex && e[1] >= 0 && e[1] <= finalIndex) result.push(e);
    });

    return result;
}

function calResult(array) {
    return array.reduce((result, cur) => {
        return cur.reduce((acc, data) => {
            if (data === 0) return acc + 1;
            return acc;
        }, result);
    }, 0);
};

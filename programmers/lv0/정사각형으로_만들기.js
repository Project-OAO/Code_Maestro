// Lim, Jaedo a.k.a. OAO
// 18NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 조금 복잡하게 푼 문제
function solution(arr) {
    const tmp = [...arr];
    const rowLength = arr.length;
    const columnLength = arr[0].length;
    const result = [];

    tmp.forEach((e) => {
    for (let i = 0; i < rowLength - columnLength; i += 1) {
        e.push(0);
    }
    });

    const inst = new Array(columnLength);
    inst.fill(0);

    for (let i = 0; i < columnLength - rowLength; i += 1) {
        tmp.push(inst)
    }

    return tmp;
}

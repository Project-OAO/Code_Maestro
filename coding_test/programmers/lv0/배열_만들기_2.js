// Lim, Jaedo a.k.a. OAO
// 23NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 원리는 간단하다. 2진수로 만들고, 그 2진수에서 1을 5로 바꾸기만 하면 된다.
// 풀이를 보니 크게 2가지로 갈린다.
// 위의 원리대로 풀거나, 전체 배열 만들고 정규표현식으로 0과 5만 있는 배열로 걸러내거나.

function solution(l, r) {
    const arr = [];
    for (let i = l.toString().length; i <= r.toString().length; i += 1) {
        arr.push(...addFive(i));
    }
    let answer = arr.filter((e) => e >= l && e <= r);
    return answer.length === 0 ? [-1] : answer;
}

function addFive(number) {
    const array = [];
    let binaryData = new Array(number - 1).fill(0);
    binaryData.unshift(1);
    array.push(binaryData.join(','));
    while (true) {
        let tmp = [...(parseInt(binaryData.join(''), 2) + 1).toString(2)];
        if([...tmp].length > number) break;
        binaryData = tmp;
        array.push(binaryData.toString(2));
    }
    return array.map((e) => parseInt(e.replaceAll('1', '5').replaceAll(',','')));
}

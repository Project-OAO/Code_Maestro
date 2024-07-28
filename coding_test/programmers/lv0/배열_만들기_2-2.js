// Lim, Jaedo a.k.a. OAO
// 23NOV2023 Thursday
// Conatct: ashgrayblue0@gmail.com

// 제너레이터 함수를 사용하는 방식도 존재했다. 이에 감명받아서 한번 구현해보고자 한다.
function* generate50() {
    let data = 1;

    while(true) {
        yield parseInt(data.toString(2) * 5);
        data += 1;
    }
}

function solution(l, r) {
    const answer = [];
    const generator = generate50();
    let i = 0;

    while(i < l) i = generator.next().value;
    while(i <= r) { answer.push(i); i = generator.next().value;};

    return answer.length ? answer : [-1];
}

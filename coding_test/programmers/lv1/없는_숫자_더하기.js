// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// Lv0처럼 마냥 간단하게는 풀 수 없다.
function solution(numbers) {
    let answer = 0;
    const data = new Array(10).fill(0);

    numbers.forEach((e) => data[e]++);

    for (let i = 0; i < 10; i++) {
        if (data[i] === 0) answer += i;
    }

    return answer;
}

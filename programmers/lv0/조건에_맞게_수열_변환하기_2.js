// Lim, Jaedo a.k.a. OAO
// 14NOV2023 Tuesday
// Contact: ashgrayblue0@gmail.com

function tmp(input) {
    if (input >= 50 && input % 2 == 0) return input / 2;
    else if (input <= 50 && input % 2 == 1) return input * 2 + 1;
    return input;
}

function solution(arr) {
    let prev = [...arr];
    let cur = [...arr];
    let answer = -1;

    let flag = true;

    while (flag) {
        answer += 1;

        prev = [...cur];

        cur = cur.map((e) => tmp(e));

        if(prev.toString() === cur.toString()) flag = false;
    }

    return answer;
}

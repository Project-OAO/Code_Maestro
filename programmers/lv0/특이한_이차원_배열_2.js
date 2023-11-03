// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 배열의 순환에 대한 문제
function solution(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i += 1) {
        for (let j = 0; j < length; j += 1) {
            if (arr[i][j] !== arr[j][i])
                return 0;
        }
    }

    return 1;
}

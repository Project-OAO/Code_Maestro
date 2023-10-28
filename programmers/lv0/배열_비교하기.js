// Lim, Jaedo a.k.a. OAO
// 29OCT2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 코드 재사용성을 높이려면 비교문을 함수로 빼도 된다.
function solution(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;

    if (len1 > len2) return 1;
    else if (len1 < len2) return -1;
    else {
        const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
        const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

        if (sum1 > sum2) return 1;
        else if (sum1 < sum2) return -1;
        return 0;
    }
}

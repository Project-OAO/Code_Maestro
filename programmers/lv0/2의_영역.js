// Lim, Jaedo a.k.a. OAO
// 13NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// index를 찾는 것을 생각해보면 쉽게 생각할 수 있다.
// 여기서 한 가지 발상이 떠오르는데, 문제가 여러개가 있다고 하면, 이 문제로 바꿔서 풀 수도 있지 않을까?
function solution(arr) {
    const tmp = [...arr];
    const startIndex = arr.indexOf(2);
    const lastIndex = arr.lastIndexOf(2);

    return startIndex === -1 ? [-1] : tmp.slice(startIndex, lastIndex+1);
}

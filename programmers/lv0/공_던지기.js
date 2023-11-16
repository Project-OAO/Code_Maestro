// Lim, Jaedo a.k.a. OAO
// 16NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 쉽게 한 문장으로 풀 수 있다.
// 코드는 가독성이 좋다는 전제 하에 짧을 수록 좋다.
// 그래야 에러도 적으니깐.
// 먼저 패턴을 분석하자.

function solution(numbers, k) {
    return numbers[(2 * (k-1)) % numbers.length];
}

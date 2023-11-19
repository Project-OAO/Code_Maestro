// Lim, Jaedo a.k.a. OAO
// 20NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 패턴을 아는게 제일 중요하다.
function solution(rank, attendance) {
    const mappedRank = rank.filter((e, i) => attendance[i]).sort((a, b) => a - b);
    return 10000 * rank.indexOf(mappedRank[0]) + 100 * rank.indexOf(mappedRank[1]) + rank.indexOf(mappedRank[2]);
}

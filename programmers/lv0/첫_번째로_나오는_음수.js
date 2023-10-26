// Lim, Jaedo a.k.a. OAO
// 26OCT2023 THURSDAY
// Contact: ashgrayblue0@gmail.com

// forEach는 리턴을 사용할 수 없다.
function solution(num_list) {
    let i = 0;

    for(const e of num_list) {
        if (e < 0) return i;

        i++;
    }

    return -1;
}

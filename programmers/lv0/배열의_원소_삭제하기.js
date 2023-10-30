// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 여러가지 방식을 통해서 풀 수 있다.
function solution(arr, delete_list) {
    return arr.filter((e) => {
        for (let d of delete_list) {
            if (e === d) return false;
        }
        return true;
    });
}

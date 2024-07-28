// Lim, Jaedo a.k.a. OAO
// 09NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 코드가 난잡하긴 하다. 어떻게 줄일 방법이 없을까?
function solution(arr, flag) {
    const answer = [];
    flag.forEach((e, i) => {
        if (e) {
            for(let j = 0; j < arr[i] * 2; j += 1) {
                answer.push(arr[i]);
            }
        }
        else {
            for(let j = 0; j < arr[i]; j += 1) {
                answer.pop();
            }
        }
    });
    return answer;
}

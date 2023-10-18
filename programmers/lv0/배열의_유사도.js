// Lim, Jaedo a.k.a. OAO
// 19OCT2023 THURSDAY
// Contacts: ashgrayblue0@gmail.com

// 배열에 존재하는 find 함수는 원소를 iterate 하며, 함수 내부의 코드를 활용해 비교후, 맞으면 리턴값으로 참을 돌려준다. 
function solution(s1, s2) {
    let answer = 0;
    for(let i of s1){
        if(s2.find((e)=>e===i))answer++;
    }
    return answer;
}

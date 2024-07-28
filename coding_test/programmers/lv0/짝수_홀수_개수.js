// Lim, Jaedo a.k.a. OAO
// 19OCT2023 THURSDAY
// Contacts: ashgrayblue0@gmail.com

// call back function 중 하나인 for Each를 사용해서 순회를 통해서 짝수 값을 구해준다.
// 좋은 방법 2가지가 있었는데, 하나는 1과 비트 & 연산을 한 뒤 reduce를 통해서 리턴값을 넣어주는 것(이걸 작성한 분은 reduce에 대한 이해가 크신거 같다.), %2 연산한 걸 index로 쓰는 것. (이건 굉장히 참신했다.)
// 나는 그냥 아래처럼 한다.
function solution(num_list) {
    var answer = [0,0];
    num_list.forEach((e)=>{
        e%2===0?answer[0]++:answer[1]++;
    });
    return answer;
}

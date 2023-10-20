// Lim, Jaedo a.k.a. OAO
// 20OCT2023 FRIDAY
// Contact: ashgrayblue0@gmail.com

// 정규표현식을 사용할 줄 몰라서 적어본 코드
function solution(my_string) {
    var answer = my_string.split('').filter((e)=> (e!='a'&&e!='e'&&e!='i'&&e!='o'&&e!='u')).join("");
    return answer;
}

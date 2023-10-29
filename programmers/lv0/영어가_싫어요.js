// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 정규표현식을 이용한다.
function solution(numbers) {
    return parseInt(numbers.replace(/zero/g, '0').replace(/one/g, '1').replace(/two/g, '2').replace(/three/g, '3').replace(/four/g, '4').replace(/five/g, '5').replace(/six/g, '6').replace(/seven/g, '7').replace(/eight/g, '8').replace(/nine/g, '9'));
}

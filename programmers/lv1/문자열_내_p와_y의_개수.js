// Lim, Jaedo a.k.a. OAO
// 28OCT2023 SATURDAY
// Contact: ashgrayblue0@gmail.com

// 값을 여러개 처리하기 위해서는 배열은 좋은 방법이다.
function solution(s){
    const py = [0, 0];

    [...s].forEach((e) => {
        if (e === 'p' || e === 'P') py[0]++;
        else if (e === 'y' || e === 'Y') py[1]++;
    })

    return py[0] === py[1] ? true : false;
}

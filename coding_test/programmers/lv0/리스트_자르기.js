// Lim, Jaedo a.k.a. OAO
// 13NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 문제를 어떻게 해석하느냐에 따라서 정말 많이 달라지는 문제. 나는 인덱스 하나씩 하는 형태로 했는데, filter로 해서 구현을 해도 문제가 없어보인다.
function solution(n, slicer, num_list) {
    const tmp = [...num_list];

    switch(n) {
        case 1:
            return tmp.slice(0, slicer[1] + 1);
            break;
        case 2:
            return tmp.slice(slicer[0]);
            break;
        case 3:
            return tmp.slice(slicer[0], slicer[1] + 1);
            break;
    }

    const tmp2 = [];
    for (let i = slicer[0]; i <= slicer[1]; i += slicer[2]) {
        tmp2.push(tmp[i]);
    }
    return tmp2;
}

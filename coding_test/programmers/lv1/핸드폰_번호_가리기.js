// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 정규 표현식으로 어케 할 수 있을 것 같은데...
function solution(phone_number) {
    return [...phone_number].map((e, i) => {
        if (i < phone_number.length - 4) {
            return '*';
        }
        return e;
    }).join('');
}

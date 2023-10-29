// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 생각보다 쉽게 구현할 수 있었다.
function solution(my_string) {
    const data =  my_string.split(' ');
    let result = parseInt(data[0]);
    for(let i = 2; i < my_string.length; i+=2){
        const num = parseInt(data[i]);
        switch (data[i-1]) {
            case '+' :
                result += num;
                break;
            case '-' :
                result -= num;
                break;
        }
    }
    return result;
}

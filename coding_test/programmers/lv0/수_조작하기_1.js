// Lim, Jaedo a.k.a. OAO
// 26OCT2023 THURSDAY
// Contact: ashgrayblue0@gmail.com

// ESLint with Airbnb 컨벤션을 지키고자 노력함.
function solution(n, control) {
    let i = n;
    
    control.split('').forEach((e)=>{
        switch (e) {
            case 'w' :
                i++;
                break;
            case 's' :
                i--;
                break;
            case 'd' :
                i += 10;
                break;
            case 'a' :
                i -= 10;
                break;
        }
    });
    
    return i;
}

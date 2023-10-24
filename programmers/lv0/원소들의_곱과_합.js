// Lim, Jaedo a.k.a. OAO
// 25OCT2023 Wednesday
// Contact: ashagrayblue0@gmail.com

// 한번은 저장해야 한다.
function solution(num_list) {
    let data = num_list.reduce((acc,cur)=>acc+cur);
    return num_list.reduce((acc, cur)=>acc*cur,1)<data*data?1:0;
}

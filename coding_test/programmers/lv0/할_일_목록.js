// Lim, Jaedo a.k.a. OAO
// 29OCT2023 Sunday
// Contact: ashgrayblue0@gmail.com

// === false라고 쓰긴 했는데, 찾아보니 ! 를 이용해도 되는 것 같다. Boolean 이니까 가능한 일 같다.
function solution(todo_list, finished) {
    return todo_list.filter((e, i) => finished[i] === false);
}

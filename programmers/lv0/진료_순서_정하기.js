// Lim, Jaedo a.k.a. OAO
// 12NOV2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 머릿 속에 있는 로직을 단 하나씩 정리를 하자. 그리고 제발 제발 필기하는 습관을 들이자.
function solution(emergency) {
  const emergencyOrder = [...emergency].sort((a, b) => b - a);
  const object = {};
  emergencyOrder.forEach((e, i) => {
    object[e] = i + 1;
  });
  return emergency.map(e => object[e]);
}

// 검색을 빠르게 하기 위해서 name, yearning이 매치된 객체 선언 -> 객체는 탐색 시간이 O(n)이다.
// 주어진 값을 매핑하여 객체를 선언한다.
// photo를 순회하면서 각 배열에 대해서 더한 값을 저장하는 배열을 만들고 리턴한다.

// 명확한 근거를 갖고 하나씩 차근차근 진행할 것.

function solution(name, yearning, photo) {
  const answer = [];
  const tmp = {};

  name.forEach((v, i) => {
    tmp[v] = yearning[i];
  });

  photo.forEach(nameArr => {
    const sum = nameArr.reduce((acc, cur) => {
      if (tmp[cur] !== undefined) {
        return acc + tmp[cur];
      }

      return acc;
    }, 0);

    answer.push(sum);
  });

  return answer;
}
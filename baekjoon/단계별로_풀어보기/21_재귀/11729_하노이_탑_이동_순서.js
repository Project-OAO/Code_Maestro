/*
<발상>
스택을 이용한다.
그리고, 각 가중치의 비교를 위해서 원판의 크기 === 수로 둔다.
입력값이 3이면, 3, 2, 1 의 원판이 생성된다고 생각한다.

스택을 3개를 선언한다. 스택의 최상위 값과 숫자를 비교해서 작은 값을 대입한다.
최종적으로 마지막에 저장된 스택이 꽉차면 승리.
각 스택의 크기는 입력값을 따른다.

<초기값 설정>
입력을 n이라고 하자.
n이 입력이 된 경우, 크기 n의 스택을 3개 선언한다.
또한, 1부터 n까지의 수를 스택에 담는다. (n부터 담는다.)

<규칙>
1. 항상 스택의 제일 최상단보다 원판의 값이 클 수는 없다.
2. 직전 단계에서 제일 빠른 길이 다음 단계에서는 2번쨰 단계까지 이루어진다. > 결국 이동을 위해서는 모든 원판이 2번째에 쌓여야 한다.

<설계>
1. 함수를 선언한다.
  1-1. 이 함수는 원판의 수, 타겟 스택 위치를 입력 받는다.
 */

// 스택을 선언한다.

// const fs = require('fs');
//
// const input = Number(fs.readFileSync(0).toString());

class Node {
  constructor(prev, val) {
    this.prev = prev;
    this.val = val;
  }
}

class Stack {
  constructor() {
    this.len = 0;
    this.top = null;
  }

  push(val) {
    const node = new Node(this.top, val);
    this.top = node;
    this.len += 1;

    return this.top.val;
  }

  pop() {
    const tmp = this.top;

    if (this.len >= 1) {
      this.top = this.top.prev;
      this.len -= 1;
    }

    return tmp === null ? null : tmp.val;
  }
}

const hanoii = n => {
  const stack = [];
  const log = [];
  let count = 0;

  for (let i = 0; i < 3; i++) {
    const tmpStack = new Stack();
    stack.push(tmpStack);
  }

  for (let i = n; i > 0; i--) {
    stack[0].push(i);
  }

  const helper = (plate, start, target) => {
    const notChosen = [0, 1, 2].filter(v => (v !== start) && (v !== target))[0];
    let tmp;
    count += 1;

    // base case
    if (plate === 1) {
      tmp = stack[start].pop();
      log.push(`${start + 1} ${target + 1}`);
      return stack[target].push(tmp);
    }

    helper(plate - 1, start, notChosen);
    tmp = stack[start].pop();
    stack[target].push(tmp);
    log.push(`${start + 1} ${target + 1}`);
    return helper(plate - 1, notChosen, target);
  };

  helper(n, 0, 2);

  console.log(count);
  console.log(log.join('\n'));
};

hanoii(20);
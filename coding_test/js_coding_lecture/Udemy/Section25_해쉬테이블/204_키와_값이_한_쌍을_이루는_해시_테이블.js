class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i += 1) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const hashKey = this._hash(`${key}`);
    const targetArr = [`${key}`, value];

    if (!this.keyMap[hashKey]) {
      this.keyMap[hashKey] = [];
    }

    for (const arr of this.keyMap[hashKey]) {
      if (arr[0] === `${key}`) return null;
    }

    this.keyMap[hashKey].push(targetArr);

    return this.keyMap[hashKey];
  }

  get(key) {
    const hashKey = this._hash(`${key}`);

    if (!this.keyMap[hashKey]) return undefined;

    const chainedArr = this.keyMap[hashKey];

    for (const arr of chainedArr) {
      if (arr[0] === `${key}`) return arr[1];
    }

    return undefined;
  }

  keys() {
    const keyArr = [];

    for (const outArr of this.keyMap) {
      if (outArr) {
        for (const innerArr of outArr) {
          keyArr.push(innerArr[0]);
        }
      }
    }

    return keyArr;
  }

  values() {
    const valueArr = new Set();

    for (const outArr of this.keyMap) {
      if (outArr) {
        for (const innerArr of outArr) {
          valueArr.push(innerArr[1]);
        }
      }
    }

    return new Array(valueArr);
  }
}

const ht = new HashTable(3);
console.log(ht.set('0', 'a'));
console.log(ht.set('1', 'b'));
console.log(ht.set('2', 'c'));
console.log(ht.set('3', 'd'));
console.log(ht.set('4', 'd'));
console.log(ht.set('4', 'd'));
// console.log(ht.set(0, 'd'));
console.log(ht.get('a'));
console.log(ht.get('b'));
console.log(ht.keyMap);

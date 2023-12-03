// Lim, Jaedo a.k.a. OAO
// 03DEC2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 푸는데 상당히 오래 걸린 문제. 원리는 기억했는데, 배열을 어떻게 다룰 지에 대해서 고민을 많이 했다.
// 테두리를 밖에서 안으로 채워가는 방식이고, 홀수인 경우만 중앙을 따로 다뤄주었다.
function solution(n) {
    const tmpArray = Array.from(Array(n), () => Array(n).fill(null));
    let startValue = 1;
    let endIndex = n - 1;

    for(let i = 0; i < Math.floor(n / 2); i+=1, endIndex -= 1) {
        startValue = setSide(tmpArray, i, startValue, endIndex);
    }

    let center = Math.floor(n / 2);
    if (n % 2 === 1) tmpArray[center][center] = startValue;

    return tmpArray;
}

function setSide(array, startIndex, startValue, endIndex) {
    const arraySize = endIndex - startIndex + 1;
    const returnValue = startValue + 4 * arraySize - 5;
    let count = startValue;
    let endCount = returnValue;

    for (let i = startIndex; i <= endIndex ; i += 1) {
        if (i === startIndex) {
            for (let j = startIndex; j <= endIndex ; j += 1) {
                array[i][j] = count;
                count += 1;
            }
        } else if (i === endIndex) {
            for (let j = endIndex ; j >= startIndex ; j -= 1) {
                array[i][j] = count;
                count += 1;
            }
        } else {
            array[i][startIndex] = endCount;
            endCount -= 1;
            array[i][endIndex] = count;
            count += 1;
        }
    }
    return returnValue + 1;
}

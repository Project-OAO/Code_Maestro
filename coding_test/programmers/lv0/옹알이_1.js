function checkAbleSpeak(words, babbling) {
    let target = babbling;
    // 길이가 11이상이면 아웃
    if (target.length >= 11 || target.length <= 1) return false;
    // 하나씩 대체해서 삭제
    words.forEach((e) => {
        target = target.replace(e, ' ');
    });
    
    return target.replaceAll(' ', '').length === 0 ? true : false;
}

function solution(babbling) {
    // 발음할 수 있는 4가지 말
    const words = ['aya', 'ye', 'woo', 'ma'];
    let count = 0;
    
    // 방식은 하나의 문자열에서의 검사 조건을 확인
    // 이를 다른 문자열로 확대해서 적용
    // 결과값이 몇 개 인지 체크
    babbling.forEach(e => {
        if(checkAbleSpeak(words, e)) count += 1;
    });
    
    return count;
}

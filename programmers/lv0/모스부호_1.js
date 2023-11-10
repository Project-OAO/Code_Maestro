// Lim, Jaedo a.k.a. OAO
// 10NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 객체를 다루는데 좀 더 익숙해지자.
const morse = {
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
};

function solution(letter) {
    const morseSignalArray = letter.split(' ');
    const encodedDataArray = [];

    morseSignalArray.forEach((e) => {
        encodedDataArray.push(morse[e]);
    });

    return encodedDataArray.join('');
}

const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
expr = 00101010100000000010;
function decode(expr) {
    let k = 0;
    function myfunc(element, index) {
        // console.log(index, k);
        //console.log(element);
        if (element == 'qq') {
            (newar.push('   '))
            k = -1;
        }
        if (element == '10') { (newar.push('.')) }
        if (element == '11') { (newar.push('-')) }
        k = k + 1;
        if (k == 5) {
            newar.push(' ')
            k = 0;
        };

        return element
    }
    sl = [];
    newar = [];
    s = [];

    s = expr.split('**********').join('**qq').split('**').map((el, index) => (
        el.match(/.{1,10}/g).map(el => (el.match(/.{1,2}/g)).map(myfunc))
    ));
    //console.log(s);

    //console.log(newar);
    let fin = '';
    fin = newar.join('').split('   ').map(a => a.split(' ').map(b => MORSE_TABLE[b]).join('')).join(' ');
    console.log(fin);
    return fin


}
function rechange() {

}

//ndecode('0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010');

module.exports = {
    decode
}
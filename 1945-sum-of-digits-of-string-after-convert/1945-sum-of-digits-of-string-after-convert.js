/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let number = ''
    let total = 0
 
    for (let i = 0; i < s.length; i++) {
        if(alphabets.includes(s[i])){
            number += (alphabets.indexOf(s[i]) + 1 )
        }
    }

    while (k--) {
        let total = 0;
        for (let digit of number) {
            total += +digit;
        }
        number = String(total);
    }

    return +number;

    
};

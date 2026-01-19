/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word === word.toUpperCase()) return true;
    if (word === word.toLowerCase()) return true;

    function isUpperCase(ch) {
        return ch === ch.toUpperCase() && ch !== ch.toLowerCase();
    }
    function isLowerCase(ch) {
        return ch !== ch.toUpperCase() && ch === ch.toLowerCase();
    }

    for (let char of word) {
        if (!isUpperCase(char)) {
            console.log(char)
            return false
        } else if (word[0].toUpperCase() && isLowerCase(word.slice(1)) ) {
            return true
        }
    }
    return true
};
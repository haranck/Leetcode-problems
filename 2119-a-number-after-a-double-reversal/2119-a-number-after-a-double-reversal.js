/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
    const reversed = Number(String(num).split('').reverse().join(''));
    const reReversed = Number(String(reversed).split('').reverse().join(''));
    return num === reReversed;
};
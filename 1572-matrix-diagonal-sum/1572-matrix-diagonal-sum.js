/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let len = mat.length
    let sum = 0
    for (let i = 0; i < len; i++) {
        sum += mat[i][i]
        sum += mat[i][len - 1 - i]
    }

    if (len % 2 !== 0) {
        sum -= mat[Math.floor(len/2)][Math.floor(len/2)]
    }

    return sum

};
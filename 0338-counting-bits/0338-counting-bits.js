/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let res = []
    for (let i = 0; i <= n; i++) {
        let binary = i.toString(2)
        let count = 0
        for (let ch of binary) {
            if (ch === '1') count++
        }
        res.push(count)
    }
    return res
};
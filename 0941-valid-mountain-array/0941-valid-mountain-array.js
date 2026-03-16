/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length < 3) return false

    let max = Math.max(...arr)
    let k = arr.indexOf(max)

    if (k === 0 || k === arr.length - 1) return false;

    for (let i = 1; i < k; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false
        }
    }
    for (let j = k + 1; j < arr.length; j++) {
        if (arr[j] >= arr[j - 1]) {
            return false
        }
    }

    return true
};
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b)
    let newarr = []
    let min = Infinity
    for (let i = 0; i < arr.length-1; i++) {
        let diff = arr[i + 1] - arr[i]
        min = Math.min(diff, min)
    }
    for (let j = 0; j < arr.length-1; j++) {
        if ((arr[j + 1] - arr[j]) === min) {
            newarr.push([arr[j], arr[j + 1]])
        }
    }
    return newarr
};
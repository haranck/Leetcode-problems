/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let j = 0 
    for(let i = 1 ; ; i++) {
        if(arr[j] === i){
            j++
        }
        else {
            k--
        }
        if(k===0) return i 
    }
};
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0
    for(let passenger of details){
        let sliced = passenger.slice(11,13)
        if(Number(sliced) > 60)count++
    }
    return count
};
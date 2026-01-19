/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let sorted  = [...heights].sort((a,b)=>a-b)
    console.log(sorted)
    let count = 0 
    for(let i = 0 ;i<heights.length;i++){
        if(heights[i]!==sorted[i]){
            count++
        }
    }
    return count
};
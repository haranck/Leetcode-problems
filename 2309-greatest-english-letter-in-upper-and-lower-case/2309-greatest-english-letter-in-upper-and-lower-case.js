/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const set = new Set(s)
    const arr = []
    for(let char of s){
        if(set.has(char)){
            let cap = char.toUpperCase()
            let sma = char.toLowerCase()
            if(set.has(cap)&&set.has(sma)){
                arr.push(char)
            }
        }
    }
    if(arr.length === 0)return ''
    arr.sort((a,b)=>a.localeCompare(b))
    return arr[arr.length-1]
};
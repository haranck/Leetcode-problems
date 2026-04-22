/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = new Map()
    let num = 0
    for (let str of s) {
        if (!map.has(str)) {
            if (str === 'I') {
                map.set("I", 1)
            } else if (str === 'V') {
                map.set('V', 5)
            } else if (str === 'X') {
                map.set('X', 10)
            } else if (str === 'L') {
                map.set('L', 50)
            } else if (str === 'C') {
                map.set('C', 100)
            } else if (str === 'D') {
                map.set('D', 500)
            } else if (str === "M") {
                map.set('M', 1000)
            }
        }
    }
    for(let i = 0 ; i < s.length;i++){
        let first = map.get(s[i])
        let next  = map.get(s[i+1])
        if(next && next > first){
            num-=first
        }else{
            num+=first
        }
    }
    return num
    // console.log(map.get('I'))
};


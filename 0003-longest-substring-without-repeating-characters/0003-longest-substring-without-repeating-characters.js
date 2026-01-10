/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0 
    let maxlen = 0
    let set = new Set()
    for (let right = 0; right < s.length; right++) {
        while(set.has(s[right])) {
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        maxlen =  Math.max(set.size,maxlen)
    }
    return maxlen
}


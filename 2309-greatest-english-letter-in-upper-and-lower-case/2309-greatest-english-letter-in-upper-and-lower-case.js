/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const capital = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const small = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    const set = new Set()
    const arr = []
    for(let char of s){
        if(set.has(char)){
            continue
        }else{
            set.add(char)
        }
    }
    console.log(set)
    for(let char of s){
        if(set.has(char)){
            let cap = char.toUpperCase()
            let sma = char.toLowerCase()
            if(set.has(cap)&&set.has(sma)){
                arr.push(char)
            }
        }
    }
    console.log(arr)
    arr.sort((a,b)=>a.localeCompare(b))
    console.log(arr)
    if(arr.length === 0){
        return ''
    }else {

        return arr[arr.length-1]
    }
};
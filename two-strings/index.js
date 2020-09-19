function twoStrings(s1, s2) {
    let regex = new RegExp('[' + s1 + ']', 'g')
    let index = s2.search(regex)
    
    return index === -1 ? 'NO' : 'YES'
}

const result = twoStrings('and', 'art')
console.log(result)

function stringConstruction(s) {
  let p = ''
  let count = 0
  
  for (let i = 0; i < s.length; i++) {
    const letter = s.charAt(i)
    if (!p.includes(letter)) {
      count++      
    }
    p += letter
  }
  return count
}

const result = stringConstruction('abcabc')
console.log(result)

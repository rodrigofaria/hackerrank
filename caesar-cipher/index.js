function caesarCipher(s, k) {
  //s => string
  //k => rotation factory
  let crypted = ''

  if (k > 26) {
    k = k % 26
  }

  [...s].forEach(c => {
    let index = c.charCodeAt(0)
    
    if (index >= 65 && index <= 90) {
      index += k
      if (index > 90) {
        index = 64 + (index - 90)
      }
    
    } else if (index >= 97 && index <= 122) {
      index += k
      if (index > 122) {
        index = 96 + (index - 122)
      }
    }
    
    crypted += String.fromCharCode(index)
  })

  return crypted
}

const result = caesarCipher('middle-Outz', 2)
console.log(result)

function funnyString(s) {
  for (let i = 0, j = s.length - 1; i < s.length - 1; i++, j--) {
    let charCode1 = s.charCodeAt(i)
    let charCode2 = s.charCodeAt(i + 1)

    let charCode3 = s.charCodeAt(j)
    let charCode4 = s.charCodeAt(j - 1)

    if (Math.abs(charCode1 - charCode2) !== Math.abs(charCode4 - charCode3)) {
      return 'Not Funny'
    }
  }

  return 'Funny'
}

const result = funnyString('acxz')
console.log(result)

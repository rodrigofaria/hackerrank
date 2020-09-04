function repeatedString(s, n) {
  //s => word
  //n => number of characters
  if (s === 'a') {
    return n
  }

  let counter = 0
  s.substring(0, n).split('').forEach(element => {
    if (element === 'a') {
      counter++
    }
  })

  if (s.length > n) {
    return counter
  }

  const m = Math.floor(n / s.length)
  counter *= m
  const left = n - s.length * m
  s.substring(0, left).split('').forEach(element => {
    if (element === 'a') {
      counter++
    }
  })

  return counter
}

const result = repeatedString('abcac', 10)
console.log(result)

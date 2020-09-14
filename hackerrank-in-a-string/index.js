function hackerrankInString(s) {
  const letters = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a', 'n', 'k']
  let result = 'YES'
  let index = -1

  letters.forEach(letter => {
    index = s.indexOf(letter, index + 1)
    if (index === -1) {
      result = 'NO'
    }
  })

  return result
}

const result = hackerrankInString('hereiamstackerrank')
console.log(result)

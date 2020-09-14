function camelcase(s) {
  let count = 1
  let match = s.match(/[A-Z]/g)
  if (match) {
    count += match.length
  }
  return count
}

const result = camelcase('oneTwoThree')
console.log(result)

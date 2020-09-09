function minimumNumber(n, password) {
  const containNumbers = () => { return /[0-9]/.test(password) }
  const containLowerCase = () => { return /[a-z]/.test(password) }
  const containUpperCase = () => { return /[A-Z]/.test(password) }
  const containSpecialCharacter = () => { return /[!@#$%^&*()\-+]/.test(password) }
  
  let counter = 0
  if (!containNumbers()) counter++
  if (!containLowerCase()) counter++
  if (!containUpperCase()) counter++
  if (!containSpecialCharacter()) counter++

  if (counter + n < 6) {
    counter += 6 - (counter + n)
  }

  return counter
}

const result = minimumNumber(11, '#HackerRank')
console.log(result)

function gameOfThrones(s) {
  const quantity = letter => {
    let regex = new RegExp('[' + letter + ']', 'g')
    return s.match(regex).length
  }
  
  const letters = new Set(s)
	const arrayLetters = [...letters]
  let counterOdd = 0

  for (let i = 0; i < letters.size; i++) {
    let q = quantity(arrayLetters[i])
  
    if (q % 2 !== 0) {
      counterOdd++
      if (counterOdd > 1) {
        return 'NO'
      }
    }
  }  
  
  return 'YES'
}

const result = gameOfThrones('aabbccdd')
console.log(result)

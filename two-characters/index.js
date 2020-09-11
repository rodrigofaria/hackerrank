function alternate(s) {
  if (s.length === 1) {
    return 0
  }
  
  const regexp = /([a-z])\1/g
  let word = s
  
  while (word.match(regexp)) {
    const array = [...word.match(regexp)]
  
    for (let i = 0; i < array.length; i++) {
      let letter = array[i].charAt(0)
      let regex = new RegExp(letter, 'g')
      word = word.replace(regex, '')
    }
  }

  let letters = Array.from(new Set(word))
  let twoLetters = []

  for (let i = 0; i < letters.length - 1; i++) {
    for (let j = i + 1; j < letters.length; j++) {
      twoLetters.push(letters[i] + letters[j])
    }
  }

  let count = 0
  twoLetters.forEach((c) => {
    let regex = new RegExp('[^' + c + ']', 'g')
    let newWord = word.replace(regex, '')
    
    if (!newWord.match(regexp) && newWord.length > count) {
      count = newWord.length
    }
  })

  return count
}

const result = alternate('abaacdabd')
console.log(result)

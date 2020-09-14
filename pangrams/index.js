function pangrams(s) {
  s = s.toLowerCase()

  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  for (let i = 0; i < letters.length; i++) {
    let regex = new RegExp('[' + letters[i] + ']', 'g')
    
    if (!regex.test(s)) {
      return 'not pangram'
    }
  }
  
  return 'pangram'
}

const result = pangrams('We promptly judged antique ivory buckles for the next prize')
console.log(result)

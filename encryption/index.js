function encryption(s) {
  const rows = Math.floor(Math.sqrt(s.length))
  const columns = Math.ceil(Math.sqrt(s.length))

  let crypt = ''
  let counter = 0

  for (let i = 0; i < columns; i++) {
    counter = i
    for (let j = 0; j <= rows; j++) {
      crypt += s.charAt(counter)
      counter += columns
    }
    
    crypt += ' '
  }

  return crypt
}

const result = encryption('haveaniceday')
console.log(result)

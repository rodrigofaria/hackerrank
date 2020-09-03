function appendAndDelete(s, t, k) {
  //s => initial string
  //t => desired string
  //k => number of operation
  if (s === t) {
    return 'Yes'
  }

  if (s.length > t.length + k) {
    return 'No'
  }

  let contentEquals = 0
  let index = 0

  while (s.charAt(index) === t.charAt(index)) {
    contentEquals++
    index++;
  }

  let difference = (t.length - contentEquals) + (s.length - contentEquals)
  
  if (difference > k) {
    return 'No'
  }
  
  if (difference % 2 !== 0 && k % 2 === 0) {
    return 'No'
  }

  return 'Yes'
}

const response = appendAndDelete('hackerhappy', 'hackerrank', 9)
console.log(response)

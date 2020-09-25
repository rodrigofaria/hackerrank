function timeInWords(h, m) {
  const w = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen',
    'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three',
    'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight',
    'twenty nine', 'half']

  let prefix = ''
  let middle = ''
  let suffix = ''

  if (m === 0) {
    prefix = w[h - 1]
    middle = ' o\' clock'
    
  } else if (m <= 30) {
    prefix = w[m - 1]
    suffix = w[h - 1]

    if (m === 15 || m === 30) {
      middle = ' past '
    } else if (m === 1) {
      middle = ' minute past '
    } else {
      middle = ' minutes past '
    }

  } else {
    const aux = 60 - m
    prefix = w[aux - 1]
    suffix = w[h]

    if (aux === 15) {
      middle = ' to '
    } else if (aux === 1) {
      middle = ' minute to '
    } else {
      middle = ' minutes to '
    }
  }

  return prefix + middle + suffix
}

const result = timeInWords(5, 45)
console.log(result)

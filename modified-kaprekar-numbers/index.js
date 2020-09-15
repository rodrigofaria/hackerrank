// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
  //p => min
  //q => max
  let output = ''

  for (let i = p; i <= q; i++) {
    if (i == 1) {
      output += i + ' '
      continue      
    }

    let newValue = Math.pow(i, 2) + ''
    let midle = newValue.length / 2
    let a = parseInt(newValue.substring(0, midle))
    let b = parseInt(newValue.substring(midle))
    if (i === (a + b)) {
      output += i + ' '
    }
  }

  if (output === '') {
    output = 'INVALID RANGE'
  }
  console.log(output)
}

kaprekarNumbers(1, 100)
//[1 9 45 55 99]

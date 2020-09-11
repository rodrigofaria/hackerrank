function taumBday(b, w, bc, wc, z) {
  //b => number of black gifts
  //w => number of white gifts
  //bc => cost of black gifts
  //wc => cost of white gifts
  //z => cost to convert one color gift to the other color
  let bc1 = Math.min(bc, wc + z)
  let wc1 = Math.min(wc, bc + z)

  return BigInt(b) * BigInt(bc1) + BigInt(w) * BigInt(wc1)
}

const result = taumBday(3, 5, 3, 4, 1)
console.log(result)

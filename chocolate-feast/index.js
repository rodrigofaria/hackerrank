function chocolateFeast(n, c, m) {
  //n => money
  //c => cost
  //m => number of wrappers to change
  let quantity = Math.floor(n / c)
  let total = quantity

  do {

    let aux = Math.floor(quantity / m)
    total += aux

    quantity = aux + (quantity % m)

    if (quantity < m) {
      break;
    }
  } while(true)
  
  return total
}

const result = chocolateFeast(6, 2, 2)
console.log(result)

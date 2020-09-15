function beautifulTriplets(d, arr) {
  let counter = 0

  for (let i = 0; i < arr.length - 2; i++) {
    let currentValue = arr[i]
    let secondValue = currentValue + d
    let index1 = i + 1

    do {
      index1 = arr.indexOf(secondValue, index1)
      if (index1 === -1) {
        break
      }

      let thirdValue = secondValue + d
      let index2 = index1 + 1
      do {
        index2 = arr.indexOf(thirdValue, index2)
        if (index2 === -1) {
          break
        } else {
          counter++
          index2++
        }

      } while (true)
      index1++

    } while(true)
  }

  return counter
}

const result = beautifulTriplets(1, [2, 2, 3, 4, 5])
console.log(result)

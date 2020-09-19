function minimumDistances(a) {
  let minimum = 1001
  const numbers = new Set(a)
  numbers.forEach(element => {
    let firstIndex = a.indexOf(element)

    while (true) {
      let nextIndex = a.indexOf(element, firstIndex + 1)
      if (nextIndex === -1) {
        break
      }
      let distance = nextIndex - firstIndex
      if (distance < minimum) {
        minimum = distance
      }
      firstIndex = nextIndex
    }
  });

  return minimum === 1001 ? -1 : minimum
}

const result = minimumDistances([3,2,1,2,3])
console.log(result)

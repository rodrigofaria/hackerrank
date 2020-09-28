function organizingContainers(container) {
  const numberOfColumns = container[0].length
  let capacityContainers = []
  let quantityByType = []

  for (let i = 0; i < numberOfColumns; i++) {
    let count = 0
    let capacity = 0

    for (let j = 0; j < container.length; j++) {
      count += container[j][i]
      capacity += container[i][j]
    }

    quantityByType.push(count)
    capacityContainers.push(capacity)
  }

  quantityByType.sort()
  capacityContainers.sort()

  let result = 'Possible'
  quantityByType.forEach((type, index) => {
    if (capacityContainers[index] !== type) {
      result = 'Impossible'
    }
  })

  return result
}

let container = []
container[0] = [1, 1]
container[1] = [1, 1]
const result = organizingContainers(container)
console.log(result)

function equalizeArray(arr) {
  let counter = 0
  let max = 0

  for (let i = 0; i < arr.length; i++) {
      counter = 1

      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
            counter++
          }
      }
      if (counter >= max) {
        max = counter
      }
  }
  
  return arr.length - max
}

const result = equalizeArray([1,2,2,3])
console.log(result)

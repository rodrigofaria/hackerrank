function jumpingOnClouds(c) {
  //c => clouds where [0] is cumulus and [1] is thunderheads
  let count = 0

  for (let i = 0 ; i < c.length;) {
    
    if (c[i + 2] == 0) {
      i += 2
    } else {
      i++
    }
    count++
    
    if (i == c.length - 1) 
      break
  }
  return count
}

let result = jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])
console.log(result)

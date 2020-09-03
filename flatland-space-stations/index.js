function flatlandSpaceStations(n, c) {
  //n => number of cities 
  //c => array with spaces station
  let max = 0
  c.sort((a, b) => a - b)
  
  const first = c[0] - 0
  if (first > max) {
    max = first
  }

  const last = (n - 1) - (c[c.length - 1])
  if (last > max) {
    max = last
  }
  
  for (let i = 0; i < c.length - 1; i++) {      
    let difference = Math.abs(c[i + 1] - c[i]) / 2
    difference = Math.floor(difference)
    
    if (difference > max) {
      max = difference
    }
  }

  return max
}

let result = flatlandSpaceStations(3, [0])
console.log(result)

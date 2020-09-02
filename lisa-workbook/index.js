function workbook(n, k, arr) {
  //n = chapter
  //k = problems per page
  //arr = problems per chapter
  let page = 0
  let counter = 0

  arr.forEach((element, index) => {    
    if (element <= k) {
      page++
      
      if (page >= 1 && page <= element) {
        counter++
      }

    } else {
      for (let i = 1; i <= element; i += k) {
        page++

        let max = i + k - 1
        if (max > element) {
          max = element
        }

        if (page >= i && page <= max) {
          counter++
        }
      }
    }
  });

  return counter
}

let result = workbook(5, 3, [4, 2, 6, 1, 10]);
console.log(result)


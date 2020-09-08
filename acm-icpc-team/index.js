function acmTeam(topic) {
  let maxTopics = 0
  let numberTeams = 0

  for (let i = 0; i < topic.length - 1; i++) {
    let topicLineI = [...topic[i]]
    
    for (let j = i + 1; j < topic.length; j++) {
      let topicLineJ = topic[j]
      let counter = 0

      topicLineI.forEach((c, index) => {
        if (c == '1' || topicLineJ.charAt(index) == '1') {
          counter++
        }
      })
      
      if (counter > maxTopics) {
        maxTopics = counter
        numberTeams = 1

      } else if (counter == maxTopics) {
        numberTeams++
      }
    }
  }

  return new Array(maxTopics, numberTeams)
}

const result = acmTeam(['10101', '11100', '11010', '00101'])
console.log(result)

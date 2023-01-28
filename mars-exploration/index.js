function marsExploration(s) {
    s = s.split('')
    const base = ['S', 'O', 'S']
    let baseIndex = 0
    let counter = 0

    for (let i = 0; i < s.length; i++) {
        if (base[baseIndex] !== s[i]) {
            counter++
        }
        baseIndex++
        if (baseIndex === base.length) {
            baseIndex = 0
        }
    }

    return counter
}

const result = marsExploration('SOSTOT')
console.log(result)
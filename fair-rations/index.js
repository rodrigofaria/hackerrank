function fairRations(B) {
    if (B.length == 2) {
        if (B[0] % 2 === 0 && B[1] % 2 === 0) {
            return '4'
        }

        if (B[0] % 2 !== 0 && B[1] % 2 !== 0) {
            return '2'
        }
        return 'NO'
    }
    
    let counter = 0
    for (let i = 0; i < B.length; i++) {
        if (B[i] % 2 !== 0) {
            if (i === B.length - 1) {
                return 'NO'
            }
            B[i] = B[i] + 1
            if (i < B.length - 1) {
                B[i + 1] = B[i + 1] + 1
                counter += 2
            }
        }
    }

    return counter + ''
}

const result = fairRations([4, 5, 6, 7])
console.log(result)
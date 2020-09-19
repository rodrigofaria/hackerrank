function separateNumbers(s) {
    if (s.length == 1) {
        console.log('NO')
        return
    }

    let response = 'NO'
    let length = 1

    while (length <= s.length / 2) {
        let value = BigNumber(s.substring(0, length))
        let nextValue = value
        let comp = ''

        do {
            comp += nextValue
            nextValue = nextValue.plus(1)
        } while (comp.length < s.length)

        if (comp === s) {
            response = 'YES ' + value
            break
        }
        length++
    }

    console.log(response)
}

separateNumbers(91011)

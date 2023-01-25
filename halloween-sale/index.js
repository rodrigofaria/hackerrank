function howManyGames(p, d, m, s) {
    let numberOfGames = 0
    if (s < p) {
        return numberOfGames
    }

    if (p == s) {
        return 1
    }

    numberOfGames++
    s -= p
    while (true) {
        p -= d
        if (p < m) {
            p = m
        }
        if (s >= p) {
            numberOfGames++
            s -= p
        } else {
            return numberOfGames
        }
    }
}

const result = howManyGames(20, 3, 6, 85)
console.log(result)
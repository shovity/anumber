const anumber = {
    exponents: [ '', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
}

for (let index = 1; index < 13; index++) {
    anumber.exponents.push(...['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'].map((char) => {
        return char + 'Y'.repeat(index)
    }))
}

anumber.exponents.pop()
anumber.exponents.pop()

anumber.decode = (string) => {
    let index = string.length - 1

    while (index > -1 && string[index] > '9') {
        index--
    }

    const exponent = anumber.exponents.indexOf(string.slice(index + 1)) * 3

    if (exponent < 0) {
        throw Error('Exponent invalid')
    }

    const mantisa = string.slice(0, index + 1) || 0

    return mantisa * 10 ** exponent
}

anumber.encode = (number) => {
    let sign = ''

    if (number < 0) {
        number *= -1
        sign = '-'
    }

    if (number > 1.79e+308) {
        throw Error('Out of number range')
    }

    let count = 0

    while (number > 999) {
        number /= 1000
        count++
    }

    if (count >= anumber.exponents.length) {
        throw Error('Out of exponents range')
    }

    return `${sign}${number.toFixed(1)}${anumber.exponents[count]}`
}

module.exports = anumber

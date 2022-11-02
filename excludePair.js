const compoundList = []

function excludePair (numbers, limit) {
    let count = 0

    for (let pair = 4; pair < limit; pair+=8) {
        count++;
        const index = numbers.indexOf(pair)
        if (index !== -1) numbers.splice(index, 1)

        if(pair + 2 <= limit ) {
            const indexTwo = numbers.indexOf(pair + 2)
            if (indexTwo !== -1) numbers.splice(indexTwo, 1)
        }

        if(pair + 4 <= limit ) {
            const indexFour = numbers.indexOf(pair + 4)
            if (indexFour !== -1) numbers.splice(indexFour, 1)
        }

        if(pair + 6 <= limit ) {
            const indexFour = numbers.indexOf(pair + 6)
            if (indexFour !== -1) numbers.splice(indexFour, 1)
        }
    }

    return count
}

function iterationsWithFor(numbers, numberToMult, number) {
    let count = 0

    for (let prime = 0; prime < numberToMult.length; prime++) {
        count++
        
        const result = numbers[number] * numberToMult[prime]
        const index = numbers.indexOf(result)
        if (index !== -1) numbers.splice(index, 1)
        compoundList.push(result)

        const resultNext = numbers[number] * numberToMult[prime + 1]
        if ( resultNext > numbers[numbers.length - 1]) {
            numberToMult.shift()
            break
        }

        if(compoundList.includes(resultNext)) {
            const indexMult = numberToMult.indexOf(numberToMult[prime + 1])
            numberToMult.splice(indexMult, 1)
        }
    }
    return count
}

function validatePrimeNumbers(limit) {
    const numbers = []
    let count = 0
       
    for (let i = 2; i <= limit; i++) {
        numbers.push(i)
    }

    count += excludePair(numbers, limit)
    const numberToMult = [...numbers]
    numberToMult.shift()

    for (let number = 1; number < numbers.length; number++) {
        count++
        
        count += iterationsWithFor(numbers, numberToMult, number)

        if (numbers[number + 1] * numberToMult[0] > numbers[numbers.length - 1]) break
    }

    return {numbers, count}
}

module.exports = validatePrimeNumbers
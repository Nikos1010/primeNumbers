const compoundList = []

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

    const numberToMult = [...numbers]

    for (let number = 0; number < numbers.length; number++) {
        count++
        
        count += iterationsWithFor(numbers, numberToMult, number)

        if (numbers[number + 1] * numbers[number + 1] > numbers[numbers.length - 1]) break
    }

    return {numbers, count}
}

module.exports = validatePrimeNumbers
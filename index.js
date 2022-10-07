function iterationsWithFor(numbers, numberToMult, number, ite, sum) {
    let count = 0

    for (let prime = 0 + sum; prime < numberToMult.length; prime += ite) {
        count++
        
        const result = numbers[number] * numberToMult[prime]
        const index = numbers.indexOf(result)
        if (index !== -1) numbers.splice(index, 1)

        const resultNext = numbers[number] * numberToMult[prime + 1]
        if( resultNext > numbers[numbers.length - 1]) {
            numberToMult.shift()
            break
        }
        
    }
    return count
}

function validatePrimeNumbers() {
    const numbers = []
    let count = 0
        
    for (let i = 2; i <= 120; i++) {
        numbers.push(i)
    }

    const numberToMult = [...numbers]

    for (let number = 0; number < numbers.length; number++) {
        count++

        if(number % 2 !== 0) {
            count += iterationsWithFor(numbers, numberToMult, number, 2, 0)
        } else if (numbers[number] === 2) {
            count += iterationsWithFor(numbers, numberToMult, number, 1, 0)
        } else {
            count += iterationsWithFor(numbers, numberToMult, number, 2, 1)
        }

        if (numbers[number + 1] * numbers[number + 1] > numbers[numbers.length - 1]) break
    }

    return {numbers, count}
}

console.log(validatePrimeNumbers())
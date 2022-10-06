function iterationsWithFor(numbers, copyNumber, number, ite, sum) {
    let count = 0

    for (let prime = number + sum; prime < copyNumber.length; prime += ite) {
        count++
        
        const result = numbers[number] * copyNumber[prime]
        const index = numbers.indexOf(result)
        if (index !== -1) numbers.splice(index, 1)

        if(result > numbers[numbers.length - 1]) {
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

    const copyNumber = [...numbers]

    for (let number = 0; number < numbers.length; number++) {
        count++
        
        if(number % 2 !== 0) {
            count += iterationsWithFor(numbers, copyNumber, number, 2, 0)
        } else if (numbers[number] === 2) {
            count += iterationsWithFor(numbers, copyNumber, number, 1, 0)
        } else {
            count += iterationsWithFor(numbers, copyNumber, number, 2, 1)
        }
    }

    return {numbers, count}
}

console.log(validatePrimeNumbers())
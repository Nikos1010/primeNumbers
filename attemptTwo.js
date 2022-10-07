// function iterationsWithFor(numbers, copyNumber, number, ite, sum, compound) {
//     let count = 0

//     for (let prime = 0 + sum; prime < copyNumber.length; prime += ite) {
//         count++
        
//         const result = numbers[number] * copyNumber[prime]
//         compound.push(result)
//         const index = numbers.indexOf(result)
//         if (index !== -1) numbers.splice(index, 1)

//         if(result > numbers[numbers.length - 1]) {
//             copyNumber.shift()
//             break
//         }
        
//     }
//     return count
// }

// function validatePrimeNumbers() {
    

//     for (let number = 0; number < numbers.length; number++) {
//         count++
        
//         if(number % 2 !== 0) {
//             count += iterationsWithFor(numbers, copyNumber, number, 2, 0, compound)
//         } else if (numbers[number] === 2) {
//             count += iterationsWithFor(numbers, copyNumber, number, 1, 0, compound)
//         } else {
//             count += iterationsWithFor(numbers, copyNumber, number, 2, 1, compound)
//         }
//     }
//     console.log(compound)

//     return {numbers, count}
// }

const numbers = []
const compoundList = []
let countAll = 0
    
for (let i = 2; i <= 120; i++) {
    numbers.push(i)
}

const copyNumber = [...numbers]

function comprobateIterations({countAll, count}) {

}

function validatePrimeNumbers({numbers, compoundList, countArray, countAll}) {
    // console.log(numbers, compoundList, countArray, countAll)
    countAll++
    // console.log(countAll, countArray)
    
    const number = numbers[countArray]
    // console.log(number)

    // comprobateIterations()

    if (countArray <= numbers.length) {
        countArray++
        validatePrimeNumbers({numbers, compoundList, countArray, countAll})
        // return {numbers}
    } else {
        const hola = {a: 'Hola'}
        return hola
    }
}

const result = validatePrimeNumbers({
    numbers,
    compoundList,
    countAll,
    countArray: 0
})

console.log(result)
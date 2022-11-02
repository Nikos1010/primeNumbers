const validatePrimeNumbers = require('./index')
const validatePrimeNumbersTwo = require('./excludePair')

test('Should get prime numbers between 2 and 120', () => {
    const { numbers, count } = validatePrimeNumbers(120)
    console.log(count)
    expect(numbers).toEqual([
      2,   3,   5,  7, 11, 13, 17,  19,  23,
     29,  31,  37, 41, 43, 47, 53,  59,  61,
     67,  71,  73, 79, 83, 89, 97, 101, 103,
    107, 109, 113
  ])
})

test('Should get prime numbers between 2 and 120', () => {
    const { numbers, count } = validatePrimeNumbersTwo(120)
    console.log(count)
    expect(numbers).toEqual([
      2,   3,   5,  7, 11, 13, 17,  19,  23,
     29,  31,  37, 41, 43, 47, 53,  59,  61,
     67,  71,  73, 79, 83, 89, 97, 101, 103,
    107, 109, 113
  ])
})
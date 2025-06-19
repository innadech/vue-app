let numbers = [3, 5, 7]

const copyNumbers = numbers

copyNumbers.push(9)

numbers

numbers = 'foo'

copyNumbers

console.log(typeof copyNumbers)
console.log(copyNumbers.constructor.name)

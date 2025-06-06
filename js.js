const x = 42
const obj = {
  x,
}
console.log(obj)

const arr = ['a', 'b', 'c', 'd']

const arr2 = arr

console.log(arr.indexOf('c'))

arr.splice(arr.indexOf('c'), 1)

arr

console.log(arr2)

// 42

// 'helo'

// примитивные типы:
// number
// string
// boolean

// непримитивные типы:
// object
// array

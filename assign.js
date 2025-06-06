// let a = 42
// let b = 101

// a = b

// b = 333

// console.log(a)

// console.log(b)

let A = { x: 42 }
let B = { x: 101 }

A = B

B.x = 333

console.log(A.x)

console.log(B.x)

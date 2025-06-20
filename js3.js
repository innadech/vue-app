const array = [222, 303, 42]

// мутабельные методы массивов
array.push(33)
array

array.pop()
array

array.unshift(101)
array

array.shift()
array

array.reverse()
array

array.sort()
array

array.splice(0, 2, 1, 2, 3, 4)
array

// все остальные методы массивов - немутабельные
array.filter(() => false)
array

array.map(() => false)
array

let copy = array.toReversed()
array
copy

let copy2 = copy.toSorted()
copy
copy2

copy = array.toSpliced(3, 1)
array
copy

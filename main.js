const test = require('./utils.js')


const mat1 = [[1, 2, 3],
           [3, 2, 1],
           [7, 8, 9]]
const mat2 = [[1, 2, 3],
           [3, 2, 1],
           [7, 8, 9]]

console.log(test.matrixProduct(mat1, mat2))

let mat3 = [[9, 5, 3],
           [3, 6, 1],
           [2, 1, 9]]
let mat4 = [[4, 7, 3],
           [1, 6, 1],
           [6, 1, 9]]

console.log(test.sumOfMatrices(mat3, mat4))

let mat5 = [
        [1, 5, 9],
        [8, 6, 7],
        [7, 1, 3]
]
console.log(test.sumOfEachRow(mat5))

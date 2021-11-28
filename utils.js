module.exports = {
   matrixProduct,
   sumOfMatrices,
   sumOfEachRow,
   
}
//In utils.js write a function matrixProduct(mat1, mat2) that returns a new matrix that is 
//the product of mat1 and mat2 matrices.
function matrixProduct(mat1, mat2){
    if(mat1[0].length !== mat2.length){
        console.log("The number of columns of the first matrix is not equal to the number of the rows of the second matrix.")
        return 0;
    }
    const result1 = []
    for(let i = 0; i< mat1.length;i++){
        result1[i]=[];
        for(let j = 0; j<mat2[0].length; j++){
            result1[i][j]=0;
            for(let k =0; k<mat2.length;k++){
                result1[i][j]+=mat1[i][k] * mat2[k][j];
            }
        }
    }
    return result1;
}
//In utils.js write a function sumOfMatrices(mat1, mat2) that accepts two matrices and 
//returns the sum of those matrices in a new matrix.
function sumOfMatrices(mat1, mat2) {
    if (mat1.length !== mat2.length || mat1[0].length !== mat2[0].length) {
        console.log("The columns and the rows need to be equal.")
        return 0;
    }
    let result2 = new Array(mat1.length);
    for (let i = 0; i < result2.length; i++) { 
        result2[i] = new Array(mat1[i].length);
        for (let j = 0; j < result2[i].length; j++) {
            result2[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return result2;
}
//In utils.js write a function sumOfEachRow(mat) that accepts a matrix and returns an 
//array that contains sum of every row of the matrix for its elements.
//You have to solve this one by using another function that returns sum of elements for 
//an array. This means that you have to iterate over each row of the matrix and send 
//that row to a function named sumOfArray(arr) that will return the sum of any integer 
//array elements. Push the value returned by sumOfArray(arr) into an array and 
//return this array as sumOfEachRow(mat) result.
function sumOfArray(mat) {
    let result3 = 0;
    for (let i = 0; i < mat.length; i++) {
       result3 += mat[i];
    }
    return result3;
 }

 function sumOfEachRow(mat) {
    let result4 = [];
    for (let i = 0; i < mat.length; i++) {
       result4.push(sumOfArray(mat[i]))
    }
    return result4;
 }
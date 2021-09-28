//flipAndInvertImage test
const image = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
var flipAndInvertImage = function(A) {
    const length = A[0].length;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < length / 2; j++) {
            let curr = A[i][j];
            A[i][j] = !A[i][length - 1 - j];
            A[i][length - 1- j] = !curr;
        }
    }
    return A;
};
console.log(flipAndInvertImage(image))
export const findDiagonalOrder = function (mat: []) {
  for (let k = 0; k < mat.length; k++) {
    let i = k;
    let j = 0;
    while (i >= 0) {
      console.log(mat[i][j]);
      let temp = mat[i][j];
      i = i - 1;
      j = j + 1;
    }
    console.log("\n");
  }
  for (let k = 1; k <= mat.length - 1; k++) {
    let i = mat.length - 1;
    let j = k;
    while (j <= mat.length - 1) {
      console.log(mat[i][j]);
      i = i - 1;
      j = j + 1;
    }
    console.log("\n");
  }
};

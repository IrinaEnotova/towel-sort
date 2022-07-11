
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || matrix === []) return [];
  
  let stringArr = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i === 0 || i % 2 === 0) {
      stringArr.push(matrix[i]);
    }
    else {
      stringArr.push(matrix[i].reverse());
    }
  }

  stringArr = stringArr.toString();

  let resultArr = JSON.parse("[" + stringArr + "]");

  return resultArr;
}

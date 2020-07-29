const transpose = function(matrix) {
  if (matrix.length === 0) return [];
  let newMatrix = [];
  for (let column = 0; column < matrix[0].length; column++) {
    let newSubMatrix = [];
    for (let row = 0; row < matrix.length; row++) {
      newSubMatrix.push(matrix[row][column]);
    }
    newMatrix.push(newSubMatrix);
  }
  return newMatrix;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    } else {
      const verticalJoin = transpose(letters).map(ls => ls.join(''));
      for (l of verticalJoin) {
        if (l.includes(word)) {
          return true;
        }
      }
    }
  } return false;
};

module.exports = wordSearch;
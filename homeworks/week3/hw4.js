function reverse(str) {
  let sum = '';
  for (let i = str.length; i >= 0; i -= 1) {
    sum += str.charAt(i);
  }
  return sum;
}

function isPalindromes(str) {
  if (str === reverse(str)) {
    return true;
  }
  return false;
}

module.exports = isPalindromes;

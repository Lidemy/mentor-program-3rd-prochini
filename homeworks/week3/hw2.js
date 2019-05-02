function alphaSwap(n) {
  let result = '';
  for (let i = 0; i < n.length; i += 1) {
    if (n[i] >= 'a' && n[i] <= 'z') {
      result += n[i].toUpperCase();
    } else if (n[i] >= 'A' && n[i] <= 'Z') {
      result += n[i].toLowerCase();
    } else result += n[i];
  }


  return result;
}

module.exports = alphaSwap;

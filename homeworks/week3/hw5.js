function add(a, b) {
  const result = [];
  let numA = '';
  let numB = '';

  if (a.length > b.length) {
    numB = '0'.repeat(a.length - b.length) + b;
    numA = a;
  } else {
    numA = '0'.repeat(b.length - a.length) + a;
    numB = b;
  }
  const aryA = numA.split('');
  const aryB = numB.split('');

  for (let i = 0; i < numA.length; i += 1) {
    result.push(parseInt(aryA[i], 10) + parseInt(aryB[i], 10));
  }
  const newArray = [];
  for (let i = numA.length - 1; i >= 0; i -= 1) {
    if (result[i] >= 10) {
      newArray.unshift(result[i] - 10);
      result[i - 1] += 1;
    } else {
      newArray.unshift(result[i]);
    }
  }
  return (newArray.join(''));
}

module.exports = add;

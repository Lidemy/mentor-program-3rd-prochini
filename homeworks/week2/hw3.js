/* eslint linebreak-style: ["error", "windows"] */

function reverse(str) { // \r\n
  // do stuff \r\n
  let total = '';
  const num = str.length - 1;
  for (let i = num; i >= 0; i -= 1) {
    total += str[i];
  }
  return total;
}// \r\n
console.log(reverse('1,2,3,2,2'));// \r\n

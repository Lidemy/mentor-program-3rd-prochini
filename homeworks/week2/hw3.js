/* eslint linebreak-style: ["error", "windows"] */
let total = '';
function reverse(str) { // \r\n
  // do stuff \r\n
  const Num = str.length - 1;
  for (let i = Num; i >= 0; i -= 1) {
    total += str[i];
  }
  return total;
}// \r\n

console.log(reverse('1,2,3,2,2'));// \r\n

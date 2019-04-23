/* eslint linebreak-style: ["error", "windows"] */
function join(str, num) { // \r\n
  // do stuff \r\n
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result += str[i];
    if (i !== str.length - 1) {
      result += num;
    }
  }
  return result;
}

function repeat(str, times) {
  let num = '';
  for (let i = 0; i < times; i += 1) {
    num += str;
  }
  return num;
}// \r\n
console.log(join(['a', 1, 'b', 2, 'c', 3], ','));// \r\n
console.log(repeat('yoyo', 2));// \r\n

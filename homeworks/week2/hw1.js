/* eslint linebreak-style: ["error", "windows"] */
function printStars(n) { // \r\n
  // do stuff \r\n
  for (let i = 1; i <= n; i += 1) {
    const star = `*${n}`;
    console.log(star.substring(0, 1));
  }
} // \r\n
printStars(6);// \r\n

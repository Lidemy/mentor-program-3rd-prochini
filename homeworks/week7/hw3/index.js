const answer = document.querySelector('.result');
let count = '';
let firstNum = '';
let secondNum = '';
let operator = '';
let result = 0;

function math() {
  firstNum = count;
  answer.textContent = firstNum;
  count = '';
}


document.querySelector('.container').addEventListener('click',
  function (e) {
    count += [e.target.getAttribute('data-value')];
    answer.textContent = count;
    if (e.target.classList.contains('ac')) {
      count = '';
      firstNum = '';
      secondNum = '';
      operator = '';
      result = 0;
      answer.textContent = '';
    } if (e.target.classList.contains('plus')) {
      math();
      operator = '+';
    } if (e.target.classList.contains('min')) {
      math();
      operator = '-';
    } if (e.target.classList.contains('div')) {
      math();
      operator = '/';
    } if (e.target.classList.contains('mul')) {
      math();
      operator = '*';
    }
    if (e.target.classList.contains('equal')) {
      secondNum = count;
      count = '';
      if (operator === '+') {
        result = (parseFloat(firstNum) + parseFloat(secondNum));
        answer.textContent = result;
      } if (operator === '-') {
        result = parseFloat(firstNum) - parseFloat(secondNum);
        answer.textContent = result;
      } if (operator === '*') {
        result = parseFloat(firstNum) * parseFloat(secondNum);
        answer.textContent = result;
      } if (operator === '/') {
        result = parseFloat(firstNum) / parseFloat(secondNum);
        answer.textContent = result;
      }
    }
  });

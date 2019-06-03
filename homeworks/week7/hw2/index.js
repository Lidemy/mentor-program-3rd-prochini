const mail = document.querySelector('#email');
const submit = document.querySelector('.submit');
// 簡查空白欄位
function blank(id, p) {
  const element = document.querySelector(id).value;
  if (element === '') {
    document.querySelector(id).closest('div div').classList.add('error');
    document.querySelector(p).textContent = '這是必填問題';
    location.href = '#firstAnchor';
    return false;
  } if (element.length > 0) {
    document.querySelector(id).closest('div div').classList.remove('error');
    document.querySelector(p).textContent = '';
    return true;
  } return undefined;
}
// 檢查 email 格式
function checkmail(em) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) === false) {
    document.querySelector('#email').closest('div div').classList.add('error');
    document.querySelector('#email+p').textContent = '請輸入正確郵件地址格式';
    location.href = '#firstAnchor';
    return false;
  } if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) === true) {
    document.querySelector('#email').closest('div div').classList.remove('error');
    return true;
  } return undefined;
}
// 檢查選擇題
function radio() {
  if (document.querySelector('#new').checked === false && document.querySelector('#old').checked === false) {
    document.querySelector('#new').closest('div').classList.add('error');
    document.querySelector('.radio').textContent = '這是必填問題';
    return false;
  } if (document.querySelector('#new').checked === true || document.querySelector('#old').checked === true) {
    document.querySelector('#new').closest('div').classList.remove('error');
    document.querySelector('.radio').textContent = '';
    return true;
  } return undefined;
}
function choose() {
  if (document.querySelector('#old').checked === true) {
    return (document.querySelector('#old').value);
  }
  if (document.querySelector('#new').checked === true) {
    return (document.querySelector('#new').value);
  } return undefined;
}
// 印出填寫的資料
function log() {
  console.log(document.querySelector('#email').value);
  console.log(document.querySelector('#nickname').value);
  console.log(choose());// 不知道拿被選的值
  console.log(document.querySelector('#job').value);
  console.log(document.querySelector('#how').value);
  console.log(document.querySelector('#bg').value);
  console.log(document.querySelector('#other').value);
  alert('Sucessful submit!');
}
// submit 監聽
function onClick(e) {
  blank('#email', '#email+p');
  checkmail(document.querySelector('#email').value);
  blank('#nickname', '#nickname+p');
  radio();
  blank('#job', '#job+p');
  blank('#how', '#how+p');
  blank('#bg', '#bg+p');
  if (checkmail(mail.value) === true && blank('#nickname', '#nickname+p') === true && blank('#job', '#job+p') === true && blank('#how', '#how+p') === true && blank('#bg', '#bg+p') === true) {
    log();
    window.location.reload();
  } else e.preventDefault();
}
submit.addEventListener('click', onClick);

// email input監聽
document.querySelector('#email').addEventListener('input', (e) => {
  const response = document.querySelector('#email+p');
  const content = e.srcElement.value;
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  if (emailIsValid(content) === true) {
    response.textContent = '';
    document.querySelector('.info').classList.remove('error');
  } if (content.length > 0 && emailIsValid(content) === false) {
    document.querySelector('.info').classList.add('error');
    response.textContent = '電子郵件地址必須包括 (郵件帳號 @ 郵件網域 . 郵件網域)';
  } if (content === '') {
    document.querySelector('.info').classList.add('error');
    response.textContent = '這是必填問題';
  }
});

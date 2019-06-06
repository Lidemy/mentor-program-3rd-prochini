const request = new XMLHttpRequest();
const container = document.querySelector('.wrapper');
request.addEventListener('load', () => {
  if (request.status >= 200 && request.status < 400) {
    const response = request.responseText;
    const json = JSON.parse(response);
    for (let i = 0; i < json.length; i += 1) {
      const div = document.createElement('div');
      div.innerHTML = `
        <img class="avatar"src="https://i.imgur.com/y6bVt3Y.png" alt="avatar" width="50vmin" height="50vmin">
        <article>
            <h1>${json[i].id}</h1>
            <p>${json[i].content}</p>
        </article>
        `;
      div.classList.add('message');
      container.appendChild(div);
    }
  } else {
    console.log(request.status);
  }
});
request.onerror = () => {
  console.log('error');
};
request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_limit=20&_sort=id&_order=desc', true);

request.send(null);

// 監聽 輸入框
let input = '';
document.querySelector('#content').addEventListener('input', (e) => {
  input = `content=${e.srcElement.value}`;
  console.log(input);
});

document.querySelector('.send').addEventListener('click', () => {
  const http = new XMLHttpRequest();
  const url = 'https://lidemy-book-store.herokuapp.com/posts?';
  const params = input;
  http.open('POST', url, true);
  // Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http.onreadystatechange = () => { // Call a function when the state changes.
  };
  http.send(params);
  alert('已送出!');
  window.location.replace(location.href);
});

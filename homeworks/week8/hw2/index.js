function getComment() {
  const container = document.querySelector('.replyComment');
  const request = new XMLHttpRequest();
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
      container.innerHTML = '';
      const response = request.responseText;
      const json = JSON.parse(response);
      for (let i = 0; i < json.length; i += 1) {
        const div = document.createElement('div');
        div.innerHTML = `
            <article>
                <h1>${json[i].id}</h1>
                <p>${json[i].content}</p>
            </article>
            `;
        div.classList.add('message');
        container.appendChild(div);
      }
    } else {
      alert(request.status);
    }
  });
  request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_limit=20&_sort=id&_order=desc', true);
  request.send(null);
  request.onerror = () => {
    alert('error?');
  };
}
getComment();

// 監聽 輸入框
let input = '';
document.querySelector('#content').addEventListener('input', (e) => {
  input = `content=${encodeURIComponent(e.srcElement.value)}`;
});

const addComment = () => {
  document.querySelector('#content').value = '';
  const http = new XMLHttpRequest();
  const url = 'https://lidemy-book-store.herokuapp.com/posts?';
  const params = input;
  http.open('POST', url, true);
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http.send(params);
};

document.querySelector('.send').addEventListener('click', addComment, false);
document.querySelector('.send').addEventListener('click', () => { getComment(); });
